import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy — 3rd-AI",
  description: "How 3rd-AI Limited collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black">
        <section className="mx-auto max-w-3xl px-8 pt-56 pb-24">

          {/* Header */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Legal
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-6 text-sm text-slate-500">
            Last updated: July 2026 · 3rd-AI Limited · Company No. 16341261
          </p>

          <div className="mt-16 space-y-12 text-base leading-8 text-slate-400">

            {/* 1 */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-white">1. Who we are</h2>
              <p>
                3rd-AI Limited is a private limited company registered in England and Wales
                (Company No. 16341261), with its registered office at 3 Assembly Square,
                Cardiff, Wales CF10 4, GB.
              </p>
              <p className="mt-4">
                We operate the website at <span className="text-cyan-400">www.3rd-ai.com</span>.
                For any privacy-related queries, contact us at{" "}
                <a href="mailto:info@3rd-ai.com" className="text-cyan-400 hover:opacity-70">
                  info@3rd-ai.com
                </a>.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-white">2. What data we collect</h2>
              <p>
                We collect personal data only when you voluntarily submit our contact form.
                This may include:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Full name</li>
                <li>Work email address</li>
                <li>Company name</li>
                <li>Inquiry type and message content</li>
              </ul>
              <p className="mt-4">
                We do not use cookies for tracking, advertising, or analytics. We do not
                collect any data passively from visitors to this website.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-white">3. How we use your data</h2>
              <p>We use the information you submit solely to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Respond to your inquiry</li>
                <li>Arrange technical briefings or follow-up discussions</li>
              </ul>
              <p className="mt-4">
                We do not use your data for marketing without your explicit consent, and
                we do not sell, rent, or share your data with third parties for their own
                purposes.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-white">4. How your data is processed</h2>
              <p>
                Contact form submissions are processed via{" "}
                <span className="text-white font-medium">Formspree</span> (formspree.io),
                a third-party form handling service. Formspree receives and forwards your
                submission to us by email. By submitting the contact form, your data will
                be processed by Formspree in accordance with their privacy policy, available
                at{" "}
                <a
                  href="https://formspree.io/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:opacity-70"
                >
                  formspree.io/legal/privacy-policy
                </a>.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-white">5. Legal basis for processing</h2>
              <p>
                We process your personal data on the basis of{" "}
                <span className="text-white">legitimate interests</span> — specifically,
                to respond to business inquiries you have initiated. Where required, we
                rely on your <span className="text-white">consent</span> as the legal basis.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-white">6. Data retention</h2>
              <p>
                We retain your contact information only for as long as necessary to respond
                to your inquiry and maintain a reasonable record of correspondence —
                typically no longer than 24 months. You may request deletion at any time.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-white">7. Your rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>
                  Lodge a complaint with the ICO at{" "}
                  <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:opacity-70">
                    ico.org.uk
                  </a>
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:info@3rd-ai.com" className="text-cyan-400 hover:opacity-70">
                  info@3rd-ai.com
                </a>.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-white">8. Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be
                posted on this page with an updated date. We encourage you to review this
                page periodically.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
