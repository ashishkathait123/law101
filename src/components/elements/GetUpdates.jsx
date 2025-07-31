import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, FaClock, FaHandshake, FaUserTie, FaLock, 
  FaHeadset, FaChartLine, FaFileContract, FaBalanceScale, FaStar,FaCheck  
} from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { useHref } from 'react-router-dom';

const GetUpdates = () => {
    const practiceAreas = [
        { name: 'Family Law', icon: <FaBalanceScale className="text-blue-500" /> },
        { name: 'Property Disputes', icon: <FaFileContract className="text-blue-500" /> },
        { name: 'Criminal Defense', icon: <FaShieldAlt className="text-blue-500" /> },
        { name: 'Corporate Law', icon: <FaChartLine className="text-blue-500" /> },
        { name: 'Divorce Cases', icon: <FaBalanceScale className="text-blue-500" /> },
        { name: 'Cyber Crime', icon: <FaShieldAlt className="text-blue-500" /> },
        { name: 'Startup Legal', icon: <FaChartLine className="text-blue-500" /> },
        { name: 'Immigration', icon: <FaFileContract className="text-blue-500" /> },
        { name: 'Taxation', icon: <GiMoneyStack className="text-blue-500" /> },
        { name: 'Intellectual Property', icon: <FaFileContract className="text-blue-500" /> },
        { name: 'Employment Law', icon: <FaUserTie className="text-blue-500" /> },
        { name: 'Consumer Protection', icon: <FaShieldAlt className="text-blue-500" /> }
    ];

    const testimonials = [
        {
            quote: "Lawyers10 on 10 helped me resolve a complicated property dispute within weeks when others said it would take months.",
            author: "Rajesh Kumar, Delhi",
            rating: 5
        },
        {
            quote: "The lawyer I connected with provided exceptional guidance during my startup's funding round. Worth every penny!",
            author: "Priya Sharma, Bangalore",
            rating: 5
        },
        {
            quote: "At 2 AM when I needed emergency legal help, Lawyers10 on 10 was there for me. Lifesavers!",
            author: "Anil Patel, Mumbai",
            rating: 5
        }
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        India's Leading Legal Platform
                    </div>
                    <motion.h1 
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Legal Solutions at <span className="text-blue-600">Your Fingertips</span>
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Lawyers10on10 connects you with India's top-rated, verified lawyers across 25+ practice areas. 
                        Get expert legal advice instantly, anytime, anywhere.
                    </motion.p>
                    <motion.div 
                        className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <FaShieldAlt className="mr-2" />
                        Trusted by 50,000+ clients · 98% Satisfaction Rate · 24/7 Availability
                    </motion.div>
                </motion.div>

                {/* Value Proposition Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all"
                        whileHover={{ y: -5 }}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                                <FaUserTie size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Vetted Legal Experts</h3>
                        </div>
                        <p className="text-gray-700 mb-4">
                            Our rigorous 5-step verification ensures only qualified, experienced lawyers join our platform.
                        </p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                Bar Council verified credentials
                            </li>
                            <li className="flex items-start">
                                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                Minimum 4.5/5 client rating
                            </li>
                            <li className="flex items-start">
                                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                Background and experience checks
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all"
                        whileHover={{ y: -5 }}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                                <FaClock size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Instant Legal Support</h3>
                        </div>
                        <p className="text-gray-700 mb-6">
                            Connect with lawyers in under 15 minutes through multiple channels.
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {['Live Chat', 'Video Call', 'Phone Consultation', 'Document Review'].map((item, i) => (
                                <span key={i} className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all"
                        whileHover={{ y: -5 }}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                                <FaHandshake size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Transparent Pricing</h3>
                        </div>
                        <p className="text-gray-700 mb-6">
                            Know exactly what you'll pay before you begin.
                        </p>
                        <div className="space-y-4">
                            {[
                                { service: 'Basic Consultation', price: '₹499' },
                                { service: 'Document Review', price: '₹999' },
                                { service: 'Hourly Rate (Average)', price: '₹1,500-3,000' }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center">
                                    <span className="text-gray-700">{item.service}</span>
                                    <span className="font-bold text-blue-600">{item.price}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all"
                        whileHover={{ y: -5 }}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                                <FaLock size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Complete Confidentiality</h3>
                        </div>
                        <p className="text-gray-700 mb-6">
                            Your privacy is protected with military-grade encryption.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Secure</span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Encrypted</span>
                            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Private</span>
                        </div>
                    </motion.div>
                </div>

                {/* Emergency CTA Section */}
                <motion.div 
                    className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-10 rounded-3xl mb-20 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
                    <div className="flex flex-col lg:flex-row items-center relative z-10">
                        <div className="lg:w-2/3 mb-8 lg:mb-0">
                            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Facing a Legal Emergency?</h3>
                            <p className="text-lg mb-6 text-blue-100">
                                Our rapid response team specializes in urgent matters including arrests, restraining orders, and last-minute court filings.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <FaHeadset className="mr-4 text-2xl text-blue-300" />
                                    <div>
                                        <p className="font-semibold">24/7 Emergency Helpline</p>
                                        <p className="text-blue-200">1800-XXX-XXXX (Toll-free)</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FaClock className="mr-4 text-2xl text-blue-300" />
                                    <div>
                                        <p className="font-semibold">Average Response Time</p>
                                        <p className="text-blue-200">Under 10 minutes for emergencies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 flex flex-col space-y-4 w-full">
                            <motion.button 
                                className="bg-white text-blue-800 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Emergency Assistance
                            </motion.button>
                            <motion.button 
                                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Schedule Consultation
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Practice Areas Section */}
                <motion.div 
                    className="mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">25+ Legal Practice Areas</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                        {practiceAreas.map((area, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="bg-blue-100 p-2 rounded-lg">
                                        {area.icon}
                                    </div>
                                    <span className="font-medium text-gray-800">{area.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-gray-700 max-w-3xl mx-auto text-center text-lg">
                        From routine legal matters to complex litigation, our network of 1,500+ specialized attorneys covers every aspect of Indian law.
                    </p>
                </motion.div>

                {/* Testimonials Section */}
                <motion.div 
                    className="bg-white p-12 rounded-3xl mb-20 shadow-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Clients Say</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div 
                                key={index}
                                className="bg-gray-50 p-8 rounded-xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar 
                                            key={i}
                                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-700 italic text-lg mb-6">"{testimonial.quote}"</p>
                                <p className="text-blue-600 font-semibold">{testimonial.author}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Resolve Your Legal Matter?</h3>
                    <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                        Join thousands of satisfied clients who found the right legal solution through Lawyers10 on 10.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <motion.button 
                            className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Speak to a Lawyer Now
                        </motion.button>
                        <motion.button 
                            className="border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Browse Legal Experts
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GetUpdates;