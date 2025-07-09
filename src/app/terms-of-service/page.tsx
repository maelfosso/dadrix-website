import { type Metadata } from 'next'

import { PageIntro } from '@/components/PageIntro'


export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Review our terms of service for data analytics and AI solutions. Understand your rights and responsibilities when using DaDriX AI services.',
}

export default async function PrivacyPolicy() {

  return (
    <>
      <PageIntro eyebrow="Last Updated: July, 02 2025" title="Terms of Service">
        <p>
          Our Terms of Service establish the professional framework for DaDriX AI's data analytics and artificial intelligence solutions, covering everything from social media insights to financial risk assessment. These terms define your responsibilities for data authorization, our intellectual property rights, service level commitments, and fair liability limitations. By using our services, you agree to our transparent payment terms, confidentiality protections, and dispute resolution processes designed to ensure a successful data-driven partnership.
        </p>
      </PageIntro>

      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="prose prose-lg prose-gray max-w-none">
            
            {/* Table of Contents */}
            <div className="not-prose my-12">
              <div className="rounded-2xl bg-gray-50 p-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
                <nav className="space-y-2">
                  {[
                    "Acceptance of Terms",
                    "Description of Services", 
                    "Client Responsibilities and Warranties",
                    "Prohibited Uses and Activities",
                    "Intellectual Property Rights",
                    "Service Level Agreements and Performance",
                    "Payment Terms and Billing",
                    "Confidentiality and Non-Disclosure",
                    "Liability and Disclaimers",
                    "Termination",
                    "Dispute Resolution",
                    "General Provisions",
                    "Contact Information"
                  ].map((item, index) => (
                    <a 
                      key={index}
                      href={`#section-${index + 1}`}
                      className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      {index + 1}. {item}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Section 1 */}
            <section id="section-1" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
              <p>
                By accessing or using DaDriX AI's services ("Services"), you ("Client," "you," or "your") agree to be bound by these Terms of Service ("Terms"). These Terms constitute a legally binding agreement between you and DaDriX AI ("Company," "we," "us," or "our").
              </p>
              <p>
                If you are entering into this agreement on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Description of Services</h2>
              <p>DaDriX AI provides:</p>
              <ul>
                <li>Data analytics and business intelligence solutions</li>
                <li>Artificial intelligence and machine learning modeling</li>
                <li>Social media data analysis and insights</li>
                <li>Financial data processing and risk assessment</li>
                <li>Custom data engineering and visualization services</li>
                <li>Strategic consulting for data-driven decision making</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Client Responsibilities and Warranties</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3.1 Data Rights and Authorization</h3>
              <p>You warrant that you:</p>
              <ul>
                <li>Own or have lawful rights to all data provided to us</li>
                <li>Have obtained necessary consents for data processing</li>
                <li>Comply with all applicable platform terms of service (social media APIs, etc.)</li>
                <li>Will not provide data obtained through unauthorized scraping or illegal means</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">3.2 Data Quality and Accuracy</h3>
              <ul>
                <li>You are responsible for the accuracy and completeness of provided data</li>
                <li>We are not liable for insights based on inaccurate or incomplete client data</li>
                <li>You must promptly notify us of any known data quality issues</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Prohibited Uses and Activities</h2>
              
              <div className="not-prose my-8">
                <div className="rounded-lg bg-red-50 p-6 border-l-4 border-red-400">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">Prohibited Activities</h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>The following activities are strictly prohibited when using our services.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p>You may not:</p>
              <ul>
                <li>Provide data obtained through violation of platform terms of service</li>
                <li>Use our services for illegal, fraudulent, or discriminatory purposes</li>
                <li>Attempt to reverse engineer our proprietary algorithms or methodologies</li>
                <li>Share or redistribute our analytical models without written permission</li>
                <li>Use insights to harm individuals or violate privacy rights</li>
                <li>Violate any applicable laws, regulations, or third-party rights</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5.1 Client Data</h3>
              <ul>
                <li>You retain ownership of all raw data provided to us</li>
                <li>We obtain a limited license to process data solely for delivering contracted services</li>
                <li>Upon project completion, we will delete or return data as specified in the agreement</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">5.2 DaDriX AI Property</h3>
              <ul>
                <li>We retain ownership of our analytical methodologies, algorithms, and proprietary tools</li>
                <li>Custom AI models and analytics developed for clients are owned by DaDriX AI unless otherwise specified in writing</li>
                <li>Client-specific insights and reports are provided under license for your internal business use</li>
                <li>General learnings and anonymized insights may be used to improve our services</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Service Level Agreements and Performance</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">6.1 Delivery Commitments</h3>
              <ul>
                <li>Project timelines will be specified in individual statements of work</li>
                <li>We will use commercially reasonable efforts to meet agreed deadlines</li>
                <li>Delays due to client data provision or feedback will extend timelines accordingly</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">6.2 Service Availability</h3>
              <div className="not-prose my-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-green-50 p-4 border border-green-200">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-green-800">Uptime Target</span>
                    </div>
                    <p className="mt-1 text-lg font-semibold text-green-900">99.5%</p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4 border border-blue-200">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-blue-800">Maintenance Notice</span>
                    </div>
                    <p className="mt-1 text-sm text-blue-900">48 hours advance</p>
                  </div>
                </div>
              </div>
              <ul>
                <li>We target 99.5% uptime for our online platforms and APIs</li>
                <li>Scheduled maintenance will be communicated with 48-hour notice</li>
                <li>Emergency maintenance may be performed with minimal notice</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Payment Terms and Billing</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">7.1 Fees and Payment</h3>
              <ul>
                <li>Fees are specified in individual project agreements or statements of work</li>
                <li>Payment terms are typically Net 30 days from invoice date</li>
                <li>Late payments may incur interest charges of 1.5% per month</li>
                <li>All fees are non-refundable unless otherwise specified</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">7.2 Expenses</h3>
              <ul>
                <li>Pre-approved expenses (cloud computing, data acquisition) will be billed at cost</li>
                <li>Travel expenses require prior written approval</li>
                <li>All expenses will be documented with receipts</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Confidentiality and Non-Disclosure</h2>
              <p>Both parties agree to:</p>
              <ul>
                <li>Maintain strict confidentiality of proprietary information</li>
                <li>Use confidential information solely for the purposes of this agreement</li>
                <li>Implement reasonable security measures to protect confidential data</li>
                <li>Return or destroy confidential information upon termination</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Liability and Disclaimers</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">9.1 Service Disclaimers</h3>
              <ul>
                <li>Services are provided "as-is" without warranties of specific business outcomes</li>
                <li>We do not guarantee particular results, revenue increases, or cost savings</li>
                <li>External data accuracy (social media APIs, financial feeds) is not warranted</li>
                <li>Force majeure events may impact service delivery</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">9.2 Limitation of Liability</h3>
              <div className="not-prose my-8">
                <div className="rounded-lg bg-yellow-50 p-6 border-l-4 border-yellow-400">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.485 3.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 3.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">Liability Cap</h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>Our total liability for any claims shall not exceed the fees paid by you in the 12 months preceding the claim.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p>We are not liable for:</p>
              <ul>
                <li>Indirect, consequential, or punitive damages</li>
                <li>Lost profits, revenue, or business opportunities</li>
                <li>Third-party data inaccuracies or service interruptions</li>
                <li>Damages resulting from your misuse of insights or recommendations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">9.3 Indemnification</h3>
              <p>You agree to indemnify us against claims arising from:</p>
              <ul>
                <li>Your violation of these Terms or applicable laws</li>
                <li>Unauthorized or illegal data provided to us</li>
                <li>Your misuse of our services or insights</li>
                <li>Violation of third-party rights</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Termination</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">10.1 Termination Rights</h3>
              <ul>
                <li>Either party may terminate with 30 days written notice</li>
                <li>We may terminate immediately for material breach or non-payment</li>
                <li>You may terminate for our material uncured breach</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">10.2 Effect of Termination</h3>
              <ul>
                <li>Outstanding fees become immediately due</li>
                <li>We will return or securely delete your data as requested</li>
                <li>Confidentiality obligations survive termination</li>
                <li>You lose access to our platforms and ongoing analytics</li>
              </ul>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">11.1 Governing Law</h3>
              <p>These Terms are governed by [Your State/Country] law, excluding conflict of law principles.</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">11.2 Dispute Process</h3>
              <ul>
                <li>Disputes will first be addressed through good faith negotiations</li>
                <li>Unresolved disputes will be settled through binding arbitration</li>
                <li>Arbitration will be conducted under [Relevant Arbitration Rules]</li>
                <li>Each party bears their own legal costs unless otherwise awarded</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">12. General Provisions</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">12.1 Entire Agreement</h3>
              <p>These Terms, together with project-specific statements of work, constitute the entire agreement between the parties.</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">12.2 Modifications</h3>
              <p>We may update these Terms with 30 days notice. Continued use constitutes acceptance of modified Terms.</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">12.3 Severability</h3>
              <p>If any provision is found unenforceable, the remainder of these Terms remain in full effect.</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">12.4 Assignment</h3>
              <p>You may not assign these Terms without our written consent. We may assign these Terms in connection with a merger or sale.</p>
            </section>

            {/* Section 13 */}
            {/* <section id="section-13" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Contact Information</h2>
              <p>For questions about these Terms:</p>
              
              <div className="not-prose mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="text-sm font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-sm text-gray-600">legal@dadrixai.com</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="text-sm font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-sm text-gray-600">[Your Business Phone]</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="text-sm font-medium text-gray-900">Address</h3>
                    <p className="mt-1 text-sm text-gray-600">[Your Business Address]</p>
                  </div>
                </div>
              </div>
            </section> */}
          </div>
        </div>
      </div>
    </>
  )
}
