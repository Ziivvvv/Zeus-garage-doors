/**
 * pages/TermsPage.tsx — Zeus Garage Doors
 * Standard terms of service for a WA local service business
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

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title="Terms of Service | Zeus Garage Doors"
        description="Review the terms of service for Zeus Garage Doors. Understand our service agreements, warranties, and liability policies."
        canonical="/terms"
        pageType="about"
        noIndex={true}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Terms of Service", url: "/terms" },
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
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-sm mb-10">
            Last updated: March 22, 2026
          </p>

          <div className="prose-custom space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the website and services of Zeus Garage Doors and Gate Repair LLC ("Zeus Garage Doors," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">2. Services</h2>
              <p>
                Zeus Garage Doors provides residential garage door repair, maintenance, and installation services in King and Snohomish Counties, Washington. All services are performed by licensed, bonded, and insured technicians in accordance with Washington State contractor regulations.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">3. Estimates and Pricing</h2>
              <p>
                All estimates provided through our website or by phone are approximate and subject to change upon on-site inspection. Final pricing will be confirmed before any work begins. You will never be charged for work you have not explicitly approved. We do not charge diagnostic or trip fees for standard service calls within our service area.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">4. Warranty</h2>
              <p>
                Zeus Garage Doors provides a limited warranty on parts and labor for all repair and installation services. Warranty terms vary by service type and will be communicated to you at the time of service. Warranty claims must be reported to us within the warranty period by contacting{" "}
                <a href="mailto:zeusgaragedoorepair@gmail.com" className="text-primary hover:underline">
                  zeusgaragedoorepair@gmail.com
                </a>{" "}
                or calling 425-555-0199.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">5. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by Washington State law, Zeus Garage Doors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our services or website. Our total liability for any claim shall not exceed the amount you paid for the specific service giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">6. Customer Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide accurate information about your garage door issue</li>
                <li>Ensure safe and reasonable access to the garage door for our technicians</li>
                <li>Disclose any known hazards or pre-existing conditions</li>
                <li>Make payment in full upon completion of services unless otherwise agreed</li>
              </ul>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">7. Cancellation Policy</h2>
              <p>
                You may cancel or reschedule a service appointment at no charge by providing at least 2 hours' notice before the scheduled arrival time. Cancellations made with less than 2 hours' notice may be subject to a reasonable trip fee at our discretion.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">8. Website Use</h2>
              <p>
                The content on this website is provided for informational purposes only. While we strive to keep the information current and accurate, we make no warranties about the completeness, reliability, or accuracy of the information. Any reliance you place on such information is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">9. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the State of Washington. Any disputes arising from these terms or our services shall be resolved in the courts of King County, Washington.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of our website or services after changes constitutes your acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-xl mb-3">11. Contact Us</h2>
              <p>
                If you have questions about these Terms of Service, please contact us:
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
