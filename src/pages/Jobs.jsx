import FilterCard from "@/components/components_client/FilterCard";
import Footer from "@/components/components_client/Footer";
import JobsPageJob from "@/components/components_client/JobsPageJob";
import Navbar from "@/components/components_client/Navbar";
import useUserGetJob from "@/hooks/useUserGetJob";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const Jobs = () => {
  useUserGetJob();

  const { alljobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(alljobs);

  useEffect(() => {
    if (!searchedQuery || searchedQuery.trim() === "") {
      setFilterJobs(alljobs);
      return;
    }

    const query = searchedQuery.toLowerCase();

    const filteredJobs = alljobs.filter((job) => {
      return (
        job.title?.toLowerCase().includes(query) ||
        job.description?.toLowerCase().includes(query) ||
        job.location?.toLowerCase().includes(query) ||
        job.salary?.toString().toLowerCase().includes(query) ||
        job.experienceLevel?.toString().toLowerCase().includes(query)
      );
    });

    setFilterJobs(filteredJobs);
  }, [alljobs, searchedQuery]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/5">
            <FilterCard />
          </div>

          <div className="w-full lg:w-4/5">
            <AnimatePresence mode="wait">
              {filterJobs.length <= 0 ? (
                <motion.div
                  key="no-jobs"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex items-center justify-center h-64"
                >
                  <span className="text-gray-500 text-lg">Job Not Found!</span>
                </motion.div>
              ) : (
                <motion.div
                  key="jobs-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="max-h-[88vh] overflow-y-auto pb-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                      {filterJobs.map((job, index) => (
                        <motion.div
                          key={job._id}
                          variants={itemVariants}
                          layout
                          initial="hidden"
                          animate="visible"
                          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                          whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <JobsPageJob job={job} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Jobs;