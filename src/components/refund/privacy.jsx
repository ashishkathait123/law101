import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-32 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Privacy Policy</h1>

      <p className="text-gray-700 mb-4">
        <strong>Lawyers10010</strong> values your privacy. All online consultations are secure, confidential, and encrypted.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">Data Protection</h2>
      <p className="text-gray-700 mb-4">
        We use industry-standard encryption to protect all communication and personal information shared on our platform.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">Confidentiality</h2>
      <p className="text-gray-700 mb-4">
        All conversations with lawyers are private and are not recorded or shared. We respect client-lawyer confidentiality.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">Your Control</h2>
      <p className="text-gray-700 mb-4">
        You have full control over your data. You can request access, modification, or deletion of your personal information at any time.
      </p>

      <p className="text-gray-700 mt-6">
        If you have any concerns about your privacy, please contact us at <span className="text-blue-600 font-medium">privacy@lawyers10on10.com</span>.
      </p>
    </div>
  );
};

export default Privacy;
