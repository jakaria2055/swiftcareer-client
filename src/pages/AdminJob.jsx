import AdminJobTable from "@/components/adminComponents/AdminJobTable";
import Navbar from "@/components/components_client/Navbar";
import { Button } from "@/components/ui/button";
import useGetAdminJobs from "@/hooks/useGetAdminJobs";
import { setSearchJobByText } from "@/redux/jobSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const AdminJob = () => {
  useGetAdminJobs();

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input, dispatch]);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto my-8 px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Job Management</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Manage all job postings, track applications, and update job details from one centralized dashboard.
          </p>
        </div>

        {/* Search and Action Bar */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex-1 w-full lg:max-w-md">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none bg-white placeholder-gray-400"
                  placeholder="Search jobs by title, company, or role..."
                />
              </div>
            </div>
            <Link to={"/admin/jobs/create"} className="w-full lg:w-auto">
              <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-200 active:scale-95">
                Post New Job
              </Button>
            </Link>
          </div>
        </div>

        {/* Jobs Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <AdminJobTable />
        </div>
      </div>
    </>
  );
};

export default AdminJob;