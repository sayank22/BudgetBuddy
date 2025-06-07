import React from "react";
import { useUser, SignOutButton } from "@clerk/clerk-react";

const Profile = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
        <img
          src={user.imageUrl}
          alt="User avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800">
          {user.fullName || "No Name"}
        </h2>
        <p className="text-gray-600 mb-4">{user.primaryEmailAddress?.emailAddress}</p>

        <SignOutButton>
          <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
            Sign Out
          </button>
        </SignOutButton>
      </div>
    </div>
  );
};

export default Profile;
