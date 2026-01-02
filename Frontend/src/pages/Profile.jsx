import React from "react";
import { useNavigate } from "react-router-dom";
import { useappcontaxt } from "../context/Appcontext";

const Profile = () => {
  const { isloggedin, user, logout } = useappcontaxt();
  const navigate = useNavigate();

  // 🔐 Protect route
  if (!isloggedin || !user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          My Profile
        </h2>

        {/* USER INFO */}
        <div className="space-y-4 text-gray-700">
          <div className="flex justify-between">
            <span className="font-semibold">Name:</span>
            <span>{user.name}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Email:</span>
            <span>{user.email}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Role:</span>
            <span className="uppercase text-green-600 font-semibold">
              {user.role}
            </span>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-8 flex flex-col gap-4">
          <button
            onClick={() => navigate(`/${user.role}/dashboard`)}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Go to Dashboard
          </button>

          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="w-full border border-red-500 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
