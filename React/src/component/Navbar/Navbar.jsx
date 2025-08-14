import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/login");
  };
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div>
        <Link to="/">
          <img
            src="https://madang.kenzap.com/wp-content/themes/madang/images/madang-logo.svg"
            alt="Food Delivery Logo"
            className="h-10"
          />
        </Link>
      </div>

      {/* Menu */}
      {isLoggedIn && (
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <Link to="/about-us" className="hover:text-[#82b440]">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-[#82b440]">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-[#82b440]">
              Contact Us
            </Link>
          </li>
        </ul>
      )}

      <div className="flex items-center gap-2">
        {isLoggedIn ? (
          <>
            <Link
              to="/card"
              className="bg-[#82b440] text-white px-3 py-2 rounded flex items-center gap-2 relative"
            >
              <MdOutlineShoppingCart size={22} />

              {/* Cart Count Badge */}
              <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs font-bold px-1.5 py-0.5 rounded-full border-2 border-[#82b440]">
                0
              </span>
            </Link>

            <button
              onClick={handleLogout}
              className="bg-[#82b440] text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-[#82b440] text-white px-4 py-2 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
