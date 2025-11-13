import { setAllAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useGetAppliedJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const res = await axios.get(`${APPLICATION_API_ENDPOINT}/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllAppliedJobs(res.data.applications));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAppliedJobs();
  }, [dispatch]);

  return null;
};
