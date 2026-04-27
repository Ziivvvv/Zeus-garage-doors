/**
 * pages/PrivacyPage.tsx — Zeus Garage Doors
 * Standard privacy policy for a WA local service business
 */

import SEOHead from "../components/SEOHead";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function PrivacyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Zeus Garage Doors"
        description="Read the privacy policy for Zeus Garage Doors. Learn how we collect, use, and protect your personal information."
        canonical="/privacy"
        pageType="about"
        noIndex={true}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy" },
        ]}
      />

      <section className="bg-background pt-28 pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="font-display text-4xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm mb-10">
            Last updated: March 22, 2026
          </p>

          <div className="prose-custom space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">1. Information We Collect</h2>
              <p>
                When you contact Zeus Garage Doors ("we," "us," or "our") via our website, phone, or email, we may collect the following personal information: your name, phone number, email address, home or service address, and details about your garage door repair needs. We do not collect sensitive financial information through our website.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your service inquiries and provide estimates</li>
                <li>Schedule and perform garage door repair services</li>
                <li>Communicate with you about your service appointment</li>
                <li>Improve our website and customer experience</li>
                <li>Comply with applicable Washington State laws and regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only with trusted service providers who assist us in operating our business (such as scheduling software or payment processors), and only to the extent necessary to provide our services to you.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">4. Data Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">5. Cookies and Analytics</h2>
              <p>
                Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings. We may use third-party analytics services (such as Google Analytics) that collect anonymized usage data.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">6. Your Rights</h2>
              <p>
                Under Washington State law, you have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, please contact us at{" "}
                <a href="mailto:zeusgaragedoorepair@gmail.com" className="text-primary hover:underline">
                  zeusgaragedoorepair@gmail.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">7. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. Your continued use of our website after changes are posted constitutes your acceptance of the revised policy.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none mt-2 space-y-1">
                <li><strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:zeusgaragedoorepair@gmail.com" className="text-primary hover:underline">
                    zeusgaragedoorepair@gmail.com
                  </a>
                </li>
                <li><strong className="text-foreground">Phone:</strong> 425-555-0199</li>
                <li><strong className="text-foreground">Service Area:</strong> King & Snohomish Counties, Washington</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
