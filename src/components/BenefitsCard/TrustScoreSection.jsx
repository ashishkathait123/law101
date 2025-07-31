import React from 'react';

const TrustScoreSection = () => {
  return (
    <section className="trust_score py-10 bg-gradient-to-b from-blue-400 to-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-white text-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="text-4xl font-extrabold">10000+</div>
            <div className="text-lg mt-2">Total Lawyers</div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="text-4xl font-extrabold">
              1326 <span className="text-xl font-bold">Million Minutes</span>
            </div>
            <div className="text-lg mt-2">Total Chat/Call Minutes</div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="text-2xl font-extrabold">
               Clients Across India <span className="text-xl font-bold"></span>
            </div>
            {/* <div className="text-lg mt-2">Total Clients</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustScoreSection;
