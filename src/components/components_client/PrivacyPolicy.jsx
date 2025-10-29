import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Privacy Policy</h1>
        <p className="text-gray-600 mb-8 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              At SwiftCareer, we collect information to provide better services to all our users. 
              This includes personal information like your name, email address, phone number, 
              and professional details when you create an account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>To create and maintain your account</li>
              <li>To match you with relevant job opportunities</li>
              <li>To communicate important updates and notifications</li>
              <li>To improve our services and user experience</li>
              <li>To ensure platform security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Protection</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. Your data 
              is encrypted and stored securely on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Third-Party Sharing</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell your personal information to third parties. We may share your 
              profile information with potential employers only when you apply for jobs or 
              when you explicitly consent to sharing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Right to access and download your data</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to delete your account and personal data</li>
              <li>Right to opt-out of marketing communications</li>
              <li>Right to object to data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <strong>Email:</strong> privacy@swiftcareer.com
              <br />
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy