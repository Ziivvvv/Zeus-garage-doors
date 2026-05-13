/**
 * pages/blog/RepairVsReplaceGarageDoor.tsx — Zeus Garage Doors
 * Target: "when to repair vs replace garage door" — high commercial intent
 */

import BlogPost from "../../components/BlogPost";

const CONTENT = `
<p>
  When your garage door has a problem, the first question is always: fix it, or replace it? The answer depends on the door's age, what's broken, and what the repair costs relative to a new door. Here's the honest decision framework Zeus uses when homeowners ask this question.
</p>

<h2>Repair: When It Makes Sense</h2>

<h3>Single Component Failure on a Door Under 15 Years Old</h3>
<p>
  If one thing broke — a spring, a cable, an opener, a panel — and the door is less than 15 years old and in otherwise good condition, repair is almost always the right call. These are all standard replaceable components with defined service lives. A broken torsion spring on a 7-year-old door is no different from a flat tire on a 3-year-old car: replace the component, not the system.
</p>
<p>
  Common single-component repairs worth doing: <a href="/services/spring-replacement">spring replacement</a>, <a href="/services/cable-replacement">cable replacement</a>, <a href="/services/roller-replacement">roller replacement</a>, <a href="/services/panel-replacement">panel replacement</a>, <a href="/services/sensor-repair">sensor repair</a>. All of these are flat-rate, same-day repairs with long service life after the fix.
</p>

<h3>Opener Failure with a Good Door</h3>
<p>
  If the door itself is sound but the opener has failed, replace the opener. A new LiftMaster belt-drive opener with myQ Wi-Fi and battery backup runs $350–$500 installed — compared to $1,500–$4,000 for a full door replacement. The door may easily have 10+ more years of life. See our <a href="/services/manual-to-automatic-conversion">opener installation service</a>.
</p>

<h3>Cosmetic Damage on One or Two Panels</h3>
<p>
  A dented panel from a car backing into the door is a cosmetic problem, not a structural one. Panel replacement is possible for most sectional doors — matching panels are available for the majority of major brands. Unless the panel damage has compromised the structural integrity of the door section, replacement of the affected panels is significantly cheaper than a new door. See our <a href="/services/panel-replacement">panel replacement service</a>.
</p>

<h2>Replace: When It Makes Sense</h2>

<h3>Multiple Simultaneous Failures</h3>
<p>
  If a spring breaks and the cables are frayed and the rollers are worn out and the opener is struggling — you're not dealing with one aging component, you're dealing with a door that has reached end-of-system life. Adding up the cost of individual repairs on a door in this condition often approaches or exceeds the cost of a new door with a new opener. New doors come with new hardware, new warranty, and better energy efficiency.
</p>

<h3>Door Over 20 Years Old</h3>
<p>
  Standard residential garage doors have a lifespan of 15–30 years depending on materials and maintenance. A steel door over 20 years old with significant rust, panel warping, or damaged sections has already consumed most of its expected service life. Investing in major repairs — springs, cables, opener — makes less economic sense when the door itself may need replacement in 3–5 years regardless.
</p>

<h3>Structural Panel Damage</h3>
<p>
  If multiple panels are severely damaged, bent inward, or the door has lost its structural shape from an impact, the cost of replacing several panels approaches the cost of a new door — and a new door gives you updated insulation, appearance, and hardware. When more than 2 adjacent panels need replacement, Zeus typically presents both options with honest pricing so you can make an informed choice.
</p>

<h3>Insulation and Energy Efficiency Upgrade</h3>
<p>
  If your garage door is uninsulated — common in homes built before the 2000s — and you use your garage as a workspace or have living space above, replacement with an insulated door (R-12 to R-18) can meaningfully reduce heating and cooling costs in adjacent spaces. The energy savings over 10–15 years can justify the replacement cost independent of any existing damage.
</p>

<h2>The Cost Comparison: Repair vs. New Door</h2>
<p>
  General ranges for Kirkland and Eastside WA:
</p>
<ul>
  <li><strong>Spring replacement:</strong> $150–$350</li>
  <li><strong>Cable replacement:</strong> $150–$300</li>
  <li><strong>Opener replacement:</strong> $350–$600</li>
  <li><strong>Panel replacement (1–2 panels):</strong> $200–$450</li>
  <li><strong>Full roller replacement:</strong> $150–$280</li>
</ul>
<p>
  <strong>New door + opener installation:</strong> $1,500–$4,000 depending on door type, size, and insulation. Premium wood carriage doors and custom glass panels run higher.
</p>
<p>
  The tipping point: if your repair estimate exceeds 50% of a new door's cost — and the door is over 12 years old — replacement is worth serious consideration. Below that threshold, repair is almost always the better value.
</p>

<h2>What Zeus Recommends On-Site</h2>
<p>
  When Zeus technicians arrive at a repair call, we assess the full door system, not just the reported problem. If we find a door in genuinely poor overall condition — not just the specific failure that prompted the call — we'll tell you honestly and give you pricing for both repair and replacement. We don't push replacement to increase the ticket; we give you the information you need to make a good decision for your home and budget.
</p>
<p>
  For a free on-site assessment of your door's condition and an honest repair vs. replace recommendation, call <a href="tel:+14254486443">425-448-6443</a> or visit our <a href="/contact">contact page</a>.
</p>
`;

const FAQS = [
  {
    question: "How do I know if my garage door needs to be replaced?",
    answer:
      "Replace when: the door is over 20 years old with multiple failing components, structural panel damage affects more than 2 adjacent sections, the total repair cost exceeds 50% of a new door's price, or the door no longer provides adequate insulation for your usage. Repair when: one component fails on a door under 15 years old in otherwise good condition.",
  },
  {
    question: "Is it worth repairing a 15-year-old garage door?",
    answer:
      "Yes, if only one or two components have failed and the door itself is in good structural condition. Steel doors have a 15–30 year lifespan — a 15-year-old door may have another 10+ years of service if maintained. Springs, cables, rollers, and openers are all replaceable. Assess the door's overall condition, not just the specific failure.",
  },
  {
    question: "How long does a garage door last?",
    answer:
      "Standard steel doors: 15–30 years depending on quality, climate, and maintenance. Wood doors: 15–25 years with regular painting and sealing. Aluminum and glass doors: 20+ years. In the Pacific Northwest, regular maintenance extends door life significantly — annual lubrication and hardware inspection are the most impactful steps.",
  },
  {
    question: "Can garage door panels be replaced without replacing the whole door?",
    answer:
      "Yes, for most major brands — panels are available as replacement parts for the majority of sectional doors. If the damaged panels are the same generation as your door and the brand still manufactures compatible replacements, panel replacement is straightforward. Older or discontinued door models may have limited panel availability, making full replacement more practical.",
  },
];

export default function RepairVsReplaceGarageDoorPage() {
  return (
    <BlogPost
      metaTitle="Repair vs Replace Garage Door — When to Do Each"
      metaDescription="Should you repair or replace your garage door? Zeus explains the honest decision framework — when repair makes sense and when a new door is better value."
      canonical="/blog/repair-vs-replace-garage-door"
      title="Garage Door Repair vs. Replace: When to Do Each"
      datePublished="2026-05-12"
      authorName="Zeus Garage Doors"
      directAnswer="Repair when one component fails on a door under 15 years old in otherwise good condition — springs, cables, openers, and panels are all cost-effective to replace individually. Replace when multiple systems fail simultaneously, the door is over 20 years old, or the repair cost exceeds 50% of a new door's price. Zeus gives honest on-site assessments with pricing for both options."
      content={CONTENT}
      tags={["Buying Guide", "Repair"]}
      readingTimeMinutes={6}
      faqs={FAQS}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Repair vs. Replace Garage Door", url: "/blog/repair-vs-replace-garage-door" },
      ]}
      relatedPosts={[
        {
          title: "Average Cost to Replace a Garage Door in Washington State",
          href: "/blog/average-cost-to-replace-garage-door",
          excerpt: "Material, size, insulation, and labor — what actually drives the price of a new garage door.",
          datePublished: "2026-05-11",
        },
        {
          title: "Garage Door Spring Replacement Cost Factors",
          href: "/blog/spring-replacement-cost-factors",
          excerpt: "What determines the cost of a spring replacement — and why quotes vary so widely.",
          datePublished: "2026-03-24",
        },
        {
          title: "New Garage Door Installation",
          href: "/services/new-installation",
          excerpt: "Full door replacement service for Kirkland, Bellevue, and Eastside WA.",
          datePublished: "2026-05-12",
        },
      ]}
    />
  );
}
