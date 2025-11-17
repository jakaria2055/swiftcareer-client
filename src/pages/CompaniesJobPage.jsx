import Navbar from "@/components/components_client/Navbar";
import useGetJobByCompany from "@/hooks/useGetJobByCompany";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, DollarSign, Briefcase, Clock, Users } from "lucide-react";

const CompaniesJobPage = () => {
  const { id: companyID } = useParams();
  const { allCompanyJobs, loading } = useSelector((store) => store.job);

  useGetJobByCompany(companyID);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
        <div className="px-4 md:px-16 lg:px-24 xl:px-32">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-indigo-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Available Positions
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore career opportunities and join our dynamic team
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">Loading job opportunities...</p>
            </div>
          )}

          {/* No Jobs Found */}
          {!loading && allCompanyJobs?.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 shadow-sm">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Open Positions</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                There are currently no job openings at this company. Please check back later for new opportunities.
              </p>
            </div>
          )}

          {/* Jobs Grid - 4 cards per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {allCompanyJobs?.map((job) => (
              <div
                key={job._id}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-2xl hover:shadow-indigo-100/50 hover:border-indigo-200 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Job Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-700 transition-colors">
                  {job.title}
                </h2>

                {/* Job Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                  {job.description}
                </p>

                {/* Job Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Salary:</span>
                    <span>${job.salary}k</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">Location:</span>
                    <span className="truncate">{job.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Briefcase className="w-4 h-4 text-purple-600" />
                    <span className="font-medium">Experience:</span>
                    <span>{job.experienceLevel} years</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span className="font-medium">Type:</span>
                    <span>{job.jobType}</span>
                  </div>
                </div>

                {/* Requirements */}
                {job.requirements && job.requirements.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-indigo-600" />
                      <h3 className="text-sm font-semibold text-gray-900">Skills Required:</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {job.requirements.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 text-xs bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full font-medium border border-indigo-200"
                        >
                          {skill}
                        </span>
                      ))}
                      {job.requirements.length > 3 && (
                        <span className="px-2.5 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                          +{job.requirements.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <div className="mt-auto pt-4">
                  <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-200/50 active:scale-95 group-hover:scale-105">
                    <Link to={`/job-details/${job._id}`} className="w-full text-center">
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Footer */}
          {allCompanyJobs && allCompanyJobs.length > 0 && (
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 border border-gray-200 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">{allCompanyJobs.length}</div>
                  <div className="text-sm text-gray-600">Open Positions</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {allCompanyJobs.reduce((acc, job) => acc + (job.position || 1), 0)}+
                  </div>
                  <div className="text-sm text-gray-600">Total Vacancies</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompaniesJobPage;