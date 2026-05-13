/**
 * pages/blog/HowLongDoGarageDoorCablesLast.tsx — Zeus Garage Doors
 * Target: "how long do garage door cables last" + "garage door cable lifespan"
 */

import BlogPost from "../../components/BlogPost";

const CONTENT = `
<p>
  Garage door lift cables are the tensioned steel wires that connect the bottom bracket on each side of the door to the cable drum above. They handle significant force every time the door moves — and like any wear component, they have a finite service life. Here's what determines how long they last and how to know when replacement is overdue.
</p>

<h2>How Long Do Garage Door Cables Typically Last?</h2>
<p>
  For a standard residential door operating 3–4 cycles per day, lift cables typically last <strong>7–12 years</strong>. In practice, most cable failures happen between 8 and 10 years. The variables that push this number lower or higher:
</p>
<ul>
  <li><strong>Cycle count:</strong> A door used 6–8 times daily reaches the same cumulative load in 4–5 years that a lightly used door reaches in 10.</li>
  <li><strong>Climate:</strong> In Kirkland and the Eastside, sustained moisture accelerates cable corrosion. Cables in covered, climate-controlled garages last longer than cables in open or partially exposed garages.</li>
  <li><strong>Spring balance:</strong> A door with undertensioned springs forces cables to carry more load per cycle. Cables on an unbalanced door fail significantly earlier.</li>
  <li><strong>Cable quality:</strong> Galvanized steel cables resist corrosion better than uncoated cables. Most quality replacement cables use 7×19 or 7×7 construction — more strands mean more load distribution and longer life.</li>
</ul>

<h2>Signs a Garage Door Cable Is Failing</h2>
<p>
  Cables rarely snap without warning. The progression from healthy to failing looks like this:
</p>
<h3>Early Warning: Surface Rust</h3>
<p>
  Light surface oxidation on the cable wires. Still functional but corrosion has begun. In the PNW, this stage is common after 5–7 years on cables without galvanized coating.
</p>
<h3>Mid-Stage: Fraying or Broken Strands</h3>
<p>
  Individual strands begin to separate and fray. This is visible as a fuzzy or unraveling appearance at any point along the cable, most commonly near the bottom bracket where the cable wraps around the pin. A cable with 3+ broken strands should be replaced — it's approaching load capacity.
</p>
<h3>Late Stage: Kinking or Drum Unwrapping</h3>
<p>
  The cable develops a visible kink or begins to unspool incorrectly from the drum. This causes uneven door movement — one side of the door lowers faster than the other. If you notice the door tilting as it closes, this is often the cause.
</p>
<h3>Failure: Snapped Cable</h3>
<p>
  A snapped cable drops its side of the door, causing the door to hang at an angle — or crash down if the spring also fails simultaneously. A door with a snapped cable is not safe to operate and should be left closed until repaired.
</p>

<h2>Why Both Cables Should Be Replaced Together</h2>
<p>
  If one cable fails, the other is typically the same age and has accumulated the same number of cycles. Zeus replaces cables in pairs — this is standard practice, not upselling. Replacing only the broken cable means the replacement cable carries asymmetric load while the original continues to age, and the second cable typically fails within months.
</p>

<h2>Cable Replacement vs. DIY</h2>
<p>
  Garage door cables operate under spring tension. On a door with intact springs, the cables still carry significant residual load. Disconnecting a cable without properly relieving spring tension can cause the spring to release suddenly. This is a genuine injury risk — torsion springs store enough energy to cause serious harm. Zeus handles cable replacement as a flat-rate same-day service, typically completing both cables in under an hour. See our <a href="/services/cable-replacement">cable replacement service</a>.
</p>

<h2>How to Extend Cable Life</h2>
<p>
  Three practices extend cable service life significantly:
</p>
<ul>
  <li><strong>Annual spring tension check:</strong> Undertensioned springs increase cable load per cycle. Keeping spring tension correctly calibrated is the single most impactful thing you can do for cable longevity.</li>
  <li><strong>Lubrication:</strong> Apply a light coat of white lithium grease to cable runs annually. This reduces friction on the cable where it passes over pulleys (extension spring systems) and slows surface corrosion.</li>
  <li><strong>Humidity management:</strong> If your garage has standing water or chronic moisture problems, address those separately. Galvanized replacement cables cost only slightly more than standard cables and are strongly recommended for Eastside WA homes.</li>
</ul>
<p>
  If you're unsure of your cables' condition, Zeus includes cable inspection as part of every <a href="/services/garage-door-tune-up">annual tune-up service</a>. For a same-day cable replacement call in Kirkland or anywhere on the Eastside, call <a href="tel:+14254486443">425-448-6443</a>.
</p>
`;

const FAQS = [
  {
    question: "How do I know if my garage door cable is about to break?",
    answer:
      "Look for fraying strands, visible rust or corrosion, kinking, or the cable beginning to unspool unevenly from the drum. A door that lowers unevenly — one side faster than the other — often has a cable issue. If you see any fraying or broken strands, replacement should happen before failure, not after.",
  },
  {
    question: "Can I still use my garage door if the cable is fraying?",
    answer:
      "Not safely. A fraying cable is near its load limit. Continued operation risks sudden failure — which drops one side of the door, damages the track, and can injure anyone underneath. Stop using the opener and call for repair if you see visible fraying.",
  },
  {
    question: "Why do garage door cables break?",
    answer:
      "Primary causes: normal wear from thousands of load cycles, corrosion from moisture (especially in Pacific Northwest climates), overtension from improperly adjusted springs, and manufacturing defects in lower-quality cables. Most residential cable failures are simply age and cycle count — cables don't last forever.",
  },
  {
    question: "How much does garage door cable replacement cost?",
    answer:
      "Zeus replaces both lift cables as a flat-rate same-day service. We don't publish pricing on the website because cable cost varies by door size and spring configuration — but the job is typically completed in a single visit. Call 425-448-6443 for a same-day appointment.",
  },
];

export default function HowLongDoGarageDoorCablesLastPage() {
  return (
    <BlogPost
      metaTitle="How Long Do Garage Door Cables Last? | Zeus"
      metaDescription="Garage door cables last 7–12 years. Learn the warning signs of failing cables and when to call for replacement in Kirkland and Eastside WA."
      canonical="/blog/how-long-do-garage-door-cables-last"
      title="How Long Do Garage Door Cables Last? Warning Signs & When to Replace"
      datePublished="2026-05-11"
      authorName="Zeus Garage Doors"
      directAnswer="Garage door lift cables last 7–12 years under normal residential use (3–4 cycles per day). In the Pacific Northwest's wet climate, corrosion can shorten this to 5–8 years. Warning signs: fraying strands, surface rust, kinking, or a door that lowers unevenly. Replace both cables together — a cable with visible fraying should be replaced before it snaps."
      content={CONTENT}
      tags={["Maintenance", "Cables"]}
      readingTimeMinutes={5}
      faqs={FAQS}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "How Long Do Garage Door Cables Last", url: "/blog/how-long-do-garage-door-cables-last" },
      ]}
      relatedPosts={[
        {
          title: "Garage Door Repair vs. Replace — When to Do Each",
          href: "/blog/repair-vs-replace-garage-door",
          excerpt: "The honest decision framework for whether to fix or replace your garage door.",
          datePublished: "2026-05-12",
        },
        {
          title: "Garage Door Maintenance Checklist for PNW Homeowners",
          href: "/blog/garage-door-maintenance-checklist",
          excerpt: "Monthly checks, seasonal lubrication, and what to hand off to a professional.",
          datePublished: "2026-05-12",
        },
        {
          title: "Garage Door Cable & Track Repair",
          href: "/services/cable-replacement",
          excerpt: "Same-day cable replacement for Kirkland, Bellevue, and Eastside WA.",
          datePublished: "2026-05-12",
        },
      ]}
    />
  );
}
