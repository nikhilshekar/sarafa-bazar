import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Sponsors from "../components/Sponsors";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <main className="">
      <Carousel />
      <Sponsors />
      <Hero />
      <Testimonials />
    </main>
  );
};

export default Home;
