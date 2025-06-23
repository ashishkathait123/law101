import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomeHero = () => {
  const navigate = useNavigate();
  const [btnHover, setBtnHover] = useState(false);

  return (
    <motion.div 
      id="id-home-hero"
      className="min-h-[80vh] flex  flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-12 gap-10 bg-gradient-to-br from-blue-50 to-indigo-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Text Content */} 
      <motion.div 
        className="w-full lg:w-1/2 flex mt-16 flex-col items-start max-w-2xl"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Connecting Users{" "}
          </span>
          <span className="text-gray-900">with Legal Experts</span>
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Welcome to LegalUp, your premier destination for seamless legal matchmaking. 
          Find the perfect lawyer for your unique case with our simplified platform.
        </p>

        <motion.button
          className="relative overflow-hidden px-8 py-3 font-semibold rounded-lg flex items-center"
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          onClick={() => navigate("/lawyer")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={`relative z-10 transition-colors ${btnHover ? "text-white" : "text-gray-900"}`}>
            Find Your Lawyer
          </span>
          <motion.span 
            className="ml-3 relative z-10"
            animate={{ x: btnHover ? 8 : 0 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <svg width="24" height="16" viewBox="0 0 29 17" className="fill-current">
              <path d="M24.6788 9.57516C..." fill={btnHover ? "#ffffff" : "#335e9e"} />
            </svg>
          </motion.span>
          
          <motion.div 
            className="absolute inset-0 bg-blue-600 z-0 rounded-lg"
            initial={{ width: '50%', border: '2px solid #335e9e', borderRight: 'none' }}
            animate={{ 
              width: btnHover ? '100%' : '50%',
              backgroundColor: btnHover ? '#335e9e' : 'transparent',
              borderColor: btnHover ? 'transparent' : '#335e9e'
            }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>
      </motion.div>

      {/* Right Image Content */}
      <motion.div 
        className="w-full max-w-md sm:max-w-lg lg:w-1/2"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <img
          src="/images/consult-1.webp"
          alt="Legal consultation"
          className="w-full h-auto rounded-xl shadow-xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default HomeHero;