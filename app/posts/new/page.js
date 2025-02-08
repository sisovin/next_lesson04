"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewBlogPost() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the data to your API
    console.log("Form submitted:", formData);

    // Redirect back to posts list
    router.push("/posts");
  };

  return (
    <main className="min-h-screen p-24">
      <Link href="/posts" className="text-blue-500 hover:underline mb-4 block">
        ← Back to Blog List
      </Link>

      <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full p-2 border rounded text-black"
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="block mb-2">
            Content:
          </label>
          <textarea
            id="content"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            className="w-full p-2 border rounded h-32 text-black"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Post
        </button>
      </form>
    </main>
  );
}
