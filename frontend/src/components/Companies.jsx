import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { NavLink, useLocation } from "react-router-dom";

const Companies = () => {
  const [data, setData] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("search");

  useEffect(() => {
    let url;
    paramValue === null
      ? (url = "http://localhost:3000/api/company/")
      : (url = `http://localhost:3000/api/company/search/${paramValue}`);
    async function fetchData() {
      fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error));
    }
    fetchData();
  }, [paramValue]);

  
  return (
    <>
      <div className="d-flex justify-content-evenly flex-wrap gap-3 p-3">
        {data.map((item, i) => (
          <NavLink to={`/companyDetails?id=${item._id}`} key={i}>
            <ProductCard item={item} />
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Companies;
