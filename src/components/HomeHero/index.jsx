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
      case "document":
        navigate("/document");
        break;
      case "appointment":
        window.open(
          "https://law-consultancy-firms-git-low3-ashish8.vercel.app/",
          "_blank"
        );
        break;
      default:
        console.log("No route defined for:", option);
    }
  };

  const optionStyles = {
    chat: {
      bgFrom: "from-pink-500",
      bgTo: "to-pink-600",
      hoverBg: "rgba(236, 72, 153, 0.1)",
      textColor: "text-pink-600",
      iconColor: "text-pink-500",
    },
    call: {
      bgFrom: "from-green-500",
      bgTo: "to-green-600",
      hoverBg: "rgba(16, 185, 129, 0.1)",
      textColor: "text-green-600",
      iconColor: "text-green-500",
    },
    document: {
      bgFrom: "from-orange-300",
      bgTo: "to-orange-400",
      hoverBg: "rgba(249, 115, 22, 0.1)",
      textColor: "text-orange-600",
      iconColor: "text-orange-500",
    },
    appointment: {
      bgFrom: "from-gray-700",
      bgTo: "to-gray-900",
      hoverBg: "rgba(0, 0, 0, 0.1)",
      textColor: "text-gray-700",
      iconColor: "text-gray-500",
    },
  };

  const options = [
    { text: "Chat with Lawyer", icon: "💬", action: "chat" },
    { text: "Talk to Lawyer", icon: "📞", action: "call" },
    { text: "Legal Documentary", icon: "📚", action: "document" },
    { text: "Hire a lawyer", icon: "📅", action: "appointment" },
  ];

  return (
    <section className="w-full py-20 relative bg-gradient-to-b from-[#0a1f44] to-white mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="p-8 md:p-12 rounded-xl shadow-lg max-w-6xl mx-auto text-center bg-white bg-opacity-80 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-xl text-gray-700 mb-10 font-medium"
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
              className="bg-gradient-to-r from-[#000080] to-blue-700 text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
            {options.map((item, index) => {
              const style = optionStyles[item.action];
              return (
                <motion.button
                  key={index}
                  className={`bg-gradient-to-r ${style.bgFrom} ${style.bgTo} text-white rounded-xl p-5 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  whileHover={{
                    y: -5,
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleOptionClick(item.action)}
                >
                  <div className="flex flex-col items-center">
                    <span className={`text-3xl mb-3 ${style.iconColor}`}>
                      {item.icon}
                    </span>
                    <p className="font-medium text-white group-hover:text-current text-lg">
                      {item.text}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
