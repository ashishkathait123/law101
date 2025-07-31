import React from 'react';
import {
  FaBalanceScale,
  FaShieldAlt,
  FaFileContract,
  FaUserShield,
  FaGavel,
  FaLock,
  FaBan,
} from 'react-icons/fa';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-28">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8">
        <div className="text-center mb-10">
          <div className="flex justify-center text-[#000080] mb-4">
            <FaFileContract size={40} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#000080] mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          {/* Original Sections (Intro to Contact Info) */}
          {/* [Omitted here for brevity, keep all your original sections above as-is] */}

          {/* New: Privacy & Data Usage */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#000080] mb-4 flex items-center">
              <FaLock className="mr-3" /> Privacy and Data Usage
            </h2>
            <p>
              We value your privacy and adhere to all applicable data protection laws. Your personal and case-related data is stored securely and only shared with legal professionals you explicitly connect with.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>We never sell your data to third parties.</li>
              <li>All communication is encrypted where applicable.</li>
              <li>Refer to our <a href="/privacy" className="text-[#000080] underline">Privacy Policy</a> for more details.</li>
            </ul>
          </div>

          {/* New: Third-party Services */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#000080] mb-4 flex items-center">
              <FaShieldAlt className="mr-3" /> Third-party Services
            </h2>
            <p>
              Our platform may integrate third-party tools (e.g., payment gateways, video call services). We are not liable for issues caused by these external providers but ensure that all integrations are compliant and secure.
            </p>
          </div>

          {/* New: Termination of Access */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#000080] mb-4 flex items-center">
              <FaBan className="mr-3" /> Termination of Access
            </h2>
            <p>
              We reserve the right to suspend or terminate your access to our Services if:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>You violate any of these Terms</li>
              <li>You engage in fraudulent or abusive behavior</li>
              <li>We are legally required to do so</li>
            </ul>
          </div>

          {/* New: Dispute Resolution */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#000080] mb-4 flex items-center">
              <FaGavel className="mr-3" /> Dispute Resolution
            </h2>
            <p>
              In case of disputes, users must first contact us for informal resolution. If unresolved:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Disputes will be subject to binding arbitration in Dehradun, India.</li>
              <li>Each party will bear their own legal fees unless otherwise awarded.</li>
              <li>Indian law shall govern the dispute proceedings.</li>
            </ul>
          </div>

          {/* Contact Section (unchanged from yours) */}
          <div className="bg-[#F8FAFF] p-6 rounded-lg border border-[#000080]/20">
            <h3 className="text-xl font-bold text-[#000080] mb-3">Contact Information</h3>
            <p className="mb-2">
              <strong>Legal Name:</strong> Lawyers10 on 10 (operated by GrandeurNet Technologies)
            </p>
            <p className="mb-2">
              <strong>Registered Address:</strong> Bangali Kothi, Dehradun, Uttarakhand 248001
            </p>
            <p className="mb-2">
              <strong>Email:</strong> legal@lawyers10on10.com
            </p>
            <p>
              <strong>Grievance Officer:</strong> Mr. Amit Sharma (contact details as required under Indian IT Act)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
