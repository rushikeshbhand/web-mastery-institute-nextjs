"use client";
import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '', course: '' }); // Clear form after successful submission
      } else {
        alert('Failed to submit the form');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  };

  return (
    <div>
      <div className="container mx-auto px-4 mt-20" id="contactus">
        <h1 className="text-center text-3xl font-bold mb-10 text-indigo-600">Contact Us to Enroll</h1>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-600 font-semibold">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600"
                placeholder="Enter your phone number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="course" className="block text-gray-600 font-semibold">Course Interested In</label>
              <select
                id="course"
                name="course"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600"
                required
                value={formData.course}
                onChange={handleChange}
              >
                <option value="" disabled>Select a course</option>
                <option value="Web Development">Full Stack Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Excel Course">Excel Course</option>
                <option value="Java Course">Java Course</option>
                <option value="Angular Course">Angular Course</option>
                <option value="Nextjs Course">Nextjs Course</option>
                <option value="MERN Stack Course">MERN Stack Course</option>
                <option value="Git and Github">Git and Github</option>
                <option value="Cyber Security Course">Cyber Security Course</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
              </select>
            </div>
            <div className="text-center">
              <button type="submit" className="px-6 py-3 mt-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
