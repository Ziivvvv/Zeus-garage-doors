const brands: { name: string; url: string; logo: string; alt: string }[] = [
  {
    name: "LiftMaster",
    url: "https://www.liftmaster.com/",
    logo: "/liftmaster-garage-door-opener-logo.png",
    alt: "LiftMaster garage door opener brand logo - Zeus Garage Doors Washington",
  },
  {
    name: "Genie",
    url: "https://www.geniecompany.com/",
    logo: "/genie-garage-door-openers-logo.png",
    alt: "Genie garage door openers logo - Zeus Garage Doors WA",
  },
  {
    name: "Amarr",
    url: "https://www.amarr.com/",
    logo: "/amarr-residential-garage-doors-logo.png",
    alt: "Amarr residential garage doors logo - Zeus Garage Doors",
  },
  {
    name: "Clopay",
    url: "https://www.clopaydoor.com/",
    logo: "/clopay-garage-doors-logo.png",
    alt: "Clopay garage doors authorized brand logo - Washington",
  },
  {
    name: "Craftsman",
    url: "https://www.craftsman.com/",
    logo: "/craftsman-garage-door-opener-logo.webp",
    alt: "Craftsman garage door opener logo - Zeus Garage Doors",
  },
  {
    name: "Wayne Dalton",
    url: "https://www.wayne-dalton.com/",
    logo: "/wayne-dalton-garage-doors-logo.png",
    alt: "Wayne Dalton garage doors logo - Washington State",
  },
];

function BrandLogo({ name, url, logo, alt }: { name: string; url: string; logo: string; alt: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 mx-10 flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity"
    >
      <img
        src={logo}
        alt={alt}
        style={{ maxHeight: "36px", width: "auto", objectFit: "contain" }}
      />
      <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">{name}</span>
    </a>
  );
}

export default function TrustMarquee() {
  const doubled = [...brands, ...brands, ...brands, ...brands];
  return (
    <section className="py-6 border-y border-border overflow-hidden bg-card">
      <div className="flex items-center animate-marquee" style={{ width: "max-content" }}>
        {doubled.map((b, i) => (
          <BrandLogo key={i} name={b.name} url={b.url} logo={b.logo} alt={b.alt} />
        ))}
      </div>
    </section>
  );
}
