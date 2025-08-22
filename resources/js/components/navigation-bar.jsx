import React, { useState } from "react";
import Logo from "@assets/newlogosite.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const currentPath = window.location.pathname;

    const isShowingGetStarted = currentPath !== "/booking";


    return (
        <nav className="sticky top-0 z-50 bg-white text-black shadow-md font-urbanist ">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <div className="w-50 cursor-pointer">
                    <a href="/">
                        <img src={Logo} alt="Image not found" className="hover:scale-110" />
                    </a>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 items-center font-semibold">
                    <li><a href="/" className="hover:text-green-800">Home</a></li>
                    <li><a href="/services" className="hover:text-green-800">Services</a></li>
                    <li><a href="/events" className="hover:text-green-800">Events</a></li>
                    <li><a href="/about" className="hover:text-green-800">About</a></li>

                    {isShowingGetStarted && (
                        <a href="/booking" className="hover:bg-green-700 bg-green-800 text-white pr-2 pl-2 pt-0.5 pb-0.5 rounded-sm">Get Started</a>
                    )}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? (
                        // Close Icon
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger Icon
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <ul className="md:hidden bg-white px-4 pb-4 space-y-2">
                    <li><a href="/" className="hover:text-green-800">Home</a></li>
                    <li><a href="/services" className="hover:text-green-800">Services</a></li>
                    <li><a href="/events" className="hover:text-green-800">Events</a></li>
                    <li><a href="/about" className="hover:text-green-800">About</a></li>
                    <li className="text-center"><a href="/" className="bg-green-800 text-white pr-10 pl-10 pt-2 pb-2 rounded-sm">Get Started</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
