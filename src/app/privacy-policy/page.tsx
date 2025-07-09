import { type Metadata } from 'next'

import { PageIntro } from '@/components/PageIntro'


export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how DaDriX AI collects, uses, and protects your data...',
}

export default async function PrivacyPolicy() {

  return (
    <>
      <PageIntro eyebrow="Last Updated: July, 02 2025" title="Privay Policy">
        <p>
          Our Privacy Policy explains how DaDriX AI responsibly collects, processes, and protects social media, financial, and business data in full compliance with GDPR, CCPA, and industry security standards. We never resell or monetize your raw data—insights and analytics are delivered exclusively to you as the authorized client. Your data is secured with enterprise-grade encryption and access controls, with clear retention periods and your rights to access, modify, or delete your information at any time.
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
                    "Introduction",
                    "Data We Collect and Process", 
                    "How We Use Your Data",
                    "Legal Basis for Processing",
                    "Data Security and Protection",
                    "Data Retention",
                    "Cookies and Tracking Technologies",
                    "Third-Party Sharing and International Transfers",
                    "Your Rights and Choices",
                    "Data Breach Notification",
                    "Children's Privacy",
                    "Changes to This Policy",
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Introduction</h2>
              <p>
                DaDriX AI ("we," "us," or "our") provides data analysis, engineering, and artificial intelligence solutions to help businesses become data-driven. We specialize in processing and analyzing social network data, financial data, and business intelligence to deliver actionable insights. This Privacy Policy explains how we collect, use, store, and protect data in compliance with applicable privacy laws including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and financial industry standards.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Data We Collect and Process</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.1 Social Media Data</h3>
              <ul>
                <li>Publicly available data from social media platforms (Facebook, Twitter, LinkedIn, Instagram, etc.)</li>
                <li>Data obtained through official APIs with proper authorization</li>
                <li>Engagement metrics, sentiment analysis data, and trend information</li>
                <li>Only data where clients have demonstrated lawful access rights</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.2 Financial Data</h3>
              <ul>
                <li>Aggregated, anonymized, or pseudonymized transaction data</li>
                <li>Market data and financial indicators</li>
                <li>Risk assessment and behavioral analytics data</li>
                <li>All financial data is processed in compliance with PCI DSS, GLBA, and applicable banking regulations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.3 Client-Provided Data</h3>
              <ul>
                <li>Business metrics and performance indicators</li>
                <li>Customer behavior and analytics data</li>
                <li>Operational data submitted for analysis</li>
                <li>Any datasets provided by clients under lawful data sharing agreements</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.4 Website and Service Data</h3>
              <ul>
                <li>Contact information (name, email, company details)</li>
                <li>Usage analytics and website interaction data</li>
                <li>Communication records and support requests</li>
                <li>Cookies and similar tracking technologies (see Section 7)</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. How We Use Your Data</h2>
              <p>We process data for the following purposes:</p>
              <ul>
                <li>Performing data analytics, predictive modeling, and AI-driven insights</li>
                <li>Developing customized solutions and recommendations</li>
                <li>Improving our services and developing new analytical capabilities</li>
                <li>Communicating with clients about services and support</li>
                <li>Ensuring security and preventing fraud</li>
                <li>Complying with legal obligations and regulatory requirements</li>
              </ul>
              
              <div className="not-prose my-8">
                <div className="rounded-lg bg-indigo-50 p-6 border-l-4 border-indigo-400">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.485 3.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 3.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-indigo-800">Important</h3>
                      <div className="mt-2 text-sm text-indigo-700">
                        <p>We never resell, distribute, or monetize raw client data. Insights and analytics are delivered exclusively to authorized clients who provided the data.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Legal Basis for Processing (GDPR)</h2>
              <p>We process personal data based on:</p>
              <ul>
                <li><strong>Contract Performance:</strong> Processing necessary to fulfill our service agreements</li>
                <li><strong>Legitimate Interests:</strong> Improving services, security, and business operations</li>
                <li><strong>Consent:</strong> Where explicitly provided for specific processing activities</li>
                <li><strong>Legal Obligation:</strong> Compliance with applicable laws and regulations</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Data Security and Protection</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5.1 Technical Safeguards</h3>
              <ul>
                <li><strong>Encryption:</strong> All data encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                <li><strong>Access Controls:</strong> Multi-factor authentication and role-based permissions</li>
                <li><strong>Network Security:</strong> Firewalls, intrusion detection, and secure cloud infrastructure</li>
                <li><strong>Regular Security Audits:</strong> Quarterly penetration testing and vulnerability assessments</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">5.2 Organizational Measures</h3>
              <ul>
                <li>Employee background checks and confidentiality agreements</li>
                <li>Regular security training and awareness programs</li>
                <li>Incident response procedures and data breach protocols</li>
                <li>Third-party security certifications (SOC 2, ISO 27001 compliance)</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Data Retention</h2>
              <ul>
                <li><strong>Client Project Data:</strong> Retained for the duration of the engagement plus 3 years for legal compliance</li>
                <li><strong>Financial Data:</strong> Retained per industry standards (typically 7 years) or as required by law</li>
                <li><strong>Website Data:</strong> Contact information retained for 5 years from last interaction</li>
                <li><strong>Analytics Data:</strong> Aggregated insights may be retained indefinitely in anonymized form</li>
                <li><strong>Legal Hold:</strong> Data subject to litigation or regulatory inquiry retained until resolution</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Cookies and Tracking Technologies</h2>
              <p>Our website uses:</p>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for website functionality and security</li>
                <li><strong>Analytics Cookies:</strong> Google Analytics to understand website usage (anonymized)</li>
                <li><strong>Marketing Cookies:</strong> With consent, for relevant content and communication</li>
              </ul>
              <p>You can control cookie preferences through your browser settings or our cookie consent manager.</p>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Third-Party Sharing and International Transfers</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">8.1 Data Sharing</h3>
              <p>We share data only:</p>
              <ul>
                <li>With explicit client consent for specified purposes</li>
                <li>With vetted subprocessors under strict data processing agreements (AWS, Google Cloud, Microsoft Azure)</li>
                <li>When required by law or to protect legal rights</li>
                <li>With professional advisors under confidentiality obligations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">8.2 International Transfers</h3>
              <p>Data may be transferred to countries outside your jurisdiction. We ensure adequate protection through:</p>
              <ul>
                <li>European Commission adequacy decisions</li>
                <li>Standard Contractual Clauses (SCCs)</li>
                <li>Binding Corporate Rules where applicable</li>
                <li>Other legally recognized transfer mechanisms</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Your Rights and Choices</h2>
              <p>Under applicable privacy laws, you may have the right to:</p>
              <ul>
                <li><strong>Access:</strong> Request information about data we hold about you</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your data (subject to legal retention requirements)</li>
                <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Restriction:</strong> Limit how we process your data</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw Consent:</strong> Where processing is based on consent</li>
              </ul>
              
              {/* <div className="not-prose my-8">
                <div className="rounded-lg bg-gray-50 p-6">
                  <p className="text-sm text-gray-600">
                    <strong>To exercise your rights, contact:</strong> privacy@dadrixai.com
                  </p>
                </div>
              </div> */}
            </section>

            {/* Remaining sections follow similar pattern... */}
            {/* For brevity, I'll include the key remaining sections */}

            {/* Section 10 */}
            <section id="section-10" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Data Breach Notification</h2>
              <p>In the event of a data breach that poses a risk to your rights and freedoms, we will:</p>
              <ul>
                <li>Notify relevant supervisory authorities within 72 hours</li>
                <li>Inform affected individuals without undue delay</li>
                <li>Provide details about the nature of the breach and mitigation steps</li>
                <li>Implement immediate containment and remediation measures</li>
              </ul>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under 16 years of age. We do not knowingly collect personal data from children. If we become aware that we have collected data from a child, we will delete it promptly.
              </p>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Changes to This Policy</h2>
              <p>We may update this Privacy Policy to reflect changes in our practices or applicable laws. Material changes will be communicated through:</p>
              <ul>
                <li>Email notification to registered users</li>
                <li>Prominent notice on our website</li>
                <li>Direct notification for significant changes affecting your rights</li>
              </ul>
            </section>

            {/* Section 13 */}
            {/* <section id="section-13" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Contact Information</h2>
              <div className="not-prose">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="text-sm font-medium text-gray-900">Data Protection Officer</h3>
                    <p className="mt-1 text-sm text-gray-600">dpo@dadrixai.com</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="text-sm font-medium text-gray-900">General Privacy Inquiries</h3>
                    <p className="mt-1 text-sm text-gray-600">privacy@dadrixai.com</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-6 sm:col-span-2">
                    <h3 className="text-sm font-medium text-gray-900">Mailing Address</h3>
                    <p className="mt-1 text-sm text-gray-600">[Your Business Address]</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-gray-600">
                  For EU residents, you have the right to lodge a complaint with your local supervisory authority.
                </p>
              </div>
            </section> */}

          </div>
        </div>
      </div>

    </>
  )
}
