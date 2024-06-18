import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const form = useRef();

  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();

  const register = async (e) => {
    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    e.preventDefault();
    await fetch("http://localhost:3000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Registration is success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="max_padd_container flexCenter flex-col pt-30 my-2">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md w-50">
        <h3 className="h3">Registration</h3>
        <form>
          <div className="flex flex-col gap-4 mt-7">
            <input
              type="text"
              placeholder="Your Name"
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
              ref={nameRef}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
              ref={emailRef}
            />
            <input
              type="password"
              placeholder="Password"
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
              ref={passwordRef}
            />
          </div>
          <button
            type="submit"
            className="btn_dark_rounded my-5 w-full !rounded-md"
            onClick={register}
          >
            Register
          </button>
        </form>

        <p className="text-black font-bold">
          Already have an account?
          <Link to="/login">
            <span className="text-secondary underline cursor-pointer ml-2">
              Login
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Registration;
