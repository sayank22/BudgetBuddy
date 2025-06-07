import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-100 to-blue-200 px-6 py-16">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold text-emerald-800 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          About BudgetBuddy
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <strong>BudgetBuddy</strong> is a user-friendly personal expense tracker designed to help you take control of your finances. Whether you're saving for a goal or just trying to be more mindful of your spending, BudgetBuddy simplifies budgeting through clean design and intelligent insights.
        </motion.p>

        <motion.h2 className="text-2xl font-semibold text-emerald-700 mt-8 mb-4">
          Technologies Used
        </motion.h2>
        <ul className="text-gray-800 space-y-1 list-disc pl-6">
          <li><strong>Frontend:</strong> React, Tailwind CSS</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>Authentication:</strong> Clerk (Auth-as-a-Service)</li>
        </ul>

        <motion.h2 className="text-2xl font-semibold text-emerald-700 mt-8 mb-4">
          About the Developer
        </motion.h2>
        <motion.p className="text-gray-700">
          I'm <strong>Sayan Kundu</strong>, a Computer Science Engineering student from Netaji Subhash Engineering College. I built BudgetBuddy to make budgeting less stressful and more engaging using tech I love working with.
        </motion.p>

        <motion.h2 className="text-2xl font-semibold text-emerald-700 mt-8 mb-4">
          Key Features
        </motion.h2>
        <ul className="text-gray-800 space-y-2 list-disc pl-6">
          <li>📊 Expense tracking with category breakdowns</li>
          <li>📈 Visual insights with animated charts</li>
          <li>🎯 Budget planning using the 50-30-20 rule</li>
          <li>🔐 Secure login with Clerk</li>
          <li>📱 Fully responsive & dark mode ready</li>
        </ul>

        <p className="mt-10 text-center text-gray-600 italic">
          “Master your money, and you master your freedom.”
        </p>
      </motion.div>
    </div>
  );
};

export default About;
