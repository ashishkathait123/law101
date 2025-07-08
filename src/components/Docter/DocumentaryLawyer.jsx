import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DocumentaryLawyer = () => {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDocumentaryLawyers = async () => {
      try {
        const response = await axios.get(
          'https://lawyerbackend-qrqa.onrender.com/lawapi/common/lwayerlist'
        );
        const lawyersData = Array.isArray(response.data.data) ? response.data.data : [];

        const documentaryLawyers = lawyersData.filter(lawyer =>
          lawyer.specialization &&
          lawyer.specialization.toLowerCase().includes('documentary')
        );

        setLawyers(documentaryLawyers);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDocumentaryLawyers();
  }, []);

  const viewProfile = (lawyer) => {
    navigate('/profile', { state: { lawyer } });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Error loading documentary lawyers: {error}
      </div>
    );
  }

  if (lawyers.length === 0) {
    return (
      <div className="text-center py-20 text-lg text-gray-600 font-medium">
        ❗ No documentary lawyers found.
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mt-12 mb-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
        Documentary Law Specialists
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto text-sm sm:text-base">
        Our documentary lawyers specialize in legal paperwork, documentation, contracts, and compliance.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lawyers.map((lawyer) => (
          <motion.div
            key={lawyer._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold uppercase">
                  {(lawyer.name || 'NA')
                    .split(' ')
                    .map(word => word[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {lawyer.name || 'Unnamed'}
                  </h3>
                  <p className="text-blue-600 text-sm">
                    {lawyer.specialization || 'Specialization not listed'}
                  </p>
                  <p className="text-sm text-gray-500">
                    Experience: <span className="font-bold">{lawyer.experience || 0} years</span>
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  {lawyer.licenseNumber || 'License not available'}
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {lawyer.city || 'Location not specified'}
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <span className="text-base font-semibold text-gray-800">
                  {lawyer.consultation_fees ? `₹${lawyer.consultation_fees}` : 'Free'} consultation
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => viewProfile(lawyer)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded-lg text-sm transition"
                  >
                    View Profile
                  </button>
                  <button
                    onClick={() =>
                      window.open('https://law-consultancy-firms-git-law-ashish8.vercel.app/', '_blank')
                    }
                    className="bg-gradient-to-r from-[rgb(40,62,81)] to-[rgb(72,85,99)] text-white px-4 py-2 rounded-lg transition hover:opacity-90 text-sm"
                  >
                    Chat Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DocumentaryLawyer;
