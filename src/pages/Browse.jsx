import Footer from "@/components/components_client/Footer";
import JobsPageJob from "@/components/components_client/JobsPageJob";
import Navbar from "@/components/components_client/Navbar";
import React from "react";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const Browse = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results {randomJobs.length}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {randomJobs.map((item, index) => {
            return <JobsPageJob key={index}/>;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Browse;
