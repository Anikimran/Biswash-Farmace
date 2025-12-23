"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

const data = [
  " আজিজ সরদার,স-১। স ।৳৩০০০ ",
  "আবুল হোসেন ,স",
  "MacBook Air",
  "MacBook Pro",
  "iPad Pro",
  "Apple Watch",
  "AirPods Pro",
];

export default function Page() {
  const [query, setQuery] = useState("");

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full max-w-xl mx-auto mt-20 px-4 bg-red-200 text-black shadow-2xl rounded-xl px-5 py-5 md:px-8 py-8">
      {/* Search Bar */}
      <h1 className="text-bold text-2xl text-red-600">All Costomer List</h1>
      <div className="flex items-center gap-3 bg-gray-100 rounded-full px-5 py-3 shadow-sm mt-5 ">
        <Search className="text-gray-500 p-5" size={18} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Apple.com"
          className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="text-gray-500 hover:text-black"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Result */}
      {query && (
        <div className="mt-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
          {filteredData.length > 0 ? (
            filteredData.map((item, i) => (
              <div
                key={i}
                className="px-6 py-3 text-sm hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </div>
            ))
          ) : (
            <p className="px-6 py-4 text-sm text-gray-500">No results found</p>
          )}
        </div>
      )}
    </div>
  );
}
