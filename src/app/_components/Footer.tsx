import React from "react";

const Footer = () => {
  return (
    <footer className="teko-300 bg-gray-100 dark:bg-gray-900 py-16">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src="/f1.png" className="h-8 me-3" alt="Circuit Code Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Circuit Code
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Explore
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <a href="/blogs" className="hover:underline">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="/categories" className="hover:underline">
                    Categories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Connect
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <a
                    href="https://github.com/diarifiana/"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/f1/?hl=en"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                About
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <a href="/about" className="hover:underline">
                    Our Vision
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <div className="text-center sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            © 2025{" "}
            <a href="/" className="hover:underline">
              Circuit Code
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex justify-center mt-4 sm:mt-0">
            {/* Social media icons can be added here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
