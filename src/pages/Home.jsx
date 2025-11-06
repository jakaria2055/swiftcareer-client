import Categories from "@/components/components_client/Categories";
import Footer from "@/components/components_client/Footer";
import Headers from "@/components/components_client/Headers";
import LatestJob from "@/components/components_client/LatestJob";
import Navbar from "@/components/components_client/Navbar";
import useUserGetJob from "@/hooks/useUserGetJob";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  useUserGetJob();

  useEffect(() => {
    if (user?.role === "Recruiter") {
      navigate("/admin/companies");
    }
  });
  
  return (
    <>
      <Navbar />
      <Headers />
      <Categories />
      <LatestJob />
      <Footer />
    </>
  );
};

export default Home;
