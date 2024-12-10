import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/Movie-logo.png";

const Footer = () => {
  return (
    <footer className=" bg-yellow-200 mb-10 lg:mb-0 text-black py-8">
      <div className="px-5">
        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start ">
          {/* Logo and Tagline */}
          <div>
            <img
              src={logo}
              className="h-14 mx-auto lg:mx-0"
              alt="MovieVerse Logo"
            />
            <p className="text-sm text-gray-500 mt-4">
              Your gateway to cinematic adventures. Discover, watch, and enjoy
              the best movies and TV shows.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-left lg:text-center">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col space-y-2 ">
              <a href="/" className="">
                Home
              </a>
              <a href="/about" className="">
                About
              </a>
              <a href="/contact" className="">
                Contact
              </a>
              <a href="/privacy" className="">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-left lg:text-center">
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex lg:justify-center gap-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Subscription Section */}
          <div className="text-left lg:text-center col-span-1">
            <h3 className="text-xl font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-500 mb-6">
              Stay updated with the latest movies and exclusive content.
            </p>
            <form className="flex lg:justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className=" px-4 py-2 rounded-l-md outline-none border-none text-black"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white px-2 py-2 rounded-r-md font-medium mr-10"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} MovieVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
