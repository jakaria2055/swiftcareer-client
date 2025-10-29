import React, { useState } from "react";
import Navbar from "../components_client/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    phoneNumber: "",
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const ChangeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("role", input.role);
    formData.append("phoneNumber", input.phoneNumber);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      const errorMessage = error.response
        ? error.response.data.message
        : "An unexpected error occurred.";
      toast.error(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Register Section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-sm text-slate-800">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-4xl bg-white/80 backdrop-blur-sm shadow-2xl shadow-indigo-100/50 rounded-3xl p-6 sm:p-8 border border-indigo-100/50"
        >
          <h1 className="text-3xl sm:text-4xl font-bold py-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Register with Proper Info
          </h1>

          <p className="text-center text-gray-600 pb-8 text-sm sm:text-base">
            Or just reach out manually to us at{" "}
            <a
              href="mailto:swiftcareer@post.bd"
              className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
            >
              swiftcareer@post.bd
            </a>
          </p>

          {/* Full Name */}
          <label htmlFor="name" className="font-semibold text-gray-700">
            Full Name
          </label>
          <div className="flex items-center mt-2 mb-4 h-12 pl-4 border-2 border-slate-200 rounded-xl focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-300 overflow-hidden bg-white/50">
            <img
              src="/icon/profile.svg"
              alt="Profile"
              className="w-5 h-5 opacity-80"
            />
            <input
              id="name"
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              className="h-full px-3 w-full outline-none bg-transparent placeholder-gray-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <label
            htmlFor="email-address"
            className="font-semibold text-gray-700"
          >
            Email Address
          </label>
          <div className="flex items-center mt-2 mb-4 h-12 pl-4 border-2 border-slate-200 rounded-xl focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-300 overflow-hidden bg-white/50">
            <img
              src="/icon/email.svg"
              alt="Email"
              className="w-5 h-5 opacity-80"
            />
            <input
              id="email-address"
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              className="h-full px-3 w-full outline-none bg-transparent placeholder-gray-400"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Password */}
          <label htmlFor="password" className="font-semibold text-gray-700">
            Password
          </label>
          <div className="flex items-center mt-2 mb-4 h-12 pl-4 border-2 border-slate-200 rounded-xl focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-300 overflow-hidden bg-white/50">
            <img
              src="/icon/password.svg"
              alt="Password"
              className="w-5 h-5 opacity-80"
            />
            <input
              id="password"
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              className="h-full px-3 w-full outline-none bg-transparent placeholder-gray-400"
              placeholder="*******"
              required
            />
          </div>

          {/* Phone */}
          <label htmlFor="phone" className="font-semibold text-gray-700">
            Phone Number
          </label>
          <div className="flex items-center mt-2 mb-4 h-12 pl-4 border-2 border-slate-200 rounded-xl focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-300 overflow-hidden bg-white/50">
            <img
              src="/icon/phone.svg"
              alt="Phone"
              className="w-5 h-5 opacity-80"
            />
            <input
              id="phone"
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              className="h-full px-3 w-full outline-none bg-transparent placeholder-gray-400"
              placeholder="+880123456789"
              required
            />
          </div>

          {/* Role Selection */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <label className="flex gap-3 items-center cursor-pointer group">
              <input
                type="radio"
                name="role"
                value="Student"
                checked={input.role === "Student"}
                onChange={changeEventHandler}
                className="hidden peer"
              />
              <span className="w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center peer-checked:border-indigo-500 peer-checked:bg-indigo-500 transition-all duration-300 group-hover:border-indigo-400 relative">
                <span className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-300"></span>
              </span>
              <span className="text-gray-700 select-none font-medium group-hover:text-indigo-600 transition-colors">
                Student
              </span>
            </label>

            <label className="flex gap-3 items-center cursor-pointer group">
              <input
                type="radio"
                name="role"
                value="Recruiter"
                checked={input.role === "Recruiter"}
                onChange={changeEventHandler}
                className="hidden peer"
              />
              <span className="w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center peer-checked:border-indigo-500 peer-checked:bg-indigo-500 transition-all duration-300 group-hover:border-indigo-400 relative">
                <span className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-300"></span>
              </span>
              <span className="text-gray-700 select-none font-medium group-hover:text-indigo-600 transition-colors">
                Recruiter
              </span>
            </label>
          </div>

          {/* Profile Photo */}
          <label
            htmlFor="profile-photo"
            className="font-semibold text-gray-700 mt-6 block"
          >
            Profile Photo
          </label>
          <div className="flex items-center mt-2 mb-6 h-12 pl-4 border-2 border-slate-200 rounded-xl focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-300 overflow-hidden bg-white/50">
            <img
              src="/icon/profile-photo.svg"
              alt="Profile"
              className="w-5 h-5 opacity-80"
            />
            <input
              id="profile-photo"
              type="file"
              accept="image/*"
              onChange={ChangeFileHandler}
              className="h-full px-3 w-full outline-none bg-transparent file:mr-4 file:rounded-xl file:border-0 file:bg-gradient-to-r file:from-indigo-500 file:to-purple-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:from-indigo-600 hover:file:to-purple-600 transition-all duration-300 file:cursor-pointer"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            {loading ? (
              <>
                <div className="flex items-center justify-center my-5">
                  <div className="spinner-border text-blue-600" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white py-3.5 w-full rounded-xl transition-all duration-300 active:scale-95 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 font-semibold"
                >
                  Submit Form
                  <img
                    src="/icon/submit.svg"
                    alt="Submit"
                    className="bg-white rounded-full p-1.5 w-5 h-5"
                  />
                </button>
              </>
            )}
          </div>

          {/* Login Redirect */}
          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 hover:text-indigo-700 font-semibold underline hover:no-underline transition-colors"
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
