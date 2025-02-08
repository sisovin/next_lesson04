"use client";

import { useState } from "react";

export default function Home() {
  const [formattedDate, setFormattedDate] = useState("");

  const handleFormatDate = async () => {
    try {
      // Dynamically import moment only when needed
      const moment = (await import("moment")).default;
      const formatted = moment().format("MMMM Do YYYY, h:mm:ss a");
      setFormattedDate(formatted);
    } catch (error) {
      console.error("Error loading moment:", error);
    }
  };

  return (
    <main className="min-h-screen p-24">
      <h1>Lazy Loading Demo with Moment.js</h1>
      <button
        onClick={handleFormatDate}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Format Current Date
      </button>
      {formattedDate && <p className="mt-4">Formatted Date: {formattedDate}</p>}
    </main>
  );
}
