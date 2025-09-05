import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer" 
      className="bg-black text-white py-10 px-5"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {}
        <div>
          <h2 className="text-2xl font-bold text-white">
            World<span className="text-blue-500">Link</span>
          </h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            We provide top-notch laptop repair services with expert technicians
            and premium spares, ensuring reliable doorstep service and warranty
            for your peace of mind.
          </p>

          {}
          <div className="flex space-x-4 mt-5">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaPinterestP size={20} />
            </a>
          </div>
        </div>

        {}
        <div>
          <h3 className="text-lg font-semibold text-blue-500">Call us on</h3>
          <p className="mt-2 text-xl font-bold">
            <a
              href="tel:+917301955807"
              className="hover:underline hover:text-blue-400"
            >
              +91 7301955807
            </a>
          </p>
          <p className="mt-2 text-gray-300">Working Days - Mon-Sat</p>
          <p className="text-gray-300">Working Hours - 10:00AM to 7:00PM</p>

          <h3 className="text-lg font-semibold text-blue-500 mt-4">
            Write to us
          </h3>
          <p className="text-gray-300">
            <a
              href="mailto:Worldlinktechnician@gmail.com"
              className="hover:underline hover:text-blue-400"
            >
              Worldlinktechnician@gmail.com
            </a>
          </p>
        </div>

        {}
        <div>
          <h3 className="text-lg font-semibold text-blue-500">
            Our Service Center
          </h3>
          <p className="mt-2 text-gray-300">
            Shashi Garden, Mayur Vihar Phase 1, New Delhi - 110091
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28020.121521117213!2d77.28756122661868!3d28.6143175675939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4bdc74f4cc1%3A0x97793127c94add6e!2sMayur%20Vihar%20Phase%20I%2C%20Delhi!5e0!3m2!1sen!2sin!4v1757056489080!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Worldlink Repair - All Rights Reserved.</p>
        <p className="mt-2 flex items-center justify-center gap-2 text-gray-400">
          Developed with <FaHeart className="text-red-500" /> by{" "}
          <a
            href="https://www.linkedin.com/in/sagar-chaudary-7470521b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-medium hover:underline"
          >
            Sagar Chaudary
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
