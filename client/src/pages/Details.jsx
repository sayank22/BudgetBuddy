import React from "react";
import { FaPiggyBank, FaChartLine, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const Details = () => {
  return (
    <motion.div
      className="bg-slate-400 max-w-5xl mx-auto p-6 space-y-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-300">
        💡 Smart Financial Planning with BudgetBuddy
      </h1>

      {/* Card Section Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Savings Section */}
        <motion.section
          className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl shadow-md p-6 border-l-4 border-blue-600 hover:shadow-xl transition-all"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <FaPiggyBank className="text-blue-700 text-2xl" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              💰 How to Save Effectively
            </h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            <li>Use the <strong>50/30/20 Rule</strong> to guide your spending wisely.</li>
            <li>Automate savings from every paycheck to reduce temptation.</li>
            <li>Track monthly expenses to spot unnecessary spending habits.</li>
            <li>Set clear goals like emergency funds, vacations, or gadgets.</li>
          </ul>
        </motion.section>

        {/* Investing Section */}
        <motion.section
          className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-xl shadow-md p-6 border-l-4 border-green-600 hover:shadow-xl transition-all"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <FaChartLine className="text-green-700 text-2xl" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              📈 How to Invest for the Future
            </h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            <li>Start early — compound interest favors time over amount.</li>
            <li>Begin with low-risk options like PPF, SIPs, NPS, etc.</li>
            <li>Use trusted apps like Groww, Zerodha, or ET Money.</li>
            <li>Diversify your portfolio across stocks, gold, and real estate.</li>
            <li>Know your risk profile — seek expert help if unsure.</li>
          </ul>
        </motion.section>

        {/* Bonus Tips Section */}
        <motion.section
          className="bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800 rounded-xl shadow-md p-6 border-l-4 border-yellow-600 hover:shadow-xl transition-all md:col-span-2"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <FaLightbulb className="text-yellow-700 text-2xl" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              🧠 Pro Tips for a Smarter You
            </h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            <li>Track your net worth every 3–6 months to stay motivated.</li>
            <li>Review your budget monthly and make small adjustments.</li>
            <li>Avoid hype — only invest in what you understand well.</li>
            <li>Keep learning about money — it’s your lifelong asset.</li>
          </ul>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Details;
