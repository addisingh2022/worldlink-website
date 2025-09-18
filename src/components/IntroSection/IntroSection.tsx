"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  FaStethoscope,
  FaKeyboard,
  FaTruck,
  FaShieldAlt,
  FaUserTie,
  FaTimes,
} from "react-icons/fa";

const galleryImages = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
  "/images/gallery7.jpg",
  "/images/gallery8.jpg",
];

const IntroSection = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
            Worldlink Technician
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Delhi NCR Trusted Laptop Care Brand
          </h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto md:mx-0 mb-6"></div>

          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            <span className="font-bold text-blue-600">Worldlink Repair</span> is your one-stop 
            solution for every laptop issue. Whether your device has a{" "}
            <span className="font-semibold">broken screen, faulty keyboard, heating problem,</span> 
            or needs a complete motherboard repair — we handle it all with expertise.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed text-lg">
            We provide <span className="font-semibold">genuine spare parts</span> and use advanced 
            diagnostic tools to ensure the highest quality of service. 
            Our doorstep repair brings convenience right to your home or office.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed text-lg">
            From <span className="font-semibold">quick battery & keyboard replacements</span>{" "}
            to <span className="font-semibold">data recovery and software solutions</span>, 
            we cover a wide range of services designed to keep your laptop running smoothly.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            With years of experience and{" "}
            <span className="font-semibold">professional technicians,</span> 
            we deliver reliable, affordable, and same-day repairs across Delhi NCR. 
            Your laptop’s health is our priority.
          </p>

          {/* Features List */}
          <ul className="space-y-3 text-gray-700 text-base md:text-lg">
            <li className="flex items-center gap-3">
              <FaStethoscope className="text-blue-500" /> No Fix No Fees
            </li>
            <li className="flex items-center gap-3">
              <FaStethoscope className="text-blue-500" /> Free Diagnose & Same-Day Delivery
            </li>
            <li className="flex items-center gap-3">
              <FaKeyboard className="text-blue-500" /> Battery, Keyboard & Key Replacement
            </li>
            <li className="flex items-center gap-3">
              <FaTruck className="text-blue-500" /> Pick & Drop in Noida & Nearby Areas
            </li>
            <li className="flex items-center gap-3">
              <FaShieldAlt className="text-blue-500" /> Genuine Parts with 30 Days Warranty
            </li>
            <li className="flex items-center gap-3">
              <FaUserTie className="text-blue-500" /> Professional & Experienced Technicians
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => setShowGallery(true)}
              className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Gallery
            </button>
            <a
              href="#footer"
              className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              More About Us
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/team.jpg" 
            alt="Worldlink Team"
            width={600}
            height={400}
            className="rounded-lg transform transition duration-500 hover:scale-110"
          />
        </div>
      </div>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl overflow-auto max-w-4xl w-full max-h-[90vh] p-6 relative">
            <button
              onClick={() => setShowGallery(false)}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
            >
              <FaTimes size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-48"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IntroSection;