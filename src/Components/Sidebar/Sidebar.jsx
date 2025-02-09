import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-BfNap0Pe.png";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex justify-start">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 h-screen bg-gray-50 dark:bg-gray-800 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 lg:hidden"
          >
            <i className="fa-solid fa-times text-2xl"></i>
          </button>

          <Link to="/" className="flex items-center ps-2.5 mb-5">
            <img src={logo} className="w-full me-3" alt="Flowbite Logo" />
          </Link>

          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center py-2 px-6 rounded-xl dark:text-white hover:scale-105 transition-all hover:shadow-xl font-semibold text-lg shadow-orange-300 shadow-lg mb-6 bg-primary text-white"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-utensils"></i>
                <span className="ms-3">Meals</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center py-2 px-6 rounded-xl dark:text-white hover:scale-105 border-2 transition-all hover:shadow-xl font-semibold text-lg"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-utensils"></i>
                <span className="ms-3">Ingredients</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center py-2 px-6 rounded-xl dark:text-white hover:scale-105 border-2 transition-all hover:shadow-xl font-semibold text-lg"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-utensils"></i>
                <span className="ms-3">Area</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
