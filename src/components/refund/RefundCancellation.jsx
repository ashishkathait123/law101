import React from "react";

const RefundCancellation = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-32 bg-white shadow-lg rounded-lg ">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Refund & Cancellation Policy</h1>
      
      <p className="text-gray-700 mb-4">
        At <strong>Lawyers10 on 10</strong>, we strive to provide the best legal consultation experience. However, we understand that situations may arise where a refund or cancellation is necessary.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">Refund Eligibility</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>100 percent refund if call is not connected and cancelation can be done before  call gets connected.
</li>
        <li>If a lawyer fails to attend the scheduled session.</li>
        <li>If there is a technical issue on our end that prevents the consultation.</li>
        {/* <li>Requests made within 24 hours of the missed session.</li> */}
      </ul>

      <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">Cancellation Policy</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Consultations can be canceled before the call is connected to the expert.</li>
        <li>No cancellation charges will apply if canceled within the permitted time.</li>
        <li>No Cancellation after the call is connected to the expert.</li>
      </ul>

      <p className="text-gray-700 mt-6">
        For refund or cancellation requests, please email us at <span className="text-blue-600 font-medium">support@lawyers10on10.com</span> with your booking details.
      </p>
    </div>
  );
};

export default RefundCancellation;
