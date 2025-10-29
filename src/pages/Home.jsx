import Categories from "@/components/components_client/Categories";
import Footer from "@/components/components_client/Footer";
import Headers from "@/components/components_client/Headers";
import LatestJob from "@/components/components_client/LatestJob";
import Navbar from "@/components/components_client/Navbar";
import React from "react";

const Home = () => {
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
