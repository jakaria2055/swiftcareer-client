import Navbar from "@/components/components_client/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import useGetCompanyById from "@/hooks/useGetCompanyById";
import { Edit2, MapPin, Globe, Calendar } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const CompanyDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const companyID = params.id;

  const { singleCompany } = useSelector((store) => store.company);

  useGetCompanyById(companyID);

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section with Edit Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Company Details</h1>
            <p className="text-gray-600 mt-2">Complete information about the company</p>
          </div>
          <button
            onClick={() => navigate(`/admin/companies/${singleCompany?._id}`)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg mt-4 sm:mt-0"
          >
            <Edit2 className="w-4 h-4" />
            <span className="font-medium">Edit Company</span>
          </button>
        </div>

        {/* Company Information Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          {singleCompany ? (
            <div className="space-y-8">
              {/* Company Header with Logo */}
              <div className="flex flex-col md:flex-row items-center gap-6 pb-6 border-b border-gray-200">
                <Avatar className="w-24 h-24 border-4 border-indigo-100 shadow-md">
                  <AvatarImage
                    src={singleCompany.logo || "https://via.placeholder.com/100"}
                    alt={`${singleCompany.name} logo`}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </Avatar>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-gray-900">{singleCompany.name}</h2>
                  <p className="text-gray-600 mt-2 max-w-2xl">{singleCompany.description}</p>
                </div>
              </div>

              {/* Company Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Location */}
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900">{singleCompany.location || "Not specified"}</p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Globe className="w-5 h-5 text-indigo-600" />
                  <div>
                    <p className="text-sm text-gray-500">Website</p>
                    {singleCompany.website ? (
                      <a 
                        href={singleCompany.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
                      >
                        {singleCompany.website}
                      </a>
                    ) : (
                      <p className="font-medium text-gray-900">Not specified</p>
                    )}
                  </div>
                </div>

                {/* Registration Date */}
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                  <div>
                    <p className="text-sm text-gray-500">Registered On</p>
                    <p className="font-medium text-gray-900">
                      {singleCompany.createdAt ? new Date(singleCompany.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : "Not available"}
                    </p>
                  </div>
                </div>

                {/* Company ID */}
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-5 h-5 flex items-center justify-center bg-indigo-100 rounded-full">
                    <span className="text-xs font-bold text-indigo-600">ID</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Company ID</p>
                    <p className="font-medium text-gray-900 font-mono text-sm">{singleCompany._id}</p>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              {singleCompany.description && (
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">About Company</h3>
                  <p className="text-gray-700 leading-relaxed">{singleCompany.description}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="animate-pulse">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
              <p className="text-gray-500 mt-4">Loading company details...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;