/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";

export default function Register() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    nohp: "",
  });

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    } 
    // else if (nohp === "") {
    //   toast.error("isi nohp", toastOptions);
    // }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, username, password, nohp } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
        nohp,
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
      <section className="register-page flex p-8 flex-col md:ml-auto w-full mt-10 md:mt-0 items-center">
        <img
          className="w-60 object-center rounded"
          src={Logo}
          alt="Smart Family"
        />

        <div className="register-page__intro text-center mt-4">
          <p className="text-sm text-slate-700">
            Silahkan masukan nama, email dan password untuk mendaftar
          </p>
        </div>

        <div className="flex">
          <form
            action=""
            onSubmit={(event) => handleSubmit(event)}
            className="register-input my-10"
          >
            <div className="mt-2">
              <label className="leading-7 text-sm text-custom-text-primary text-slate-800">
                Nama
              </label>
              <input
                type="text"
                placeholder="masukkan username"
                name="username"
                onChange={(e) => handleChange(e)}
                className="w-full bg-gray-200 rounded-lg border border-gray-400 outline-2 outline-form-secondry text-background-primary text-sm normal-case py-1 px-3 leading-8"
              />
            </div>

            <div className="mt-4">
              <label className="leading-7 text-sm text-custom-text-primary text-slate-800">
                Email
              </label>
              <input
                type="email"
                placeholder="Masukkan Email"
                name="email"
                onChange={(e) => handleChange(e)}
                className="w-full bg-gray-200 rounded-lg border border-gray-400 outline-2 outline-form-secondry text-background-primary text-sm normal-case py-1 px-3 leading-8"
              />
            </div>

            <div className="mt-4">
              <label className="leading-7 text-sm text-custom-text-primary text-slate-800">
                Password
              </label>
              <input
                type="password"
                placeholder="masukkan Password"
                name="password"
                autoComplete="curentPassword"
                onChange={(e) => handleChange(e)}
                className="w-full bg-gray-200 rounded-lg border border-gray-400 outline-2 outline-form-secondry text-background-primary text-sm normal-case py-1 px-3 leading-8"
              />
            </div>

            <div className="mt-4">
              <label className="leading-7 text-sm text-custom-text-primary text-slate-800">
                Password
              </label>
              <input
                type="password"
                placeholder="Konfirmasi Password"
                name="confirmPassword"
                autoComplete="curentPassword"
                onChange={(e) => handleChange(e)}
                className="w-full bg-gray-200 rounded-lg border border-gray-400 outline-2 outline-form-secondry text-background-primary text-sm normal-case py-1 px-3 leading-8"
              />
            </div>

            <div className="my-6">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-md py-2 px-4 rounded">
                Daftar
              </button>
            </div>
          </form>
        </div>

        <div className="register-page__next-to-login">
          <p className="text-sm mt-2 text-slate-800">
            Sudah memiliki akun? Silahkan masuk{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
              disini
            </Link>
          </p>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
