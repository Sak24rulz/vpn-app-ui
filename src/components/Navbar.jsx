import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">VPN App</h1>
      <button className="bg-indigo-600 px-4 py-2 rounded-lg">Profile</button>
    </nav>
  );
}
