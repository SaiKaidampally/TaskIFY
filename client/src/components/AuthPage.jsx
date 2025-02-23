import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaLinkedin, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

const AuthPage = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    termsAccepted: false,
  });

  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    const handleBackNavigation = (event) => {
      event.preventDefault();
      window.history.pushState(null, null, window.location.pathname);
    };
    window.addEventListener("popstate", handleBackNavigation);
    return () => {
      window.removeEventListener("popstate", handleBackNavigation);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(isLogin ? "Login Successful! Redirecting..." : "Registration Successful! Verify email.");
      onLoginSuccess();
      navigate("/");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100 dark:bg-gray-900">
      <div className="relative w-full max-w-4xl bg-white dark:bg-gray-800 p-10 rounded-lg shadow-lg flex flex-col items-center">
        
        {/* Close Button */}
        <button 
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          {isLogin ? "Login to Your Account" : "Create an Account"}
        </h2>

        <div className="flex justify-center space-x-4 mb-6">
          <button className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"><FaFacebook /></button>
          <button className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-600"><FaGoogle /></button>
          <button className="p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800"><FaLinkedin /></button>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white" required />
            </div>
          )}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white" required />
          </div>
          <div className="relative">
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleInputChange} className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white" required />
            <button type="button" className="absolute right-3 top-10 text-gray-600 dark:text-gray-300" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {!isLogin && (
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Confirm Password</label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white" required />
            </div>
          )}
          <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" disabled={loading}>
            {loading ? "Processing..." : isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-700 dark:text-gray-300">
          {isLogin ? "Don't have an account?" : "Already have an account?"} {" "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 underline">
            {isLogin ? "Register here" : "Login here"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;


