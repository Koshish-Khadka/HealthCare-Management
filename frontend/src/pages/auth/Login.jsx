import { useState } from "react";
import image from "../../assets/login-image.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import api from "../../lib/axios";
import { useAuth } from "../../context/authContext";
import { ClipLoader } from "react-spinners";
const Login = () => {
  const { setUser, setToken, user, token } = useAuth();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/auth/login", input);
      const { user, token } = response.data;

      localStorage.setItem("token", token);

      setUser(user);
      setToken(token);
      navigate("/dashboard");
    } catch (error) {
      console.log("Failed to Login User", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  if (user && token) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen w-full flex">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-12 xl:px-20">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#004B8D]">
              Health Care
              <br />
              <span className="text-xl text-black font-semibold">
                Management
              </span>
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Sign in to access your healthcare dashboard
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full h-11 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full h-11 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm font-medium text-gray-600 hover:text-[#004B8D] hover:underline transition cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-[#004B8D] flex justify-center items-center text-white rounded-md font-medium hover:bg-blue-700 transition cursor-pointer"
            >
              {loading ? <ClipLoader color="white" /> : <p>Login</p>}
            </button>
          </form>

          {/* Create Account */}
          <div className="text-center mt-6 text-sm text-gray-600">
            Don't have an account?
            <button
              type="button"
              className="font-semibold text-[#004B8D] hover:underline cursor-pointer"
            >
              <Link to={"/signup"}>Create Account</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 min-h-screen relative">
        {/* Background Image */}
        <img
          src={image}
          alt="Healthcare professionals"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">
            Healthcare System
          </h2>

          <p className="mt-3 text-blue-300 text-base xl:text-lg">
            Manage healthcare with ease
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
