import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

function Navbar() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [isSticky, setIsSticky] = useState(false);
 
  // Check authentication status when page loads
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/check-auth", {
          withCredentials: true, // Important to send cookies
        });
        
        if (res.data.authenticated || res.data.success) {
          setIsAuthenticated(true);
          
          // Try different possible locations for the user data
          if (res.data.user && res.data.user.name) {
            setUserName(res.data.user.name);
          } else if (res.data.name) {
            setUserName(res.data.name);
          } else if (res.data.username) {
            setUserName(res.data.username);
          } else if (res.data.user && res.data.user.username) {
            setUserName(res.data.user.username);
          } else {
            // If we can't find the name, set a default
            setUserName("User");
          }
        } else {
          setIsAuthenticated(false);
          setUserName('');
        }
      } catch (error) {
        console.error("Authentication check error:", error);
        setIsAuthenticated(false);
        setUserName('');
      }
    };
  
    checkAuthStatus();
  
    // Rest of the useEffect code for scroll handling
    // ...
  }, [location.pathname]);
  
  // Handle logout functionality
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/users/logout", {}, { withCredentials: true });
      setIsAuthenticated(false);
      setUserName('');
      alert("Logged out successfully!");
      navigate('/'); // Optional: redirect to home page
    } catch (error) {
      alert("Error during logout!");
    }
  };

  return (
    <nav className={`bg-white border-gray-200 dark:bg-gray-900 shadow-md ${isSticky ? 'fixed top-0 left-0 right-0 z-50 transition-transform duration-300' : ''}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="src/img/Yellow_and_Black_Illustrative_Automotive_Luxury_Car_Logo-removebg-preview.png"
            className="h-12"
            alt="Logo"
          />
          <span className="font-[cursive] self-center text-2xl font-semibold whitespace-nowrap dark:text-green-500 text-green-600">
            Classic
          </span>
        </a>

        {/* User Greeting (when authenticated) */}
        {isAuthenticated && userName && (
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold">
                {userName.charAt(0).toUpperCase()}
              </div>
              <span className="font-[cursive] text-gray-700 dark:text-gray-300">
                مرحباً، <span className="font-font-[cursive]">{userName}</span>
              </span>
            </div>
          </div>
        )}

        {/* Authentication Buttons */}
        <div className="flex md:order-3">
          {isAuthenticated ? (
            <button 
              className="font-[cursive] text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <div className="flex space-x-3">
              <Link 
                to="/login" 
                className="font-[cursive] text-green-600 hover:text-white border border-green-600 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors duration-300"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="font-[cursive] text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors duration-300"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Language Selector */}
        <div className="flex items-center md:order-2 ml-4">

          



          {/* Mobile Menu Toggle Button */}
          <button
            data-collapse-toggle="navbar-language"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-language"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        
        {/* Main Navigation */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-language"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="font-[cursive] block py-2 px-3 text-2xl text-white bg-green-600 rounded-lg md:bg-transparent md:text-green-600 md:p-0 md:dark:text-green-500 transition-colors duration-300"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cars"
                className="font-[cursive] block py-2 px-3 text-2xl md:p-0 text-gray-900 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
              >
                Cars
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="font-[cursive] block py-2 px-3 text-2xl md:p-0 text-gray-900 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-[cursive] block py-2 px-3 text-2xl md:p-0 text-gray-900 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;