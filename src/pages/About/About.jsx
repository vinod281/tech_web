import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const AboutUs = () => {
  return (
    <>

    <Navbar/>
    <div className="px-6 py-16 bg-gray-50 md:px-12">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">We are passionate about providing high-quality audio products for a better listening experience.</p>
      </div>

      {/* Mission Section */}
      <section className="mb-20 text-center">
        <h2 className="mb-4 text-3xl font-semibold text-gray-800">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600">
          Our mission is to offer top-tier audio products designed for comfort, durability, and immersive sound. We are dedicated to meeting the diverse needs of our customers, whether it's for gaming, music, or everyday use.
        </p>
      </section>

      {/* Team Section */}
      <section className="grid grid-cols-1 gap-16 mb-20 md:grid-cols-2 lg:grid-cols-3">
        <div className="text-center transition-transform duration-300 hover:scale-105">
          <img src="https://freedesignfile.com/upload/2017/06/Women-working-in-the-office-Stock-Photo.jpg" alt="Team Member 1" className="w-40 h-40 mx-auto mb-6 rounded-full shadow-lg" />
          <h3 className="text-xl font-semibold text-gray-800">Lees Doe</h3>
          <p className="text-gray-500">CEO & Founder</p>
        </div>
        <div className="text-center transition-transform duration-300 hover:scale-105">
          <img src="https://media.istockphoto.com/id/1365730050/photo/portrait-of-a-mature-businessman-standing-with-his-arms-folded-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=VVXOoJOYY9RaviU2OLpCRaWeqhi8EIIeYYexMUKn5M8=" alt="Team Member 2" className="w-40 h-40 mx-auto mb-6 rounded-full shadow-lg" />
          <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
          <p className="text-gray-500">CTO & Co-Founder</p>
        </div>
        <div className="text-center transition-transform duration-300 hover:scale-105">
          <img src="https://media.istockphoto.com/id/487451128/photo/arab-business-woman-at-work.jpg?s=612x612&w=0&k=20&c=wVaEP5I8grO92uUobKHTAO4GCCbxClTvboyk4TfWknY=" alt="Team Member 3" className="w-40 h-40 mx-auto mb-6 rounded-full shadow-lg" />
          <h3 className="text-xl font-semibold text-gray-800">Emily Johnson</h3>
          <p className="text-gray-500">Lead Designer</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="mb-12 text-3xl font-semibold text-center text-gray-800">Our Core Values</h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="w-full text-center sm:w-1/2 md:w-1/3">
            <div className="p-8 mb-6 transition-transform duration-300 bg-white shadow-lg rounded-xl hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
              <p className="mt-3 text-gray-600">
                We are constantly exploring new ways to improve and innovate, ensuring our products stay ahead of the curve.
              </p>
            </div>
          </div>
          <div className="w-full text-center sm:w-1/2 md:w-1/3">
            <div className="p-8 mb-6 transition-transform duration-300 bg-white shadow-lg rounded-xl hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800">Integrity</h3>
              <p className="mt-3 text-gray-600">
                We believe in maintaining high ethical standards and transparent practices, earning the trust of our customers.
              </p>
            </div>
          </div>
          <div className="w-full text-center sm:w-1/2 md:w-1/3">
            <div className="p-8 mb-6 transition-transform duration-300 bg-white shadow-lg rounded-xl hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800">Collaboration</h3>
              <p className="mt-3 text-gray-600">
                We work together as a team and collaborate with our customers to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;



