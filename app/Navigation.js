import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex items-center p-3 bg-gray-800 text-white sticky top-0 z-50">      
      <Link href="/" className="px-4 py-2 hover:bg-gray-700">
        Home
      </Link>
      <Link href="/about" className="px-4 py-2 hover:bg-gray-700">
        About
      </Link>
      <Link href="/posts" className="px-4 py-2 hover:bg-gray-700">
        Posts
      </Link>
      <Link href="/posts/new" className="px-4 py-2 hover:bg-gray-700">
        New Post
      </Link>
      <Link
        className="px-4 py-2 hover:bg-gray-700"
        href="/api/users" // This is the API route
        target="_blank"
        rel="noopener noreferrer"
      >
        Users
      </Link>
    </nav>
  );
};

export default Navigation;
