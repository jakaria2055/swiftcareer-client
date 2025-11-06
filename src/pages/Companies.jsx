import CompaniesTable from "@/components/adminComponents/CompaniesTable";
import Navbar from "@/components/components_client/Navbar";
import { Button } from "@/components/ui/button";
import useGetAllCompany from "@/hooks/useGetAllCompany";
import { searchCompanyByText } from "@/redux/companySlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Companies = () => {
  useGetAllCompany();

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchCompanyByText(input));
  }, [input]);
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto my-10 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between my-8 gap-4">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            className="w-full sm:w-64 px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none bg-white/50 backdrop-blur-sm"
            placeholder="Filter by Company Name..."
          />
          <Link to={"/admin/companies/create"}>
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-200 active:scale-95">
              Add Company
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <CompaniesTable />
        </div>
      </div>
    </>
  );
};

export default Companies;
