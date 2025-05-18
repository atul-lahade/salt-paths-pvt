import logoImg from "../assets/img/salt-paths-logo.png";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

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
                  <span className="text-lg font-semibold">Home</span>
                </a>
              </li>
              <li className="p-2 sm:p-3 xl:p-4">
                <a
                  href="/about"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold">About Us</span>
                </a>
              </li>
              <li className="p-2 sm:p-3 xl:p-4 relative">
                <div
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                >
                  <a href="/products" className="text-lg font-semibold">
                    Products
                  </a>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div
                  ref={dropdownRef}
                  className={`${
                    isDropdownOpen ? "block" : "hidden"
                  } absolute bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44`}
                >
                  <ul className="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a
                        href="/products/frozen-food"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 font-semibold"
                      >
                        Frozen Food
                      </a>
                    </li>
                    <li>
                      <a
                        href="/products/handicrafts"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 font-semibold"
                      >
                        Handicrafts
                      </a>
                    </li>
                    <li>
                      <a
                        href="/products/home-decor"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 font-semibold"
                      >
                        Home Décor
                      </a>
                    </li>
                    <li>
                      <a
                        href="/products/miscellaneous"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 font-semibold"
                      >
                        Miscellaneous
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="p-2 sm:p-3 xl:p-4">
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold">Contact Us</span>
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
            className="block px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-b border-gray-200"
          >
            Home
          </a>
          <a
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-b border-gray-200"
          >
            About Us
          </a>
          <div className="relative">
            <button
              ref={buttonRef}
              id="dropdownNavbarLink"
              className="w-full text-left block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-b border-gray-200"
            >
              <div className="flex items-center gap-1">
                <a href="/products">Products</a>
                <svg
                  className="w-4 h-4 cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
            <div
              ref={dropdownRef}
              className={`${
                isDropdownOpen ? "block" : "hidden"
              } bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow w-full`}
            >
              <ul className="py-1" aria-labelledby="dropdownLargeButton">
                <li>
                  <a
                    href="/products/frozen-food"
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 "
                  >
                    Frozen Food
                  </a>
                </li>
                <li>
                  <a
                    href="/products/handicrafts"
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Handicrafts
                  </a>
                </li>
                <li>
                  <a
                    href="/products/home-decor"
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Home Décor
                  </a>
                </li>
                <li>
                  <a
                    href="/products/miscellaneous"
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Miscellaneous
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
