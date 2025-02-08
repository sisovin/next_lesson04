"use client";

import { useState } from "react";

export default function Home() {
  const [formattedDate, setFormattedDate] = useState("");

  return (
    <main className="min-h-screen p-24">
      <h1>Lazy Loading Demo with Moment.js</h1>
      <button
        onClick={async () => {
          // We'll add lazy loading logic here
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Format Current Date
      </button>
      {formattedDate && <p className="mt-4">Formatted Date: {formattedDate}</p>}
    </main>
  );
}
