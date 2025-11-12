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

const shortList = ["Accepted", "Rejected"];

const Applicantstable = () => {
  // ✅ Get data from Redux
  const { applications } = useSelector((store) => store.application);

  // ✅ Extract the applicants safely
  const applicants = applications?.applications || [];

  return (
    <div>
      <Table>
        <TableCaption>List of recent applied users.</TableCaption>

        {/* ✅ Table Header */}
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Applied On</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Job Title</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        {/* ✅ Table Body */}
        <TableBody>
          {applicants.length > 0 ? (
            applicants.map((app, index) => (
              <TableRow key={app._id || index}>
                <TableCell>{app.applicant?.fullname || "N/A"}</TableCell>
                <TableCell>{app.applicant?.email || "N/A"}</TableCell>
                <TableCell>{app.applicant?.phoneNumber || "N/A"}</TableCell>
                <TableCell>
                  {new Date(app.createdAt).toLocaleDateString("en-GB")}
                </TableCell>
                <TableCell>
                  {app.applicant?.profile?.resume}
                </TableCell>
                <TableCell>{applications?.title || "N/A"}</TableCell>
                <TableCell>{applications?.company?.name || "N/A"}</TableCell>

                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal className="cursor-pointer text-gray-600 hover:text-indigo-600 transition-colors" />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      {shortList.map((status, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 py-1 hover:bg-gray-100 px-2 rounded-md cursor-pointer"
                        >
                          <input type="radio" name={`status-${index}`} value={status} />
                          <label>{status}</label>
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="8" className="text-center text-gray-500 py-6 italic">
                No applicants found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Applicantstable;
