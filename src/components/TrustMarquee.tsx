const brands = ["LiftMaster", "Genie", "Amarr", "Clopay", "Craftsman"];

function BrandLogo({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 mx-10 flex items-center gap-2 opacity-40 hover:opacity-80 transition-opacity">
      <div className="w-10 h-10 rounded-md border border-border flex items-center justify-center font-bold text-primary text-lg">
        {name[0]}
      </div>
      <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function TrustMarquee() {
  const doubled = [...brands, ...brands, ...brands, ...brands];
  return (
    <section className="py-6 border-y border-border overflow-hidden bg-card">
      <div className="flex items-center animate-marquee" style={{ width: "max-content" }}>
        {doubled.map((b, i) => (
          <BrandLogo key={i} name={b} />
        ))}
      </div>
    </section>
  );
}
