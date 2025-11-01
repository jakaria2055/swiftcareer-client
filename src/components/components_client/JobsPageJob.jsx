import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";

const JobsPageJob = () => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-500">3 days ago</p>
        <Button variant={"outline"} className={"rounded-full"} size={"icon"}>
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex items-start gap-3 mb-4">
        <Avatar className="w-12 h-12 rounded-xl border">
          <AvatarImage src="/image/avatar.png" alt="Company" />
        </Avatar>
        <div className="flex-1">
          <h2 className="font-bold text-gray-900 text-lg">Company Name</h2>
          <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Bangladesh
          </p>
        </div>
      </div>

      {/* Job Details */}
      <div className="mb-4 flex-1">
        <h1 className="text-xl font-bold text-gray-900 mb-2">Senior Frontend Developer</h1>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          We are looking for a skilled Frontend Developer with React
          experience to join our dynamic team and build amazing user
          experiences.
        </p>
      </div>

      {/* Tags */}
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

      {/* Buttons */}
      <div className="flex gap-3 mt-auto">
        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 active:scale-95">
          Save For Later
        </button>
        <button className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 active:scale-95">
          Details
        </button>
      </div>
    </div>
  );
};

export default JobsPageJob;