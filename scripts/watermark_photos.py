#!/usr/bin/env python3
"""
Watermark + resize + convert real job-site photos for Zeus Garage Doors.

Usage:
    python scripts/watermark_photos.py <input_dir> <output_dir>

    input_dir  — folder with raw iPhone photos (JPG/HEIC/PNG)
    output_dir — where to save watermarked WebP files

Logo placed top-right corner, 10% of image width, with 2% margin.
Output: 1200×800px max, WebP quality 85.
"""

import sys
import os
from pathlib import Path
from PIL import Image, ImageOps

LOGO_PATH = Path(__file__).parent.parent / "public" / "zeus-logo-footer.png"
SUPPORTED = {".jpg", ".jpeg", ".png", ".webp", ".heic"}
MAX_WIDTH = 1200
MAX_HEIGHT = 800
LOGO_RATIO = 0.10   # logo = 10% of image width
MARGIN_RATIO = 0.02  # 2% margin from edges
WEBP_QUALITY = 85


def load_heic(path: Path) -> Image.Image:
    try:
        import pillow_heif
        heif = pillow_heif.read_heif(str(path))
        return Image.frombytes(heif.mode, heif.size, heif.data, "raw")
    except ImportError:
        # Fallback: use sips to convert to JPEG first
        import subprocess, tempfile
        tmp = tempfile.mktemp(suffix=".jpg")
        subprocess.run(["sips", "-s", "format", "jpeg", str(path), "--out", tmp], check=True, capture_output=True)
        img = Image.open(tmp)
        os.unlink(tmp)
        return img


def watermark(img: Image.Image, logo: Image.Image) -> Image.Image:
    img = img.convert("RGBA")
    logo_w = max(int(img.width * LOGO_RATIO), 40)
    aspect = logo.height / logo.width
    logo_h = int(logo_w * aspect)
    logo_resized = logo.resize((logo_w, logo_h), Image.LANCZOS)

    margin_x = int(img.width * MARGIN_RATIO)
    margin_y = int(img.height * MARGIN_RATIO)
    x = img.width - logo_w - margin_x
    y = margin_y

    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    layer.paste(logo_resized, (x, y), logo_resized)
    return Image.alpha_composite(img, layer).convert("RGB")


def process(input_dir: Path, output_dir: Path):
    output_dir.mkdir(parents=True, exist_ok=True)
    logo = Image.open(LOGO_PATH).convert("RGBA")

    files = [f for f in sorted(input_dir.iterdir()) if f.suffix.lower() in SUPPORTED]
    if not files:
        print(f"No images found in {input_dir}")
        return

    print(f"Processing {len(files)} images...")
    for f in files:
        try:
            if f.suffix.lower() == ".heic":
                img = load_heic(f)
            else:
                img = Image.open(f)

            img = ImageOps.exif_transpose(img)  # fix rotation
            img.thumbnail((MAX_WIDTH, MAX_HEIGHT), Image.LANCZOS)
            img = watermark(img, logo)

            out_name = f.stem + ".webp"
            out_path = output_dir / out_name
            img.save(out_path, "WEBP", quality=WEBP_QUALITY)
            print(f"  ✓ {f.name} → {out_name}  ({img.width}×{img.height})")
        except Exception as e:
            print(f"  ✗ {f.name}: {e}")

    print(f"\nDone. Output in: {output_dir}")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python watermark_photos.py <input_dir> <output_dir>")
        sys.exit(1)
    process(Path(sys.argv[1]), Path(sys.argv[2]))
