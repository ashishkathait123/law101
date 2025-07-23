import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const API_BASE_URL = "https://lawyerbackend-qrqa.onrender.com";

const DocumentaryLawyer = () => {
  const [lawyers, setLawyers] = useState([]);
  const [filteredLawyers, setFilteredLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("all");
  const navigate = useNavigate();
  const location = useLocation();
  const interactionMode = location.state?.mode || "chat";

useEffect(() => {
  const fetchLawyers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/lawapi/common/lwayerlist`);
      const lawyersData = Array.isArray(response.data.data) ? response.data.data : [];
      const experiencedLawyers = lawyersData.filter(
        lawyer =>
          lawyer.experience >= 3 &&
          lawyer.practiceArea === "Documentary Drafting & Legal Documentation"
      );
      setLawyers(experiencedLawyers);
      setFilteredLawyers(experiencedLawyers);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchLawyers();
}, []);


  useEffect(() => {
    let results = lawyers;

    if (selectedSpecialization !== "all") {
      results = results.filter(lawyer =>
        lawyer.specialization?.toLowerCase().includes(selectedSpecialization.toLowerCase())
      );
    }

    if (searchTerm) {
      results = results.filter(lawyer =>
        lawyer.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lawyer.specialization?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lawyer.city?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredLawyers(results);
  }, [searchTerm, selectedSpecialization, lawyers]);

  const viewProfile = (lawyer) => {
    navigate('/profile', { state: { lawyer } });
  };

  const handleContactClick = (lawyer) => {
    const status = lawyer.status?.toLowerCase();
    if (status === 'offline' || !status) {
      alert('This lawyer is currently offline. Please try again later.');
      return;
    }
    window.open(
      'https://law-consultancy-firms-git-low3-ashish8.vercel.app/',
      '_blank'
    );
  };

  const getStatusStyles = (status) => {
    switch (status?.toLowerCase()) {
      case 'online':
        return {
          textColor: 'text-green-600',
          bgColor: 'bg-green-100',
          label: 'Online',
          buttonClass: 'bg-[#000080] hover:bg-[#1a1a99] text-white',
          waitTime: 'Wait ~ 5m'
        };
      case 'busy':
        return {
          textColor: 'text-yellow-600',
          bgColor: 'bg-yellow-100',
          label: 'Busy',
          buttonClass: 'bg-yellow-500 hover:bg-yellow-600 text-white',
          waitTime: 'Wait ~ 15m'
        };
      default:
        return {
          textColor: 'text-gray-600',
          bgColor: 'bg-gray-100',
          label: 'Offline',
          buttonClass: 'bg-gray-300 text-gray-500 cursor-not-allowed',
          waitTime: 'Available 9am-5pm'
        };
    }
  };

  const specializations = [...new Set(lawyers.map(l => l.specialization).filter(Boolean))];

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#000080]"></div>
    </div>
  );

  if (error) return (
    <div className="text-center text-red-600 py-8">Error: {error}</div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-12">
      <h2 className="text-3xl font-bold text-center text-[#000080] mb-6">
        Our Lawyers
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6 bg-white shadow-sm p-4 rounded-xl border border-[#000080]/10">
        <input
          type="text"
          placeholder="Search by name, specialization, or city..."
          className="w-full sm:w-1/2 px-4 py-2 border border-[#000080]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000080]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* <select
          className="w-full sm:w-1/3 px-4 py-2 border border-[#000080]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000080] text-[#000080]"
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
        >
          <option value="all">All Specializations</option>
          {specializations.map((spec, i) => (
            <option key={i} value={spec}>{spec}</option>
          ))}
        </select> */}
      </div>

      {filteredLawyers.length === 0 ? (
        <div className="text-center text-gray-500 py-6">
          No lawyers match your search criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLawyers.map(lawyer => {
            const statusStyles = getStatusStyles(lawyer.status);
            return (
              <motion.div
                key={lawyer._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white border border-[#000080]/20 rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-4 flex gap-4">
                  {/* Profile Image */}
                  <div className="flex flex-col items-center">
                   <div
  className="cursor-pointer"
  onClick={() => viewProfile(lawyer)}
  title="View Profile"
>
  {lawyer.lawyerImage ? (
    <img
      src={`${API_BASE_URL}${lawyer.lawyerImage}`}
      alt={lawyer.name}
      className="w-20 h-20 rounded-full border-2 border-[#000080] hover:scale-105 transition-transform"
    />
  ) : (
    <div className="w-20 h-20 rounded-full bg-[#000080]/10 text-[#000080] flex items-center justify-center font-bold text-xl hover:scale-105 transition-transform">
      {(lawyer.name || 'NA')
        .split(' ')
        .map(word => word[0])
        .join('')
        .slice(0, 2)}
    </div>
  )}
</div>

                    <div className="text-xs text-gray-500 mt-2">
                      {lawyer.experience}+ yrs
                    </div>
                  </div>

                  {/* Lawyer Info */}
                  <div className="flex-1">
                    <h3
                      className="text-lg font-semibold text-[#000080] hover:underline cursor-pointer"
                      onClick={() => viewProfile(lawyer)}
                    >
                      {lawyer.name}
                    </h3>
                    <p className="text-sm text-gray-700 mb-1">
                      {lawyer.specialization}
                    </p>
                    <p className="text-sm text-gray-600">City: {lawyer.city}</p>
                    <p className="text-sm text-gray-600">
                      ₹ {lawyer.consultation_fees || 'Free'}{" "}
                      <span className="text-xs font-normal">/consultation</span>
                    </p>
                  </div>

                  {/* Status + Button */}
                  <div className="flex flex-col items-end justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full ${statusStyles.textColor} ${statusStyles.bgColor}`}>
                      {statusStyles.label}
                    </span>
                    <button
                      onClick={() => handleContactClick(lawyer)}
                      className={`mt-2 text-sm px-3 py-1.5 rounded-md ${statusStyles.buttonClass}`}
                    >
                      {interactionMode === "call" ? "Call Now" : "Chat Now"}
                    </button>
                    <span className="text-xs text-gray-400 mt-1">
                      {statusStyles.waitTime}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DocumentaryLawyer;
