// import React from "react";

// const RefundCancellation = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6 mt-32 bg-white shadow-lg rounded-lg">
//       <h1 className="text-3xl font-bold text-blue-800 mb-4">Refund & Cancellation Policy</h1>
      
//       <p className="text-gray-700 mb-6">
//         At Lawyers10on10, we provide instant live legal consultations with the lawyer you choose from our platform. 
//         Our Refund Policy is designed to be clear, fair, and transparent for both clients and lawyers.
//       </p>

//       <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">1. No Refund After Service Delivery</h2>
//       <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
//         <li>Once the live consultation has started, no refund will be provided.</li>
//         <li>Since the service is delivered instantly, it is considered fully rendered once the lawyer joins the consultation.</li>
//         <li>No cancellation is possible after the call is connected to the lawyer.</li>
//       </ul>

//       <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">2. Refund Eligibility</h2>
//       <p className="text-gray-700 mb-2">Refunds will only be issued in the following situations:</p>
//       <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
//         <li>100% refund if call is not connected and cancellation is done before the call connects.</li>
//         <li>Payment was successful, but no lawyer was connected within 15 minutes due to a technical issue from our side.</li>
//         <li>The selected lawyer was unavailable and no alternative lawyer could be arranged.</li>
//         <li>You were charged more than once for the same consultation.</li>
//         <li>If a lawyer fails to attend the scheduled session.</li>
//         <li>If there is a technical issue on our end that prevents the consultation.</li>
//       </ul>

//       <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">3. Cancellation Policy</h2>
//       <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
//         <li>Consultations can be canceled before the call is connected to the lawyer.</li>
//         <li>No cancellation charges will apply if canceled before connection.</li>
//       </ul>

//       <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">4. Refund Process & Timeline</h2>
//       <p className="text-gray-700 mb-2">If your case is eligible for a refund:</p>
//       <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
//         <li>Email us at support@lawyers10on10.com</li>
//         <li>Include your transaction ID, payment proof, and reason for the refund request.</li>
//         <li>Once approved, our team will initiate the refund within 1-2 business days.</li>
//       </ol>

//       <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">5. Contact Us</h2>
//       <p className="text-gray-700">
//         For any refund-related queries, contact us at{" "}
//         <span className="text-blue-600 font-medium">support@lawyers10on10.com</span>
//       </p>
//     </div>
//   );
// };

// export default RefundCancellation;


import React from "react";

const RefundCancellation = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-32 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Refund Policy</h1>
      
      <p className="text-gray-700 mb-6">
        At Lawyers10on10, we provide instant live legal consultations with the lawyer you choose from our platform. As soon as payment is made, you are connected directly with the selected lawyer for a real-time consultation.
      </p>

      <p className="text-gray-700 mb-6">
        Because the service is delivered immediately after payment, our Refund Policy is designed to be clear, fair, and transparent for both clients and lawyers.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">1. No Refund After Service Delivery</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 pl-5">
        <li>Once the live consultation has started, no refund will be provided.</li>
        <li>Since the service is delivered instantly, it is considered fully rendered once the lawyer joins the consultation.</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">2. Eligible Refund Situations</h2>
      <p className="text-gray-700 mb-2">Refunds will only be issued in the following situations:</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 pl-5">
        <li>Payment was successful, but no lawyer was connected within 15 minutes due to a technical issue from our side.</li>
        <li>The selected lawyer was unavailable and no alternative lawyer could be arranged.</li>
        <li>You were charged more than once for the same consultation.</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">3. Refund Process & Timeline</h2>
      <p className="text-gray-700 mb-2">If your case is eligible for a refund:</p>
      <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6 pl-5">
        <li>Email us at support@lawyers10on10.com.</li>
        <li>Include your transaction ID, payment proof, and reason for the refund request.</li>
        <li>Once approved, our team will initiate the refund within 1-2 days and the amount will reflect in your account based on your bank or payment provider's processing time.</li>
      </ol>

      <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">4. Contact Us</h2>
      <p className="text-gray-700">
        For any refund-related queries, contact us at <span className="text-blue-600">support@lawyers10on10.com</span>
      </p>
    </div>
  );
};

export default RefundCancellation;