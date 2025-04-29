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
                  <span className="text-lg">Home</span>
                </a>
              </li>
              <li className="p-2 sm:p-3 xl:p-4">
                <a
                  href="about"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-lg">About Us</span>
                </a>
              </li>
              <li className="p-2 sm:p-3 xl:p-4">
                <a
                  href="/products"
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-lg">Products</span>
                  <svg
                    className="h-3 opacity-30 ml-2 svg-inline--fa fa-chevron-down fa-w-14 fa-7x transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="chevron-down"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
                    ></path>
                  </svg>
                </a>
                <ul
                  id="menu"
                  className="absolute left-0 w-40 bg-white shadow-lg opacity-0 invisible group-open:opacity-100 group-open:visible transition duration-300 space-y-2"
                >
                  <li>
                    <a
                      href=""
                      className="block px-4 py-2 text-base tracking-wider text-gray-900 hover:bg-gray-200 hover:cursor-pointer hover:rounded-t-xl"
                    >
                      Frozen Food
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block px-4 py-2 text-base tracking-wider text-gray-900 hover:bg-gray-200 hover:cursor-pointer"
                    >
                      Home Décor
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block px-4 py-2 text-base tracking-wider text-gray-900 hover:bg-gray-200 hover:cursor-pointer"
                    >
                      Handicrafts
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block px-4 py-2 text-base tracking-wider text-gray-900 hover:bg-gray-200 hover:cursor-pointer"
                    >
                      Miscellaneous
                    </a>
                  </li>
                </ul>
              </li>
              <li className="p-2 sm:p-3 xl:p-4">
                <a
                  href="contact"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-lg">Contact Us</span>
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
            href="about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            About Us
          </a>
          <a
            href=""
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Products
            <svg
              className="h-3 opacity-30 ml-2 svg-inline--fa fa-chevron-down fa-w-14 fa-7x"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="chevron-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
              ></path>
            </svg>
          </a>
          <a
            href="contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
