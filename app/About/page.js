import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutUs() {
    return (
        <div className='flex flex-col lg:flex-row my-10 lg:gap-20 mt-16 mx-10' id='about'>
            <Image src="/friends.jpg" width={600} height={300} alt="error" className='w-80 h-auto rounded-3xl lg:w-1/2' />
            <div>
                <h1 className='mt-6 text-indigo-600 text-2xl mb-5'>About Web Mastery Institute</h1>
                <p className='text-3xl font-bold'>IT Training Institute</p>
                <p className='text-xl my-3'>We strive to provide you with comprehensive training, cutting-edge resources, and personalized guidance to help you excel in the tech industry. Join us and let us support your journey towards a successful and fulfilling career in IT.</p>
                <ul className='text-xl list-items'>
                    <li>Empowering Your Success with IT Training</li>
                    <li>Top Priority: Your Career Growth</li>
                    <li>Comprehensive IT Training Solutions for Success</li>
                    <li>Unlock Your Potential with Our IT Programs</li>
                </ul>
                <button className='py-3 px-5 mt-5 border-5 rounded-md text-white bg-indigo-700 hover:bg-indigo-600'><Link href="/Courses">VIEW ALL COURSES</Link></button>
            </div>
        </div>
    )
}
