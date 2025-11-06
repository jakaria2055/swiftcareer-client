import { COMPANY_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCompanies } from "@/redux/companySlice";

const useGetAllCompany = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${COMPANY_API_ENDPOINT}/get`, {
          withCredentials: true,
        });

        if (res.data.success && Array.isArray(res.data.companies)) {
          dispatch(setCompanies(res.data.companies));
        } else {
          setError("Failed to fetch companies!");
        }
      } catch (error) {
        console.log("Error fetching companies:", error);
        setError(error.message || "An error occurred while fetching data!");
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, [dispatch]);

  return { loading, error };
};

export default useGetAllCompany;
