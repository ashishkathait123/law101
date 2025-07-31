import React from 'react';
import { FaBalanceScale, FaHandshake, FaUsers, FaChartLine, FaAward, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { GiScaleMail, GiJusticeStar } from 'react-icons/gi';
import team1 from "/images/item1.jpg";
import team2 from "/images/item.jpg";
import team3 from "/images/item2.jpg";
import team from "/images/item.jpg";
import founder from "/images/item1.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 mt-20">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Law Consultancy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Delivering exceptional legal solutions with integrity, expertise, and client-focused service since 2005.
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-1 md:order-2">
            <img src={founder} alt="Founder" className="rounded-lg shadow-xl w-full h-auto" />
          </div>
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <GiJusticeStar className="mr-3 text-blue-600" />
              Our Founder's Vision
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">John A. Harrison, Esq.</h3>
            <p className="text-gray-600 mb-4 text-lg">
              "I founded this firm with a simple belief: legal counsel should empower clients, not intimidate them. 
              After 25 years in practice, I've seen how the right guidance can transform businesses and lives."
            </p>
            <div className="space-y-4 mt-6">
              <div className="flex items-start">
                <FaGraduationCap className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Education</h4>
                  <p className="text-gray-600">Juris Doctor, Harvard Law School (1995)</p>
                  <p className="text-gray-600">Bachelor of Arts in Political Science, Yale University (1992)</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaBriefcase className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Professional Milestones</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Partner at Harrison & Associates (1998-2005)</li>
                    <li>Admitted to the U.S. Supreme Court Bar (2001)</li>
                    <li>Recipient of the ABA's Pro Bono Publico Award (2003)</li>
                    <li>Founded Harrison Legal Group (2005)</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start">
                <FaHandshake className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Philosophy</h4>
                  <p className="text-gray-600">
                    "We measure our success by our clients' success. Every case is personal, and every 
                    client deserves our absolute best."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <GiJusticeStar className="mr-3 text-blue-600" />
              Our Story
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              Founded in 2005 by John A. Harrison, Esq., our firm began as a small practice specializing in corporate law. 
              Today, we've grown into a full-service legal consultancy with offices in three states, serving clients 
              nationwide.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              What began as a solo practice has evolved into a team of 25+ dedicated legal professionals committed to 
              providing strategic counsel to businesses and individuals alike.
            </p>
            <p className="text-gray-600 text-lg">
              Our growth has been guided by one principle: <span className="font-semibold text-blue-700">client success is our success</span>.
            </p>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
            <img src={team} alt="Our Office" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      {/* Reframed Lawyers10on10 Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">About Lawyers10on10</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
            Lawyers10on10 is India’s leading digital legal consultancy platform connecting clients to top-tier legal professionals. From individual disputes to business matters, we provide secure, transparent, and immediate access to legal advice—anytime, anywhere.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Verified Experts Across India</h3>
              <p className="text-gray-700 text-lg mb-4">
                Our network includes Bar Council–registered advocates from every region of India—urban to rural—specializing in civil, criminal, corporate, family, property, tax, and technology law.
              </p>
              <p className="text-gray-700 text-lg">
                Every lawyer undergoes a strict verification process before being approved, ensuring only credible and legally compliant professionals represent our clients.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Secure and Instant Legal Access</h3>
              <p className="text-gray-700 text-lg mb-4">
                Users can connect instantly with a lawyer via secure chat or call. Whether you're facing an urgent legal issue or need routine guidance, we ensure quick, discreet, and expert consultation.
              </p>
              <p className="text-gray-700 text-lg">
                We cater to Indian citizens, NRIs, startups, and businesses—with no jargon, no delays, and no hidden charges.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
            <ul className="text-lg text-gray-700 leading-relaxed list-disc list-inside max-w-3xl mx-auto text-left">
              <li>Verified & licensed lawyers from 29 states and UTs</li>
              <li>Multiple legal domains supported (civil, corporate, family law, and more)</li>
              <li>Instant consultations via secure chat or call</li>
              <li>Transparent pricing and fair legal practices</li>
              <li>Thousands of satisfied users across India</li>
              <li>Compliance with Bar Council regulations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              img: team1,
              name: "John A. Harrison, Esq.",
              title: "Founding Partner",
              bio: "Harvard Law graduate with 25+ years experience in corporate law and litigation."
            },
            {
              img: team2,
              name: "Sarah M. Chen, JD",
              title: "Managing Partner",
              bio: "Specializes in intellectual property and international business law."
            },
            {
              img: team3,
              name: "Robert K. Williams, LLM",
              title: "Senior Partner",
              bio: "Tax law expert and former federal prosecutor."
            }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200">
                <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.title}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-[#1c1c84] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Clients Served" },
              { number: "95%", label: "Case Success Rate" },
              { number: "25+", label: "Legal Experts" },
              { number: "18", label: "Years in Practice" }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <p className="text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Discuss Your Legal Needs?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Our team is here to provide the expert guidance you need to navigate complex legal challenges.
        </p>
        <button
          className="bg-gradient-to-r from-[#000080] to-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors"
          onClick={() => window.location.href = "https://law-consultancy-firms-git-law-ashish8.vercel.app/"}
        >
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
