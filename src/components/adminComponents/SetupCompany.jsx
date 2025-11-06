import React, { useEffect, useState } from "react";
import Navbar from "../components_client/Navbar";
import { Button } from "../ui/button";
import { ArrowBigLeft, Upload } from "lucide-react";
import axios from "axios";
import { COMPANY_API_ENDPOINT } from "@/utils/data";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import useGetCompanyById from "@/hooks/useGetCompanyById";

const SetupCompany = () => {


  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });

  const { singleCompany } = useSelector((store) => store.company);

  const navigate = useNavigate();
  const params = useParams();
  const companyID = params.id;

  useGetCompanyById(companyID);

  // Handle input changes
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle file upload
  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  // Handle form submit
  const submitFormHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const res = await axios.put(
        `${COMPANY_API_ENDPOINT}/update/${companyID}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token ? `Bearer ${token}` : "",
          },
          withCredentials: true,
        }
      );

      console.log("Response:", res.data);

      if (res.status === 200 || res.data.message?.includes("successfully")) {
        toast.success(res.data.message || "Company updated successfully!");
        setTimeout(() => navigate("/admin/companies"), 800);
      } else {
        toast.error(res.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error in update:", error);
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setInput({
      name: singleCompany?.name || "",
      description: singleCompany?.description || "",
      website: singleCompany?.website || "",
      location: singleCompany?.location || "",
      file: null,
    });
  }, [singleCompany]);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
            <Button
              type="button"
              onClick={() => navigate("/admin/companies")}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold bg-gray-100 hover:bg-gray-200 px-4 py-2.5 rounded-xl transition-all duration-300"
              variant="outline"
            >
              <ArrowBigLeft className="w-5 h-5" />
              <span>Back to Companies</span>
            </Button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Company Information Setup
            </h1>
          </div>

          <form onSubmit={submitFormHandler} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div className="space-y-2">
                <label className="font-semibold text-gray-700">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={changeEventHandler}
                  placeholder="Enter company name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none bg-white/50 placeholder-gray-400"
                  required
                />
              </div>

              {/* Website */}
              <div className="space-y-2">
                <label className="font-semibold text-gray-700">Website *</label>
                <input
                  type="text"
                  name="website"
                  value={input.website}
                  onChange={changeEventHandler}
                  placeholder="https://company.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none bg-white/50 placeholder-gray-400"
                  required
                />
              </div>

              {/* Description - Full Width */}
              <div className="md:col-span-2 space-y-2">
                <label className="font-semibold text-gray-700">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                  placeholder="Brief description about your company"
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none bg-white/50 placeholder-gray-400 resize-none"
                  required
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
                  placeholder="Company location"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none bg-white/50 placeholder-gray-400"
                  required
                />
              </div>

              {/* Logo Upload */}
              <div className="space-y-2">
                <label className="font-semibold text-gray-700">
                  Company Logo *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="file"
                    accept="image/*"
                    onChange={changeFileHandler}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="w-full px-4 py-3 border-2 border-gray-200 border-dashed rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 flex items-center gap-3">
                    <Upload className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-600 text-sm">
                      {input.file ? input.file.name : "Upload company logo"}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Supported formats: JPG, PNG, SVG
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3.5 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg hover:shadow-indigo-200 active:scale-95"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Updating Company...
                  </div>
                ) : (
                  "Update Company Information"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SetupCompany;
