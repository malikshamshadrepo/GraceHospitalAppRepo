import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Brand */}
                    <div className="flex-shrink-0 text-blue-600 font-bold text-xl">
                        <Link to="/">Grace Hospital Purnia</Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/doctors" className="text-gray-700 hover:text-blue-600 font-normal">
                            Doctors
                        </Link>
                        <Link to="/treatments" className="text-gray-700 hover:text-blue-600 font-normal">
                            Treatments
                        </Link>

                        <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-normal">
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
                    <Link to="/" className="block text-gray-700 hover:text-blue-600 font-medium">
                        Home
                    </Link>
                    <Link to="/treatments" className="block text-gray-700 hover:text-blue-600 font-medium">
                        Treatments
                    </Link>
                    <Link to="/doctors" className="block text-gray-700 hover:text-blue-600 font-medium">
                        Doctors
                    </Link>
                    <Link to="/about" className="block text-gray-700 hover:text-blue-600 font-medium">
                        Contact Us
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
