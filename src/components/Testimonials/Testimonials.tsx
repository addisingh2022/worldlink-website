"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

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
    review: `💻 Best Laptop Repair Experience in Mayur Vihar Phase 1!

Mera gaming laptop on hi nahi ho raha tha, aur mujhe bahut tension ho gayi thi. Jab maine Raj ji ko call kiya, toh woh turant aaye aur laptop check kiya. Pata chala ki power IC kharab ho gaya tha, aur market mein naya motherboard around ₹45,000 ka mil raha tha.

Lekin Raj ji ne sirf ₹4500/- mein motherboard repair kar diya! Aur free service bhi di. Pickup and drop facility bhi available thi, which made everything super convenient.

Aaj mera laptop bilkul perfect chal raha hai. I'm really happy and grateful. Unhone mujhe paise bhi bachaye aur time bhi!

Highly recommended for anyone looking for:
✅ Reliable service
✅ Affordable repairs
✅ Pickup & drop
✅ Trusted laptop technician in Mayur Vihar Phase 1
Worldlink Technician Laptop Repair Service

Thank you, Raj chaudhary ji! 🙏👏`,
    rating: 5,
  },
  {
    name: "Pawan Yadav",
    review: `I recently got my laptop screen replaced at Worldlink Technician in Mayur Vihar Phase 1, and I’m extremely satisfied with their service. The technician was knowledgeable, polite, and completed the job quickly with great care. The new screen works perfectly and the pricing was fair and transparent.

I highly recommend Worldlink Technician for anyone looking for reliable and professional laptop repair services in Mayur Vihar Phase 1.`,
    rating: 5,
  },
  {
    name: "Jyoti Mehta",
    review: `“Excellent service… repaired quickly… cost was very reasonable.” – Prabhat Nangia
“Correctly diagnosed wrong fan; replaced HDD and OS—now works better than new.” – Best Laptop Repair shop in Mayur Vihar Phase 1`,
    rating: 5,
  },
];


function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex justify-center mb-3">
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar
          key={`full-${i}`}
          size={22}
          style={{ fill: "url(#star-gradient)" }}
        />
      ))}
      {hasHalfStar && (
        <FaStarHalfAlt
          size={22}
          style={{ fill: "url(#star-gradient)" }}
        />
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <FaRegStar key={`empty-${i}`} size={22} className="text-gray-300" />
      ))}

      {/* Gradient Defs */}
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

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50" id="reviews">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Customer Reviews
        </h2>
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
              <div className="p-8 bg-white rounded-2xl shadow-lg text-center">
                {/* Review text */}
                <p className="text-gray-700 italic text-lg mb-4">“{t.review}”</p>

                {/* Stars */}
                <StarRating rating={t.rating} />

                {/* Name */}
                <h4 className="font-semibold text-gray-900">- {t.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
