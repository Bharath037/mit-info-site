import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-24 px-6 md:px-20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-red-700 drop-shadow-sm">
            Get in Touch
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            We'd love to hear from you! Whether you have questions or want to connect, drop us a message.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-gray-50 p-10 rounded-3xl shadow-lg"
          onSubmit={(e) => e.preventDefault()} // placeholder, add your handler
        >
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              placeholder="Write your message..."
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              type="submit"
              className="bg-red-700 text-white px-8 py-3 rounded-full font-semibold tracking-wide shadow-lg hover:bg-red-800 active:scale-95 transition-transform duration-150"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
