import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white">
      {/* Top Footer Section */}
      <div className="justify-between bg-[#1c1c84] flex flex-col text-center lg:text-left md:flex-row lg:mx-32 py-6 rounded-md text-white">
        <div className="font-normal py-2 text-sm justify-around flex flex-col lg:flex-row w-full">
          <div className="mb-6 lg:mb-0 lg:mr-16">
            <p className="font-semibold mb-4">Company</p>
            <div className="flex flex-col gap-2">
              <a href="#">Products</a>
              <a href="/about">About Us</a>
              <a href="#">Consultations</a>
              <a href="#">Support</a>
            </div>
          </div>

          <div className="mb-6 lg:mb-0 lg:mr-16">
            <p className="font-semibold mb-4">Resources</p>
            <div className="flex flex-col gap-2">
              <a href="https://grandeurnet.com/">Terms & Conditions (Powered by GrandeurNet)</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>

          <div className="mb-6 lg:mb-0 lg:mr-16">
            <p className="font-semibold mb-4">Our Details</p>
            <div className="flex flex-col gap-2">
              <p>
                Bangali Kothi <br />
                Dehradun, 248001 <br />
              </p>
              <a href="mailto:temp@gmail.com">temp@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Logo and Payment */}
        <div className="text-center lg:text-left">
          <img
            src="/images/footer-logo.png"
            className="w-28 m-auto lg:ml-0 rounded-md"
            alt="Logo"
          />
          <div className="py-6 text-sm font-light">
            Copyright © 2025 All Rights Reserved<br />
            Powered By GrandeurNet.
          </div>
          <img
            src="/images/footer-banks.png"
            className="w-48 m-auto lg:ml-0"
            alt="Supported Banks"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto text-center px-4 py-8 text-[#000080]">
        <h4 className="text-xl font-bold mb-2">About LegalConnect</h4>
        <p className="text-sm text-gray-700 leading-relaxed ">
          LegalConnect is India’s trusted online platform for verified legal consultations.
          Instantly connect with top-rated lawyers via chat or call, and get solutions to all your legal concerns.
          Whether it's criminal law, family issues, property disputes, or startup consultation—LegalConnect ensures reliable
          legal advice from the comfort of your home. Available 24/7 for every Indian in need of justice.
        </p>
      </div>
    </div>
  );
};

export default Footer;
