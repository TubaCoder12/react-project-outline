import React from "react";

const Footer = ({ isLoggedIn }) => {
  console.log("footer", isLoggedIn);
  return (
    <>
      {isLoggedIn && (
        <footer className="bg-[#82b440] text-white py-6">
          <div className="container mx-auto text-center">
            <h2 className="text-xl font-semibold mb-2">MyFoodApp</h2>
            <p className="text-sm">
              Delivering fresh and healthy meals to your doorstep.
            </p>
            <p className="text-xs mt-2">
              © {new Date().getFullYear()} MyFoodApp. All rights reserved.
            </p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
