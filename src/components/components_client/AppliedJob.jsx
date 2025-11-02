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

const AppliedJob = () => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <Table>
        <TableCaption className="py-4 text-gray-500">Recent Applied Jobs - Showing last 9 applications</TableCaption>
        <TableHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-semibold text-gray-900 py-4">Date</TableHead>
            <TableHead className="font-semibold text-gray-900 py-4">Job Title</TableHead>
            <TableHead className="font-semibold text-gray-900 py-4">Company</TableHead>
            <TableHead className="font-semibold text-gray-900 py-4 text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {[1,2,3,4,5,6,7,8,9].map((item, index) => (
                <TableRow key={index} className="hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100">
                    <TableCell className="py-4 font-medium text-gray-700">02-11-2025</TableCell>
                    <TableCell className="py-4 text-gray-900 font-semibold">Backend Developer</TableCell>
                    <TableCell className="py-4 text-gray-600">Ostad soft ltd.</TableCell>
                    <TableCell className="py-4 text-right">
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-200 px-3 py-1.5 font-medium border-0 rounded-full">
                        Selected
                      </Badge>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJob;