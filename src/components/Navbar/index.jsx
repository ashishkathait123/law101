import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { setCoords } from "../../features/user";
import { useGeolocated } from "react-geolocated";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [windowScrollY, setWindowScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(null);

  const handleScroll = () => {
    setWindowScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", target: "id-home-hero" },
    { id: "features", label: "Features", target: "id-benefits-card" },
    { id: "firms", label: "Law Firms", target: "id-law-firms" },
    { id: "testimonials", label: "Testimonials", target: "id-testimonials" },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      className="fixed z-50 w-full bg-white backdrop-blur-md bg-opacity-80 lg:px-16 px-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      style={{
        boxShadow: windowScrollY > 10 ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
        borderBottom: windowScrollY > 10 ? "1px solid rgba(0, 0, 0, 0.05)" : "none"
      }}
    >
      <nav className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="cursor-pointer"
          >
            <img
              src="/images/dark-logo.png"
              className="w-40 md:w-48"
              alt="Logo"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.id}
                className="relative"
                onMouseEnter={() => setIsHovering(item.id)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <button
                  onClick={() => scrollToSection(item.target)}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 px-2 py-1 font-medium"
                >
                  {item.label}
                </button>
                {isHovering === item.id && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </div>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://law-consultancy-firms-git-law-ashish8.vercel.app/", "_blank")}
              className="bg-gradient-to-r from-[rgb(40,62,81)] to-[rgb(72,85,99)] text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-blue-200 transition-all"
            >
              Register Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="md:hidden pb-4"
            >
              <motion.ul className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <motion.li
                    key={item.id}
                    variants={mobileItemVariants}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.target)}
                      className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
                <motion.li
                  variants={mobileItemVariants}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => window.open("https://law-consultancy-firms-git-law-ashish8.vercel.app/", "_blank")}
                    className="w-full text-left px-4 py-3 rounded-lg bg-gradient-to-r from-[rgb(40,62,81)] to-[rgb(72,85,99)] text-white font-medium"
                  >
                    Register Now
                  </button>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Navbar;