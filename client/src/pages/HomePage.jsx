import React from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white p-6 space-y-10">
      {/* Intro */}
      <p className="text-lg leading-relaxed max-w-2xl mx-auto text-center">
        Learn how to master your money — track expenses, grow savings, and stay in control of your finances.
      </p>

      <h1 className="text-4xl font-extrabold text-emerald-700 dark:text-emerald-400 text-center">
        ₹ BudgetBuddy
      </h1>
{/* Info Sections Stacked but Aligned Separately */}
<div className="flex flex-col gap-6 max-w-6xl mx-auto w-full">
  
  {/* 50-30-20 Rule (Left Aligned) */}
  <div className="flex justify-start">
    <div className="bg-emerald-50 dark:bg-emerald-900 p-5 rounded-lg border-l-4 border-emerald-400 text-gray-700 dark:text-white shadow-sm w-full md:w-1/2">
      <h2 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
        💡 The 50-30-20 Rule
      </h2>
      <ul className="list-disc pl-6 text-sm space-y-1">
        <li><strong>50%</strong> → Essentials (rent, food, bills)</li>
        <li><strong>30%</strong> → Wants (entertainment, dining out)</li>
        <li><strong>20%</strong> → Savings & Investments (emergency fund)</li>
      </ul>
    </div>
  </div>

  {/* Why Use BudgetBuddy (Right Aligned) */}
  <div className="flex justify-end">
    <div className="bg-blue-50 dark:bg-blue-900 p-5 rounded-lg border-l-4 border-blue-400 text-gray-700 dark:text-white shadow-sm w-full md:w-1/2">
      <h2 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
        ✨ Why Use BudgetBuddy?
      </h2>
      <ul className="list-disc pl-6 text-sm space-y-1">
        <li>📊 Visualize your expenses and savings</li>
        <li>🔔 Smart overspending alerts</li>
        <li>🎯 Stay aligned with your goals</li>
      </ul>
    </div>
  </div>
</div>
{/* Auth */}
      <div className="text-center mt-6">
        <p className="text-lg leading-relaxed max-w-2xl mx-auto text-center mb-4">Precision Tracking for Smarter Spending.
      </p>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition duration-300">
              Start Managing Money
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <Link
            to="/expenses"
            className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition duration-300"
          >
            Go to Your Finances
          </Link>
        </SignedIn>
      </div>
      {/* Testimonial */}
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow max-w-xl mx-auto w-full">
        <h3 className="text-lg font-semibold mb-2">🌟 What Users Say</h3>
        <blockquote className="italic text-gray-600 dark:text-gray-300">
          "BudgetBuddy helped me finally stick to a savings plan. The 50-30-20 breakdown is so helpful!"
        </blockquote>
        <p className="text-sm mt-2 text-right text-gray-500">— Priya S., Software Engineer</p>
      </div>

      {/* Video */}
      <div className="max-w-xl mx-auto w-full">
        <h3 className="text-lg font-semibold mb-2">🎥 Quick Guide to Smart Budgeting</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="rounded-lg w-full"
            src="https://www.youtube.com/embed/fd3lLkCBq9s"
            title="Smart Budgeting Guide"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Carousel */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-lg font-semibold mb-4 text-center">📌 Financial Tips</h3>
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay
          infiniteLoop
          interval={4000}
          className="rounded-lg"
        >
          {["Track Daily Spending", "Set Monthly Limits", "Review & Adjust", "Build Emergency Fund"].map((title, index) => (
            <div key={index} className="bg-gray-300 dark:bg-gray-800 p-6 rounded-lg shadow text-center">
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-gray-600 dark:text-gray-300">
                {index === 0 && "Note down every rupee you spend for a week."}
                {index === 1 && "Create caps for categories like food, travel, and fun."}
                {index === 2 && "Check your progress weekly & reallocate if needed."}
                {index === 3 && "Save for 3–6 months of expenses for emergencies."}
              </p>
            </div>
          ))}
        </Carousel>
      </div>

      
    </div>
  );
};

export default HomePage;
