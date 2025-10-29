import React from 'react'

const TermCondition = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Terms & Conditions</h1>
        <p className="text-gray-600 mb-8 text-center">
          Effective date: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using SwiftCareer, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. User Accounts</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>You must be at least 18 years old to create an account</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You must provide accurate and complete information</li>
              <li>One person cannot create multiple accounts without permission</li>
              <li>You are responsible for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Job Seeker Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed">
              As a job seeker, you agree to provide truthful information in your profile and applications. 
              You shall not misrepresent your qualifications, experience, or skills. You are responsible 
              for the content you post and share on the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Employer Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed">
              Employers must post genuine job opportunities with accurate descriptions and requirements. 
              Discrimination based on race, gender, religion, or other protected characteristics is strictly 
              prohibited. Employers must respond to applications in a timely manner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Prohibited Activities</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Posting false or misleading information</li>
              <li>Harassing other users or staff members</li>
              <li>Attempting to bypass security measures</li>
              <li>Using the platform for illegal activities</li>
              <li>Scraping or copying content without permission</li>
              <li>Spamming or sending unsolicited messages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to terminate or suspend your account at our sole discretion, 
              without notice, for conduct that we believe violates these Terms and Conditions or 
              is harmful to other users, us, or third parties, or for any other reason.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              SwiftCareer shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from your use of or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of 
              significant changes through email or platform notifications. Continued use of the 
              service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              For any questions about these Terms and Conditions, please contact us:
              <br />
              <strong>Email:</strong> legal@swiftcareer.com
              <br />
              <strong>Address:</strong> 123 Career Street, Tech City, TC 12345
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermCondition