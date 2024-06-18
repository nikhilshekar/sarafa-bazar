
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const AddCompany = () => {
    const companyNameRef = useRef();
    const descRef = useRef();
    const directorRef = useRef();
    const locationRef = useRef();
    const joinedDateRef = useRef();
    const contactNoRef = useRef();

 const addCompany = async(e) =>{
    e.preventDefault();
    const companyData = {
        name: companyNameRef.current.value,
        desc: directorRef.current.value,
        director: directorRef.current.value,
        location: locationRef.current.value,
        joinedDate: joinedDateRef.current.value,
        contactNo: contactNoRef.current.value,
    };
    await fetch("http://localhost:3000/api/company/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companyData),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
        })
        .catch((error) => {
          console.log(error);
        });
 }

  return (
    <>
      <section className="d-flex justify-content-center">
        <div className="w-50">
          <form text-center>
            <div className="flex flex-col gap-4 mt-7">
              <input
                type="text"
                placeholder="Comapany Name"
                className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
                ref={companyNameRef}
              />
              <textarea
                type="text"
                placeholder="Description"
                className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
                rows={5}
                ref={descRef}
              ></textarea>
              <input
                type="text"
                placeholder="Director/Owner/Partner"
                className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
                ref={directorRef}
              />
               <input
                type="text"
                placeholder="location"
                className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
                ref={locationRef}
              />
               <input
                type="text"
                placeholder="Joined Date"
                className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
                ref={joinedDateRef}
              />
               <input
                type="text"
                placeholder="Contact Number"
                className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
                ref={contactNoRef}
              />
            </div>
            <button
              type="submit"
              className="btn_dark_rounded my-5 w-full !rounded-md"
              onClick={addCompany}
            >
              Add
            </button>
          </form>

        </div>
      </section>
    </>
  );
};

export default AddCompany;
