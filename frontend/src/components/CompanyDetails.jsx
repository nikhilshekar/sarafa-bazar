import React, { useState, useEffect, useRef } from "react";
import { useLocation, NavLink } from "react-router-dom";
import imageNotFound from "../assets/imageNotFound.png";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";

const CompanyDetails = () => {
  const form = useRef();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [data, setData] = useState([]);
  const [productList, setProductList] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const emailRef = useRef();
  const nameRef = useRef();
  const messsageRef = useRef();

  // access query parameters
  const paramValue = queryParams.get("id");

  useEffect(() => emailjs.init("CyqpetyiDE4ilRl8S"), []);

  useEffect(() => {
    async function fetchData() {
      await fetch(`http://localhost:3000/api/company/${paramValue}`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error));

      await fetch(
        `http://localhost:3000/api/product/products-by-company/${paramValue}`
      )
        .then((response) => response.json())
        .then((json) => setProductList(json))
        .catch((error) => console.error(error));
    }
    fetchData();
  }, [paramValue]);

  const sendEmail = async (e) => {
    e.preventDefault();
    handleClose();
    try {
      await emailjs.send("service_kuxzdxa", "template_9rv1ldq", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messsageRef.current.value,
      });
      alert("Query has been sent");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap gap-4 m-5 p-3">
        <div>
          <img src={imageNotFound} className="img-fluid img-thumbnail" />
        </div>
        <div style={{ maxWidth: "25rem" }}>
          <h4 className="h4 fw-bold mb-2">{data.name}</h4>
          <div>
            <span className="text-muted">Description : </span>
            <span>{data.desc}</span>
          </div>
          <div>
            <span className="text-muted">Director/Partner/Owner : </span>
            <span>{data.director}</span>
          </div>
          <div>
            <span className="text-muted">Contact : </span>
            <span>{data.contactNo}</span>
          </div>
          <div>
            <span>
              <IoLocationSharp className="d-inline mr-1 text-muted" />
            </span>
            <span>
              <span>{data.location}</span>
            </span>
          </div>
          <div>
            <span>
              <FaLink className="d-inline mr-1 text-muted" />
            </span>
            <span>
              <span>Join Since {data.joinedDate}</span>
            </span>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-secondary btn-lg mt-4 w-100"
              onClick={handleShow}
            >
              <IoMail className="d-inline mr-2" />
              Contact
            </button>
          </div>
        </div>
      </div>
      <div>
        <h6 className="h6 fw-bold mx-5 px-5">Seller's Products</h6>
      </div>
      <div className="d-flex justify-content-around flex-wrap gap-4 m-5 p-3">
        {productList.map((item, i) => (
          <NavLink to={`/productDetails?id=${item._id}`} key={i}>
            <ProductCard item={item} />
          </NavLink>
        ))}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Query Submission Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label className="col-form-label">Name:</label>
              <input
                type="text"
                className="form-control"
                ref={nameRef}
                required
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                ref={emailRef}
                required
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">Query:</label>
              <textarea
                className="form-control"
                id="message-text"
                ref={messsageRef}
                required
                rows={5}
              ></textarea>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary mt-4 float-right"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CompanyDetails;
