"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function BlogList() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Understanding Lazy Loading in Next.js" },
    { id: 2, title: "Working with Dynamic Routes" },
    { id: 3, title: "Bundle Analysis in Next.js" },
  ]);

  return (
    <main className="min-h-screen p-24">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded-lg">
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-xl text-blue-500 hover:underline">
                {post.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
