/**
 * pages/blog/WhatCausesGarageDoorOffTrack.tsx — Zeus Garage Doors
 * Target: "what causes garage door to go off track" + "garage door off track"
 */

import BlogPost from "../../components/BlogPost";

const CONTENT = `
<p>
  An off-track garage door is one of the more alarming failures — the door visibly hangs wrong, won't operate, and often looks like expensive damage. In most cases, it's repairable without full door replacement. Here's what causes it and what the repair actually involves.
</p>

<h2>What "Off-Track" Means</h2>
<p>
  A garage door runs on two vertical tracks (one on each side) that curve into horizontal sections at the top. The door's rollers ride inside these tracks. "Off-track" means one or more rollers have left the track — either jumped out of the channel, or the track itself has bent or shifted enough that the rollers can no longer stay in position.
</p>
<p>
  A door that's off-track will either: refuse to move when the opener runs (the opener grinds while the door sits still), move unevenly with visible tilting, or in severe cases hang at an angle from a single remaining contact point.
</p>

<h2>The 6 Most Common Causes</h2>

<h3>1. Impact from a Vehicle</h3>
<p>
  The most common cause of off-track doors. Backing into a partially-open or fully-open door, or hitting the door frame, bends the bottom panel and/or the track directly. Vehicle impacts usually bend the lower track sections and damage the bottom panel — both may need replacement.
</p>

<h3>2. Broken Lift Cable</h3>
<p>
  When a lift cable snaps, one side of the door drops while the other stays in place. This uneven loading pulls rollers out of the track on the low side. Cable failure is often the actual root cause of what appears to be an off-track problem — the door didn't leave the track because of the track, it left because the cable broke and the door fell.
</p>

<h3>3. Worn or Broken Rollers</h3>
<p>
  Rollers that are cracked, flat-spotted, or have seized bearings don't roll smoothly through the track. A seized roller that's dragged instead of rolled eventually binds against the track channel hard enough to pop out under the door's weight. Steel rollers are more prone to this than nylon rollers — see our comparison of <a href="/blog/nylon-vs-steel-garage-door-rollers">nylon vs. steel rollers</a>.
</p>

<h3>4. Track Misalignment or Loosening</h3>
<p>
  Track brackets loosen over thousands of cycles — vibration works nuts and bolts free gradually. When a track section shifts even slightly out of plumb, the gap between the track and roller becomes inconsistent, and rollers can catch and jump. This is why hardware tightening is part of the annual maintenance routine.
</p>

<h3>5. Bent Track Section</h3>
<p>
  Tracks bend from direct impact, from a heavy object falling against them in the garage, or from the track bracket pulling through corroded drywall or framing. A bent section creates a point of restriction where rollers bind and eventually jump.
</p>

<h3>6. Torsion Spring Failure With Unbalanced Load</h3>
<p>
  A broken torsion spring drops the full weight of the door onto the opener and cables. If the opener is forced to continue operating with a broken spring, the uneven load distribution can pull one side of the door faster than the other, yanking rollers sideways out of the track.
</p>

<h2>Can You Fix an Off-Track Door Yourself?</h2>
<p>
  The internet has many tutorials on re-seating rollers. For a door that came off track from a minor bump with the spring and cables fully intact, it's technically possible to re-seat the rollers manually. However:
</p>
<ul>
  <li>If the cause was a broken cable, the cable must be replaced first — re-seating the roller without addressing the cable just moves the failure point.</li>
  <li>If the track is bent, re-seating the rollers doesn't fix the underlying problem and the door will jump again.</li>
  <li>Operating any part of the spring system to relieve tension during the repair carries injury risk.</li>
</ul>
<p>
  Zeus recommends a professional assessment for any off-track door — not because the re-seating is always complex, but because the correct repair depends on correctly identifying the cause. An off-track door fixed without diagnosing why it came off track is likely to fail again. See our <a href="/services/off-track-repair">off-track repair service</a>.
</p>

<h2>What the Repair Involves</h2>
<p>
  A Zeus off-track repair starts with identifying the root cause. If it's just loose hardware and minor misalignment: we re-seat the rollers, realign the track, and tighten all hardware. If there's a bent track section: we replace the affected section. If a cable caused the problem: we replace the cable pair and re-seat the door. If a broken spring was the root cause: spring replacement comes first.
</p>
<p>
  Most off-track repairs are completed same-day. For emergency service on a door that's off-track and stuck open, call <a href="tel:+14254486443">425-448-6443</a> — Zeus provides emergency dispatch across Kirkland and the Eastside.
</p>
`;

const FAQS = [
  {
    question: "Is it safe to use my garage door if it's off-track?",
    answer:
      "No. An off-track door is under asymmetric load and can fall unpredictably. Do not attempt to operate the door with the opener — this strains the motor and cables and can worsen the damage or cause the door to drop. Leave it in place (closed if possible) and call for repair.",
  },
  {
    question: "How much does it cost to fix an off-track garage door?",
    answer:
      "Zeus doesn't publish pricing on the website because the cost depends heavily on the root cause — a roller re-seat after minor misalignment is much simpler than replacing a bent track section after a vehicle impact. Call 425-448-6443 for a same-day assessment and upfront quote.",
  },
  {
    question: "Can a garage door come off-track without any visible impact?",
    answer:
      "Yes — the most common non-impact causes are a snapped lift cable, worn rollers that gradually bind and jump, and track hardware that loosens over thousands of cycles. These develop slowly and may not be obvious until the door suddenly refuses to operate.",
  },
  {
    question: "How do I prevent my garage door from going off-track?",
    answer:
      "Annual hardware tightening (snugging all track bracket bolts), roller inspection and replacement when worn, and keeping lift cables in good condition are the three most effective preventive measures. A properly maintained door rarely goes off-track without an external cause like a vehicle impact.",
  },
];

export default function WhatCausesGarageDoorOffTrackPage() {
  return (
    <BlogPost
      metaTitle="What Causes a Garage Door to Go Off-Track? 6 Fixes"
      metaDescription="Garage door off-track? The 6 most common causes — broken cables, worn rollers, vehicle impact, track misalignment — and what the repair actually involves."
      canonical="/blog/what-causes-garage-door-off-track"
      title="What Causes a Garage Door to Go Off-Track? 6 Causes & Fixes"
      datePublished="2026-05-11"
      authorName="Zeus Garage Doors"
      directAnswer="Garage doors go off-track most often from: vehicle impact bending the lower track, a snapped lift cable dropping one side of the door, worn or seized rollers that bind and jump, or track hardware loosening over thousands of cycles. The correct repair depends on identifying the root cause first — re-seating the rollers without fixing a broken cable or bent track just delays the next failure."
      content={CONTENT}
      tags={["Repair", "Safety"]}
      readingTimeMinutes={5}
      faqs={FAQS}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "What Causes Garage Door Off Track", url: "/blog/what-causes-garage-door-off-track" },
      ]}
      relatedPosts={[
        {
          title: "Garage Door Cable & Track Repair",
          href: "/services/cable-replacement",
          excerpt: "Same-day off-track and cable repair for Kirkland, Bellevue, and Eastside WA.",
          datePublished: "2026-05-12",
        },
        {
          title: "Nylon vs. Steel Garage Door Rollers — Which Lasts Longer?",
          href: "/blog/nylon-vs-steel-garage-door-rollers",
          excerpt: "Worn rollers are a leading cause of off-track doors. Here's which type to replace them with.",
          datePublished: "2026-05-11",
        },
        {
          title: "Garage Door Maintenance Checklist for PNW Homeowners",
          href: "/blog/garage-door-maintenance-checklist",
          excerpt: "Monthly and seasonal checks that prevent off-track failures before they happen.",
          datePublished: "2026-05-12",
        },
      ]}
    />
  );
}
