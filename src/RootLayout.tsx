import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="p-4 bg-gray-200">
        <Link to="/" className="mr-4 text-blue-500 hover:underline">
          Home
        </Link>
        <Link to="/about" className="mr-4 text-blue-500 hover:underline">
          About
        </Link>
        <Link to="/contact" className="text-blue-500 hover:underline">
          Contact
        </Link>
      </nav>

      <Outlet />

      <footer className="p-4 bg-gray-200 mt-4 text-center">
        <p>© 2025 My Business. All rights reserved.</p>
      </footer>
    </div>
  );
}
