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
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal, Trash2 } from "lucide-react";

const CompaniesTable = () => {
  return (
    <>
      <Table>
        <TableCaption className="py-4 text-gray-500 bg-gray-50">Recent Registered Company List - Showing all registered companies</TableCaption>
        <TableHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
          <TableRow className="hover:bg-transparent border-b border-gray-200">
            <TableHead className="font-semibold text-gray-900 py-4 text-center">Logo</TableHead>
            <TableHead className="font-semibold text-gray-900 py-4">Company Name</TableHead>
            <TableHead className="font-semibold text-gray-900 py-4">Registration Date</TableHead>
            <TableHead className="font-semibold text-gray-900 py-4 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <TableRow key={index} className="hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0">
              <TableCell className="py-4 text-center">
                <Avatar className="w-12 h-12 mx-auto border-2 border-gray-200">
                  <AvatarImage
                    src="https://i.ibb.co.com/6RWWmt8P/boliviainteligente-V8-F-k-Uzqk0w-unsplash.jpg"
                    alt="Company logo"
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </Avatar>
              </TableCell>
              <TableCell className="py-4 font-semibold text-gray-900">Google pvt Ltd.</TableCell>
              <TableCell className="py-4 text-gray-600">01-06-2003</TableCell>
              <TableCell className="py-4 text-right">
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="inline-flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                      <MoreHorizontal className="w-5 h-5 text-gray-600" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 p-3 space-y-2">
                    <button className="flex items-center gap-3 w-full p-2 hover:bg-indigo-50 rounded-lg transition-colors duration-200 text-gray-700 hover:text-indigo-700">
                      <Edit2 className="w-4 h-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex items-center gap-3 w-full p-2 hover:bg-red-50 rounded-lg transition-colors duration-200 text-gray-700 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default CompaniesTable;