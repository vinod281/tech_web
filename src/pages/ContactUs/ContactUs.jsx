import React, { useState } from 'react';
import { FaMapMarkerAlt, FaUser, FaEnvelope, FaPhone, FaQuestionCircle, FaShoppingCart, FaComment } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


const ContactUs = () => {
    const [showAnswer1, setShowAnswer1] = useState(false);
    const [showAnswer2, setShowAnswer2] = useState(false);
    const [showAnswer3, setShowAnswer3] = useState(false);
    const [showAnswer4, setShowAnswer4] = useState(false);



    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-gray-100">
            {/* Contact Us Header */}
            <div className="py-10 text-center text-black">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="mt-2 text-lg">Stay in Touch With Us! Contact Us For Any Inquiries Or Questions </p>
                <p className="text-lg">You May Have.</p>
            </div>

            {/* Store Locator Section */}
            <div className="max-w-6xl px-4 py-10 mx-auto">
                <h2 className="mb-6 text-3xl font-semibold text-gray-800">Store Locator</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Left Section - Text */}
                    <div className="flex items-start mb-6">
                        <FaMapMarkerAlt className="mr-4 text-2xl text-red-500" />
                        <div>
                            <h3 className="text-xl font-medium">Visit Our Showroom</h3>
                            <a
                                href="https://www.google.com/maps?q=No.1,+Thimbirigasyaya+Road,+Colombo+05,+Sri+Lanka"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:underline"
                            >
                                TechStore - Thimbirigasyaya
                            </a>
                            <br />


                            <a
                                href="https://www.google.com/maps?q=No.1,+Thimbirigasyaya+Road,+Colombo+05,+Sri+Lanka"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:underline"
                            >
                                No.1, Thimbirigasyaya Road, Colombo 05, Sri Lanka
                            </a><br></br><br></br>

                            <h3 className="text-xl font-medium">Open Time</h3>
                            <p className="text-gray-600">Weekdays 10 AM to 7 PM</p>
                            <p className="text-gray-600">Friday 10 AM to 12 PM & 2 PM to 7 PM</p>
                            <p className="text-gray-600">Saturday 10 AM to 6 PM</p><br />

                            <h3 className="text-xl font-medium">Call Us On</h3>
                            <p className="text-gray-600">0705 297 129</p>
                            <p className="text-gray-600">support@techStore.lk</p>

                        </div>
                    </div>

                    {/* Right Section - Map */}
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.54602898715!2d79.8238932632813!3d6.927078427469229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25966370b7c03%3A0xb1c4a38c97c46b34!2sColombo!5e0!3m2!1sen!2slk!4v1675625192712!5m2!1sen!2slk"
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: '8px' }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>



            {/* Contact Form */}
            <div className="max-w-3xl p-8 mx-auto bg-white rounded-lg shadow-lg md:p-16">
                <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 md:text-4xl">Send us your message</h2>
                <form className="space-y-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {/* Name */}
                        <div className="relative">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Name</label>
                            <div className="flex items-center p-3 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-gray-800">
                                <FaUser className="mr-3 text-gray-400" />
                                <input
                                    type="text"
                                    id="name"
                                    className="flex-1 focus:outline-none"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                            <div className="flex items-center p-3 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-gray-800">
                                <FaEnvelope className="mr-3 text-gray-400" />
                                <input
                                    type="email"
                                    id="email"
                                    className="flex-1 focus:outline-none"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-600">Phone Number</label>
                        <div className="flex items-center p-3 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-gray-800">
                            <FaPhone className="mr-3 text-gray-400" />
                            <input
                                type="tel"
                                id="phone"
                                className="flex-1 focus:outline-none"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                    </div>

                    {/* Inquiry Type */}
                    <div className="relative">
                        <label htmlFor="inquiry" className="block mb-2 text-sm font-medium text-gray-600">Inquiry Type</label>
                        <div className="flex items-center p-3 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-gray-800">
                            <FaQuestionCircle className="mr-3 text-gray-400" />
                            <select
                                id="inquiry"
                                className="flex-1 focus:outline-none"
                                required
                            >
                                <option value="general">General Inquiries</option>
                                <option value="orders">Orders</option>
                                <option value="warranty">Warranty</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                    </div>

                    {/* Order Number */}
                    <div className="relative">
                        <label htmlFor="orderNumber" className="block mb-2 text-sm font-medium text-gray-600">Order Number</label>
                        <div className="flex items-center p-3 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-gray-800">
                            <FaShoppingCart className="mr-3 text-gray-400" />
                            <input
                                type="text"
                                id="orderNumber"
                                className="flex-1 focus:outline-none"
                                placeholder="Enter your order number (if applicable)"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="relative">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-600">Message</label>
                        <div className="flex items-start p-3 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-gray-800">
                            <FaComment className="mt-1 mr-3 text-gray-400" />
                            <textarea
                                id="message"
                                rows="4"
                                className="flex-1 focus:outline-none"
                                placeholder="Enter your message"
                                required
                            ></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full px-6 py-3 text-lg font-medium text-white transition duration-300 bg-gray-800 rounded-md "
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* FAQ Section */}
            <div className="max-w-6xl px-4 py-10 mx-auto">
                <h2 className="mb-6 text-3xl font-semibold text-gray-800">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {/* Question 1 */}
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <button
                            className="w-full text-lg font-medium text-left"
                            onClick={() => setShowAnswer1(!showAnswer1)}
                        >
                            How to Order?
                        </button>
                        {showAnswer1 && (
                            <p className="mt-2 text-gray-600">
                                Visit our shop or order online through our website.
                            </p>
                        )}
                    </div>

                    {/* Question 2 */}
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <button
                            className="w-full text-lg font-medium text-left"
                            onClick={() => setShowAnswer2(!showAnswer2)}
                        >
                            What is the Warranty Policy?
                        </button>
                        {showAnswer2 && (
                            <p className="mt-2 text-gray-600">
                                All products come with a one-year warranty unless specified otherwise.
                            </p>
                        )}
                    </div>

                    {/* Question 3 */}
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <button
                            className="w-full text-lg font-medium text-left"
                            onClick={() => setShowAnswer3(!showAnswer3)}
                        >
                            What payment methods do you accept?
                        </button>
                        {showAnswer3 && (
                            <p className="mt-2 text-gray-600">
                                We accept credit cards, PayPal, and bank transfers.
                            </p>
                        )}
                    </div>

                    {/* Question 4 */}
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <button
                            className="w-full text-lg font-medium text-left"
                            onClick={() => setShowAnswer4(!showAnswer4)}
                        >
                            Can I change my order after placing it?
                        </button>
                        {showAnswer4 && (
                            <p className="mt-2 text-gray-600">
                                Yes, you can change your order within 24 hours of placing it.
                            </p>
                        )}
                    </div>
                </div>
            </div>

        </div>

        <Footer />
        </>
    );
};

export default ContactUs;

