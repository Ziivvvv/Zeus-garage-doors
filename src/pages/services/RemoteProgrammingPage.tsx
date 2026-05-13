/**
 * pages/services/RemoteProgrammingPage.tsx — Zeus Garage Doors
 * /services/remote-keypad-programming
 *
 * SEO targets:
 *   H1:  "Garage Door Remote & Keypad Programming Kirkland WA"
 *   Primary: garage door remote programming, keypad installation, reprogram garage door opener
 */

import ServicePage from "../../components/ServicePage";

const REMOTE_FAQS = [
  {
    question: "How do I program a new garage door remote in Kirkland WA?",
    answer:
      "Programming varies by opener brand and model. For LiftMaster and Chamberlain openers: locate the Learn button on the motor unit (usually purple, yellow, or orange depending on frequency), press and release it, then within 30 seconds press the button on your remote until the opener lights blink — that confirms pairing. If your opener uses Security+ 2.0 (rolling code technology), only remotes with matching frequency will pair. If you're buying a replacement remote, verify the opener's frequency before purchasing. Zeus can program remotes and keypads for all major brands same-day.",
  },
  {
    question: "Can I add a wireless keypad to my existing garage door opener?",
    answer:
      "Yes — most LiftMaster, Chamberlain, Genie, and Linear openers manufactured after 2000 support wireless keypad accessories. The keypad mounts outside the garage (typically beside the door), runs on a 9V battery, and pairs to the opener using the same Learn button process as a remote. Zeus supplies and installs keypads for all major opener brands. We also program personalized PIN codes and, on compatible systems, set temporary codes for contractors or houseguests.",
  },
  {
    question: "My garage door remote stopped working — what's wrong?",
    answer:
      "Start with the battery (most common cause of sudden remote failure). If a fresh battery doesn't fix it, try programming the remote again from scratch. If the remote won't pair or pairs but doesn't trigger the opener, the remote may have lost its programming due to a power outage, or the remote's circuit board may have failed. Zeus can diagnose whether the issue is the remote itself, the opener's receiver board, or a frequency interference problem — and resolve it same-day.",
  },
  {
    question: "How do I delete all remotes from my garage door opener?",
    answer:
      "Hold the Learn button on the opener motor unit for 6–10 seconds until the LED goes out — this erases all paired remotes, keypads, and HomeLink vehicles from the opener's memory. You'll need to re-pair all devices after clearing. Zeus recommends doing this when moving into a new home (to clear the previous owners' remotes), after a security concern, or when troubleshooting pairing issues.",
  },
  {
    question: "How do I program my car's built-in HomeLink to my garage door?",
    answer:
      "HomeLink is the built-in garage control system in most modern vehicles (visible as 1–3 buttons on the rearview mirror or overhead console). Programming HomeLink to a LiftMaster or Chamberlain opener with rolling code technology requires a two-step process: (1) hold the HomeLink button and the handheld remote simultaneously until the HomeLink button blinks rapidly; (2) press the Learn button on the opener, then immediately press and hold the HomeLink button until the opener light flashes. Zeus programs HomeLink for customers during remote service calls — most vehicles take under 5 minutes.",
  },
  {
    question: "What if my garage door opener is too old to support wireless keypads?",
    answer:
      "Openers manufactured before 1993 use a fixed-code (DIP switch) system that isn't compatible with modern wireless keypads. Openers from 1993–2005 use early rolling-code systems that may have limited or no wireless accessory support. If your opener is 20+ years old and doesn't support a keypad, Zeus recommends evaluating an opener upgrade — modern LiftMaster units include myQ Wi-Fi, battery backup, and full wireless accessory support. We can quote an opener replacement alongside the keypad service call.",
  },
  {
    question: "Can I control my garage door from my smartphone?",
    answer:
      "Yes — with a LiftMaster opener equipped with myQ technology (or the myQ Smart Garage Hub add-on for compatible older openers). myQ connects your opener to your home Wi-Fi and lets you open, close, and monitor your garage door from anywhere via the free myQ app. You receive real-time alerts when the door opens or closes and can give temporary access to others. Zeus installs and commissions myQ-enabled openers and the myQ Hub accessory for compatible existing openers.",
  },
];

export default function RemoteProgrammingPage() {
  return (
    <ServicePage
      metaTitle="Garage Door Remote Programming Kirkland WA | Zeus"
      metaDescription="Remote stopped working? Zeus programs garage remotes, keypads & HomeLink same-day in Kirkland & Eastside WA. Call 425-448-6443."
      canonical="/services/remote-keypad-programming"

      serviceName="Garage Door Remote & Keypad Programming"
      pageH1="Garage Door Remote & Keypad Programming Kirkland WA"

      serviceTagline="A garage door remote that won't pair, a keypad that needs programming, or a car HomeLink that isn't responding — Zeus Garage Doors handles all remote and access control programming same-day across Kirkland, Bellevue, Redmond, and the Eastside."

      directAnswer="Zeus Garage Doors programs garage door remotes, wireless keypads, and HomeLink vehicle systems same-day in Kirkland WA and across the Eastside. We service all major opener brands — LiftMaster, Chamberlain, Genie, Linear, Craftsman. Call 425-448-6443 for flat-rate programming."

      heroImage={{
        src: "/images/services/garage-door-remote-keypad-programming-kirkland-wa.png",
        alt: "Garage door remote and keypad programming in Kirkland WA — Zeus Garage Doors technician programming LiftMaster remote",
        title: "Zeus Garage Doors technician programming garage door remote and wireless keypad for residential homeowner in Kirkland, Washington",
      }}

      whatWeDoHeading="What's Included in Our Remote & Keypad Programming Service"
      whatWeDoItems={[
        "Remote programming for LiftMaster, Chamberlain, Genie, Linear, and Craftsman openers",
        "Wireless keypad installation and PIN programming (outside entry keypad)",
        "HomeLink programming for all vehicle makes — Toyota, Honda, BMW, Ford, GM, and more",
        "Temporary access code setup for contractors or houseguests (myQ-compatible systems)",
        "Multi-remote household setup — program multiple remotes and vehicles simultaneously",
        "Learn button frequency diagnosis — confirm remote-opener frequency compatibility before purchasing",
        "Memory clear (erase all remotes) for security purposes or new homeowner setup",
        "myQ Wi-Fi app setup and smartphone control commissioning",
        "Battery replacement and remote housing inspection during programming service",
      ]}

      warningSignsHeading="Signs You Need Remote or Keypad Service"
      warningSignsItems={[
        "Remote works sometimes but not consistently — battery issue or signal range problem",
        "Remote completely stopped working — battery dead or programming lost",
        "New remote won't pair to the opener — frequency mismatch or Learn button issue",
        "Moved into a new home — need to clear previous owners' remotes",
        "Keypad buttons work but door doesn't respond — PIN or pairing needs reset",
        "HomeLink in car stopped triggering the door — programming cleared after battery change",
        "Want to add keypad access outside the garage for family members",
        "Security concern — lost remote, need to clear all devices and re-pair",
      ]}

      whyZeusHeading="Why Kirkland Homeowners Choose Zeus for Remote & Keypad Programming"
      whyZeusPoints={[
        {
          icon: "🔑",
          heading: "All Brands and Frequencies",
          body: "We work with every major opener brand and frequency — 315 MHz, 390 MHz, 433 MHz, and Security+ 2.0 rolling-code systems. We stock compatible remotes and keypads for same-visit replacement if your existing hardware can't be repaired.",
        },
        {
          icon: "🚗",
          heading: "HomeLink in Every Vehicle",
          body: "HomeLink programming has different procedures for different vehicle years and opener types. We've programmed HomeLink in hundreds of vehicles — Toyota, Honda, BMW, Ford, Subaru, and others. If your car's manual doesn't match your opener's process, we know the workaround.",
        },
        {
          icon: "📱",
          heading: "Smartphone Setup Included",
          body: "For LiftMaster myQ-compatible openers, we set up the myQ app on your smartphone as part of the service — not as an add-on. Leave knowing you can open and monitor your door from anywhere.",
        },
        {
          icon: "🛡️",
          heading: "New Homeowner Security Clear",
          body: "Moving into a new home? We clear all existing remote programming from the opener's memory and re-pair your devices only — ensuring no previous residents retain access. Takes 10 minutes and is the right security practice for every home purchase.",
        },
        {
          icon: "💰",
          heading: "Flat-Rate Programming",
          body: "Remote programming, keypad installation, and HomeLink setup are all flat-rate services. We give you the price before starting — no per-device charges that multiply unexpectedly.",
        },
        {
          icon: "⚡",
          heading: "Same-Day Service",
          body: "Remote and keypad programming calls are typically handled same-day. We schedule in 2-hour windows across Kirkland, Bellevue, Redmond, and the Eastside.",
        },
      ]}

      contentBlocks={[
        {
          heading: "Understanding Garage Door Remote Frequencies and Compatibility",
          body: `Garage door opener remotes are not universal — they must match the frequency and security protocol of your specific opener. Understanding this saves homeowners from purchasing incompatible remotes and wondering why programming fails.

Older openers (pre-1993) used fixed-code (DIP switch) technology operating at 300 MHz or 390 MHz. These remotes have a row of small switches that you set to match a code on the opener — the same code transmits every time the button is pressed. Fixed-code remotes are easy to program but have a significant security weakness: anyone with a compatible remote and a code scanner can copy your code and open your door. Zeus recommends upgrading openers this old.

Rolling-code technology (introduced in the mid-1990s) solved the security problem. Rolling-code remotes use a synchronized algorithm between the remote and the opener — every button press sends a unique code that can only be used once. A copied code is useless because the next valid code has already moved forward. LiftMaster's Security+ and Security+ 2.0 systems use rolling codes; Genie uses Intellicode. These systems are the current standard and are significantly more secure.

The most common compatibility issue Zeus encounters: a homeowner purchases a universal replacement remote from a hardware store, but the remote operates on a frequency that doesn't match the opener's receiver. LiftMaster 390 MHz openers won't pair with a 315 MHz remote regardless of how many times you press the Learn button. We identify your opener's exact frequency and supply the correct replacement remote — eliminating the guessing-game.

myQ technology is LiftMaster and Chamberlain's current platform for smart garage access. myQ-enabled openers connect to your home Wi-Fi and allow remote monitoring and control via smartphone app. If your opener was manufactured after 2011 and has a yellow Learn button, it's likely myQ-compatible. Zeus configures the myQ Wi-Fi connection, installs the app, and verifies remote monitoring is active before completing the service call.`,
        },
        {
          heading: "Wireless Keypad Installation and Security Best Practices",
          body: `A wireless keypad mounted outside your garage provides convenient entry without carrying a remote — particularly useful for family members, regular visitors, or when you're exercising outdoors and don't have your phone. Keypads operate on the same rolling-code technology as remotes, transmitting a secure PIN-linked code each time.

Zeus installs keypads at the optimal height and position — approximately 5 feet from the ground, beside the door, angled for comfortable hand use. We run a weather-resistance check on the mounting location: keypads exposed to direct rain require additional weatherproofing around the battery compartment to prevent corrosion that kills the keypad within a year.

PIN security is worth a brief discussion. The factory default PIN on a new keypad is often 1234 or 0000 — every professional knows this. Zeus programs a custom PIN (your choice) during installation and explains how to change it. We also recommend against PINs that are easy to guess: birth years, consecutive numbers, and repeated digits are the first combinations a burglar tries.

For households with multiple users — family members, babysitters, dog walkers, housekeepers — myQ-compatible systems offer a significant advantage: temporary access codes that expire after a set period. Instead of giving a service provider your permanent PIN, you generate a time-limited code that works only during their scheduled access window. Zeus sets up temporary code functionality for all myQ-compatible openers during the keypad service call.

Battery maintenance for keypads is straightforward but often forgotten. Most wireless keypads run on a single 9V battery that lasts 1–2 years depending on use. Low battery typically causes intermittent response before complete failure — if your keypad is working inconsistently, try a fresh battery first. Zeus includes a new battery with every keypad installation.`,
        },
      ]}

      relatedEntities={[
        "Rolling code technology",
        "Security+ 2.0",
        "Fixed-code DIP switch",
        "LiftMaster Learn button",
        "HomeLink system",
        "myQ Wi-Fi",
        "315 MHz frequency",
        "390 MHz frequency",
        "433 MHz frequency",
        "Wireless keypad",
        "PIN programming",
        "Temporary access code",
        "Universal remote",
        "Genie Intellicode",
        "ALADDIN Connect",
        "Battery backup",
      ]}

      faqs={REMOTE_FAQS}

      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Remote & Keypad Programming", url: "/services/remote-keypad-programming" },
      ]}
    />
  );
}
