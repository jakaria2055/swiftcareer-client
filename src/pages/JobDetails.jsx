import Navbar from "@/components/components_client/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";

const JobDetails = () => {
  const isApplied = true;
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">Title</h1>
            <div className="">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  10 Position
                </span>
                <span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  $30K
                </span>
                <span className="px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                  Remote
                </span>
                <span className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                  Full Time
                </span>
              </div>
            </div>
          </div>

          <div>
            <Button
              disabled={isApplied}
              className={`rounded-md ${
                isApplied
                  ? "bg-red-400 cursor-not-allowed"
                  : "bg-blue-400 hover:bg-blue-500 transform duration-300"
              } `}
            >
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
                Software Engineer
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Location:{" "}
              <span className="pl-4 font-normal text-gray-700">Remote</span>
            </h1>
            <h1 className="font-bold my-1">
              Salary:{" "}
              <span className="pl-4 font-normal text-gray-700">50$k-80$k</span>
            </h1>
            <h1 className="font-bold my-1">
              Job Type:{" "}
              <span className="pl-4 font-normal text-gray-700">Full Time</span>
            </h1>
            <h1 className="font-bold my-1">
              Experience{" "}
              <span className="pl-4 font-normal text-gray-700">3+ years</span>
            </h1>
            <h1 className="font-bold my-1">
              Total Applicant:{" "}
              <span className="pl-4 font-normal text-gray-700">10</span>
            </h1>
            <h1 className="font-bold my-1">
              About Company:{" "}
              <span className="pl-4 font-normal text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                architecto.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
