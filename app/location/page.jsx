// "use client";

// import { faqs, locationProductCardData } from "@/components/static/data";
// import React from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { useState } from "react";

// const page = ({ heading, heading2 }) => {
//   const [openFaq, setOpenFaq] = useState(null);

//   const toggleFaq = (idx) => {
//     setOpenFaq(openFaq === idx ? null : idx);
//   };

//   return (
//     <div className="">
//       <img
//         src="/home/hero1.webp"
//         alt="banner of bar"
//         className="w-full h-auto md:h-[40vh] md:w-full"
//       />

//       <h1 className="mt-5 text-2xl px-2 font-bold text-center md:text-4xl mb-5">
//         {heading || "Bar Bending Machine Supplier in Delhi"}
//       </h1>
//       <p className="px-2 md:px-10 my-5 lg:px-20 lg:text-lg">
//         Welcome to Shree Shakti Infratech, a dependable name for Bar Bending
//         Machine Supplier in Delhi. We are a transformative maker and supplier,
//         providing brilliant solutions that change the landscape of quality,
//         efficiency, and reliability in today's construction. Experience ensures
//         you are using equipment that will not only enhance productivity, but
//         will also help you finish projects quicker, cheaper, and with
//         durability.
//       </p>
//       <p className="px-2 md:px-10 lg:px-20 lg:text-lg my-3">
//         At Shree Shakti Infratech we know good projects start with good
//         equipment. Our machines are engineered to precision and innovation,
//         considering all aspects from steel reinforcement to advanced concrete
//         solutions, to optimize contentment with modern construction builders and
//         contractors.
//       </p>

//       {/* card section that show product  */}
//       {/* <section className="px-2 grid grid-cols-1 md:grid-cols-2 md:px-14 md:gap-5 md:mt-10 lg:grid-cols-4 lg:mb-14 ">
//         {locationProductCardData?.map(
//           ({ productImage, productName, productDetailsLink },idx) => (
//             <div key={idx} className="flex rounded-2xl overflow-hidden flex-col mx-5">
//               <img
//                 src={productImage}
//                 alt={productName}
//                 className="w-[80vw] h-auto"
//               />

//               <p className="font-bold text-xl my-2">
//                {productName}
//               </p>

//               <div className="flex flex-row justify-between items-center my-5">
//                 <Link href={productDetailsLink} className="bg-cyan-800 px-2 py-1 text-white rounded-lg hover:bg-cyan-900">
//                   View Details
//                 </Link>
//                 <button className="bg-gray-800 px-2 py-1 text-white rounded-lg hover:bg-gray-900">
//                   Enquiry Now
//                 </button>
//               </div>
//             </div>
//           )
//         )}
//       </section> */}

//       {/* other heading  */}

//       <section className="my-10">
//         <h2 className="mt-5 text-2xl px-2 font-bold text-center md:text-3xl mb-5">
//           {heading2 ||
//             "Why Go with Shree Shakti Infratech – Bar Bending Machine Supplier in Delhi "}
//         </h2>

//         <p className="px-2 md:px-10 my-5 lg:px-20 lg:text-lg">
//           If you're looking for Bar Bending Machine Supplier, Shree Shakti
//           Infratech is an experienced supplier you can trust as a firm that
//           works within the construction industry and the infrastructure
//           industry. We provide reliable, high-performance machines, and with the
//           backing of exceptional service and support anywhere in Delhi and NCR.{" "}
//         </p>

//         <h3 className="mt-5 text-xl px-2 font-bold text-center md:text-3xl mb-5 lg:mt-10">
//           {heading2 || "Complete Range of Bar Bending Machines in Delhi"}
//         </h3>
//         <p className="px-2 md:px-10 my-5 lg:px-20 lg:text-lg lg:mb-10">
//           As a company that sells Bar Bending Machine Supplier in Delhi, we are
//           a trusted supplier and a full range of machine models — from small bar
//           bending machines for small job sites to heavy-duty industrial machines
//           to support larger construction projects. Matt: instead of "machines
//           designed for precision and speed; I propose real modeling that handles
//           different bar TMT bar sizes, bending capacities, precision and speed.{" "}
//         </p>

//         <h3 className="mt-5 text-xl px-2 font-bold text-center md:text-3xl mb-5 lg:mt-10">
//           {heading2 || "Superior Price and Durability"}
//         </h3>
//         <p className="px-2 md:px-10 my-5 lg:px-20 lg:text-lg lg:mb-10">
//           At Shree Shakti Infratech Delhi, each and every model is built with
//           high quality materials, undergo strict quality checks. Our bar bender
//           is built to last and experiences long-term strength to allow everyone
//           at every project site a smooth and safe experience with our built
//           products.{" "}
//         </p>

//         <h3 className="mt-5 text-xl px-2 font-bold text-center md:text-3xl mb-5 lg:mt-10">
//           {heading2 || "Best Price Range Bar Bending Machine Supplier"}
//         </h3>
//         <p className="px-2 md:px-10 my-5 lg:px-20 lg:text-lg lg:mb-10">
//           Here's the part where we sell our products: we provide Bar Bending
//           Machine Supplier at the best price point, providing high value and
//           performance without sacrificing durability. Insite of our transparency
//           and cost-effective approach, we are selected over our competition by
//           our contractors and builders.{" "}
//         </p>
//       </section>

//       {/* cta  */}

//       <div className="bg-orange-100 my-20 mx-5 px-5 py-2 flex items-center justify-between md:mx-20 lg:w-[50vw] lg:mx-auto">
//         <img src="/location/hand-shake.png" alt="" className="h-20 w-auto" />
//         <div className="hidden md:block uppercase lg:text-xl">
//           Inviting application for <br />{" "}
//           <span className="font-bold">dealer partners</span>
//         </div>
//         <button className="font-bold text-white bg-orange-400 px-5 py-2 rounded-sm">
//           Know more
//         </button>
//       </div>

//       {/* faq  */}
//       <section className="px-2 md:px-10 lg:px-20 my-10">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           Frequently Asked Questions
//         </h2>
//         <div className="space-y-3">
//           {faqs.map((f, idx) => (
//             <div key={idx} className="bg-white shadow-sm rounded-md p-4">
//               <div
//                 onClick={() => toggleFaq(idx)}
//                 className="flex justify-between items-center cursor-pointer"
//               >
//                 <h3 className="font-semibold">{f.q}</h3>
//                 {openFaq === idx ? (
//                   <ChevronUp className="w-5 h-5 text-gray-600" />
//                 ) : (
//                   <ChevronDown className="w-5 h-5 text-gray-600" />
//                 )}
//               </div>
//               <div
//                 className={`mt-3 text-sm lg:text-base transition-all duration-300 ${
//                   openFaq === idx ? "block opacity-100" : "hidden opacity-0"
//                 }`}
//               >
//                 {f.a}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default page;
