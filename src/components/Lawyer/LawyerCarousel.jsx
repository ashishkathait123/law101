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
    <div className="py-10 bg-gray-50 relative">
     

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

      <h2 className="text-3xl font-bold text-center text-[#000080] mb-8">
        Meet Our Verified Lawyers
      </h2>
 {/* Search and filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 px-4 md:px-12">
        <input
          type="text"
          placeholder="Search by name, specialization, or city..."
          className="w-full sm:w-1/2 px-4 py-2 border border-[#000080]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000080]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="w-full sm:w-1/3 px-4 py-2 border border-[#000080]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000080] text-[#000080]"
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
      <div className="relative">
        <button 
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#000080] rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-110 transition-all"
          aria-label="Scroll left"
        >
          &lt;
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
                className="min-w-[250px] bg-white border border-[#000080]/20 rounded-xl shadow-md p-4 cursor-pointer transition-all"
                onClick={() => viewProfile(lawyer)}
              >
                <div className="flex flex-col items-center">
                  {lawyer.lawyerImage ? (
                    <motion.img
                      src={`${API_BASE_URL}${lawyer.lawyerImage}`}
                      alt={lawyer.name}
                      className="w-20 h-20 rounded-full border-2 border-[#000080] object-cover mb-2"
                      whileHover={{ rotate: 5 }}
                    />
                  ) : (
                    <motion.div
                      className="w-20 h-20 rounded-full bg-[#000080]/10 text-[#000080] flex items-center justify-center font-bold text-xl mb-2"
                      whileHover={{ rotate: 5 }}
                    >
                      {(lawyer.name || 'NA')
                        .split(' ')
                        .map(w => w[0])
                        .join('')
                        .slice(0, 2)}
                    </motion.div>
                  )}
                  <h3 className="text-lg font-semibold text-[#000080] text-center">{lawyer.name}</h3>
                  <p className="text-sm text-gray-600 text-center mt-1">{lawyer.specialization}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {lawyer.experience}+ yrs • ₹{lawyer.consultation_fees || "Free"}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <button 
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#000080] rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-110 transition-all"
          aria-label="Scroll right"
        >
          &gt;
        </button>
      </div>

      {/* Auto-scroll toggle */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAutoScrolling(!isAutoScrolling)}
          className="px-4 py-2 bg-[#000080] text-white rounded-md hover:bg-[#000080]/90 transition-colors"
        >
          {isAutoScrolling ? 'Pause Auto-scroll' : 'Start Auto-scroll'}
        </button>
      </div>
    </div>
  );
};

export default LawyerCarousel;
