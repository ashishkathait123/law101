import React from 'react';
import { FaBalanceScale, FaHandshake, FaUsers, FaChartLine, FaAward, FaGraduationCap, FaBriefcase, FaSignInAlt, FaUserCheck, FaComments, FaCreditCard } from 'react-icons/fa';
import { GiScaleMail, GiJusticeStar } from 'react-icons/gi';
import team1 from "/images/item1.jpg";
import team2 from "/images/item.jpg";
import team3 from "/images/item2.jpg";
import team from "/images/item.jpg";
import founder from "/images/item1.jpg";

const Use10on10 = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      {/* <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Law Consultancy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Delivering exceptional legal solutions with integrity, expertise, and client-focused service since 2005.
          </p>
        </div>
      </div> */}

      {/* How to Use Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">How to Use Lawyers10on10</h2>
        <div className="grid md:grid-cols-5 gap-8 text-center">
          {[
            {
              icon: <FaUsers className="text-4xl text-blue-900 mx-auto mb-4" />, title: "Visit Website", desc: "Go to Lawyers10on10.com"
            },
            {
              icon: <FaSignInAlt className="text-4xl text-blue-900 mx-auto mb-4" />, title: "Register / Login", desc: "Create an account or sign in"
            },
            {
              icon: <FaUserCheck className="text-4xl text-blue-900 mx-auto mb-4" />, title: "Choose Lawyer", desc: "Browse and select a professional"
            },
            {
              icon: <FaCreditCard className="text-4xl text-blue-900 mx-auto mb-4" />, title: "Make Payment", desc: "Secure online payment"
            },
            {
              icon: <FaComments className="text-4xl text-blue-900 mx-auto mb-4" />, title: "Consult", desc: "Chat, call, or video consult with your lawyer"
            }
          ].map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              {step.icon}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Founder Section */}
      {/* (rest of the existing content remains unchanged) */}
    </div>
  );
};

export default Use10on10;
