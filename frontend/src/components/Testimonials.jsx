import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoDiamondSharp } from "react-icons/io5";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";

const Testimonials = () => {
  return (
    <section className="m-4 mb-5">
      <div className="row mx-2">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3  d-flex">
          <div className="mt-1 p-1">
            <FaMagnifyingGlass />
          </div>
          <div className="p-1">
            <div className="fw-bolder">24 X 7 Search</div>
            <p className="lh-base text-justify mt-2">
              Search Products and sellers anytime 24 X 7 throughout the year.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex">
          <div className="mt-1 p-1">
            <IoDiamondSharp />
          </div>
          <div className="p-1">
            <div className="fw-bolder">Latest Designs</div>
            <p className="lh-base text-justify mt-2">
              Handpicked Latest and Trending designs that belong to the current
              era.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex">
          <div className="mt-1 p-1">
            <BsGlobeCentralSouthAsia />
          </div>
          <div className="p-1">
            <div className="fw-bolder">PAN India</div>
            <p className="lh-base text-justify mt-2">
              We make sure to handpick premium products and sellers from all
              over India.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex">
          <div className="mt-1 p-1">
            <BsCashCoin />
          </div>
          <div className="p-1">
            <div className="fw-bolder">No Commission</div>
            <p className="lh-base text-justify mt-2">
              We do not charge any commission or transaction fees for any
              transaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
