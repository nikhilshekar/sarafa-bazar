import React from "react";
import Sponsor from "../assets/sponsors.png";

const Sponsors = () => {
  return (
    <section className="mt-8 px-12">
        <h4 className="h4 text-center"><strong>Sponsors</strong></h4>
      <img src={Sponsor} className="img-fluid" alt="..."></img>
    </section>
  );
};

export default Sponsors;
