import { useLanguage } from "@/contexts/LanguageContext";

const CookiePolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Are Cookies</h2>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit our website. They are widely used to make websites work more efficiently and provide 
                information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 mb-4">We use cookies for several purposes:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Performance Cookies:</strong> Collect information about website performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Session Cookies</h3>
                <p className="text-gray-600 mb-4">
                  These are temporary cookies that expire when you close your browser. They help us 
                  maintain your session while you navigate our website.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Persistent Cookies</h3>
                <p className="text-gray-600 mb-4">
                  These cookies remain on your device for a set period or until you delete them. 
                  They help us remember your preferences for future visits.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Third-Party Cookies</h3>
                <p className="text-gray-600 mb-4">
                  We may use third-party services that place cookies on your device. These include 
                  analytics services and social media platforms.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Managing Cookies</h2>
              <p className="text-gray-600 mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                <li>Opt-out tools: Some third-party services provide opt-out mechanisms</li>
                <li>Privacy settings: Adjust your privacy preferences in your browser</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Please note that disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookie Consent</h2>
              <p className="text-gray-600 mb-4">
                By continuing to use our website, you consent to our use of cookies as described in 
                this policy. You can withdraw your consent at any time by adjusting your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Cookie Policy from time to time. Any changes will be posted on 
                this page with an updated revision date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about our use of cookies, please contact us at{" "}
                <a href="mailto:cookies@example.com" className="text-blue-600 hover:underline">
                  cookies@example.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;