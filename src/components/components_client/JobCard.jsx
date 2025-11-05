import React from 'react'

const JobCard = ({job}) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300">
      {/* Company Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-700 font-bold text-sm">
            CN
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-lg">{job?.company?.name}</h2>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {job?.company?.location}
            </p>
          </div>
        </div>
      </div>

      {/* Job Details */}
      <div className="mb-4">
        <h1 className="text-xl font-bold text-gray-900 mb-2">{job?.title}</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          {job?.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
          {job?.position} Position
        </span>
        <span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
          ${job?.salary}
        </span>
        <span className="px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
          {job?.location}
        </span>
        <span className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
          {job?.jobType}
        </span>
      </div>

      {/* Apply Button */}
      <button className="w-full mt-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 active:scale-95">
        Apply Now
      </button>
    </div>
  )
}

export default JobCard