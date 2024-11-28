import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-10 bg-gray-50">
      <div className="container grid grid-cols-1 gap-6 mx-auto text-center sm:grid-cols-2 md:grid-cols-4 md:text-left">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl font-bold text-gray-800">TechStore</div>
          <p className="text-gray-500 text-m">Everything on this website has been made with a lot of love and hard work. If you copy anything we will hunt you down. We mean it.</p>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col md:col-span-2">
          <h3 className="mb-2 text-xl font-bold">Sign up for our newsletter</h3>
          <p className="mb-4 text-sm text-gray-500">Be the first to get notified about upcoming products, deals, and giveaways.</p>
          <form className="flex">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email to stay updated!"
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="px-6 py-2 text-white transition duration-300 bg-gray-900 rounded-r-lg hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-2 text-xs text-gray-400">
            By subscribing, you agree to our <a href="#" className="underline">Terms and Conditions</a>.
          </p>
        </div>

        {/* Links and Social Media */}
        <div className="grid grid-cols-2 gap-6">
          {/* About Us */}
          <div>
            <h3 className="mb-4 text-lg font-bold">About Us</h3>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
            <ul className="space-y-3">
              <li><a href="#" aria-label="Visit our Facebook" className="flex items-center space-x-3 hover:underline"><FaFacebookF /><span>Facebook</span></a></li>
              <li><a href="#" aria-label="Visit our Instagram" className="flex items-center space-x-3 hover:underline"><FaInstagram /><span>Instagram</span></a></li>
              <li><a href="#" aria-label="Visit our Twitter" className="flex items-center space-x-3 hover:underline"><FaTwitter /><span>Twitter</span></a></li>
              <li><a href="#" aria-label="Visit our LinkedIn" className="flex items-center space-x-3 hover:underline"><FaLinkedinIn /><span>LinkedIn</span></a></li>
              <li><a href="#" aria-label="Visit our YouTube" className="flex items-center space-x-3 hover:underline"><FaYoutube /><span>YouTube</span></a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-sm text-center text-gray-400">
        <p>Copyright © , Headphone Zone. Owned, Operated & Funded by Proud Indians {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
