import React from "react";
import { Link } from "react-router-dom";
import { SignedOut, SignInButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white py-10 mt-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h4 className="text-xl font-semibold mb-4">💰 BudgetBuddy</h4>
          <p className="text-sm text-gray-300">
            Your personal expense tracker that helps you budget smarter, spend wiser, and save better.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline text-gray-300">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline text-gray-300">Contact</Link>
            </li>
            <li>
              <Link to="/expenses" className="hover:underline text-gray-300">Track Expenses</Link>
            </li>
          </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h4 className="text-lg font-semibold mb-4">Get Started</h4>
          <p className="text-sm text-gray-300 mb-3">
            Take control of your finances today.
          </p>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition duration-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </motion.div>
      </div>

      <motion.div
        className="text-center text-gray-500 text-sm mt-10 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        © {new Date().getFullYear()} BudgetBuddy · Built by Sayan Kundu · All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
