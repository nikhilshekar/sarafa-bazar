import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [data, setData] = useState([]);

  const paramValue = queryParams.get("type");

  useEffect(() => {
    let url;
    paramValue === "all"
      ? (url = "http://localhost:3000/api/product/")
      : (url = `http://localhost:3000/api/product/type/${paramValue}`);
    async function fetchData() {
      fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error));
    }
    fetchData();
  }, [paramValue]);

  console.log(data);
  return (
    <>
      <div className="d-flex justify-content-evenly flex-wrap gap-2 m-2 p-3">
        {data.map((item, i) => (
          <NavLink to={`/productDetails?id=${item._id}`} key={i}>
            <ProductCard item={item} />
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Product;
