import { setAllAdminJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useGetAdminJobs = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllAdminJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/getadminjobs`, {
          withCredentials: true,
        });
        if (res.data.status) {
          dispatch(setAllAdminJobs(res.data.jobs));
        } else {
          setError("Failed to fetch job!");
        }
      } catch (error) {
        console.log("Error fetching jobs:", error);
        setError(error.message || "An error occuredin fetch job!");
      } finally {
        setLoading(false);
      }
    };

    fetchAllAdminJobs();
  }, [dispatch]);

  return { loading, error };
};

export default useGetAdminJobs;
