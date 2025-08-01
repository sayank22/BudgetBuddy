import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { Toaster } from 'sonner';

import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster position="top-right" richColors closeButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/about" element={<About />} /> {/* ✅ About route */}
        <Route
          path="/dashboard"
          element={
            <SignedIn>
              <Dashboard />
            </SignedIn>
          }
        />

        <Route
          path="/add-expense"
          element={
            <SignedIn>
              <AddExpense />
            </SignedIn>
          }
        />

        <Route
          path="/profile"
          element={
            <SignedIn>
              <Profile />
            </SignedIn>
          }
        />

        <Route
          path="*"
          element={
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
