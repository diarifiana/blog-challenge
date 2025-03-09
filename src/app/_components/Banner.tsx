"use client";
import React, { useState } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true); // Initial state: visible

  const handleClose = () => {
    setIsVisible(false); // Hide the banner
  };

  if (!isVisible) {
    return null; // Don't render the banner if it's hidden
  }

  return (
    <div
      id="newsletter-banner"
      className="fixed top-0 left-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
    >
      <div className="flex items-center shrink-0 w-full mx-auto sm:w-auto">
        <form className="flex flex-col items-center w-full md:flex-row">
          <label
            htmlFor="email"
            className="shrink-0 mb-2 mr-auto text-sm font-medium text-gray-500 md:mb-0 md:mr-4 dark:text-gray-400 md:m-0"
          >
            Sign up for our newsletter
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="bg-white border border-gray-300 text-gray-900 md:w-64 mb-2 md:mb-0 md:mr-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex items-center absolute top-2.5 right-2.5 md:relative md:top-auto md:right-auto">
        <button
          onClick={handleClose} // Add onClick handler
          type="button"
          className="shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
