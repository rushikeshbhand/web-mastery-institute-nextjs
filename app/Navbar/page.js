"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* top navbar  */}
            <div className="bg-white text-black py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center mb-2 sm:mb-0">
                        <Link href="/">
                            <Image src="/logo.png" alt="Web Mastery Institute Logo" width={135} height={80} className="h-20" />
                        </Link>
                    </div>

                    {/* Contact Information */}
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                        {/* Call Us */}
                        <div className="flex items-center">
                            <p className="font-semibold">Call Us:</p>
                            <p className="ml-2">+91 95884 53702 / +91 77209 17206</p>
                        </div>

                        {/* Email */}
                        <div className="flex items-center">
                            <p className="font-semibold">Email:</p>
                            <p className="ml-2">rushikeshgbhand@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* navbar  */}
            <nav className="bg-white shadow bg-gradient-to-r from-sky-400 to-indigo-600">
                <div className="container px-6 py-4 mx-auto">
                    <div className="lg:flex lg:items-center">
                        <div className="flex items-center justify-between">
                            <Link href="/">
                                <h2 className='text-white'>Web Mastery Institute</h2>
                            </Link>

                            {/* Mobile menu button */}
                            <div className="flex lg:hidden">
                                <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    {!isOpen ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
                            {/* Navigation links */}
                            <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                                <Link href="/Courses" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">Courses</Link>
                                <Link href="/OurServices" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">Services</Link>
                                <Link href="/About" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">About Us</Link>
                                <Link href="/Contact" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">Contact us to enroll</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
