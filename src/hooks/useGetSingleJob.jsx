import { setSingleJob } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetSingleJob = (jobId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    const fetchSingleJob = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.status) {
          dispatch(setSingleJob(res.data.job)); 
        } else {
          setError("Failed to fetch job!");
        }
      } catch (error) {
        console.log("Error fetching job:", error);
        setError(error.message || "An error occurred!");
      } finally {
        setLoading(false);
      }
    };

    if (jobId) fetchSingleJob();
  }, [dispatch, jobId, user?._id]);

  return { loading, error };
};

export default useGetSingleJob;
