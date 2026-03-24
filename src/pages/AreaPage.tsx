import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileFooter from "@/components/StickyMobileFooter";
import FAQAccordion, { GENERAL_FAQS } from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";

const areaData: Record<string, { name: string; description: string; content: string }> = {
  kirkland: {
    name: "Kirkland",
    description: "Trusted garage door repair serving Kirkland homeowners and businesses.",
    content: "As Kirkland's locally-owned garage door company, Zeus Garage Doors has been the Eastside's first call for emergency repairs, installations, and maintenance since 2015. Our shop is minutes from downtown Kirkland, meaning faster response times and lower trip charges than competitors based outside the area.\n\nWe service all Kirkland neighborhoods including Juanita, Houghton, Finn Hill, Totem Lake, Kingsgate, and Bridle Trails. Whether your home is a classic Craftsman bungalow or a new construction in the Rose Hill area, our technicians have experience with every style of garage door.\n\nKirkland's proximity to Lake Washington means homes here deal with unique moisture and humidity challenges that can accelerate hardware corrosion. We recommend annual lubrication and inspection to keep your door operating smoothly year-round.",
  },
  bellevue: {
    name: "Bellevue",
    description: "Premium garage door services for Bellevue's luxury homes and commercial properties.",
    content: "Bellevue's mix of high-end residential estates and modern commercial properties demands garage door service that matches the area's standards. Zeus Garage Doors provides white-glove service to Bellevue neighborhoods from Medina and Clyde Hill to Factoria and Crossroads.\n\nMany Bellevue properties feature oversized custom garage doors, multi-car configurations, and integrated access control systems. Our technicians are trained on premium systems from Clopay Reserve, Amarr Classica, and Wayne Dalton Designer Series.\n\nWe also service Bellevue's commercial properties, including parking structures, warehouse roll-up doors, and security systems. Certified in both residential and commercial applications, we bring the same quality and accountability to every job.",
  },
  "mercer-island": {
    name: "Mercer Island",
    description: "Exclusive garage door services for Mercer Island's waterfront estates.",
    content: "Mercer Island's unique island setting and affluent community deserve a garage door provider that understands the importance of aesthetics, security, and reliability. Many Mercer Island homes feature custom wood, glass, or aluminum doors that require specialized knowledge.\n\nThe island's waterfront properties are particularly susceptible to salt air corrosion and wind loading. We recommend stainless steel hardware, marine-grade coatings, and wind-reinforced doors for homes near the water.\n\nLuxury estates on Mercer Island often use sophisticated access control systems with keypads, intercoms, and smart home integration. Zeus Garage Doors installs and maintains these systems with the same attention to detail as the homes they protect.",
  },
};

export default function AreaPage() {
  const { slug } = useParams<{ slug: string }>();
  const data = areaData[slug || ""] || areaData["kirkland"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-navy-gradient">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Service Area</p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ textWrap: "balance", lineHeight: 1.1 }}>
                Garage Door Repair in {data.name}, WA
              </h1>
              <p className="text-lg text-muted-foreground">{data.description}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {data.content.split("\n\n").map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-6">{p}</p>
                ))}
                <div className="mt-12">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">Common Questions</h2>
                  <FAQAccordion items={GENERAL_FAQS} />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="sticky top-24 bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">Get a Free Quote in {data.name}</h3>
                  <QuoteForm variant="inline" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileFooter />
      <div className="h-14 lg:hidden" />
    </div>
  );
}
