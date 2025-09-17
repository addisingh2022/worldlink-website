"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Priyanka Chauhan",
    review: `Laptop Repair Experience – Highly Recommend Mr. Raj from Worldlink
I’m from Pocket 1, Mayur Vihar Phase 1. My office laptop suddenly stopped turning on. I took it to a local service center, and the technician told me the motherboard was dead and needed replacement, quoting around ₹25,000.
Before making a decision, I searched on Google and found a reference to a technician from Worldlink. I called Mr. Raj, and he came to check my laptop. He diagnosed the issue correctly and said it wasn’t a dead motherboard — the problem was with the controller supply.
He took my laptop for repair and returned it fully fixed, and the total cost was only ₹3,000. Now my laptop is working perfectly!
Huge thanks to Mr. Raj — I highly recommend his services to anyone facing laptop issues.`,
    rating: 5,
  },
  {
    name: "Harsh Yadav",
    review: `Best Laptop Repair Experience in Mayur Vihar Phase 1!
Mera gaming laptop on hi nahi ho raha tha, aur mujhe bahut tension ho gayi thi. Jab maine Raj ji ko call kiya, toh woh turant aaye aur laptop check kiya. Pata chala ki power IC kharab ho gaya tha.
Lekin Raj ji ne sirf ₹4500/- mein motherboard repair kar diya! Pickup and drop facility bhi available thi. Aaj mera laptop bilkul perfect chal raha hai.
Highly recommended for anyone looking for reliable service.`,
    rating: 5,
  },
  {
    name: "Pawan Yadav",
    review: `I recently got my laptop screen replaced at Worldlink Technician in Mayur Vihar Phase 1, and I’m extremely satisfied with their service. The technician was knowledgeable, polite, and completed the job quickly.`,
    rating: 5,
  },
];

// Star Rating Component
function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex justify-center mb-3">
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={`full-${i}`} size={22} style={{ fill: "url(#star-gradient)" }} />
      ))}
      {hasHalfStar && <FaStarHalfAlt size={22} style={{ fill: "url(#star-gradient)" }} />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <FaRegStar key={`empty-${i}`} size={22} className="text-gray-300" />
      ))}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// CountUp Component (trigger on viewport)
function CountUp({ end, decimals = 0, duration = 1200 }: { end: number; decimals?: number; duration?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 30);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Number(start.toFixed(decimals)));
    }, 30);

    return () => clearInterval(interval);
  }, [inView, end, decimals, duration]);

  return <div ref={ref}>{count}</div>;
}

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50" id="reviews">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-center overflow-x-auto scrollbar-hide"
        >
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.6 }}>
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-500"><CountUp end={12} />+</h3>
            <p className="text-gray-700 mt-2">Services Offered</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-500"><CountUp end={4.9} decimals={1} /> <FaStar className="inline text-yellow-400" /></h3>
            <p className="text-gray-700 mt-2">Rating on Google Maps</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-500"><CountUp end={2100} />+</h3>
            <p className="text-gray-700 mt-2">Happy Customers</p>
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          What customers say about us
        </motion.h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="p-8 bg-white rounded-2xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <p className="text-gray-700 italic text-lg mb-4">“{t.review}”</p>
                <StarRating rating={t.rating} />
                <h4 className="font-semibold text-gray-900">- {t.name}</h4>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// import { motion, useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const testimonials = [
//   {
//     name: "Priyanka Chauhan",
//     review: `Laptop Repair Experience – Highly Recommend Mr. Raj from Worldlink
// I’m from Pocket 1, Mayur Vihar Phase 1. My office laptop suddenly stopped turning on. I took it to a local service center, and the technician told me the motherboard was dead and needed replacement, quoting around ₹25,000.
// Before making a decision, I searched on Google and found a reference to a technician from Worldlink. I called Mr. Raj, and he came to check my laptop. He diagnosed the issue correctly and said it wasn’t a dead motherboard — the problem was with the controller supply.
// He took my laptop for repair and returned it fully fixed, and the total cost was only ₹3,000. Now my laptop is working perfectly!
// Huge thanks to Mr. Raj — I highly recommend his services to anyone facing laptop issues.`,
//     rating: 5,
//   },
//   {
//     name: "Harsh Yadav",
//     review: `Best Laptop Repair Experience in Mayur Vihar Phase 1!
// Mera gaming laptop on hi nahi ho raha tha, aur mujhe bahut tension ho gayi thi. Jab maine Raj ji ko call kiya, toh woh turant aaye aur laptop check kiya. Pata chala ki power IC kharab ho gaya tha.
// Lekin Raj ji ne sirf ₹4500/- mein motherboard repair kar diya! Pickup and drop facility bhi available thi. Aaj mera laptop bilkul perfect chal raha hai.
// Highly recommended for anyone looking for reliable service.`,
//     rating: 5,
//   },
//   {
//     name: "Pawan Yadav",
//     review: `I recently got my laptop screen replaced at Worldlink Technician in Mayur Vihar Phase 1, and I’m extremely satisfied with their service. The technician was knowledgeable, polite, and completed the job quickly.`,
//     rating: 5,
//   },
// ];

// // Star Rating Component
// function StarRating({ rating }: { rating: number }) {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 !== 0;
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//   return (
//     <div className="flex justify-center mb-3">
//       {Array.from({ length: fullStars }).map((_, i) => (
//         <FaStar key={`full-${i}`} size={22} style={{ fill: "url(#star-gradient)" }} />
//       ))}
//       {hasHalfStar && <FaStarHalfAlt size={22} style={{ fill: "url(#star-gradient)" }} />}
//       {Array.from({ length: emptyStars }).map((_, i) => (
//         <FaRegStar key={`empty-${i}`} size={22} className="text-gray-300" />
//       ))}
//       <svg width="0" height="0">
//         <defs>
//           <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#facc15" />
//             <stop offset="100%" stopColor="#f97316" />
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   );
// }

// // CountUp Component (trigger on viewport)
// function CountUp({ end, decimals = 0, duration = 1200 }: { end: number; decimals?: number; duration?: number }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const inView = useInView(ref, { once: false, margin: "-50px" });
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!inView) return;
//     let start = 0;
//     const increment = end / (duration / 30);
//     const interval = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         start = end;
//         clearInterval(interval);
//       }
//       setCount(Number(start.toFixed(decimals)));
//     }, 30);

//     return () => clearInterval(interval);
//   }, [inView, end, decimals, duration]);

//   return <div ref={ref}>{count}</div>;
// }

// export default function Testimonials() {
//   return (
//     <section className="py-16 bg-gray-50" id="reviews">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Top Stats */}
//         <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
//           <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.6 }}>
//             <h3 className="text-4xl font-bold text-blue-500"><CountUp end={12} />+</h3>
//             <p className="text-gray-700 mt-2">Services Offered</p>
//           </motion.div>
//           <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.2 }}>
//             <h3 className="text-4xl font-bold text-blue-500"><CountUp end={4.9} decimals={1} /> <FaStar className="inline text-yellow-400" /></h3>
//             <p className="text-gray-700 mt-2">Rating on Google Maps</p>
//           </motion.div>
//           <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.4 }}>
//             <h3 className="text-4xl font-bold text-blue-500"><CountUp end={2100} />+</h3>
//             <p className="text-gray-700 mt-2">Happy Customers</p>
//           </motion.div>
//         </motion.div>

//         {/* Heading */}
//         <motion.h2
//           className="text-3xl font-bold text-center mb-8 text-gray-800"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false }}
//           transition={{ duration: 0.6 }}
//         >
//           What customers say about us
//         </motion.h2>

//         {/* Swiper Carousel */}
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           autoplay={{ delay: 4000 }}
//           pagination={{ clickable: true }}
//           spaceBetween={30}
//           slidesPerView={1}
//           loop
//         >
//           {testimonials.map((t, i) => (
//             <SwiperSlide key={i}>
//               <motion.div
//                 className="p-8 bg-white rounded-2xl shadow-lg text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: false }}
//                 transition={{ duration: 0.6, delay: i * 0.2 }}
//               >
//                 <p className="text-gray-700 italic text-lg mb-4">“{t.review}”</p>
//                 <StarRating rating={t.rating} />
//                 <h4 className="font-semibold text-gray-900">- {t.name}</h4>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }