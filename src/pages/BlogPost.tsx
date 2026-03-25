import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileFooter from "@/components/StickyMobileFooter";

const articles: Record<string, { title: string; date: string; content: string }> = {
  "how-to-know-garage-door-spring-broken": {
    title: "5 Signs Your Garage Door Spring Is About to Snap",
    date: "March 15, 2026",
    content: `Your garage door springs do the heavy lifting—literally. A standard two-car garage door weighs 200–300 pounds, and the springs counterbalance that weight so the opener (and you) don't have to. When springs fail, it's loud, sudden, and potentially dangerous.\n\nHere are five warning signs that your springs are nearing the end of their lifespan:\n\n**1. The Door Feels Heavier Than Usual**\nDisconnect the opener and lift the door manually. A properly balanced door should stay open at about waist height without support. If it drops or feels like it weighs a ton, your springs are losing tension.\n\n**2. Visible Gaps in the Coils**\nTorsion springs are mounted above the door. Look for gaps or stretched sections between the coils—this indicates the spring has expanded and weakened.\n\n**3. The Door Opens Unevenly**\nIf one side rises faster than the other, one of your extension springs (if you have a pair) may be failing. This uneven load stresses the tracks and opener.\n\n**4. A Loud Bang From the Garage**\nMany homeowners report hearing what sounds like a gunshot or firework from the garage. That's the sound of a spring snapping. If you hear it, do NOT attempt to open the door.\n\n**5. The Opener Struggles or Stalls**\nWhen springs weaken, the opener motor compensates by working harder. If your opener strains, reverses, or stalls mid-cycle, failing springs are a likely culprit.\n\n**What to Do Next**\nIf you notice any of these signs, call Zeus Garage Doors at (425) 123-4567 for a free inspection. We carry springs on every truck and can replace them same-day in most cases. All spring replacements include a professional service warranty.`,
  },
  "torsion-vs-extension-springs": {
    title: "Torsion vs. Extension Springs: Which Does Your Door Use?",
    date: "March 8, 2026",
    content: `Understanding the type of spring system your garage door uses helps you communicate effectively with repair technicians and make informed decisions about replacements and upgrades.\n\n**Torsion Springs**\nTorsion springs are mounted on a metal shaft directly above the garage door opening. They use torque to lift the door—winding tightly when the door closes and unwinding to release energy when it opens.\n\nAdvantages: smoother operation, longer lifespan (15,000–20,000 cycles), better balance, and safer failure mode. Most modern doors use torsion springs.\n\n**Extension Springs**\nExtension springs run along the horizontal tracks on either side of the door. They stretch and contract to counterbalance the door's weight.\n\nAdvantages: lower upfront cost, easier for DIY replacement (though we don't recommend it). Disadvantages: shorter lifespan, more components to fail, and they can become projectiles if they break without safety cables.\n\n**Our Recommendation**\nIf your home currently uses extension springs, consider upgrading to a torsion system during your next replacement. The upfront cost is slightly higher, but the smoother operation, longer lifespan, and improved safety make it worthwhile.`,
  },
  "garage-door-maintenance-tips": {
    title: "Essential Garage Door Maintenance Tips for PNW Homeowners",
    date: "February 28, 2026",
    content: `Regular maintenance extends the life of your garage door and prevents costly emergency repairs. Here are key maintenance tasks every Pacific Northwest homeowner should perform.\n\n**Lubrication**\nApply a silicone-based lubricant to springs, rollers, hinges, and tracks every six months. Avoid WD-40 on springs — it's a degreaser, not a lubricant.\n\n**Visual Inspection**\nCheck cables for fraying, springs for rust, and weather seals for cracks. The PNW moisture accelerates wear on all metal components.\n\n**Balance Test**\nDisconnect the opener and lift the door halfway by hand. If it doesn't stay put, your springs need adjustment — call a professional.\n\n**Sensor Check**\nPlace an object in the door's path and test the auto-reverse. Clean sensor lenses monthly, especially during pollen season.\n\n**Weather Seal**\nReplace cracked or brittle bottom seals before the rainy season. A good seal keeps water, leaves, and pests out of your garage.\n\nNeed professional maintenance? <a href="/contact">Contact Zeus Garage Doors</a> for a comprehensive tune-up. We also offer <a href="/services/spring-replacement">spring replacement</a> and <a href="/services/opener-repair">opener repair</a> services across the Eastside.`,
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles[slug || ""] || articles["how-to-know-garage-door-spring-broken"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-navy-gradient">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                <ArrowLeft size={14} /> Back to Blog
              </Link>
              <p className="text-muted-foreground text-sm mb-3">{article.date}</p>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground" style={{ textWrap: "balance", lineHeight: 1.1 }}>
                {article.title}
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="prose-custom"
            >
              {article.content.split("\n\n").map((block, i) => {
                if (block.startsWith("**") && block.endsWith("**")) {
                  return <h3 key={i} className="font-display text-xl font-bold text-foreground mt-8 mb-3">{block.replace(/\*\*/g, "")}</h3>;
                }
                if (block.startsWith("**")) {
                  const parts = block.split("**");
                  return (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                      {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-foreground">{part}</strong> : part)}
                    </p>
                  );
                }
                if (block.startsWith("- ")) {
                  return (
                    <ul key={i} className="space-y-2 mb-4 pl-4">
                      {block.split("\n").map((li, j) => (
                        <li key={j} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {li.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{block}</p>;
              })}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileFooter />
      <div className="h-14 lg:hidden" />
    </div>
  );
}
