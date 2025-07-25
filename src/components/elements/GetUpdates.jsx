import React from 'react';
import { FaShieldAlt, FaClock, FaHandshake, FaUserTie, FaLock, FaHeadset, FaChartLine, FaFileContract, FaBalanceScale } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { useHref } from 'react-router-dom';

const GetUpdates = () => {
    const practiceAreas = [
        { name: 'Family Law', icon: <FaBalanceScale className="mr-2" /> },
        { name: 'Property Disputes', icon: <FaFileContract className="mr-2" /> },
        { name: 'Criminal Defense', icon: <FaShieldAlt className="mr-2" /> },
        { name: 'Corporate Law', icon: <FaChartLine className="mr-2" /> },
        { name: 'Divorce Cases', icon: <FaBalanceScale className="mr-2" /> },
        { name: 'Cyber Crime', icon: <FaShieldAlt className="mr-2" /> },
        { name: 'Startup Legal', icon: <FaChartLine className="mr-2" /> },
        { name: 'Immigration', icon: <FaFileContract className="mr-2" /> },
        { name: 'Taxation', icon: <GiMoneyStack className="mr-2" /> },
        { name: 'Intellectual Property', icon: <FaFileContract className="mr-2" /> },
        { name: 'Employment Law', icon: <FaUserTie className="mr-2" /> },
        { name: 'Consumer Protection', icon: <FaShieldAlt className="mr-2" /> }
    ];

    const testimonials = [
        {
            quote: "Lawyers10 on 10 helped me resolve a complicated property dispute within weeks when others said it would take months.",
            author: "Rajesh Kumar, Delhi"
        },
        {
            quote: "The lawyer I connected with provided exceptional guidance during my startup's funding round. Worth every penny!",
            author: "Priya Sharma, Bangalore"
        },
        {
            quote: "At 2 AM when I needed emergency legal help, Lawyers10 on 10 was there for me. Lifesavers!",
            author: "Anil Patel, Mumbai"
        }
    ];

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000080] mb-6">
                        Why Choose<span className="text-[#FF6B00]"> Lawyer10On10 </span>
                    </h1>
                    {/* <h5 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000080] mb-6">
                        Legal Solutions at Your <span className="text-[#FF6B00]">Fingertips</span>
                    </h5> */}
                    <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
                        India's premier digital legal platform connecting you with top-rated, verified lawyers across 25+ practice areas. 
                        Get expert legal advice instantly, anytime, anywhere.
                    </p>
                    <div className="inline-flex items-center bg-[#000080]/10 text-[#000080] px-6 py-3 rounded-full text-sm font-semibold">
                        <FaShieldAlt className="mr-2" />
                        Trusted by 50,000+ clients · 98% Satisfaction Rate · 24/7 Availability
                    </div>
                </div>

                {/* Value Proposition Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <div className="bg-[#F8FAFF] p-6 rounded-xl border border-[#000080]/10 hover:shadow-lg transition-all">
                        <div className="flex items-center mb-4">
                            <div className="bg-[#000080] text-white p-3 rounded-full mr-4">
                                <FaUserTie size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-[#000080]">Vetted Legal Experts</h3>
                        </div>
                        <p className="text-gray-700">
                            Our rigorous 5-step verification process ensures only qualified, experienced lawyers with minimum 5 years practice join our platform.
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                                <span className="text-[#000080] mr-2">✓</span>
                                Bar Council verified credentials
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#000080] mr-2">✓</span>
                                Minimum 4.5/5 client rating
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#000080] mr-2">✓</span>
                                Background and experience checks
                            </li>
                        </ul>
                    </div>

                    <div className="bg-[#F8FAFF] p-6 rounded-xl border border-[#000080]/10 hover:shadow-lg transition-all">
                        <div className="flex items-center mb-4">
                            <div className="bg-[#000080] text-white p-3 rounded-full mr-4">
                                <FaClock size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-[#000080]">Instant Legal Support</h3>
                        </div>
                        <p className="text-gray-700">
                            Connect with lawyers in under 15 minutes through multiple channels tailored to your needs.
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-2">
                            <span className="bg-[#000080]/5 text-[#000080] px-3 py-1 rounded-full text-xs font-medium">Live Chat</span>
                            <span className="bg-[#000080]/5 text-[#000080] px-3 py-1 rounded-full text-xs font-medium">Video Call</span>
                            <span className="bg-[#000080]/5 text-[#000080] px-3 py-1 rounded-full text-xs font-medium">Phone Consultation</span>
                            <span className="bg-[#000080]/5 text-[#000080] px-3 py-1 rounded-full text-xs font-medium">Document Review</span>
                        </div>
                    </div>

                    <div className="bg-[#F8FAFF] p-6 rounded-xl border border-[#000080]/10 hover:shadow-lg transition-all">
                        <div className="flex items-center mb-4">
                            <div className="bg-[#000080] text-white p-3 rounded-full mr-4">
                                <FaHandshake size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-[#000080]">Transparent Pricing</h3>
                        </div>
                        <p className="text-gray-700">
                            Know exactly what you'll pay before you begin with our fixed-fee services or hourly rates.
                        </p>
                        <div className="mt-4">
                            <div className="flex justify-between text-sm mb-1">
                                <span>Basic Consultation</span>
                                <span className="font-semibold">₹499</span>
                            </div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Document Review</span>
                                <span className="font-semibold">₹999</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Hourly Rate (Average)</span>
                                <span className="font-semibold">₹1,500-3,000</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#F8FAFF] p-6 rounded-xl border border-[#000080]/10 hover:shadow-lg transition-all">
                        <div className="flex items-center mb-4">
                            <div className="bg-[#000080] text-white p-3 rounded-full mr-4">
                                <FaLock size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-[#000080]">Complete Confidentiality</h3>
                        </div>
                        <p className="text-gray-700">
                            Your privacy is protected with military-grade encryption and strict attorney-client privilege.
                        </p>
                        <div className="mt-4 flex items-center text-sm">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2">Secure</span>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Encrypted</span>
                        </div>
                    </div>
                </div>

                {/* Emergency CTA Section */}
                <div className="bg-gradient-to-r from-[#000080] to-[#0066CC] text-white p-8 rounded-xl mb-16">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-2/3 mb-6 lg:mb-0">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Facing a Legal Emergency?</h3>
                            <p className="mb-4 text-lg">
                                Our rapid response team specializes in urgent matters including arrests, restraining orders, and last-minute court filings.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <FaHeadset className="mr-3 text-xl" />
                                    <div>
                                        <p className="font-semibold">24/7 Emergency Helpline</p>
                                        <p className="text-white/90">1800-XXX-XXXX (Toll-free)</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FaClock className="mr-3 text-xl" />
                                    <div>
                                        <p className="font-semibold">Average Response Time</p>
                                        <p className="text-white/90">Under 10 minutes for emergencies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 flex flex-col items-center lg:items-end">
                            <button className="bg-white text-[#000080] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors mb-4 w-full lg:w-auto">
                                Emergency Assistance
                            </button>
                            <a
        href="/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-[#b4b4be] text-[#f8f8ff] px-8 py-4 rounded-lg font-bold hover:bg-[#000080]/10 transition-colors text-center"
      >
        Schedule Consultation
      </a>
     
                        </div>
                    </div>
                </div>

                {/* Practice Areas Section */}
                <div className="mb-16">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#000080] mb-8 text-center">25+ Legal Practice Areas</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                        {practiceAreas.map((area, index) => (
                            <div key={index} className="bg-white border border-[#000080]/10 p-4 rounded-lg hover:shadow-md transition-all">
                                <div className="flex items-center text-[#000080]">
                                    {area.icon}
                                    <span className="font-medium">{area.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-700 max-w-3xl mx-auto text-center">
                        From routine legal matters to complex litigation, our network of 1,500+ specialized attorneys covers every aspect of Indian law.
                    </p>
                </div>

                {/* Testimonials Section */}
                <div className="bg-[#F8FAFF] p-8 rounded-xl mb-16">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#000080] mb-8 text-center">What Our Clients Say</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-center text-yellow-400 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                                <p className="text-[#000080] font-medium">{testimonial.author}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="text-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#000080] mb-6">Ready to Resolve Your Legal Matter?</h3>
                    <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                        Join thousands of satisfied clients who found the right legal solution through Lawyers10 on 10.
                    </p>
                   <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="https://law-consultancy-firms-git-low3-ashish8.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#000080] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#000080]/90 transition-colors text-center"
      >
        Speak to a Lawyer Now
      </a>

      <a
        href="/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-[#000080] text-[#000080] px-8 py-4 rounded-lg font-bold hover:bg-[#000080]/10 transition-colors text-center"
      >
        Browse Legal Experts
      </a>
    </div>
                </div>
            </div>
        </section>
    );
};

export default GetUpdates;