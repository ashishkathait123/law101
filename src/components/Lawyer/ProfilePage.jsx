import React from "react";
import { useLocation } from "react-router-dom";
import {
  FaBalanceScale,
  FaGavel,
  FaUniversity,
  FaGlobe,
  FaPhone,
  FaComments,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const API_BASE_URL = "https://lawyerbackend-qrqa.onrender.com";

const ProfilePage = () => {
  const { state } = useLocation();
  const { lawyer } = state || {};

  if (!lawyer) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-gray-600">
          No lawyer data found. Please return to the directory.
        </div>
      </div>
    );
  }

  // Calculate star rating (example with 4.8 rating)
  const rating = 4.8;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-6 text-white mt-14">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="relative mb-4 md:mb-0 md:mr-6">
              {lawyer.lawyerImage ? (
                <img 
                  src={`${API_BASE_URL}${lawyer.lawyerImage}`}
                  alt={lawyer.name}
                  className="h-32 w-32 rounded-full object-cover border-4 border-white"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
              ) : (
                <div className="h-32 w-32 rounded-full bg-white flex items-center justify-center text-blue-800 text-4xl font-bold uppercase border-4 border-white">
                  {(lawyer.name || "NA")
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>
              )}
              <MdVerified className="absolute bottom-0 right-0 text-blue-300 text-3xl bg-white rounded-full" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">
                    {lawyer.name}, Esq.
                  </h1>
                  <p className="text-blue-100 font-medium flex items-center">
                    <FaGavel className="mr-2" />
                    {lawyer.specialization || "Legal Practitioner"}
                  </p>
                </div>
                {/* <div className="mt-3 md:mt-0">
                  <button className="bg-white text-blue-800 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors">
                    Follow
                  </button>
                </div> */}
              </div>

              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center">
                  <FaUniversity className="mr-2" />
                  <span>{lawyer.experience || "10+"} Years Experience</span>
                </div>
                <div className="flex items-center">
                  <FaGlobe className="mr-2" />
                  <span>
                    {lawyer.languages ? lawyer.languages.join(", ") : "English"}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaBalanceScale className="mr-2" />
                  <span>{lawyer.licenseNumber || "Licensed Attorney"}</span>
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
            {/* About Section */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                  <FaBalanceScale />
                </span>
                Professional Profile
              </h2>
              <div className="bg-gray-50 p-5 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  {lawyer.about ||
                    `${lawyer.name} is a distinguished ${
                      lawyer.specialization || "legal professional"
                    } 
                  with ${
                    lawyer.experience || "extensive"
                  } years of experience practicing in ${
                      lawyer.city || "multiple jurisdictions"
                    }. 
                  Admitted to the bar in good standing, ${
                    lawyer.name.split(" ")[0]
                  } specializes in providing 
                  comprehensive legal solutions with a focus on client-centered representation.`}
                </p>
              </div>
            </section>

            {/* Education & Credentials */}
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
                      Juris Doctor (J.D.)
                    </h3>
                    <p className="text-gray-600">Harvard Law School, 2005</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Bar Admissions
                    </h3>
                    <p className="text-gray-600">
                      State Bar of California (2006)
                      <br />
                      U.S. District Court, Central District of California (2007)
                      <br />
                      U.S. Supreme Court (2010)
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Professional Memberships
                    </h3>
                    <p className="text-gray-600">
                      American Bar Association
                      <br />
                      California Lawyers Association
                      <br />
                      Los Angeles County Bar Association
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Practice Areas */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                  <FaGavel />
                </span>
                Practice Areas
              </h2>
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex flex-wrap gap-3">
                  {[
                    "Corporate Law",
                    "Litigation",
                    "Intellectual Property",
                    "Contract Law",
                    "Employment Law",
                    "Real Estate",
                    "Tax Law",
                  ].map((area, index) => (
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
            {/* Contact Card */}
           {/* import { FaComments, FaPhone } from "react-icons/fa"; */}

<div className="border border-gray-200 rounded-lg p-6 shadow-sm">
  <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Attorney</h3>

  <div className="space-y-4">
    {/* Message Button */}
    <div
      className="bg-blue-50 p-4 rounded-lg flex items-center cursor-pointer hover:bg-blue-100 transition-colors"
      onClick={() =>
        window.open("https://law-consultancy-firms-git-law-ashish8.vercel.app/", "_blank")
      }
    >
      <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-800">
        <FaComments size={20} />
      </div>
      <div>
        <h4 className="font-medium text-gray-800">Message</h4>
        <p className="text-sm text-gray-600">
          Typically responds within 1 business day
        </p>
      </div>
    </div>

    {/* Schedule Consultation Button */}
    <div
      className="bg-blue-50 p-4 rounded-lg flex items-center cursor-pointer hover:bg-blue-100 transition-colors"
      onClick={() =>
        window.open("https://law-consultancy-firms-git-law-ashish8.vercel.app/", "_blank")
      }
    >
      <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-800">
        <FaPhone size={20} />
      </div>
      <div>
        <h4 className="font-medium text-gray-800">Schedule Consultation</h4>
        <p className="text-sm text-gray-600">
          30 min • ₹{lawyer.consultation_fees || "250"}
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
</div>


            {/* Ratings */}
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Client Ratings
              </h3>

              <div className="flex items-center mb-3">
                <div className="text-3xl font-bold mr-3">{rating}</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) =>
                    i < fullStars ? (
                      <FaStar key={i} className="text-yellow-400" />
                    ) : hasHalfStar && i === fullStars ? (
                      <FaRegStar key={i} className="text-yellow-400" />
                    ) : (
                      <FaRegStar key={i} className="text-gray-300" />
                    )
                  )}
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Based on 127 client reviews
              </p>

              <button className="w-full bg-blue-50 text-blue-800 py-2 rounded-md font-medium hover:bg-blue-100 transition-colors">
                View All Reviews
              </button>
            </div>

            {/* Location */}
            {/* <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Office Location
              </h3>
              <p className="text-gray-700 mb-2">
                {lawyer.firm || `${lawyer.name}'s Law Office`}
                <br />
                123 Legal Avenue, Suite 500
                <br />
                {lawyer.city || "Los Angeles"}, CA 90012
              </p>
              <div className="h-40 bg-gray-200 rounded-md mt-3 flex items-center justify-center text-gray-500">
                Map View
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
