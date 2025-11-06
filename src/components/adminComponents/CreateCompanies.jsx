import React, { useState } from "react";
import Navbar from "../components_client/Navbar";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";

const CreateCompanies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);

  const registerCompany = async () => {
    if (!companyName.trim()) {
      toast.error("Company name is required!");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `${COMPANY_API_ENDPOINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Create New Company</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Register a new company to start posting jobs and managing your hiring process.
            </p>
          </div>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="space-y-2">
              <label className="font-semibold text-gray-700 text-lg">Company Name *</label>
              <input
                onChange={(e) => setCompanyName(e.target.value)}
                type="text"
                placeholder="e.g. Google Private Limited"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none bg-white/50 backdrop-blur-sm placeholder-gray-400 text-gray-700"
              />
              <p className="text-sm text-gray-500">Enter the official name of your company</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <Button
                onClick={() => navigate("/admin/companies")}
                className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 py-2.5 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-md active:scale-95"
                disabled={loading}
              >
                Cancel
              </Button>
              <Button 
                onClick={registerCompany}
                className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 px-8 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating...
                  </div>
                ) : (
                  "Continue"
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCompanies;