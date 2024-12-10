import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-10 px-6 lg:px-20 min-h-screen">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-lg lg:text-xl">
          Your privacy is important to us. Here’s how we protect it.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-6">
          We collect information you provide directly to us, such as when you
          create an account, contact us, or subscribe to our newsletter. This
          may include your name, email address, and other details you provide.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-6">
          The information we collect is used to improve our services, respond to
          your queries, and send updates about our platform, including
          promotional content if you have opted in.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Cookies and Tracking</h2>
        <p className="mb-6">
          We use cookies to enhance your experience on our site. Cookies help us
          analyze site traffic, remember your preferences, and improve site
          performance. You can adjust your browser settings to disable cookies,
          but some features may not function correctly.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          4. Sharing Your Information
        </h2>
        <p className="mb-6">
          We do not sell, rent, or share your personal information with third
          parties except to comply with legal obligations or as part of our
          service delivery, such as processing payments.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
        <p className="mb-6">
          We implement robust security measures to protect your information.
          While we strive to keep your data safe, no online service can be
          completely secure. Use our website with this understanding.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          6. Your Rights and Choices
        </h2>
        <p className="mb-6">
          You have the right to access, update, or delete your personal
          information. Contact us if you need assistance or have concerns
          regarding your data.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          7. Changes to This Privacy Policy
        </h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Changes will be
          effective when posted on this page. Please check back periodically.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle
          your data, feel free to contact us:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Email: support@yourmoviewebsite.com</li>
          <li>Phone: +1-234-567-8900</li>
          <li>Address: 123 Movie Street, Hollywood, CA</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
