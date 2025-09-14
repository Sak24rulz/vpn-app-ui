import React, { useState } from "react";
import Navbar from "./components/Navbar";
import VPNCard from "./components/VPNCard";

export default function App() {
  const [connected, setConnected] = useState(false);
  const [server, setServer] = useState("USA - New York");

  const toggleVPN = () => {
    setConnected(!connected);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="flex flex-col items-center mt-12">
        <VPNCard connected={connected} server={server} onToggle={toggleVPN} />
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Available Servers</h2>
          <select
            className="bg-gray-800 px-4 py-2 rounded-md"
            value={server}
            onChange={(e) => setServer(e.target.value)}
          >
            <option>USA - New York</option>
            <option>Germany - Berlin</option>
            <option>Japan - Tokyo</option>
            <option>India - Mumbai</option>
          </select>
        </div>
      </div>
    </div>
  );
}
