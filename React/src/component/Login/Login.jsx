import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("login", "true");
    navigate("/");
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("login");
    if (isLoggedIn === "true") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#82b440]"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#82b440]"
            required
          />
          <button
            type="submit"
            className="bg-[#82b440] text-white py-2 rounded hover:bg-green-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
