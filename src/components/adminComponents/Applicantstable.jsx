import React from "react";
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
import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import axios from "axios";
import { APPLICATION_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";

const shortList = ["Accepted", "Rejected"];

const Applicantstable = () => {
  const { applications } = useSelector((store) => store.application);

  const applicants = applications?.applications || [];

  const statusHandler = async (status, id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `${APPLICATION_API_ENDPOINT}/status/${id}/update`,
        { status }
      );
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <Table>
        <TableCaption className="py-4 text-gray-500 bg-gray-50">
          List of recent applied users - Total {applicants.length} applicants
        </TableCaption>

        <TableHeader className="bg-gray-50">
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-semibold text-gray-900 py-4">Full Name</TableHead>
            <TableHead className="font-semibold text-gray-900 py-4">Email</TableHead>
            <TableHead className="font-semibold text-gray-900 py-4">Contact</TableHead>
            <TableHead className="font-semibold text-gray-900 py-4">Applied On</TableHead>
            <TableHead className="font-semibold text-gray-900 py-4">Resume</TableHead>
            <TableHead className="font-semibold text-gray-900 py-4">Job Title</TableHead>
            <TableHead className="font-semibold text-gray-900 py-4">Company</TableHead>
            <TableHead className="font-semibold text-gray-900 py-4 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {applicants.length > 0 ? (
            applicants.map((app, index) => (
              <TableRow key={app._id || index} className="hover:bg-gray-50 border-b border-gray-100">
                <TableCell className="py-4 font-medium text-gray-900">
                  {app.applicant?.fullname || "N/A"}
                </TableCell>
                <TableCell className="py-4 text-gray-700">
                  {app.applicant?.email || "N/A"}
                </TableCell>
                <TableCell className="py-4 text-gray-700">
                  {app.applicant?.phoneNumber || "N/A"}
                </TableCell>
                <TableCell className="py-4 text-gray-700">
                  {new Date(app.createdAt).toLocaleDateString("en-GB")}
                </TableCell>
                <TableCell className="py-4">
                  {app.applicant?.profile?.resume ? (
                    <a
                      className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium text-sm"
                      href={app.applicant?.profile?.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm">Not Available</span>
                  )}
                </TableCell>
                <TableCell className="py-4 text-gray-700">
                  {applications?.title || "N/A"}
                </TableCell>
                <TableCell className="py-4 text-gray-700">
                  {applications?.company?.name || "N/A"}
                </TableCell>

                <TableCell className="py-4 text-right">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreHorizontal className="w-4 h-4 text-gray-600" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40 p-2">
                      {shortList.map((status, index) => (
                        <div
                          onClick={() => statusHandler(status, app?._id)}
                          key={index}
                          className="flex items-center gap-3 py-2 px-3 hover:bg-gray-100 rounded-md cursor-pointer transition-colors"
                        >
                          <input 
                            type="radio" 
                            name={`status-${app._id}`} 
                            value={status} 
                            className="w-4 h-4"
                          />
                          <label className="text-sm text-gray-700 cursor-pointer">
                            {status}
                          </label>
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan="8"
                className="text-center py-8 text-gray-500"
              >
                <div className="flex flex-col items-center">
                  <MoreHorizontal className="w-12 h-12 text-gray-300 mb-2" />
                  <p className="font-medium">No applicants found</p>
                  <p className="text-sm">Applications will appear here when candidates apply</p>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Applicantstable;