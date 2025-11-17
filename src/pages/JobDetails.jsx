import Navbar from "@/components/components_client/Navbar";
import { Button } from "@/components/ui/button";
import useGetSingleJob from "@/hooks/useGetSingleJob";
import { setSingleJob } from "@/redux/jobSlice";
import { APPLICATION_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const JobDetails = () => {
  const { id: jobId } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  // fetch job
  useGetSingleJob(jobId);
  const { singleJob } = useSelector((store) => store.job);

  //Create isApplied state safely (useMemo ensures it updates correctly)
  const isInitiallyApplied = useMemo(() => {
    return (
      singleJob?.applications?.some(
        (application) => application.applicant === user?._id
      ) || false
    );
  }, [singleJob, user]);

  const [isApplied, setIsApplied] = useState(isInitiallyApplied);

  //Update isApplied whenever job or user changes
  React.useEffect(() => {
    setIsApplied(isInitiallyApplied);
  }, [isInitiallyApplied]);

  // APPLY JOB HANDLER
  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_ENDPOINT}/apply/${jobId}`,
        { withCredentials: true }
      );

      if (res.data.success) {
        setIsApplied(true);
        const updatedJob = {
          ...singleJob,
          applications: [
            ...(singleJob.applications || []),
            { applicant: user?._id },
          ],
        };
        dispatch(setSingleJob(updatedJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Something went wrong while applying!"
      );
    }
  };

  // ✅ Place return *after* all hooks
  if (!singleJob) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl text-gray-900 mb-3">
              {singleJob.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                {singleJob.position} Position
              </span>
              <span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                ${singleJob.salary}k
              </span>
              <span className="px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                {singleJob.location}
              </span>
              <span className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                {singleJob.jobType}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Button
              disabled={isApplied}
              onClick={() => {
                if (!user?.profile?.resume) {
                  alert("Please add your resume first to apply!");
                  return;
                }

                if (!isApplied) {
                  applyJobHandler();
                }
              }}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-200 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isApplied ? "Already Applied!" : "Apply Now"}
            </Button>
            {!user?.profile?.resume && (
              <p className="text-red-500 mt-2 text-sm">
                You must upload a resume before applying.
              </p>
            )}
          </div>
        </div>

        <div className="space-y-8">
          {/* Job Description Section */}
          <div>
            <h1 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
              Job Description
            </h1>
            <p className="text-gray-700 leading-relaxed">
              {singleJob.description}
            </p>
          </div>

          {/* Requirements Section */}
          {singleJob.requirements && singleJob.requirements.length > 0 && (
            <div>
              <h1 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
                Requirements & Skills
              </h1>
              <div className="flex flex-wrap gap-2">
                {singleJob.requirements.map((requirement, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {requirement}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Job Details Section */}
          <div>
            <h1 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
              Job Details
            </h1>
            <div className="space-y-4">
              <div className="flex items-center">
                <h1 className="font-bold text-gray-700 min-w-32">Role:</h1>
                <span className="text-gray-600 ml-4">{singleJob.title}</span>
              </div>
              <div className="flex items-center">
                <h1 className="font-bold text-gray-700 min-w-32">Location:</h1>
                <span className="text-gray-600 ml-4">{singleJob.location}</span>
              </div>
              <div className="flex items-center">
                <h1 className="font-bold text-gray-700 min-w-32">Salary:</h1>
                <span className="text-gray-600 ml-4">${singleJob.salary}k</span>
              </div>
              <div className="flex items-center">
                <h1 className="font-bold text-gray-700 min-w-32">Job Type:</h1>
                <span className="text-gray-600 ml-4">{singleJob.jobType}</span>
              </div>
              <div className="flex items-center">
                <h1 className="font-bold text-gray-700 min-w-32">
                  Experience:
                </h1>
                <span className="text-gray-600 ml-4">
                  {singleJob.experienceLevel} Years
                </span>
              </div>
              <div className="flex items-center">
                <h1 className="font-bold text-gray-700 min-w-32">
                  Total Applicants:
                </h1>
                <span className="text-gray-600 ml-4">
                  {singleJob.applications?.length || 0} Person
                </span>
              </div>
              <div className="flex items-center">
                <h1 className="font-bold text-gray-700 min-w-32">Post Date:</h1>
                <span className="text-gray-600 ml-4">
                  {singleJob.createdAt?.split("T")[0]}
                </span>
              </div>
              <div className="flex items-center">
                <h1 className="font-bold text-gray-700 min-w-32">
                  About Company:
                </h1>
                <span className="text-gray-600 ml-4">
                  {singleJob.company?.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
