import { setAllCompanyJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useGetJobByCompany = (companyId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCompanyJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/getCompanyJob/${companyId}`, {
          withCredentials: true,
        });
        if (res.data.status) {
          dispatch(setAllCompanyJobs(res.data.jobs));
        } else {
          setError("Failed to fetch job!");
        }
      } catch (error) {
        console.log("Error fetching jobs:", error);
        setError(error.message || "An error occurred in fetch job!");
      } finally {
        setLoading(false);
      }
    };

    fetchAllCompanyJobs();
  }, [dispatch]);

  return { loading, error };
};

export default useGetJobByCompany;
