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

      <div className="max-w-7xl mx-auto mt-8 px-4">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Applicants ({applications?.applications?.length || 0})
          </h3>
          <p className="text-gray-600 mb-6">Manage and review all job applications</p>

          <hr className="mb-6 border-gray-300" />

          <div className="mt-2">
            <Applicantstable applicants={applications?.applications || []} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Applicants;