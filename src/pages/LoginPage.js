/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import HeroLogin from '../assets/hero-login.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        navigate("/");
      }
    }
  };

  return (
    <>
      <section className='login-page flex p-8 flex-col md:ml-auto w-full mt-10 md:mt-0 items-center'>
      <img
        className="w-60 object-center rounded"
          src={Logo} alt="Smart Family"
      />

      <div className='login-page__intro text-center mt-4'>
        <p className='text-sm text-slate-700'>Silahkan masukan email dan password untuk masuk</p>
      </div>
      
      <div className='flex'>
      <form onSubmit={(event) => handleSubmit(event)} action="" className='login-input my-10'>
        <div className='mt-6'>
        <label className='leading-7 text-sm text-custom-text-primary text-slate-800'>Email</label>
        <input  type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
            className="w-full bg-gray-200 rounded-lg border border-gray-400 outline-2 outline-form-secondry text-background-primary text-sm normal-case py-1 px-3 leading-8"/>
        </div>

        <div className='mt-4'>
        <label className='leading-7 text-sm text-custom-text-primary text-slate-800'>Password</label>
        <input  type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
            className="w-full bg-gray-200 rounded-lg border border-gray-400 outline-2 outline-form-secondry text-background-primary text-sm normal-case py-1 px-3 leading-8"/>
        </div>

        <div className='my-6'>
          <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-md py-2 px-4 rounded'>
            Masuk
          </button>
        </div>
      </form>
      <img
        className="w-26 object-center rounded mx-10 mt-10"
          src={HeroLogin} alt="Smart Family"
      />
      </div>

      <div className='login-page__link-to-register'>
        <p className='text-sm my-10 text-slate-800'>Belum memiliki akun? Silahkan daftar <Link to="/register" className='text-blue-500 hover:text-blue-700'>disini</Link></p>
      </div>
    </section>
      <ToastContainer />
    </>
  );
}
