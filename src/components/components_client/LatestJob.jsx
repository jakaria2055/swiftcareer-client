import React from "react";
import JobCard from "./JobCard";
import { useSelector } from "react-redux";

const LatestJob = () => {
  const { alljobs } = useSelector((store) => store.job);

  return (
    <div className="py-16 px-4 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Latest & Top{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Job Opening
          </span>{" "}
          Over The World
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Thousands of opportunities waiting for talented students and
          recruiters like you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alljobs.length <= 0 ? (
          <>
            <span>No Job Available</span>
          </>
        ) : (
          alljobs
            .slice(0, 6)
            .map((job) => <JobCard key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default LatestJob;
