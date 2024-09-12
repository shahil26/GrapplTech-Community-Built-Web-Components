import React, { useState } from "react";
import videobg from "./assets/abc.mp4";
import logo from "./assets/Copy of Gold Luxury Initial Circle Logo (1).png";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen bg-cover bg-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videobg} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 z-50">
        {/* Logo */}
        <div className="text-white text-2xl font-bold animate-logo">
          <img
            src={logo}
            alt="Logo"
            className="h-20 transform scale-125 transition-transform duration-500 hover:scale-150"
          />
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <div className="md:hidden relative">
          <button
            onClick={toggleMenu}
            className={`text-white focus:outline-none transform transition-transform duration-300 absolute top-0 right-0 p-2 z-50`}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-6 text-white font-medium fixed inset-0 bg-black bg-opacity-90 p-6 md:p-0 z-40 md:z-auto transition-all duration-500 ease-in-out w-full h-full md:relative md:bg-transparent`}
        >
          <li className="text-center md:text-left">
            <a
              href="#"
              className="hover:text-yellow-300 text-2xl md:text-base transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li className="text-center md:text-left">
            <a
              href="#"
              className="hover:text-yellow-300 text-2xl md:text-base transition-colors duration-300"
            >
              Shop
            </a>
          </li>
          <li className="text-center md:text-left">
            <a
              href="#"
              className="hover:text-yellow-300 text-2xl md:text-base transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li className="text-center md:text-left">
            <a
              href="#"
              className="hover:text-yellow-300 text-2xl md:text-base transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-4 animate-title">
          Discover Your Perfect Style
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl animate-text">
          Trendy outfits and accessories to elevate your wardrobe. Shop now and
          embrace fashion like never before.
        </p>
        <a
          href="#shop"
          className="bg-yellow-400 text-black font-semibold py-3 px-8 rounded-lg hover:bg-yellow-300 transition transform hover:scale-105 duration-300"
        >
          Shop Now
        </a>
      </div>

      {/* Tailwind CSS Animations */}
      <style jsx>{`
        @keyframes logoAnimation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-logo:hover {
          animation: logoAnimation 2s infinite;
        }

        .animate-title {
          animation: fadeInUp 1s ease-out;
        }

        .animate-text {
          animation: fadeInUp 1.5s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
