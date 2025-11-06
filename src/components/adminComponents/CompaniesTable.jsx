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
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal, Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  const navigate = useNavigate();
  const { companies, searchCompanyByText } = useSelector(
    (store) => store.company
  );

  const [filterCompany, setFilterCompany] = useState(companies);

  useEffect(() => {
    const filteredCompany =
      companies.length >= 0 &&
      companies.filter((company) => {
        if (!searchCompanyByText) {
          return true;
        }
        return company.name
          ?.toLowerCase()
          .includes(searchCompanyByText.toLowerCase());
      });
      setFilterCompany(filteredCompany)
  }, [companies, searchCompanyByText]);

  return (
    <>
      <Table>
        <TableCaption className="py-4 text-gray-500 bg-gray-50">
          Recent Registered Company List - Showing all registered companies
        </TableCaption>

        <TableHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
          <TableRow className="hover:bg-transparent border-b border-gray-200">
            <TableHead className="font-semibold text-gray-900 py-4 text-center">
              Logo
            </TableHead>
            <TableHead className="font-semibold text-gray-900 py-4">
              Company Name
            </TableHead>
            <TableHead className="font-semibold text-gray-900 py-4">
              Registration Date
            </TableHead>
            <TableHead className="font-semibold text-gray-900 py-4 text-right">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {companies && companies.length > 0 ? (
            filterCompany.map((company, index) => (
              <TableRow
                key={company._id || index}
                className="hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
              >
                {/* Company Logo */}
                <TableCell className="py-4 text-center">
                  <Avatar className="w-12 h-12 mx-auto border-2 border-gray-200">
                    <AvatarImage
                      src={company.logo || "https://via.placeholder.com/100"}
                      alt={`${company.name} logo`}
                      className="hover:scale-105 transition-transform duration-300"
                    />
                  </Avatar>
                </TableCell>

                {/* Company Name */}
                <TableCell className="py-4 font-semibold text-gray-900">
                  {company.name}
                </TableCell>

                {/* Registration Date */}
                <TableCell className="py-4 text-gray-600">
                  {new Date(company.createdAt).toLocaleDateString("en-GB")}
                </TableCell>

                {/* Action Buttons */}
                <TableCell className="py-4 text-right">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="inline-flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                        <MoreHorizontal className="w-5 h-5 text-gray-600" />
                      </button>
                    </PopoverTrigger>

                    <PopoverContent className="w-40 p-3 space-y-2">
                      <button onClick={()=>navigate(`/admin/companies/${company._id}`)} className="flex items-center gap-3 w-full p-2 hover:bg-indigo-50 rounded-lg transition-colors duration-200 text-gray-700 hover:text-indigo-700">
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
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan="4"
                className="text-center py-6 text-gray-500 italic"
              >
                No companies found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default CompaniesTable;
