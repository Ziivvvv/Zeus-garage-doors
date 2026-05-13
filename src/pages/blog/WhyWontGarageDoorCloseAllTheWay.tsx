/**
 * pages/blog/WhyWontGarageDoorCloseAllTheWay.tsx — Zeus Garage Doors
 * Target PAA: "Why won't my garage door close all the way?"
 */

import BlogPost from "../../components/BlogPost";

const CONTENT = `
<p>
  A garage door that won't close all the way isn't just an inconvenience — it's a security gap. Your car, tools, and home are exposed. The good news: most partial-close failures have identifiable causes, and several of them are things you can fix yourself in under 10 minutes. Here are the 8 most common reasons a garage door stops short of the floor.
</p>

<h2>The 8 Most Common Causes</h2>

<h3>1. Safety Sensor Misalignment (Most Common)</h3>
<p>
  <strong>What it is:</strong> Every modern garage door opener has two safety sensors mounted a few inches off the ground on either side of the door track. One sends an infrared beam; the other receives it. If that beam is broken or misaligned, the opener assumes something is in the path and refuses to close.
</p>
<p>
  <strong>How to identify it:</strong> Look at the sensors. A solid green LED on the receiving sensor means the beam is aligned. A blinking or orange LED means it's not. The opener light may also flash several times when you try to close.
</p>
<p>
  <strong>DIY or call Zeus:</strong> DIY. Loosen the wing nut on the misaligned sensor, point it directly at the opposite sensor until the LED turns solid, then retighten. Takes about 5 minutes.
</p>

<h3>2. Sensor Blocked or Dirty</h3>
<p>
  <strong>What it is:</strong> Even a perfectly aligned sensor won't work if its lens is coated in dust, mud, or cobwebs. A spiderweb across the sensor eye is enough to trigger a false obstruction reading.
</p>
<p>
  <strong>How to identify it:</strong> Wipe both sensor lenses with a dry cloth, then try closing the door. If it closes fully, debris was the issue.
</p>
<p>
  <strong>DIY or call Zeus:</strong> DIY. Clean sensors monthly as part of routine maintenance.
</p>

<h3>3. Limit Switch Set Too Short</h3>
<p>
  <strong>What it is:</strong> Garage door openers use a limit switch (or electronic limit setting) to tell the motor how far to travel before stopping. If this setting is too short, the opener stops the door before it reaches the floor.
</p>
<p>
  <strong>How to identify it:</strong> The door stops consistently at the same height — not randomly — and there are no sensor indicator issues. The door may reverse slightly after stopping.
</p>
<p>
  <strong>DIY or call Zeus:</strong> DIY-possible. Consult your opener's manual for the "down limit" adjustment. On most LiftMaster and Chamberlain units it's a small screw on the motor head labeled "DOWN." Adjust in small increments.
</p>

<h3>4. Broken Torsion Spring</h3>
<p>
  <strong>What it is:</strong> The torsion spring (the large spring mounted horizontally above the door) counterbalances the door's weight. When it breaks, the opener motor must lift the full weight alone — which most motors aren't designed to do. The door may partially close before the motor trips or the door reverses under its own weight.
</p>
<p>
  <strong>How to identify it:</strong> Look at the spring above the door. A broken spring will have a visible gap in the coil. You may have heard a loud bang when it snapped.
</p>
<p>
  <strong>DIY or call Zeus:</strong> Call Zeus. Torsion spring replacement involves high-tension components that can cause serious injury. See our <a href="/services/spring-replacement">spring replacement service page</a>.
</p>

<h3>5. Bent or Warped Tracks</h3>
<p>
  <strong>What it is:</strong> The vertical and horizontal tracks guide the door's rollers as it moves. A bent track — from impact, age, or moisture damage — creates a pinch point the door can't pass.
</p>
<p>
  <strong>How to identify it:</strong> The door stops and binds at the same point every time, often with a scraping sound. Visually inspect the tracks for obvious bends, dents, or sections that are no longer parallel.
</p>
<p>
  <strong>DIY or call Zeus:</strong> Minor track realignment is DIY-possible with a rubber mallet and a level. Severely bent or crimped track sections should be replaced — call Zeus for an <a href="/services/off-track-repair">off-track repair assessment</a>.
</p>

<h3>6. Worn or Broken Rollers</h3>
<p>
  <strong>What it is:</strong> Rollers sit inside the tracks and allow the door to travel smoothly. Worn, cracked, or broken rollers can cause the door to jump or bind mid-travel, preventing full closure.
</p>
<p>
  <strong>How to identify it:</strong> Listen for grinding or scraping as the door moves. Visually inspect the rollers — cracked or chipped wheels are clearly visible and often cause the door to wobble or hang at an angle.
</p>
<p>
  <strong>DIY or call Zeus:</strong> Bottom and mid-panel rollers are DIY-replaceable with basic tools. The two rollers at the top of the door are under cable tension — leave those to a technician.
</p>

<h3>7. Remote or Wall Button Signal Issues</h3>
<p>
  <strong>What it is:</strong> Intermittent signal problems can cause the opener to interpret a "close" command as a "stop" or "reverse" command mid-travel. This is more common with older openers or those experiencing radio frequency interference.
</p>
<p>
  <strong>How to identify it:</strong> The door starts closing, reverses or stops at an inconsistent point, and the issue doesn't happen every time. Try closing using the wall button instead of the remote — if the wall button works consistently, the remote's battery or frequency is the issue.
</p>
<p>
  <strong>DIY or call Zeus:</strong> Replace the remote battery first. If the problem persists, clear the opener memory and reprogram. Persistent signal issues may indicate a failing logic board — see <a href="/services/opener-repair">opener repair</a>.
</p>

<h3>8. Logic Board Malfunction</h3>
<p>
  <strong>What it is:</strong> The logic board is the opener's brain. It controls motor timing, sensor input, and limit settings. Over time, power surges, moisture, and age can cause the board to behave erratically — including stopping or reversing the door at random points.
</p>
<p>
  <strong>How to identify it:</strong> The door behaves inconsistently across multiple attempts. The opener may flash error codes on its LED indicator. No amount of sensor cleaning or limit adjustment resolves the issue.
</p>
<p>
  <strong>DIY or call Zeus:</strong> Call Zeus. Logic board replacement requires matching the board to the opener model and properly transferring settings. A mismatched board can damage the motor. Our <a href="/services/opener-repair">opener repair technicians</a> carry boards for major brands including LiftMaster, Genie, and Chamberlain.
</p>

<h2>When a Door That Won't Close Is an Emergency</h2>
<p>
  If your garage door will not close at all — not partially, not at all — your home is unsecured. Treat this as an emergency, especially after dark. You can manually lock the door in the closed position by engaging the manual release cord and sliding the locking bar if your door has one. But if the door won't reach the floor due to a mechanical failure, that workaround won't work.
</p>
<p>
  For stuck-open situations, visit our <a href="/emergency-garage-door-repair">emergency garage door repair</a> page. Zeus offers emergency dispatch Sun–Thu for situations where the door cannot be secured.
</p>
`;

const FAQS = [
  {
    question: "Why does my garage door go down halfway and then reverse?",
    answer:
      "The most common cause is a misaligned or obstructed safety sensor. The opener detects what it thinks is an object in the door's path and reverses to prevent it from closing. Check that both sensor LEDs are solid (not blinking), clean the lenses, and make sure nothing is blocking the beam path at floor level.",
  },
  {
    question: "How do I check if my garage door safety sensors are working?",
    answer:
      "Look at the two small sensors mounted near the floor on either side of the door track. The sending sensor (typically yellow) should have a solid LED. The receiving sensor (typically green) should also have a solid LED. A blinking or orange light on either sensor means the beam is not aligned or is being blocked. Wave your hand through the beam while the door is closing — the door should reverse immediately. If it doesn't, the sensors are malfunctioning.",
  },
  {
    question: "Can I manually close a garage door if the spring is broken?",
    answer:
      "Technically yes, but it requires significant effort and should be done carefully. With the opener disconnected (pull the red emergency release cord), you can manually lower the door. However, a door with a broken torsion spring has no counterbalance — it's extremely heavy and can fall rapidly. Do not attempt to lower it alone, and do not leave it unsupported. Engage a manual locking bar if available, and call for repair before operating the door again.",
  },
  {
    question: "When should I call for emergency garage door service instead of waiting?",
    answer:
      "Call immediately if: (1) the door will not close at all and your home is exposed, (2) you hear a loud bang suggesting a spring snapped, (3) the door is hanging at an angle indicating a cable or spring failure, or (4) the door is off its tracks. These situations create safety risks and leave your home unsecured. Zeus dispatches emergency service Sun–Thu for stuck-open or unsafe door situations.",
  },
];

export default function WhyWontGarageDoorCloseAllTheWayPage() {
  return (
    <BlogPost
      metaTitle="Why Won't My Garage Door Close All the Way? 8 Common Causes"
      metaDescription="Garage door won't close completely? Learn 8 common causes — from misaligned sensors to limit switch issues — and which ones you can fix yourself."
      canonical="/blog/why-wont-garage-door-close-all-the-way"
      title="Why Won't My Garage Door Close All the Way? 8 Common Causes"
      datePublished="2026-05-11"
      authorName="Zeus Garage Doors"
      directAnswer="A garage door that won't close all the way is most often caused by misaligned safety sensors, a limit switch set too short, or a broken torsion spring. Sensor issues are the most common and easiest to fix yourself in under 10 minutes. A door that won't close at all is a security emergency — treat it as one."
      content={CONTENT}
      tags={["Troubleshooting"]}
      readingTimeMinutes={6}
      faqs={FAQS}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Why Won't My Garage Door Close All the Way?", url: "/blog/why-wont-garage-door-close-all-the-way" },
      ]}
      relatedPosts={[
        {
          title: "Why Is My Garage Door Opening by Itself?",
          href: "/blog/garage-door-opens-by-itself",
          excerpt: "Learn the top reasons why your garage door might be opening on its own and how to fix it fast.",
          datePublished: "2026-03-23",
        },
        {
          title: "Garage Door Won't Open in Cold Weather — 7 Causes & Fixes",
          href: "/blog/garage-door-wont-open-cold-weather",
          excerpt: "Cold weather causes garage door failures in WA. Learn 7 common causes and which you can fix yourself.",
          datePublished: "2026-04-22",
        },
        {
          title: "Is DIY Garage Door Repair Safe? The Honest Answer",
          href: "/blog/is-diy-garage-door-repair-safe",
          excerpt: "Some repairs are safe DIY. Others — especially spring replacement — are genuinely dangerous.",
          datePublished: "2026-05-08",
        },
      ]}
    />
  );
}
