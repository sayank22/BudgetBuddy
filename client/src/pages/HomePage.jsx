import React from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-400 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white p-6 space-y-10">
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
    <div className="bg-rose-300 dark:bg-emerald-900 p-5 rounded-lg border-l-4 border-rose-800 text-gray-700 dark:text-white shadow-base w-full md:w-3/4">
      <h2 className="font-bold text-emerald-800 dark:text-emerald-200 mb-2">
        💡 The 50-30-20 Rule
      </h2>
      <ul className="list-disc pl-6 text-base space-y-1 mb-3">
        <li><strong>50%</strong> → Essentials (rent, food, bills)</li>
        <li><strong>30%</strong> → Wants (entertainment, dining out)</li>
        <li><strong>20%</strong> → Savings & Investments (emergency fund)</li>
      </ul>
       <Link to="/details" className="flex justify-center text-blue-600 hover:underline">Learn more about saving and investing →</Link>
    </div>
  </div>

  {/* Why Use BudgetBuddy (Right Aligned) */}
  <div className="flex justify-end">
  <div className="bg-blue-300 dark:bg-blue-900 p-5 rounded-lg border-l-4 border-blue-800 text-gray-700 dark:text-white shadow-sm w-full md:w-3/4">
    <h2 className="font-bold text-blue-800 dark:text-blue-200 mb-4 text-lg md:text-xl">
      ✨ Why Use BudgetBuddy?
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-base">
      <div>📊 Visualize your expenses and savings</div>
      <div>🔔 Smart overspending alerts</div>
      <div>🎯 Stay aligned with your goals</div>
      <div>📅 Track daily spending habits</div>
      <div>📈 Set and stick to monthly limits</div>
      <div>🔄 Review and adjust your budget easily</div>
      <div>💼 Build a 6-month emergency fund</div>
      <div>📘 Learn smart saving and investing tips</div>
      <div>📉 Identify and reduce wasteful spending</div>
      <div>✅ Stay accountable with visual progress</div>
    </div>
  </div>
</div>
</div>
{/* Auth */}
      <div className="text-center mt-6">
        <p className="text-lg leading-relaxed max-w-2xl mx-auto text-center mb-4">Precision Tracking for Smarter Spending.
      </p>
      <h4 className="text-lg font-semibold mb-4">Get Started</h4>
                <p className="text-sm text-gray-800 mb-3">
                  Take control of your finances today.
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
      {/* Video */}
      <div className="max-w-xl mx-auto w-full">
        <h3 className="text-lg font-semibold mb-2">🎥 Quick Guide to Smart Budgeting</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="rounded-lg w-full aspect-video"
            src="https://www.youtube.com/embed/yNaN5kYTNLY"
            title="Smart Budgeting Guide"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Carousel */}
      <div className="max-w-5xl mx-auto">
  <h3 className="text-lg font-semibold mb-4 text-center">💬 What People Say About BudgetBuddy</h3>
  <Carousel
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    infiniteLoop={true}
    interval={2000}
    stopOnHover={true}  // ⏸️ Pauses when user hovers
    swipeable={true}
    emulateTouch={true}
    className="rounded-lg"
  >
    {[
      {
        name: "Aarav M.",
        feedback: "BudgetBuddy helped me finally stick to a savings plan. I’ve saved ₹10,000 in 2 months!",
      },
      {
        name: "Riya S.",
        feedback: "The alerts for overspending are a game changer. I never realized how much I spent on food before!",
      },
      {
        name: "Karan D.",
        feedback: "Thanks to BudgetBuddy, I built a 4-month emergency fund within half a year. Love the simplicity.",
      },
      {
        name: "Sneha P.",
        feedback: "Beautiful UI and practical features. I feel more in control of my money every day.",
      },
    ].map((testimonial, index) => (
      <div key={index} className="bg-yellow-100 dark:bg-yellow-800 p-6 rounded-lg shadow text-center">
        <p className="text-gray-700 dark:text-gray-200 italic mb-3">
          “{testimonial.feedback}”
        </p>
        <h4 className="text-md font-semibold text-blue-700 dark:text-blue-300">
          — {testimonial.name}
        </h4>
      </div>
    ))}
  </Carousel>
</div>      
    </div>
  );
};

export default HomePage;
