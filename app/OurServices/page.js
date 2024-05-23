import React from 'react'

export default function OurServices() {
    return (
        <div>    
            <div className="container mx-auto mt-20 px-4" id='services'>
                <h1 className="text-center mt-6 text-2xl font-bold text-indigo-600">Our Services</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {/* Service 1 */}
                    <div className="bg-white p-6 rounded-lg border border-solid border-indigo-600 shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Live Project Training</h2>
                        <p className="text-lg">We are Providing Training in all IT Domains in PHP / C / Java / Android / QA / Python / ML and Data Science.</p>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-white p-6 rounded-lg border border-solid border-indigo-600 shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Web Development Courses</h2>
                        <p className="text-lg">Explore our comprehensive web development courses covering HTML, CSS, JavaScript, React, and more.</p>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-white p-6 rounded-lg border border-solid border-indigo-600 shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">IT Certification Programs</h2>
                        <p className="text-lg">Prepare for industry-recognized IT certifications with our specialized training programs and resources.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
