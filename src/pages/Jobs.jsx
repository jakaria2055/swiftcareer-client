import FilterCard from "@/components/components_client/FilterCard";
import Footer from "@/components/components_client/Footer";
import JobsPageJob from "@/components/components_client/JobsPageJob";
import Navbar from "@/components/components_client/Navbar";
import React from "react";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ,15];

const Jobs = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/5"> {/* Changed from 1/4 to 1/5 (20%) */}
            <FilterCard />
          </div>
          {jobsArray.length <= 0 ? (
            <div className="flex-1 flex items-center justify-center h-64">
              <span className="text-gray-500 text-lg">Job Not Found!</span>
            </div>
          ) : (
            <div className="w-full lg:w-4/5"> {/* Changed from flex-1 to w-4/5 (80%) */}
              <div className="max-h-[88vh] overflow-y-auto pb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobsArray.map((job, index) => (
                    <JobsPageJob key={index} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Jobs;