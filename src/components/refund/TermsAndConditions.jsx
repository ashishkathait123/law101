import React from 'react';
import { FaFileContract } from 'react-icons/fa';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-28">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8">
        <div className="text-center mb-10">
          <div className="flex justify-center text-[#000080] mb-4">
            <FaFileContract size={40} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#000080] mb-2">
            Terms and Conditions – Lawyers10on10
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Website: <span className="text-[#000080]">www.lawyers10on10.com</span>
          </p>
          <p className="text-gray-700 text-left">
            Welcome to Lawyers10on10, your trusted platform to connect instantly with verified lawyers in India for live legal consultations. By using our website or connecting to a lawyer through our platform, you agree to these Terms and Conditions.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          {/* 1. Definitions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#000080] mb-4">1. Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>"Platform"</strong> means the Lawyers10on10 website and related services.</li>
              <li><strong>"User"</strong> or <strong>"You"</strong> means anyone accessing or using the platform to get live legal consultations.</li>
              <li><strong>"Lawyer"</strong> means the legal professional providing consultation via the platform.</li>
            </ul>
            <div className="text-center text-gray-400 my-4">⸻</div>
          </div>

          {/* 2. Services Provided */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#000080] mb-4">2. Services Provided</h2>
            <p>
              We offer a real-time legal consultation service, allowing you to connect instantly with verified lawyers via calls, chats, or video sessions.
            </p>
            <div className="text-center text-gray-400 my-4">⸻</div>
          </div>

          {/* 3. Eligibility to Use the Platform */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#000080] mb-4">3. Eligibility to Use the Platform</h2>
            <p>To use Lawyers10on10, you must:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide accurate and up-to-date contact details.</li>
              <li>Agree to these Terms and Conditions before using the platform.</li>
            </ul>
            <div className="text-center text-gray-400 my-4">⸻</div>
          </div>

          {/* 4. Consultation Process */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#000080] mb-4">4. Consultation Process</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>When you connect to a lawyer, the consultation begins immediately.</li>
              <li>Ensure you have a stable internet connection or phone line for uninterrupted service.</li>
              <li>Any delays or disconnections from your side may reduce consultation time without refund.</li>
            </ul>
            <div className="text-center text-gray-400 my-4">⸻</div>
          </div>

          {/* 5. User Responsibilities */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#000080] mb-4">5. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide truthful and complete information to the lawyer.</li>
              <li>Respect the professional boundaries of the consultation.</li>
              <li>Not record, publish, or share the consultation without prior written consent from the lawyer and platform.</li>
            </ul>
            <div className="text-center text-gray-400 my-4">⸻</div>
          </div>

          {/* 6. Fair Usage Policy */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#000080] mb-4">6. Fair Usage Policy</h2>
            <p>To maintain a smooth experience for all users, Lawyers10on10 follows a Fair Usage Policy:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Avoid repeatedly connecting and disconnecting without purpose.</li>
              <li>Use the platform only for genuine consultations you intend to complete.</li>
              <li>Please use the platform responsibly to ensure availability for all users.</li>
            </ul>
            <div className="text-center text-gray-400 my-4">⸻</div>
          </div>

          {/* 7. Intellectual Property */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#000080] mb-4">7. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All content on our website, including text, images, and branding, is owned by Lawyers10on10 and may not be copied without permission.</li>
            </ul>
            <div className="text-center text-gray-400 my-4">⸻</div>
          </div>

          {/* 8. Changes to Terms */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#000080] mb-4">8. Changes to Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We may update these Terms and Conditions at any time. Changes will be posted on this page.</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-[#000080] mb-3">Contact Us</h3>
            <p className="mb-2">
              For any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="text-[#000080] font-medium">
              support@lawyers10on10.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;