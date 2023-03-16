import React from "react";
import Banner from "../Banner/Banner";
import BestDeals from "../BestDeals/BestDeals";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import NewArrivals from "../NewArrivals/NewArrivals";
import Slider from "../Slider/Slider";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Navbar />
      <Banner />
      <Slider />
      <NewArrivals />
      <BestDeals />
      <Footer />
    </div>
  );
};

export default Home;
