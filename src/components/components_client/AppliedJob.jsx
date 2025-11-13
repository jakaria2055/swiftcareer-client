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
import { Badge } from "../ui/badge";
import { useSelector } from "react-redux";

const AppliedJob = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);
  console.log("All applied jobs:", allAppliedJobs);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <Table>
        <TableCaption className="py-4 text-gray-500">
          Recent Applied Jobs - Showing last applied applications
        </TableCaption>
        <TableHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-semibold text-gray-900 py-4">
              Date
            </TableHead>
            <TableHead className="font-semibold text-gray-900 py-4">
              Job Title
            </TableHead>
            <TableHead className="font-semibold text-gray-900 py-4">
              Company
            </TableHead>
            <TableHead className="font-semibold text-gray-900 py-4 text-right">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length <= 0 ? (
            <span className="text-red-500 font-semibold">
              You Have Not Applied Any Jobs!
            </span>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow
                key={appliedJob?._id}
                className="hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100"
              >
                <TableCell className="py-4 font-medium text-gray-700">
                  {appliedJob.createdAt.split("T")[0]}
                </TableCell>
                <TableCell className="py-4 text-gray-900 font-semibold">
                  {appliedJob?.job?.title}
                </TableCell>
                <TableCell className="py-4 text-gray-600">
                  {appliedJob?.job?.company?.name}
                </TableCell>
                <TableCell className="py-4 text-right">
                  <Badge
                    className={`${
                      appliedJob?.status === "rejected"
                        ? "bg-red-600"
                        : appliedJob?.status === "accepted"
                        ? "bg-green-600"
                        : "bg-gray-600"
                    } px-3 py-1.5 font-medium border-0 rounded-full`}
                  >
                    {appliedJob?.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJob;
