import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-20">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="mx-4 mb-4">
                        <a href="/Courses" className="block text-center hover:text-indigo-500">Courses</a>
                    </div>
                    <div className="mx-4 mb-4">
                        <a href="/Contact" className="block text-center hover:text-indigo-500">Contact Us</a>
                    </div>
                    <div className="mx-4 mb-4">
                        <a href="/About" className="block text-center hover:text-indigo-500">About</a>
                    </div>
                    <div className="mx-4 mb-4">
                        <a href="/OurServices" className="block text-center hover:text-indigo-500">Services</a>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Web Mastery Institute. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
