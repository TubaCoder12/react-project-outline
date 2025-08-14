import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = ({ isLoggedIn }) => {
  return (
    <>
      {isLoggedIn && (
        <footer className="bg-[#82b440] text-white py-10 mt-10 shadow-lg">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <h2 className="text-2xl font-bold mb-3">MyFoodApp</h2>
              <p className="text-sm leading-relaxed">
                Delivering fresh and healthy meals to your doorstep with love
                and care.
              </p>
            </div>

            {/* Links Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">Menu</li>
                <li className="hover:underline cursor-pointer">About</li>
                <li className="hover:underline cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-4 text-xl">
                <FaFacebookF className="hover:text-gray-200 cursor-pointer" />
                <FaInstagram className="hover:text-gray-200 cursor-pointer" />
                <FaTwitter className="hover:text-gray-200 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-green-300 mt-8 pt-4 text-center text-xs">
            © {new Date().getFullYear()} MyFoodApp. All rights reserved.
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
