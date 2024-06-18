import React from "react";
import gold from "../assets/gold.png";
import italian from "../assets/italian.png";
import platinum from "../assets/platinum.png";
import czcasting from "../assets/czcasting.png";
import diamond from "../assets/diamond.png";
import silver from "../assets/silver.png";
import stone from "../assets/stone.png";
import antique from "../assets/antique.png";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="p-12">
      <h4 className="h4 text-center">
        <strong>
          India Find Leading Jewellary Manufacturers & Wholesalers
        </strong>
      </h4>
      <div className="container mt-10">
        <div className="row justify-content-around">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NavLink to={"/product?type=gold"}>
              <img src={gold} className="img-thumbnail" alt="..." />
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NavLink to={"/product?type=silver"}>
              <img src={silver} className="img-thumbnail" alt="..." />
            </NavLink>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NavLink to={"/product?type=turkish"}>
              <img src={italian} className="img-thumbnail" alt="..." />
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-66">
            <NavLink to={"/product?type=czcasting"}>
              <img src={czcasting} className="img-thumbnail" alt="..." />
            </NavLink>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NavLink to={"/product?type=antique"}>
              <img src={antique} className="img-thumbnail" alt="..." />
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NavLink to={"/product?type=stone"}>
              <img src={stone} className="img-thumbnail" alt="..." />
            </NavLink>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NavLink to={"/product?type=platinum"}>
              <img src={platinum} className="img-thumbnail" alt="..." />
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NavLink to={"/product?type=diamond"}>
              <img src={diamond} className="img-thumbnail" alt="..." />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <NavLink
          to={"/product?type=all"}
          className={"btn_secondary_rounded   medium-16 text-xs"}
        >
          View All Products
        </NavLink>
      </div>
    </section>
  );
};

export default Hero;
