import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaBalanceScale,
  FaGavel,
  FaUniversity,
  FaGlobe,
  FaPhone,
  FaComments,
  FaRegStar,
  FaStar,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const API_BASE_URL = "https://lawyerbackend-qrqa.onrender.com/lawapi";

const PhysicalLawyerProfile = () => {
  const { state } = useLocation();
  const { lawyer } = state || {};
  const navigate = useNavigate();

  const getStatusStyles = (status) => {
    switch (status?.toLowerCase()) {
      case "online":
        return {
          textColor: "text-green-600",
          bgColor: "bg-green-100",
          label: "Online",
          buttonClass: "bg-[#000080] hover:bg-[#1a1a99] text-white",
          waitTime: "Available now",
        };
      case "busy":
        return {
          textColor: "text-yellow-600",
          bgColor: "bg-yellow-100",
          label: "Busy",
          buttonClass: "bg-yellow-500 hover:bg-yellow-600 text-white",
          waitTime: "Wait ~ 15m",
        };
      default:
        return {
          textColor: "text-gray-600",
          bgColor: "bg-gray-100",
          label: "Offline",
          buttonClass: "bg-gray-300 text-gray-500 cursor-not-allowed",
          waitTime: "Available 9am-5pm",
        };
    }
  };

  const handleInteraction = (service) => {
    const status = lawyer?.status?.toLowerCase();
    if (status === "offline" || !status) {
      alert("This lawyer is currently offline. Please try again later.");
      return;
    }

    const lawyerId = lawyer?._id;
    const dashboardURL = `https://law-consultancy-firms-git-low3-ashish8.vercel.app/user/FindLawyer?lawyerId=${lawyerId}&service=${service}`;
    window.open(dashboardURL, "_blank");
  };

  if (!lawyer) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-gray-600">
          No lawyer data found. Please return to the directory.
          <button 
            onClick={() => navigate('/physical-lawyers')}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Back to Directory
          </button>
        </div>
      </div>
    );
  }

  const statusStyles = getStatusStyles(lawyer?.status);
  const rating = 4.8;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  // Format practice areas
  const practiceAreas = lawyer?.practiceArea
    ? [lawyer.practiceArea] // Single practice area in this API response
    : ["General Practice"];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 mt-16">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-6 text-white mt-14">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="relative mb-4 md:mb-0 md:mr-6">
              {lawyer?.profileImage ? (
                <img
                  src={`${API_BASE_URL}/physical-lawyers/images/${lawyer.profileImage}`}
                  alt={lawyer.name}
                  className="h-32 w-32 rounded-full object-cover border-4 border-white"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
              ) : (
                <div className="h-32 w-32 rounded-full bg-white flex items-center justify-center text-blue-800 text-4xl font-bold uppercase border-4 border-white">
                  {(lawyer?.name || "LA")
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>
              )}
              {lawyer?.isverified && (
                <MdVerified className="absolute bottom-0 right-0 text-blue-300 text-3xl bg-white rounded-full" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">
                    {lawyer?.name || "Legal Advisor"}, Esq.
                  </h1>
                  <p className="text-blue-100 font-medium flex items-center">
                    <FaGavel className="mr-2" />
                    {lawyer?.specialization || "Legal Practitioner"}
                  </p>
                </div>
                <div className={`mt-2 md:mt-0 px-3 py-1 rounded-full ${statusStyles.bgColor} ${statusStyles.textColor}`}>
                  {statusStyles.label}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center">
                  <FaUniversity className="mr-2" />
                  <span>{lawyer?.experience || "5+"} Years Experience</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{lawyer?.city || "Location not specified"}</span>
                </div>
                <div className="flex items-center">
                  <FaBalanceScale className="mr-2" />
                  <span>{lawyer?.licenseNumber || "Licensed Attorney"}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">Bar Membership: Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                  <FaBalanceScale />
                </span>
                Professional Profile
              </h2>
              <div className="bg-gray-50 p-5 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  {lawyer?.profileDescription || 
                    `${lawyer?.name || "This legal professional"} is a distinguished ${lawyer?.specialization || "legal practitioner"} 
                    with ${lawyer?.experience || "extensive"} years of experience practicing in ${lawyer?.city || "multiple jurisdictions"}. 
                    Admitted to the bar in good standing, they specialize in ${lawyer?.practiceArea || "various legal matters"} 
                    with a focus on client-centered representation.`}
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                  <FaUniversity />
                </span>
                Education & Credentials
              </h2>
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {lawyer?.education || "Law Degree"}
                    </h3>
                    <p className="text-gray-600">
                      {lawyer?.education 
                        ? "Graduated from prestigious institution" 
                        : "Education information not provided"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Bar Admissions
                    </h3>
                    <p className="text-gray-600">
                      {lawyer?.licenseNumber 
                        ? `License #${lawyer.licenseNumber}`
                        : "Licensed to practice law"}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                  <FaGavel />
                </span>
                Practice Areas
              </h2>
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex flex-wrap gap-3">
                  {practiceAreas.map((area, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Contact Attorney
              </h3>

              <div className="space-y-4">
                <div
                  className={`p-4 rounded-lg flex items-center cursor-pointer transition-colors ${statusStyles.bgColor}`}
                  onClick={() => handleInteraction("chat")}
                >
                  <div
                    className={`p-3 rounded-full mr-4 ${statusStyles.textColor} bg-white`}
                  >
                    <FaComments size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${statusStyles.textColor}`}>
                      Chat Now
                    </h4>
                    <p className="text-sm text-gray-600">
                      {statusStyles.waitTime}
                    </p>
                  </div>
                </div>

                <div
                  className={`p-4 rounded-lg flex items-center cursor-pointer transition-colors ${statusStyles.bgColor}`}
                  onClick={() => handleInteraction("call")}
                >
                  <div
                    className={`p-3 rounded-full mr-4 ${statusStyles.textColor} bg-white`}
                  >
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${statusStyles.textColor}`}>
                      Call Now
                    </h4>
                    <p className="text-sm text-gray-600">
                      30 min • ₹{lawyer?.consultation_fees || "2000"}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg flex items-center bg-gray-100">
                  <div className="p-3 rounded-full mr-4 text-blue-600 bg-white">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Email Address
                    </h4>
                    <p className="text-sm text-gray-600 break-all">
                      {lawyer?.email || "Email not provided"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="font-medium text-gray-800 mb-2">Availability</h4>
                <p className="text-sm text-gray-600">
                  Monday - Friday: 9:00 AM - 5:00 PM
                  <br />
                  Weekend appointments available upon request
                </p>
              </div>
            </div> */}

            <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Location Information
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Practice Location:</span> {lawyer?.city || "Not specified"}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Court Jurisdiction:</span> {lawyer?.practiceArea || "Not specified"}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Contact Number:</span> {lawyer?.phone || "Not provided"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicalLawyerProfile;