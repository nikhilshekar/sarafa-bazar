import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
    async function fetchData() {
      await fetch(`http://localhost:3000/api/company/`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error));
      await fetch(`http://localhost:3000/api/product/`)
        .then((response) => response.json())
        .then((json) => setProducts(json))
        .catch((error) => console.error(error));
    }
    fetchData();
  }, [data]);

  const deleteCompany = async (id) => {
    await fetch(`http://localhost:3000/api/company/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h5 className="h5 fw-bold text-center my-4">List of Companies</h5>
      <div className="container" style={{ minHeight: "28rem" }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Company Name</th>
              <th scope="col">Owner/Director</th>
              <th scope="col">Description</th>
              <th scope="col">Location</th>
              <th scope="col">Joined Date</th>
              <th scope="col">Contact No</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.director}</td>
                  <td>{item.desc}</td>
                  <td>{item.location}</td>
                  <td>{item.joinedDate}</td>
                  <td>{item.contactNo}</td>
                  <td>
                    <button
                      onClick={() => deleteCompany(item._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <NavLink to={"/addCompany"}>
          <button className="btn btn-primary float-right">Add</button>
        </NavLink>

        <h5 className="h5 fw-bold text-center my-5">List of Products</h5>
        <div className="container " style={{ minHeight: "28rem" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Company Name</th>
                <th scope="col">City</th>
                <th scope="col">Gender</th>
                <th scope="col">Type</th>
                <th scope="col">Availability</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((item, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.company.name}</td>
                    <td>{item.city}</td>
                    <td>{item.gender}</td>
                    <td>{item.type}</td>
                    <td>{item.availability ? "In Stock" : "Out of Stock"}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
