import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const infoSections = [
  {
    title: "Information We Collect",
    content: [
      "We may collect information that you voluntarily provide to us when you interact with our Website, including:",
      "Contact Information: We may collect details such as your name, email address, phone number, company information, and other contact details that you provide when submitting an enquiry or contacting us.",
      "Enquiry and Requirement Information: We may collect information relating to your product requirements, specifications, applications, quotation requests, and other details you provide when enquiring about shaft collars, couplings, shafts, sprockets, or customised machined components.",
      "Communication Information: We may retain information contained in communications you send to us, including enquiries, requests for quotations, and other business-related correspondence.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "Responding to Enquiries: We use the information you provide to respond to enquiries, quotation requests, product questions, and other communications.",
      "Understanding Requirements: Information relating to your product requirements and specifications may be used to understand your application and determine the appropriate products or customised manufacturing requirements.",
      "Business Communication: We may use your contact information to communicate with you regarding enquiries, quotations, products, services, and other business-related matters.",
      "Customer Service: We may use the information provided to maintain communication, provide assistance, and support our business relationships.",
    ],
  },
  {
    title: "Data Storage and Security",
    content: [
      "We take reasonable measures to protect the information provided to us and to prevent unauthorised access, disclosure, alteration, or misuse of such information.",
      "Information provided through our Website or during business communications may be retained for as long as reasonably necessary to respond to enquiries, provide services, maintain business records, or fulfil applicable legal and business requirements.",
      "However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security of information transmitted through the internet.",
    ],
  },
  {
    title: "User Rights",
    content: [
      "Access and Correction: You may contact us to request information about the personal information you have provided to us or to request correction of inaccurate information.",
      "Data Deletion: You may request deletion of personal information you have provided to us, subject to information that we may be required to retain for legal, regulatory, or legitimate business purposes.",
      "Opt-Out: If you do not wish to receive further business communications from us, you may contact us directly and request that such communications be discontinued.",
    ],
  },
  {
    title: "Third-Party Involvement",
    content: [
      "We do not sell your personal information. Information may be disclosed where reasonably necessary to respond to your enquiry, provide requested services, comply with applicable legal requirements, or protect our legal rights and interests.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes to our Website, business practices, or applicable requirements. Any updated version will be published on this page, and the revised policy will apply from the date of publication.",
    ],
  },
  {
    title: "Contact Information",
    content: [
      "If you have any questions or concerns regarding this Privacy Policy, or if you wish to exercise any of your rights, please contact us:",
    ],
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-brand-dark">
      <Navbar />

      <div className="mx-auto max-w-[1200px] px-4 pb-16 pt-[104px] lg:pt-[140px] sm:px-8">
        <article className="mx-auto max-w-[1100px]">
          <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-[2.5rem]">
            Privacy Policy
          </h1>

          <p className="mt-8 max-w-[1120px] text-[15px] leading-[1.7] text-[#2b2b2b]">
            Industrial Spares Manufacturing Company (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
            &ldquo;our&rdquo;) respects your privacy and is committed to protecting the information
            you provide when you visit our website,{" "}
            <a
              href="https://industrialsparesfromindia.com"
              target="_blank"
              rel="noreferrer"
              className="text-brand-red underline-offset-4 hover:underline"
            >
              https://industrialsparesfromindia.com
            </a>{" "}
            (the &ldquo;Website&rdquo;), contact us, submit an enquiry, or request information about
            our products and services.
          </p>

          <div className="mt-10 border-[#d7d7d7] border-t" />

          {infoSections.map((section) => (
            <section key={section.title} className="pt-10">
              <h2 className="font-semibold text-3xl tracking-[-0.04em] text-brand-dark sm:text-[1.7rem]">
                {section.title}
              </h2>

              {section.title === "Contact Information" ? (
                <>
                  <p className="mt-8 max-w-[1100px] text-[15px] leading-[1.7] text-[#2b2b2b]">
                    If you have any questions or concerns about this Privacy Policy, or if you wish
                    to exercise your rights, please contact us:
                  </p>

                  <div className="mt-8 grid max-w-[820px] gap-0 rounded-none bg-transparent sm:grid-cols-2">
                    <div className="border-[#b9b9b9] border-l py-5 pl-8 pr-8">
                      <p className="text-[#1f1f1f] text-[1.05rem] leading-[1.7]">
                        51, Purna Chandra Mitra Lane, 2/F,
                        <br />
                        Kolkata 700 033, West Bengal, India
                      </p>
                    </div>

                    <div className="border-[#b9b9b9] border-l py-5 pl-8">
                      <p className="text-[#1f1f1f] text-[1.05rem] leading-[1.7]">
                        +91-98310 06168,
                        <br />
                        jp190157@gmail.com
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="mt-6 space-y-4 text-[#2a2a2a] text-[15px] leading-[1.7]">
                  {section.content.map((paragraph) => (
                    <div key={paragraph} className="flex gap-4">
                      {section.title === "Third-Party Involvement" ||
                      section.title === "Changes to This Privacy Policy" ? null : (
                        <span className="mt-[0.9rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3a3a3a]" />
                      )}
                      <p>{paragraph}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </article>
      </div>

      <Footer />
    </main>
  );
}
