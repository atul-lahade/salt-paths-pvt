import logoImg from "../assets/img/salt-paths-logo.png";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-tl from-blue-200 via-purple-100 to-blue-100 shadow-lg h-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full md:ml-12">
          <a
            href="/"
            className="flex-shrink-0 flex items-center justify-center"
          >
            <img
              className="h-16 w-auto object-contain opacity-100 transition-opacity duration-300 mix-blend-multiply"
              src={logoImg}
              alt="Salt Paths Logo"
            />
          </a>
          <nav className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8">
              <li className="p-2 sm:p-3 xl:p-4">
                <a
                  href="/"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-lg font-bold">Home</span>
                </a>
              </li>
              <li className="p-2 sm:p-3 xl:p-4">
                <a
                  href="/about"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-lg font-bold">About Us</span>
                </a>
              </li>
              <li className="p-2 sm:p-3 xl:p-4">
                <a
                  href="/products"
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-lg font-bold">Products</span>
                </a>
              </li>
              <li className="p-2 sm:p-3 xl:p-4">
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-lg font-bold">Contact Us</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 h-auto"
            : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Home
          </a>
          <a
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            About Us
          </a>
          <a
            href="/products"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Products
          </a>
          <a
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
