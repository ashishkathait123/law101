import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = "https://lawyerbackend-qrqa.onrender.com";

const LawyerCarousel = () => {
  const [lawyers, setLawyers] = useState([]);
  const [filteredLawyers, setFilteredLawyers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("all");
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const carouselRef = useRef(null);
  const scrollInterval = useRef(null);
  const navigate = useNavigate();

  // Fetch lawyer data
  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/lawapi/common/lwayerlist`);
        const data = Array.isArray(res.data.data) ? res.data.data : [];
        const experiencedLawyers = data.filter(l => l.experience >= 3);
        setLawyers(experiencedLawyers);
        setFilteredLawyers(experiencedLawyers);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLawyers();
  }, []);

  // Filter logic
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

  // Auto-scroll logic
  useEffect(() => {
    if (isAutoScrolling && lawyers.length > 0 && !isDragging) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => stopAutoScroll();
  }, [isAutoScrolling, lawyers.length, isDragging]);

  const startAutoScroll = () => {
    stopAutoScroll();
    scrollInterval.current = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft >= maxScroll - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 250, behavior: 'smooth' });
        }
      }
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  const handleMouseEnter = () => isAutoScrolling && stopAutoScroll();
  const handleMouseLeave = () => isAutoScrolling && !isDragging && startAutoScroll();
  const handleDragStart = () => {
    setIsDragging(true);
    stopAutoScroll();
  };
  const handleDragEnd = () => {
    setIsDragging(false);
    if (isAutoScrolling) startAutoScroll();
  };

  const scrollLeft = () => carouselRef.current?.scrollBy({ left: -250, behavior: 'smooth' });
  const scrollRight = () => carouselRef.current?.scrollBy({ left: 250, behavior: 'smooth' });

  const viewProfile = (lawyer) => {
    navigate('/profile', { state: { lawyer } });
  };

  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Hide scrollbars */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Attractive Heading Section */}
      <div className="text-center mb-10 px-4">
       <motion.h3
  className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-700 to-red-600"
  variants={{
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.6 }
    },
    hidden: { opacity: 0, y: 30 }
  }}
>
  Talk To{' '}
  <span className="relative inline-block">
    <span className="relative z-10 px-2 text-white bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-md shadow-md">
      BCI Registered
    </span>
    <span className="absolute inset-0 transform -skew-x-6 bg-yellow-300/60 z-0 rounded-md blur-sm animate-pulse" />
  </span>{' '}
  Legal Experts
</motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Connect with experienced, verified lawyers ready to assist you with your legal needs
        </motion.p>
      </div>

      {/* Search and filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 px-4 md:px-12 max-w-5xl mx-auto">
        <input
          type="text"
          placeholder="Search by name, specialization, or city..."
          className="w-full sm:w-1/2 px-4 py-3 border border-[#000080]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000080] shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="w-full sm:w-1/3 px-4 py-3 border border-[#000080]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000080] text-[#000080] shadow-sm"
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
        >
          <option value="all">All Specializations</option>
          {[...new Set(lawyers.map(l => l.specialization).filter(Boolean))].map((spec, i) => (
            <option key={i} value={spec}>{spec}</option>
          ))}
        </select>
      </div>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto">
        <button 
          onClick={scrollLeft}
          className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-[#000080] rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-all border border-gray-200"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          ref={carouselRef}
          className="overflow-x-auto scrollbar-hide"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="flex space-x-6 px-4 md:px-12 py-4"
            drag="x"
            dragConstraints={carouselRef}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {filteredLawyers.map((lawyer, index) => (
              <motion.div
                key={lawyer._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="min-w-[280px] bg-white border border-[#000080]/20 rounded-xl shadow-lg p-6 cursor-pointer transition-all hover:shadow-xl"
                onClick={() => viewProfile(lawyer)}
              >
                <div className="flex flex-col items-center">
                  {lawyer.lawyerImage ? (
                    <motion.img
                      src={`${API_BASE_URL}${lawyer.lawyerImage}`}
                      alt={lawyer.name}
                      className="w-24 h-24 rounded-full border-3 border-[#000080] object-cover mb-4 shadow-md"
                      whileHover={{ rotate: 5 }}
                    />
                  ) : (
                    <motion.div
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-[#000080]/10 to-[#000080]/30 text-[#000080] flex items-center justify-center font-bold text-2xl mb-4 shadow-md"
                      whileHover={{ rotate: 5 }}
                    >
                      {(lawyer.name || 'NA')
                        .split(' ')
                        .map(w => w[0])
                        .join('')
                        .slice(0, 2)}
                    </motion.div>
                  )}
                  <h3 className="text-xl font-bold text-[#000080] text-center">{lawyer.name}</h3>
                  <p className="text-sm text-gray-600 text-center mt-2 bg-[#000080]/10 px-3 py-1 rounded-full">
                    {lawyer.specialization}
                  </p>
                  <div className="flex items-center mt-3 text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {lawyer.experience}+ years
                  </div>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ₹{lawyer.consultation_fees || "Free"} consultation
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <button 
          onClick={scrollRight}
          className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-[#000080] rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-all border border-gray-200"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Auto-scroll toggle */}
      <div className="flex justify-center mt-8">
        <motion.button
          onClick={() => setIsAutoScrolling(!isAutoScrolling)}
          className="px-6 py-3 bg-gradient-to-r from-[#000080] to-blue-700 text-white rounded-lg hover:from-[#000080]/90 hover:to-blue-700/90 transition-all shadow-md flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isAutoScrolling ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Pause Auto-scroll
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Start Auto-scroll
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default LawyerCarousel;