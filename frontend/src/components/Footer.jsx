import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaFacebookF,FaInstagramSquare,FaLinkedin,FaYoutube    } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <section
      className="footer-section p-4"
      style={{ backgroundColor: "#081c3f" }}
    >
      <div className="row pl-5">
        <div className="col m-2 pl-4">
          <div className="text-warning fw-bold fs-5">About Us</div>
          <div className="mt-2 text-light fs-6 fw-lighter pl-2">
            <div>
              <Link to={"/about-us"}> About Us</Link>
            </div>
            <div>
              <Link to={"/contact-us"}> Contact Us</Link>
            </div>
            <div>
              <Link to={"/why-us"}> Why Us</Link>
            </div>
            <div>
              <Link to={"/press"}> Press</Link>
            </div>
            <div>
              <Link to={"/why-us"}> Shree Nakoda Creation</Link>
            </div>
          </div>
        </div>
        <div className="col m-2 pl-4">
          <div className="text-warning fw-bold fs-5">For Sellers</div>
          <div className="mt-2 text-light fs-6 fw-lighter pl-2">
            <div>
              <Link to={"/"}> Become A Seller</Link>
            </div>
            <div>
              <Link to={"/"}> Membership Plan</Link>
            </div>
            <div>
              <Link to={"/"}> Backend Demo Videos</Link>
            </div>
            <div>
              <Link to={"/press"}>Green India</Link>
            </div>
          </div>
        </div>
        <div className="col m-2 pl-4">
          <div className="text-warning fw-bold fs-5">Shop</div>
          <div className="mt-2 text-light fs-6 fw-lighter pl-2">
            <div>
              <Link to={"/"}> Shop.sarafabazar.in</Link>
            </div>
          </div>
        </div>
        <div className="col m-2 pl-4">
          <div className="text-warning fw-bold fs-5">Contact Us</div>
          <div className="mt-2 text-light fs-6 fw-lighter pl-2">
            <div>
              <FaHome className="d-inline mr-1" /> 715, Jewel World, Kalbadevi
              Road, Mumbai- 400 002
            </div>
            <div>
              <MdEmail className="d-inline mr-1" /> contact@gmail.com
            </div>
            <div>
              <FaPhone className="d-inline mr-1" /> 987654321
            </div>
          </div>
        </div>
        <div className="col m-2 pl-4">
          <div className="text-warning fw-bold fs-5">Follow Us</div>
          <div className="mt-2 text-light fs-6 fw-lighter">
            <div>
              <FaFacebookF className="mx-1 d-inline" />
              <FaInstagramSquare className="mx-1 d-inline"/>
              <FaLinkedin className="mx-1 d-inline" />
              <FaYoutube className="mx-1 d-inline"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
