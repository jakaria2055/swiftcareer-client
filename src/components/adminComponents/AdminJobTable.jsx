import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal, Trash2, Eye, Briefcase } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Badge } from "../ui/badge";

const AdminJobTable = () => {
  const navigate = useNavigate();
  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);

  const [filterJobs, setFilterJobs] = useState(allAdminJobs);

  useEffect(() => {
    const filtered = allAdminJobs.filter((job) => {
      if (!searchJobByText) return true;
      return job.title?.toLowerCase().includes(searchJobByText.toLowerCase());
    });
    setFilterJobs(filtered);
  }, [allAdminJobs, searchJobByText]);



  return (
    <>
      <Table>
        <TableCaption className="py-6 text-gray-500 bg-gradient-to-r from-gray-50 to-indigo-50 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-indigo-600" />
              <span>Showing {filterJobs.length} of {allAdminJobs.length} jobs</span>
            </div>
            <span>Manage all job postings efficiently</span>
          </div>
        </TableCaption>

        <TableHeader className="bg-gradient-to-r from-indigo-500 to-purple-500">
          <TableRow className="hover:bg-transparent border-none">
            <TableHead className="font-semibold text-white py-5 text-left">
              Job Details
            </TableHead>
            <TableHead className="font-semibold text-white py-5">
              Company
            </TableHead>
            <TableHead className="font-semibold text-white py-5">
              Posted Date
            </TableHead>
            <TableHead className="font-semibold text-white py-5 text-right">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filterJobs && filterJobs.length > 0 ? (
            filterJobs.map((job, index) => (
              <TableRow
                key={job._id || index}
                className="hover:bg-indigo-50/30 transition-colors duration-200 border-b border-gray-100 last:border-b-0 group"
              >
                {/* Job Details */}
                <TableCell className="py-5">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900 text-lg group-hover:text-indigo-700 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-700 border-0 text-xs">
                        {job.type || 'Full-time'}
                      </Badge>
                      <Badge className="bg-green-100 text-green-700 border-0 text-xs">
                        {job.location || 'Remote'}
                      </Badge>
                    </div>
                  </div>
                </TableCell>

                {/* Company Name */}
                <TableCell className="py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 font-bold text-xs">
                        {job.company?.name?.charAt(0) || 'C'}
                      </span>
                    </div>
                    <span className="font-medium text-gray-700">
                      {job.company?.name || 'Unknown Company'}
                    </span>
                  </div>
                </TableCell>

                {/* Posted Date */}
                <TableCell className="py-5">
                  <div className="">
                    <div className="text-gray-900 font-medium">
                      {new Date(job.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {new Date(job.createdAt).getFullYear()}
                    </div>
                  </div>
                </TableCell>


                {/* Action Buttons */}
                <TableCell className="py-5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => navigate(`/jobs/${job._id}`)}
                      className="p-2 hover:bg-indigo-100 rounded-lg transition-colors duration-200 text-gray-600 hover:text-indigo-700"
                      title="View Job"
                    >
                    </button>
                    
                    <Popover>
                      <PopoverTrigger asChild>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-gray-600 hover:text-gray-800">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </PopoverTrigger>

                      <PopoverContent className="w-48 p-3 space-y-2 border border-gray-200 shadow-lg">
                        <button
                          onClick={() => navigate(`/admin/jobs/edit/${job._id}`)}
                          className="flex items-center gap-3 w-full p-2 hover:bg-indigo-50 rounded-lg transition-colors duration-200 text-gray-700 hover:text-indigo-700"
                        >
                          <Edit2 className="w-4 h-4" />
                          <span className="text-sm font-medium">Edit Job</span>
                        </button>
                        <button className="flex items-center gap-3 w-full p-2 hover:bg-red-50 rounded-lg transition-colors duration-200 text-gray-700 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                          <span className="text-sm font-medium">Delete Job</span>
                        </button>
                      </PopoverContent>
                    </Popover>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan="5"
                className="text-center py-12"
              >
                <div className="flex flex-col items-center gap-3 text-gray-400">
                  <Briefcase className="w-12 h-12" />
                  <div>
                    <p className="font-semibold text-lg">No jobs found</p>
                    <p className="text-sm">Get started by posting your first job</p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default AdminJobTable;