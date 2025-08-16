import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-32 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Privacy Policy</h1>

      <p className="text-gray-700 mb-4">
        Your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you shop with us.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">1. Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        When you place an order or interact with our website, we may collect the following information:
      </p>
      <ul className="text-gray-700 mb-4 list-disc pl-6">
        <li>Your name</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>Shipping and billing address</li>
        <li>Payment details (processed securely via third-party gateways)</li>
        <li>Order history and preferences</li>
        <li>Communication or feedback</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">
        We use your information to:
      </p>
      <ul className="text-gray-700 mb-4 list-disc pl-6">
        <li>Process and deliver your orders</li>
        <li>Provide customer support</li>
        <li>Send order updates and promotional offers (only with your consent)</li>
        <li>Improve our website and services</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">3. Sharing Your Information</h2>
      <p className="text-gray-700 mb-4">
        We do not sell or rent your personal information to third parties.
        We may share it only with:
      </p>
      <ul className="text-gray-700 mb-4 list-disc pl-6">
        <li>Trusted service providers (e.g. delivery partners, payment processors) to fulfill your order</li>
        <li>Government authorities if required by law</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">4. Data Security</h2>
      <p className="text-gray-700 mb-4">
        We take reasonable steps to protect your personal data from unauthorized access, misuse, or loss. Payments are securely handled by trusted payment gateways and not stored on our servers.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">5. Cookies</h2>
      <p className="text-gray-700 mb-4">
        Our website uses cookies to improve your browsing experience. Cookies help us remember your preferences and track website performance. You can manage or disable cookies in your browser settings.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">6. Your Rights</h2>
      <p className="text-gray-700 mb-4">
        You have the right to:
      </p>
      <ul className="text-gray-700 mb-4 list-disc pl-6">
        <li>Access or update your personal information</li>
        <li>Request deletion of your data (subject to order history and legal requirements)</li>
        <li>Opt out of marketing communications</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">7. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        If you have any questions or concerns about this Privacy Policy, please contact us.
      </p>
    </div>
  );
};

export default Privacy;