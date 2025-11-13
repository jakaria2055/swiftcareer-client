import Footer from "@/components/components_client/Footer";
import JobCard from "@/components/components_client/JobCard";
import JobsPageJob from "@/components/components_client/JobsPageJob";
import Navbar from "@/components/components_client/Navbar";
import useUserGetJob from "@/hooks/useUserGetJob";
import { setSearchedQuery } from "@/redux/jobSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Browse = () => {
  useUserGetJob();
  const dispatch = useDispatch();

  const { alljobs } = useSelector((store) => store.job);

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results {alljobs.length}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {alljobs.map((job) => {
            return <JobCard key={job._id} job={job} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Browse;
