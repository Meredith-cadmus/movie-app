import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white min-h-screen py-10 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-400 text-lg lg:text-xl">
          Have questions or suggestions? Reach out to us!
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-400 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-400 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-400 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-4 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
        <div className="flex justify-center gap-3">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-full transition"
          >
            Facebook
          </a>
          <a
            href="#"
            className="bg-gray-700 hover:bg-gray-400 text-white px-6 py-3 rounded-full transition"
          >
            Twitter
          </a>
          <a
            href="#"
            className="bg-pink-500 hover:bg-pink-400 text-white px-6 py-3 rounded-full transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
