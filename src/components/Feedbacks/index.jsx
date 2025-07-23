import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { getLawyers, setQuery } from "../../features/user";
import { useNavigate } from "react-router-dom";
import use10on10 from "./hero1";
function Feedbacks() {
  let dispatch = useDispatch()
  let navigate = useNavigate();
  let { ref, inView, entry } = useInView({
    threshold: 0.6,
  });
  return (
//     <section
//  
//     </section>
 <section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
  
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#000080] mb-6">
          Verified Lawyers Across India
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          When it comes to legal consultation, we understand the importance of trust,
          transparency, and results. That’s why we bring you India’s top 10/10 rated
          legal professionals – handpicked, verified, and backed by real results.
          Whether you're facing personal legal challenges, need business consultation,
          or require professional documentation assistance – our platform connects you
          with the best lawyers from every region of India.
        </p>

        <p className="text-lg sm:text-xl text-gray-700 mt-6 leading-relaxed">
          We ensure every listed expert is fully vetted and experienced. With strong
          ratings and proven track records, our lawyers provide prompt support and
          accurate solutions for every legal concern. Your legal journey deserves the
          most trusted minds — and we’re here to help you find them with ease.
        </p>

        <p className="text-lg sm:text-xl text-gray-700 mt-6 leading-relaxed">
          No matter where you are in India, access the legal support you need —
          anytime, anywhere. Reliable. Experienced. Verified.
        </p>

        <div className="mt-8">
          <span className="inline-block text-sm font-medium text-[#000080] bg-[#000080]/10 px-4 py-2 rounded-full">
            Trusted by 200+ professionals and clients
          </span>
        </div>
      </div>
    </section>
  );
}

export default Feedbacks;
