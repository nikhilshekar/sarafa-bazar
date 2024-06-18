import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import imageNotFound from "../assets/imageNotFound.png";

const ProductDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [data, setData] = useState([]);

  // access query parameters
  const paramValue = queryParams.get("id");

  useEffect(() => {
    async function fetchData() {
      await fetch(`http://localhost:3000/api/product/${paramValue}`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error));
    }
    fetchData();
  }, [paramValue]);

  return (
    <div className="d-flex justify-content-center flex-wrap gap-4 m-5 p-3">
      <div>
        <img src={imageNotFound} className="img-fluid img-thumbnail" />
      </div>
      <div style={{ maxWidth: "25rem" }}>
        <h4 className="h4 fw-bold mb-2">{data.name}</h4>
        <div>
          <span className=" text-muted">Manufacturer : </span>
          <NavLink
            to={"/companyDetails?id=" + (data.company && data.company._id)}
          >
            <span className="company-name fw-bold" style={{}}>
              {data.company && data.company.name}
            </span>
          </NavLink>
        </div>
        <div>
          <span className="text-muted">Description : </span>
          <span>{data.company && data.company.desc}</span>
        </div>
        <div>
          <span className="text-muted">Contact : </span>
          <span>{data.company && data.company.contactNo}</span>
        </div>
        <div>
          <span className="text-muted">Availability : </span>
          <span>{data.availability ? "Ready Stock" : " Out of Stock"}</span>
        </div>
        <div>
          <span className="text-muted">City : </span>
          <span>{data.city}</span>
        </div>
        <div>
          <span className="text-muted">Gender : </span>
          <span>{data.gender}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
