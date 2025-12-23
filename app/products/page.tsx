"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

const data = [
  " ১।আজিজ সরদার -শ্রীকলা -৳৪৭৫ ",
  " ২।আবু হোসেন। আজিজ সরদার। শৃকলা -৳৫৯২৮ ",
  " ৩।রফিকুল সদ্দার। শৃকলা-৳১২০৫২ ",
  " ৪।বাবলু মাস্টার। আব্দুল কাদের। শৃঙ্খলা -৳১৬৫৭ ",
  " ৫।রুবেল কম্পিউটার। ৳-৩৪৯৩ ",
  " ৬।কমলেশ। বেলি পুকুর। ৳-৫৭০ ",
  " ৭।হেলাল হুজুর। ৳-৭৯০ ",
  "৮।মিজানুর স্যার। রজব আলী। -৳-২৬৮৪  ",
  " ৯।আইয়ুব ভাই। ৳-১৩২০ ",
  " ১০।লিটন গাজী। মালেক গাজী। -৳১৫০ ",
  "  ১১।কুদ্দুস সরদার। তমিজ উদ্দিন। ৳১৮৩০",
  "১২।শাকিলা ভাবি। ৳-১৬০৭  ",
  " ১৩।রবিউল ঢালী। নেসার ঢালী। ৳-১২৬০ ",
  " ১৪।শরিফুল হার্ডওয়ার্ক।-৳-৩৯৬ ",
  " ১৫।সাইন সরদার। আবুল.-৳১৫৬৩ ",
  " ১৬।বাবু মল্লিক। নিরদ মল্লিক ৳৮০ ",
  "১৭.আমিন সরদার। মোকসে সদ্দার।-৳-৩৫০  ",
  "১৮.মমতাজ স্যার ৳-১৯২০  ",
  "২০।হাকিম ইলেকট্রনিক। ৳-১২৪৫  ",
  "২১.সিদ্দিক ভাই ১৬১২ টাকা  ",
  " ২২.রাজ্জাক ভাই মাছ ৳-১৮৮ ",
  " ২৪.সবুর সরদার ৭০৪৮ টাকা ",
  " ২৫.ডাক্তার হাকিম ১৭০ টাকা ",
  " ২৬.শফিকুল চাচা ১৫১৩ টাকা ",
  " ২৭.আবেদার বোনাই ২৩৮৮৩ টাকা ",
  " ২৯.মাসুম চা-৳-২৯৩৪ ",
  " ৩১.ডাক্তার লেন্টু-৳-৫১৮ ",
  " ৩২.শাহাজামাল চা ৳-৩৬৮২ ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
];

export default function Page() {
  const [query, setQuery] = useState("");

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full max-w-xl mx-auto mt-20 px-4 bg-red-200 text-black shadow-2xl rounded-xl px-5 py-5 md:px-8 py-8">
      {/* Search Bar */}
      <h1 className="text-2xl text-green-600 font-bold text-center">
        Biswash Farmace
      </h1>
      <h1 className="text-bold text-2xl text-red-600 mt-2">
        All Costomer List
      </h1>
      <div className="flex items-center gap-3 bg-gray-100 rounded-full px-5 py-3 shadow-sm mt-5 ">
        <Search className="text-gray-500 p-5" size={18} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by Costomer Name"
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
