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

  // ✅ Create isApplied state safely (useMemo ensures it updates correctly)
  const isInitiallyApplied = useMemo(() => {
    return (
      singleJob?.applications?.some(
        (application) => application.applicant === user?._id
      ) || false
    );
  }, [singleJob, user]);

  const [isApplied, setIsApplied] = useState(isInitiallyApplied);

  // ✅ Update isApplied whenever job or user changes
  React.useEffect(() => {
    setIsApplied(isInitiallyApplied);
  }, [isInitiallyApplied]);

  // ✅ APPLY JOB HANDLER
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
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">{singleJob.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
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

          <div>
            <Button disabled={isApplied} onClick={!isApplied ? applyJobHandler : undefined}>
              {isApplied ? "Already Applied!" : "Apply Now"}
            </Button>
          </div>
        </div>

        <div>
          <h1 className="border-b-2 border-b-gray-500 font-medium py-4">
            Job Description
          </h1>
          <div>
            <h1 className="font-bold my-1">
              Role:{" "}
              <span className="pl-4 font-normal text-gray-700">
                {singleJob.title}
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Location:{" "}
              <span className="pl-4 font-normal text-gray-700">
                {singleJob.location}
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Salary:{" "}
              <span className="pl-4 font-normal text-gray-700">
                {singleJob.salary}k
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Job Type:{" "}
              <span className="pl-4 font-normal text-gray-700">
                {singleJob.jobType}
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Experience:{" "}
              <span className="pl-4 font-normal text-gray-700">
                {singleJob.experienceLevel} Years
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Total Applicants:{" "}
              <span className="pl-4 font-normal text-gray-700">
                {singleJob.applications?.length || 0} Person
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Post Date:{" "}
              <span className="pl-4 font-normal text-gray-700">
                {singleJob.createdAt?.split("T")[0]}
              </span>
            </h1>
            <h1 className="font-bold my-1">
              About Company:{" "}
              <span className="pl-4 font-normal text-gray-700">
                {singleJob.company?.name}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
