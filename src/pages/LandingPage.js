import React from "react";
import { Link } from "react-router-dom";
import Hero from "../assets/hero.jpg";
import Conten from '../assets/Sc1.jpg'

function LandingPage() {
  return (
    <>
    <section className="landing-page">
      <div className="landing-page__intro container px-5 py-24 mx-auto">
        {/* image */}
        <div className="lg:w-4/5 mx-auto flex flex-row">
          <img
            className="w-80 lg:h-80 object-cover object-center rounded"
            src={Hero}
            alt=""
          />
          <div className="bg-origin-content bg-center w-auto pl-56 rounded-xl lg:py-6 mt-6 lg:mt-0">
            <h3 className="font-normal text-xl">
              Smart <span className="text-blue-400 font-bold text-4xl">Family</span>
            </h3>
            <p className="font-semibold">Mari mendidik anak untuk masa depan menjadi lebih baik.</p>
          </div>
        </div>
      </div>

      <div className="landing-page__link bg-blue-300 mx-auto flex flex-wrap p-2 px-32 flex-col md:flex-row items-center">
        <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center">
          <li >
            <Link to="/forum" className="mr-5"> Forum diskusi </Link>
          </li>
          <li>
            <Link to="/consultation" className="mr-5"> Konsultasi </Link>
          </li>
          <li>
            <Link to="/#" className="mr-5"> Chat Bot </Link>
          </li>
        </ul>
      </div>

      <section className="describe__landingPage flex flex-row-reverse">
        <div className="describe-one ">
          {/* image */}
          <img className="w-80" src={Conten} alt=""/>

          <h2 className="text-blue-300 font-bold text-3xl">Mengapa Memilih <br/> Smart Family?</h2>
          <p className="font-normal text-lg whitespace-normal:normal text-black font flex-col">
            Merupakan website penyedia informasi untuk membantu anda dalam
            mendidik anak dengan cara terbaik
          </p>
        </div>

        <div className="describe-two">
          {/* image */}
          <h2>Tersedia Forum Diskusi</h2>
          <p>
            Smart Family memungkinkan para orang tua untuk saling bertukar
            fikiran dengan kendala atau permasalahan yang dihadapi dalam
            mendidik anaknya
          </p>
        </div>

        <div className="describe-tree">
          {/* image */}
          <h2>Konsultasi dengan Ahli</h2>
          <p>
            Smart Family juga menyediakan sesi konsultasi dengan ahli untuk
            membantu para orang tua menyelesaikan permasalahan yang dihadapi
            dalam mendidik anaknya
          </p>
        </div>

        <div className="describe-two">
          {/* image */}
          <h2>Tersedia Forum Diskusi</h2>
          <p>
            Smart Family memungkinkan para orang tua untuk saling bertukar
            fikiran dengan kendala atau permasalahan yang dihadapi dalam
            mendidik anaknya
          </p>
        </div>
      </section>

      <section className="landing-page__article mt-16">
        <h1 className="Current-article font-bold text-xl text-center ">Artikel Terkini</h1>
        <h3 className="next-list-article mb-8 font-normal text-blue-400 text-right">Selengkapnya</h3>{" "}
        {/* link menuju seluruh daftar artikel */}
        {/* TODO memunculkan data artikel dari API */}
      </section>
      <hr/>
    </section>
    </>
  );
}

export default LandingPage;
