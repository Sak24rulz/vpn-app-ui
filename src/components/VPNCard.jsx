import React from "react";

export default function VPNCard({ connected, server, onToggle }) {
  return (
    <div className="bg-gray-800 w-96 p-6 rounded-xl shadow-lg text-center">
      <h2 className="text-xl font-semibold mb-4">
        {connected ? "Connected" : "Disconnected"}
      </h2>
      <p className="mb-4">Server: {server}</p>
      <button
        onClick={onToggle}
        className={`px-6 py-3 rounded-lg text-lg font-semibold ${
          connected ? "bg-red-600" : "bg-green-600"
        }`}
      >
        {connected ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
}
