import Navbar from "@/components/components_client/Navbar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JOB_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const PostJob = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    companyId: "",
    position: 0,
    requirements: "",
    role: "",
    experience: "",
    jobType: "",
  });

  const { companies } = useSelector((store) => store.company);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const selectChangeHandler = (value) => {
    const selectedCompany = companies.find(
      (company) => company.name.toLowerCase() === value
    );
    setInput({ ...input, companyId: selectedCompany._id });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_ENDPOINT}/post`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/jobs");
      } else {
        toast.error(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(
          error.response.data.message || "Something wrong to post job!"
        );
      } else {
        toast.error("An unexpected error occurred!");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Post a New Job
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Fill in the job details to attract the best talent for your
              company.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-2xl hover:shadow-purple-200 transform duration-500">
            <form onSubmit={submitHandler} className="space-y-6">
              {/* Grid Layout for Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Job Title */}
                <div className="space-y-2">
                  <label className="font-semibold text-gray-700">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={input.title}
                    onChange={changeEventHandler}
                    placeholder="e.g. Senior Frontend Developer"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none bg-white/50 placeholder-gray-400"
                  />
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label className="font-semibold text-gray-700">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={input.location}
                    onChange={changeEventHandler}
                    placeholder="e.g. Remote, Dhaka, Bangladesh"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none bg-white/50 placeholder-gray-400"
                  />
                </div>

                {/* Salary */}
                <div className="space-y-2">
                  <label className="font-semibold text-gray-700">
                    Salary *
                  </label>
                  <input
                    type="number"
                    name="salary"
                    value={input.salary}
                    onChange={changeEventHandler}
                    placeholder="e.g. 50000"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none bg-white/50 placeholder-gray-400"
                  />
                </div>

                {/* Position */}
                <div className="space-y-2">
                  <label className="font-semibold text-gray-700">
                    Open Positions *
                  </label>
                  <input
                    type="number"
                    name="position"
                    value={input.position}
                    onChange={changeEventHandler}
                    placeholder="e.g. 5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none bg-white/50 placeholder-gray-400"
                  />
                </div>

                {/* Role */}
                <div className="space-y-2">
                  <label className="font-semibold text-gray-700">Role *</label>
                  <input
                    type="text"
                    name="role"
                    value={input.role}
                    onChange={changeEventHandler}
                    placeholder="e.g. Frontend Developer"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none bg-white/50 placeholder-gray-400"
                  />
                </div>

                {/* Experience */}
                <div className="space-y-2">
                  <label className="font-semibold text-gray-700">
                    Experience (Years) *
                  </label>
                  <input
                    type="number"
                    name="experience"
                    value={input.experience}
                    onChange={changeEventHandler}
                    placeholder="e.g. 3"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none bg-white/50 placeholder-gray-400"
                  />
                </div>

                {/* Job Type */}
                <div className="space-y-2">
                  <label className="font-semibold text-gray-700">
                    Job Type *
                  </label>
                  <input
                    type="text"
                    name="jobType"
                    value={input.jobType}
                    onChange={changeEventHandler}
                    placeholder="e.g. Full-time, Part-time, Contract"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none bg-white/50 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Full Width Fields */}
              <div className="space-y-6">
                {/* Description */}
                <div className="space-y-2">
                  <label className="font-semibold text-gray-700">
                    Job Description *
                  </label>
                  <textarea
                    name="description"
                    value={input.description}
                    onChange={changeEventHandler}
                    placeholder="Describe the job responsibilities, expectations, and what makes this role exciting..."
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none bg-white/50 placeholder-gray-400 resize-none"
                  />
                </div>

                {/* Requirements */}
                <div className="space-y-2">
                  <label className="font-semibold text-gray-700">
                    Requirements *
                  </label>
                  <textarea
                    name="requirements"
                    value={input.requirements}
                    onChange={changeEventHandler}
                    placeholder="List the required skills, qualifications, and experience..."
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none bg-white/50 placeholder-gray-400 resize-none"
                  />
                </div>

                {/* Company Selection */}
                {companies.length > 0 ? (
                  <div className="space-y-2">
                    <label className="font-semibold text-gray-700">
                      Select Company *
                    </label>
                    <Select onValueChange={selectChangeHandler}>
                      <SelectTrigger className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none bg-white/50">
                        <SelectValue placeholder="Choose a company" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {companies.map((company) => (
                            <SelectItem
                              key={company._id}
                              value={company.name.toLowerCase()}
                            >
                              {company.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                ) : (
                  <div className="text-center p-4 bg-red-50 rounded-xl border border-red-200">
                    <p className="text-red-600 font-semibold">
                      *** Please Register a Company to Post Jobs ***
                    </p>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              {companies.length > 0 && (
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white py-3.5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-200 active:scale-95"
                >
                  Post Job
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostJob;
