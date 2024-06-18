import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const login = async (e) => {
    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    e.preventDefault();
    await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        localStorage.setItem("user",data.user)
        if (data.success) {
          navigate("/adminDashboard");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="max_padd_container flexCenter flex-col pt-30 my-2">
      <div className="max-w-[800px] h-[600px] bg-white m-auto px-14 py-10 rounded-md w-50">
        <h3 className="h3">Login</h3>
        <form>
          <div className="flex flex-col gap-4 mt-7">
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
            typre="submit"
            className="btn_dark_rounded my-5 w-full !rounded-md"
            onClick={login}
          >
            Login
          </button>
        </form>

        <p className="text-black font-bold">
          Dont have an account?
          <Link to="/register">
            <span className="text-secondary underline cursor-pointer ml-2">
              Register
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
