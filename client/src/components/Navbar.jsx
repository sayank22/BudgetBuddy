import React from "react";
import { UserButton, useUser, SignInButton, SignUpButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="bg-gray-800 text-white px-4 py-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-semibold">💰 Expense Tracker</Link>

      <div className="flex items-center space-x-4">
        {/* Always visible links */}
        <Link to="/about" className="hover:underline">About</Link>

        {/* Conditionally rendered based on auth */}
        {user ? (
          <>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <Link to="/add-expense" className="hover:underline">Add Expense</Link>
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <>
            <SignInButton mode="modal">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded">
                Login
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Sign Up
              </button>
            </SignUpButton>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
