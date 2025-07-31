import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { getLawyers, setQuery } from "../../features/user";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { FiCheckCircle, FiMapPin, FiAward, FiShield } from "react-icons/fi";

function Feedbacks() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile on mount and on resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const [ref, inView] = useInView({
    threshold: isMobile ? 0.1 : 0.4, // Lower threshold for mobile
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, y: 20 }
  };

  const cardVariants = {
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    },
    hidden: { 
      opacity: 0, 
      x: (index) => (index % 2 === 0 ? -20 : 20) // Alternate direction based on index
    }
  };

  const stats = [
    { value: "200+", label: "Trusted Professionals" },
    { value: "50+", label: "Cities Covered" },
    { value: "10/10", label: "Verified Ratings" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section 
      ref={ref}
      className="relative bg-gradient-to-br from-blue-50 to-white py-12 md:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-indigo-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span 
            className="inline-block text-sm font-semibold text-[#000080] bg-blue-100 px-4 py-2 rounded-full mb-4"
            whileHover={{ scale: isMobile ? 1 : 1.05 }} // Disable hover effect on mobile
          >
            Trusted Legal Network
          </motion.span>
          
         <motion.h2
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
  India's Premier{' '}
  <span className="relative inline-block">
    <span className="relative z-10 px-2 text-white bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-md shadow-md">
      Verified Lawyers
    </span>
    <span className="absolute inset-0 transform -skew-x-6 bg-yellow-300/60 z-0 rounded-md blur-sm animate-pulse" />
  </span>
</motion.h2>

          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            variants={{
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.4, duration: 0.6 }
              },
              hidden: { opacity: 0, y: 20 }
            }}
          >
            Connecting you with top-rated, thoroughly vetted legal professionals across every region of India.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
          {[
            { icon: <FiCheckCircle className="text-[#000080] text-2xl" />, 
              title: "Rigorous Verification", 
              text: "Every lawyer undergoes comprehensive background checks, credential verification, and peer reviews before joining our platform." 
            },
            { icon: <FiAward className="text-[#000080] text-2xl" />, 
              title: "Proven Track Records", 
              text: "Our lawyers maintain exceptional success rates and client satisfaction scores, with transparent reviews from real clients." 
            },
            { icon: <FiMapPin className="text-[#000080] text-2xl" />, 
              title: "Nationwide Coverage", 
              text: "Access top legal minds in every major city and region across India, with specialists for every jurisdiction and practice area." 
            },
            { icon: <FiShield className="text-[#000080] text-2xl" />, 
              title: "Client Protection", 
              text: "Your confidentiality and rights are protected with strict privacy policies and professional conduct standards." 
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              transition={{ 
                delay: isMobile ? 0.2 + index * 0.1 : 0.6 + index * 0.2,
                duration: 0.6 
              }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg md:shadow-xl border border-blue-100/50 hover:shadow-xl md:hover:shadow-2xl transition-all"
            >
              <div className="flex items-start mb-4 md:mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[#000080] mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: isMobile ? 0.1 : 0.2 }
            }
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={variants}
              transition={{ 
                delay: isMobile ? 0.2 + index * 0.1 : 0.2 + index * 0.2,
                duration: 0.6 
              }}
              className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-md border border-blue-100 text-center hover:shadow-lg transition-all"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#000080] mb-1 md:mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            delay: isMobile ? 1.0 : 1.6,
            duration: 0.6 
          }}
          className="mt-12 md:mt-16 text-center"
        >
          <button 
            className="bg-gradient-to-r from-[#000080] to-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl hover:from-[#000080]/90 hover:to-blue-600/90 transition-all"
            onClick={() => navigate('/chat')}
          >
            Find Your Lawyer Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Feedbacks;