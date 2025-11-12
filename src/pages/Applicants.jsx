import Applicantstable from "@/components/adminComponents/Applicantstable";
import Navbar from "@/components/components_client/Navbar";
import { setSingleApplication } from "@/redux/applicationSlice";
import { APPLICATION_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Applicants = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { applications } = useSelector((store) => store.application);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_ENDPOINT}/${id}/applicants`,
          {
            withCredentials: true,
          }
        );

        dispatch(setSingleApplication(res.data.job));
      } catch (error) {
        console.log(error);
      }
    };

    fetchApplicants();
  }, [id, dispatch]);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto mt-5">
        <h3 className="text-xl font-bold text-gray-800">
          Applicants ({applications?.applications?.length || 0})
        </h3>

        <hr className="mt-1 font-bold text-2xl" />

        <div className="mt-5">
          <Applicantstable applicants={applications?.applications || []} />
        </div>
      </div>
    </>
  );
};

export default Applicants;
