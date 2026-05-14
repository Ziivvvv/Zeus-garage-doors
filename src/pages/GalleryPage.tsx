import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const BASE = "/images/services/real-photos/";

type Photo = { src: string; alt: string };
type Category = { title: string; link?: string; linkLabel?: string; photos: Photo[] };

const CATEGORIES: Category[] = [
  {
    title: "New Garage Door Installations",
    link: "/services/new-installation",
    linkLabel: "New Installation Service",
    photos: [
      { src: "full-view-glass-garage-door-kirkland-wa.webp",          alt: "Full-view glass garage door installation in Kirkland, WA" },
      { src: "carriage-style-garage-door-kirkland-wa.webp",           alt: "Carriage-style garage door installed in Kirkland, WA" },
      { src: "modern-glass-garage-door-installation-kirkland-wa.webp",alt: "Modern glass garage door installation in Kirkland, WA" },
      { src: "craftsman-garage-door-installation-kirkland-wa.webp",   alt: "Craftsman garage door installation in Kirkland, WA" },
      { src: "charcoal-garage-door-installation-kirkland-wa.webp",    alt: "Charcoal garage door installation in Kirkland, WA" },
      { src: "custom-wood-garage-door-kirkland-wa.webp",              alt: "Custom wood garage door installed in Kirkland, WA" },
      { src: "wood-grain-garage-door-installation-kirkland-wa.webp",  alt: "Wood grain garage door installation in Kirkland, WA" },
      { src: "carriage-garage-door-kirkland-wa.webp",                 alt: "Carriage garage door in Kirkland, WA" },
      { src: "blue-craftsman-garage-door-kirkland-wa.webp",           alt: "Blue craftsman garage door in Kirkland, WA" },
      { src: "new-garage-door-with-windows-kirkland-wa.webp",         alt: "New garage door with windows installed in Kirkland, WA" },
      { src: "residential-garage-door-installation-kirkland-wa.webp", alt: "Residential garage door installation in Kirkland, WA" },
      { src: "garage-door-replacement-kirkland-wa.webp",              alt: "Garage door replacement in Kirkland, WA" },
      { src: "garage-door-installation-in-progress-kirkland-wa.webp", alt: "Garage door installation in progress in Kirkland, WA" },
      { src: "glass-garage-door-interior-installation-kirkland-wa.webp", alt: "Glass garage door interior view after installation in Kirkland, WA" },
      { src: "double-garage-door-installation-kirkland-wa.webp",      alt: "Double garage door installation in Kirkland, WA" },
      { src: "white-craftsman-garage-door-bellevue-wa.webp",          alt: "White craftsman garage door installed in Bellevue, WA" },
      { src: "double-garage-door-installation-bellevue-wa.webp",      alt: "Double garage door installation in Bellevue, WA" },
      { src: "new-garage-door-installation-redmond-wa.webp",          alt: "New garage door installation in Redmond, WA" },
      { src: "garage-door-replacement-redmond-wa.webp",               alt: "Garage door replacement in Redmond, WA" },
      { src: "garage-door-installation-seattle-wa.webp",              alt: "Garage door installation in Seattle, WA" },
      { src: "garage-door-installation-bothell-wa.webp",              alt: "Garage door installation in Bothell, WA" },
      { src: "garage-door-installation-woodinville-wa.webp",          alt: "Garage door installation in Woodinville, WA" },
      { src: "garage-door-installation-lynnwood-wa.webp",             alt: "Garage door installation in Lynnwood, WA" },
      { src: "new-garage-door-installation-kenmore-wa.webp",          alt: "New garage door installation in Kenmore, WA" },
    ],
  },
  {
    title: "Garage Door Repairs",
    link: "/services/panel-replacement",
    linkLabel: "Panel Replacement Service",
    photos: [
      { src: "crashed-garage-door-emergency-repair-kirkland-wa.webp", alt: "Emergency crashed garage door repair in Kirkland, WA" },
      { src: "broken-garage-door-panel-repair-kirkland-wa.webp",      alt: "Broken garage door panel repair in Kirkland, WA" },
      { src: "damaged-garage-door-panel-replacement-kirkland-wa.webp",alt: "Damaged garage door panel replacement in Kirkland, WA" },
      { src: "garage-door-off-track-repair-kirkland-wa.webp",         alt: "Garage door off-track repair in Kirkland, WA" },
    ],
  },
  {
    title: "Spring & Cable Replacement",
    link: "/services/spring-replacement",
    linkLabel: "Spring Replacement Service",
    photos: [
      { src: "torsion-spring-cable-replacement-kirkland-wa.webp",        alt: "Torsion spring and cable replacement in Kirkland, WA" },
      { src: "extension-spring-replacement-kirkland-wa.webp",            alt: "Extension spring replacement in Kirkland, WA" },
      { src: "garage-door-opener-spring-installation-kirkland-wa.webp",  alt: "Garage door opener and spring installation in Kirkland, WA" },
    ],
  },
  {
    title: "Opener Installation",
    link: "/services/opener-repair",
    linkLabel: "Opener Service",
    photos: [
      { src: "liftmaster-opener-installation-kirkland-wa.webp", alt: "LiftMaster opener installation in Kirkland, WA" },
    ],
  },
  {
    title: "Our Team",
    photos: [
      { src: "zeus-garage-door-service-truck-kirkland-wa.webp", alt: "Zeus Garage Doors service truck in Kirkland, WA" },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <SEOHead
        title="Project Gallery | Zeus Garage Doors – Kirkland, WA"
        description="Real photos of garage door installations, repairs, spring replacements, and opener installs completed by Zeus Garage Doors across Kirkland, Bellevue, Redmond, and the Eastside."
        canonical="/gallery"
        pageType="about"
        ogImage="https://zeusgaragedoorswa.com/og-hero.webp"
      />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-navy py-16 px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Work
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Real garage door projects we've completed across Kirkland, Bellevue, Redmond, and the greater Eastside.
          </p>
        </section>

        {/* Categories */}
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
          {CATEGORIES.map((cat) => (
            <section key={cat.title}>
              <div className="flex flex-wrap items-baseline gap-4 mb-6">
                <h2 className="text-2xl font-bold text-navy">{cat.title}</h2>
                {cat.link && (
                  <Link
                    to={cat.link}
                    className="text-sm text-gold hover:underline font-medium"
                  >
                    {cat.linkLabel} →
                  </Link>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.photos.map((photo) => (
                  <div
                    key={photo.src}
                    className="overflow-hidden rounded-lg shadow-md bg-gray-100 aspect-[4/3]"
                  >
                    <img
                      src={`${BASE}${photo.src}`}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="bg-gray-50 py-12 px-4 text-center">
          <h2 className="text-2xl font-bold text-navy mb-3">
            Ready for a New Garage Door?
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            We serve Kirkland, Bellevue, Redmond, and surrounding Eastside communities. Same-day service available.
          </p>
          <Link
            to="/quote"
            className="inline-block bg-gold text-white font-bold px-8 py-3 rounded-lg hover:bg-gold/90 transition-colors"
          >
            Get a Free Quote
          </Link>
        </section>
      </main>
    </>
  );
}
