import React from "react";
import Link from "next/link";

// Simulate fetching post data
async function getPost(id) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Define some sample posts with real titles
  const posts = {
    1: {
      id: 1,
      title: "Understanding Lazy Loading in Next.js",
      content: "Learn how to implement lazy loading for better performance...",
    },
    2: {
      id: 2,
      title: "Working with Dynamic Routes",
      content: "Explore the power of dynamic routing in Next.js...",
    },
    3: {
      id: 3,
      title: "Bundle Analysis in Next.js",
      content: "Master the art of analyzing and optimizing your bundles...",
    },
  };

  // Return the requested post or a not found message
  return (
    posts[id] || {
      id,
      title: "Post Not Found",
      content: "This post could not be found.",
    }
  );
}

const PostPage = async ({ params }) => {
  try {
    // First, await the entire params object
    const resolvedParams = await params;
    // Then access the postId property
    const post = await getPost(resolvedParams.postId);

    return (
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-gray-700">{post.content}</p>
          <div className="mt-4 text-sm text-gray-500">Post ID: {post.id}</div>
        </div>
        <Link
          href="/posts"
          className="text-blue-500 hover:underline mt-4 block float-end"
        >
          ← Back to Blog List
        </Link>
      </div>
    );
    
  } catch (error) {
    console.error("Error:", error);
    return <div>Error loading post</div>;
  }

  
};

export default PostPage;
