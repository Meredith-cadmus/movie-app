import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white min-h-screen px-6 lg:px-20 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">About Us</h1>
        <p className="text-gray-400 text-lg lg:text-xl">
          Discover more about who we are and our passion for movies!
        </p>
      </div>

      {/* Our Mission */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center lg:text-left">
          Our Mission
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          At <span className="font-bold text-yellow-500">P Movie Webpage</span>,
          we aim to bring the magic of cinema to everyone. Whether you're
          searching for the latest blockbusters, hidden indie gems, or timeless
          classics, our website is your ultimate destination. Our goal is to
          create a community of movie lovers who share their passion for films!
        </p>
      </section>

      {/* Meet the Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center lg:text-left">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-400">Founder & CEO</p>
          </div>
          {/* Add more team members */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-400">Creative Director</p>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Alex Johnson</h3>
            <p className="text-gray-400">Lead Developer</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-center lg:text-left">
          Contact Us
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Have questions or suggestions? We'd love to hear from you! Reach out
          to us through our social media channels or via email.
        </p>
        <div className="flex justify-center lg:justify-start space-x-4">
          <a
            href="#"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-full transition"
          >
            Facebook
          </a>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-full transition"
          >
            Twitter
          </a>
          <a
            href="mailto:info@movieworld.com"
            className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-full transition"
          >
            Email Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
