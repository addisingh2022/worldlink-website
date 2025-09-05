"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {["/images/repair1.jpg", "/images/repair2.jpg", "/images/repair3.jpg"].map((src, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-[70vh] relative">
              <Image src={src} alt={`slide-${i}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
