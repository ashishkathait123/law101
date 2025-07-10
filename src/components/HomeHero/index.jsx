import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    switch (option) {
      case "chat":
        navigate("/chat", { state: { mode: "chat" } });
        break;
      case "call":
        navigate("/chat", { state: { mode: "call" } });
        break;
      case "appointment":
 window.open(
                        "https://law-consultancy-firms-git-law-ashish8.vercel.app/",
                        "_blank"
                      );        break;
      default:
        console.log("No route defined for:", option);
    }
  };

  return (
    <section
      className="w-full py-20 bg-cover bg-center bg-no-repeat relative mt-11"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="p-8 md:p-12 rounded-xl shadow-lg max-w-6xl mx-auto text-center backdrop-blur-md bg-cover bg-center bg-no-repeat relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            200+ Professionals Recommend LegalConnect
          </motion.h3>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Connect With Trusted Legal Experts
          </motion.p>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.button
              className="bg-gradient-to-r from-[rgb(40,62,81)] to-[rgb(72,85,99)] text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleOptionClick("chat")}
            >
              Consult Now
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {[
              { text: "Chat with Lawyer", icon: "💬", action: "chat" },
              { text: "Talk to Lawyer", icon: "📞", action: "call" },
              { text: "Legal Resources", icon: "📚", action: "resources" },
              { text: "Book Appointment", icon: "📅", action: "appointment" },
            ].map((item, index) => (
              <motion.button
                key={index}
                className="bg-gradient-to-r from-[rgb(40,62,81)] to-[rgb(72,85,99)] hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-xl p-5 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(219, 234, 254, 0.7)",
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleOptionClick(item.action)}
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl mb-3 group-hover:text-blue-600 transition-colors">
                    {item.icon}
                  </span>
                  <p className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-600 transition-colors text-lg">
                    {item.text}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
