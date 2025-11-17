import { COMPANY_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAllCompanies } from "@/redux/companySlice";

const useGetAllRegisterCompany = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCompany = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${COMPANY_API_ENDPOINT}/getAllCompanies`, {
          withCredentials: true,
        });

        if (res.data.success && Array.isArray(res.data.allCompanies)) {
          dispatch(setAllCompanies(res.data.allCompanies));
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

    fetchAllCompany();
  }, [dispatch]);

  return { loading, error };
};

export default useGetAllRegisterCompany;
