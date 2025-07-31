import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white">
       {/* Optional About Section (commented out) */}
{/*       
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-[#000080]">
        <h4 className="text-xl font-bold mb-4 text-center">About LegalConnect</h4>
        <p className="text-sm text-gray-700 leading-relaxed text-center">
          LegalConnect is India's trusted online platform for verified legal consultations.
          Instantly connect with top-rated lawyers via chat or call, and get solutions to all your legal concerns.
          Whether it's criminal law, family issues, property disputes, or startup consultation—LegalConnect ensures reliable
          legal advice from the comfort of your home. Available 24/7 for every Indian in need of justice.
        </p>
      </div> */}
      {/* Top Footer Section */}
      <div className="bg-[#1c1c84] w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Company Links */}
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {/* <li><a href="#" className="hover:underline">T</a></li> */}
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/refund" className="hover:underline">Refund & Cancellation</a></li>
                <li><a href="#" className="hover:underline">Support</a></li>
              </ul>
            </div>

            {/* Important Links Links */}
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-lg font-semibold mb-4">Important Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/terms-condition" className="hover:underline">
                    Terms & Conditions 
                  </a>
                </li>
                <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/chat" className="hover:underline">Chat with lawyer</a></li>
                <li><a href="/https://law-consultancy-firms-git-low3-ashish8.vercel.app" className="hover:underline">Schedule Your Consultation</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-lg font-semibold mb-4">Our Details</h3>
              <address className="not-italic space-y-3">
                <p>
                  ...<br />
                  Dehradun
                </p>
                <a href="mailto:xxxxx@gmail.com" className="hover:underline">xxxxx@gmail.com</a><br />
<a href="tel:+919389115137" className="hover:underline">
  +91 9389115137
</a>              </address>
            </div>

            {/* Logo and Payment */}
            <div className="flex-1 min-w-[200px] flex flex-col items-center md:items-end">
              <div className="w-full max-w-[200px]">
                <img
                  src="/images/footer.jpg"
                  className="w-28 rounded-md mb-6 mx-auto md:mx-0 md:ml-auto"
                  alt="Logo"
                  loading="lazy"
                />
                
                <div className="text-sm font-light mb-6 text-center md:text-right">
                  Copyright © 2025 All Rights Reserved<br />
                  Powered By GrandeurNet.
                </div>
                
                {/* <img
                  src="/images/footer-banks.png"
                  className="w-48 mx-auto md:mx-0 md:ml-auto"
                  alt="Supported Banks"
                  loading="lazy"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

     
     
    </div>
  );
};

export default Footer;