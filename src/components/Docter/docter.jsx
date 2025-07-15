import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const API_BASE_URL = "https://lawyerbackend-qrqa.onrender.com";

const LawyerCard = () => {
  const [lawyers, setLawyers] = useState([]);
  const [filteredLawyers, setFilteredLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("all");
  const navigate = useNavigate();
  const location = useLocation();
  const interactionMode = location.state?.mode || "chat"; // "chat" or "call"

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/lawapi/common/lwayerlist`);
        const lawyersData = Array.isArray(response.data.data) ? response.data.data : [];
        const experiencedLawyers = lawyersData.filter(lawyer => lawyer.experience >= 3);
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

  const getStatusStyles = (status) => {
    switch (status?.toLowerCase()) {
      case 'online':
        return {
          textColor: 'text-green-600',
          bgColor: 'bg-green-100',
          label: 'Online',
          buttonClass: 'bg-[#000080] hover:bg-[#0f0080] text-white',
          waitTime: 'Wait ~ 5m'
        };
      case 'offline':
        return {
          textColor: 'text-gray-600',
          bgColor: 'bg-gray-100',
          label: 'Offline',
          buttonClass: 'bg-gray-300 text-gray-500 cursor-not-allowed',
          waitTime: 'Available 9am-5pm'
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

  const handleContactClick = (lawyer) => {
    const status = lawyer.status?.toLowerCase();
    if (status === 'offline' || !status) {
      alert('This lawyer is currently offline. Please try again later.');
      return;
    }
    window.open(
      'https://law-consultancy-firms-git-law-ashish8.vercel.app/',
      '_blank'
    );
  };

  const specializations = [...new Set(lawyers.map(lawyer => lawyer.specialization).filter(Boolean))];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Error loading lawyers: {error}
      </div>
    );
  }

  if (lawyers.length === 0) {
    return (
      <div className="text-center py-10 text-gray-600">
        No lawyers found with more than 3 years experience.
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto top-12">
      <h2 className="text-2xl sm:text-3xl mt-8 font-bold text-center text-purple-800 mb-6">
        Connect With Expert Lawyers
      </h2>

      {/* Search and Filter Section */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center bg-purple-50 p-4 rounded-lg">
        <div className="w-full sm:w-1/2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, specialization or city..."
              className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-2.5 text-purple-500 hover:text-purple-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </div>
        
        <div className="w-full sm:w-1/3">
          <select
            className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-purple-800"
            value={selectedSpecialization}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
          >
            <option value="all">All Specializations</option>
            {specializations.map((spec, index) => (
              <option key={index} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredLawyers.length === 0 ? (
        <div className="text-center py-10 text-gray-600">
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
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
              >
                <div className="p-4 flex">
                  {/* Left Section - Image and Rating */}
                  <div className="flex flex-col items-center mr-4">
                    <div 
                      className="relative mb-2 cursor-pointer"
                      onClick={() => viewProfile(lawyer)}
                    >
                      {lawyer.lawyerImage ? (
                        <img 
                          src={`${API_BASE_URL}${lawyer.lawyerImage}`}
                          alt={lawyer.name}
                          className="h-20 w-20 rounded-full object-cover border-2 border-purple-200 hover:border-purple-400 transition-all"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/150";
                          }}
                        />
                      ) : (
                        <div 
                          className="h-20 w-20 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl font-bold uppercase border-2 border-purple-200 hover:border-purple-400 transition-all"
                        >
                          {(lawyer.name || 'NA')
                            .split(' ')
                            .map(word => word[0])
                            .join('')
                            .slice(0, 2)}
                        </div>
                      )}
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                        <img 
                          src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/24x24/assets/images/Chat_with_astrologers/webp/tick_icon.webp" 
                          alt="Verified" 
                          className="h-5 w-5"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex text-yellow-400 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">2504 consultations</span>
                    </div>
                  </div>

                  {/* Middle Section - Details */}
                  <div className="flex-1">
                    <div 
                      className="font-semibold text-lg text-gray-800 hover:text-purple-600 cursor-pointer transition-colors"
                      onClick={() => viewProfile(lawyer)}
                    >
                      {lawyer.name}
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      {lawyer.specialization?.split(',').map((spec, i) => (
                        <span key={i}>{spec.trim()}{i < lawyer.specialization.split(',').length - 1 ? ', ' : ''}</span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      Languages: English, Hindi
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Exp: {lawyer.experience} Years
                    </div>
                    <div className="font-semibold text-purple-700">
                      ₹ {lawyer.consultation_fees || 'Free'}<span className="text-xs font-normal">/consultation</span>
                    </div>
                  </div>

                  {/* Right Section - Chat Button */}
                  <div className="flex flex-col items-end justify-between">
                    <div className={`text-xs px-2 py-1 rounded-full mb-2 ${statusStyles.textColor} ${statusStyles.bgColor}`}>
                      {statusStyles.label}
                    </div>
                    <button
                      onClick={() => handleContactClick(lawyer)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${statusStyles.buttonClass}`}
                    >
                      {interactionMode === "call" ? "Call Now" : "Chat Now"}
                    </button>
                    <div className="text-xs text-gray-500 mt-1">
                      {statusStyles.waitTime}
                    </div>
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

export default LawyerCard;