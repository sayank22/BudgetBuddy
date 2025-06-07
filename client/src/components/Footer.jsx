import React from "react";
import { Link } from "react-router-dom";
import { SignedOut, SignInButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-sky-700 text-white py-10 mt-12"
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
          <p className="text-sm text-gray-800">
            Your personal expense tracker that helps you budget smarter, spend wiser, and save better.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
        <h3 className="text-xl font-semibold mb-3 text-red-800">About</h3>
        <ul className="space-y-2">
          <li>
            <Link
  to="/about"
  className="relative font-bold text-red-300 transition-all duration-300 hover:text-purple-900 hover:scale-105 inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
>
  Who am I
</Link>

          </li>
          <li className="text-teal-400 font-medium">Tips:</li>
          <li>- Your Finances, Secured and Simplified.</li>
          <li>- Trustworthy Tracking. Professional Results.</li>
          <li>- Take Control. Track with Confidence.</li>
          <li>- Plan Better. Spend Smarter. Live Freer.</li>
          <li>- Stay on Track. Stay Ahead.</li>
        </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div>
  <h3 className="text-xl font-semibold mb-3 text-red-800">Contact Me</h3>
  <ul className="space-y-3">
    <li>
      <a
        href="https://github.com/sayank22/Jivaka"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-3 border rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-[1.02] hover:shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-800"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.89.58.1.79-.25.79-.56 0-.27-.01-1.01-.01-1.98-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.07-.74.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.05 1.8 2.75 1.28 3.42.98.11-.76.41-1.28.74-1.58-2.55-.29-5.24-1.27-5.24-5.65 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.19 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.22-1.49 3.18-1.18 3.18-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.39-2.69 5.35-5.26 5.63.42.37.8 1.1.8 2.21 0 1.6-.01 2.89-.01 3.29 0 .31.21.66.8.55C20.72 21.37 24 17.08 24 12c0-6.35-5.15-11.5-12-11.5z" />
        </svg>
        GitHub
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/sayan-kundu-70b5442b6/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-3 border rounded-lg transition-all duration-300 hover:bg-blue-50 hover:scale-[1.02] hover:shadow-md"
      >
        💼 LinkedIn
      </a>
    </li>
    <li>
      <a
        href="mailto:sayank10023@gmail.com"
        className="flex items-center gap-2 p-3 border rounded-lg transition-all duration-300 hover:bg-red-50 hover:scale-[1.02] hover:shadow-md"
      >
        📧 Email: sayank10023@gmail.com
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/sayankun22/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-3 border rounded-lg transition-all duration-300 hover:bg-pink-50 hover:scale-[1.02] hover:shadow-md"
      >
        📷 Instagram
      </a>
    </li>
  </ul>
</div>
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
        className="text-center text-gray-800 text-sm mt-10 px-6"
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
