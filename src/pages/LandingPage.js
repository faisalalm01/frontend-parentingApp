import React from "react";
import { Link } from "react-router-dom";
import Hero from "../assets/hero.jpg";
import Conten from "../assets/Sc1.jpg";
import Conten2 from "../assets/Sc2.jpg";
import Conten3 from "../assets/Sc3.jpg";
import Conten4 from "../assets/Sc4.jpg";
import Pict from "../assets/Cardpict.png";

// import ArticleItemBody from "../components/article/ArticleItemBody";
// import ArticleItemImage from "../components/article/ArticleItemImage";

import ButtonArticle from "../components/ButtonArticle";

function LandingPage({ describe, title, image, id, onDetail }) {
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
                Smart{" "}
                <span className="text-blue-400 font-bold text-4xl">Family</span>
              </h3>
              <p className="font-semibold">
                Mari mendidik anak untuk masa depan menjadi lebih baik.
              </p>
            </div>
          </div>
        </div>
        <div className="landing-page__link bg-blue-300 mx-auto flex flex-wrap p-2 px-32 flex-col md:flex-row items-center">
          <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center">
            <li>
              <Link to="/forum" className="mr-5">
                {" "}
                Forum diskusi{" "}
              </Link>
            </li>
            <li>
              <Link to="/consultation" className="mr-5">
                {" "}
                Konsultasi{" "}
              </Link>
            </li>
            <li>
              <Link to="/#" className="mr-5">
                {" "}
                Chat Bot{" "}
              </Link>
            </li>
          </ul>
        </div>
        <section className="describe__landingPage">
          <div className="describe-one ">
            {/* image */}
            <div class="container px-5 py-24 mx-auto">
              <div class="lg:w-4/5 mx-auto flex flex-wrap justify-between">
                <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                  <h1 class="text-blue-300 text-3xl title-font font-bold mb-4">
                    Mengapa Memilih <br /> Smart Family?{" "}
                  </h1>
                  <p class="leading-relaxed mb-4">
                    Merupakan website penyedia informasi untuk membantu anda
                    dalam mendidik anak dengan cara terbaik
                  </p>
                </div>
                <img
                  alt=""
                  class="w-72 h-64 object-cover object-center rounded"
                  src={Conten}
                />
              </div>
            </div>
          </div>

          <div className="describe-two">
            <div class="container px-5 py-24 mx-auto text-xl">
              <div class="lg:w-4/5 mx-auto flex flex-wrap justify-between">
                <img
                  alt="bocil"
                  class="w-72 h-64 object-cover object-center rounded"
                  src={Conten2}
                />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 p-9 lg:mt-0 ">
                  <h1 class="text-blue-300 text-3xl title-font font-bold mb-5">
                    Tersedia Forum Diskusi
                  </h1>
                  <p class="leading-relaxed">
                    Smart Family memungkinkan para orang tua untuk saling
                    bertukar fikiran dengan kendala atau permasalahan yang
                    dihadapi dalam mendidik anaknya
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="describe-one ">
            {/* image */}
            <div class="container px-5 py-24 mx-auto">
              <div class="lg:w-4/5 mx-auto flex flex-wrap justify-between">
                <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                  <h1 class="text-blue-300 text-3xl title-font font-bold mb-4">
                    Konsultasi dengan <br /> Ahli
                  </h1>
                  <p class="leading-relaxed mb-4">
                    Smart Family juga menyediakan sesi konsultasi dengan ahli
                    untuk membantu para orang tua menyelesaikan permasalahan
                    yang dihadapi dalam mendidik anaknya.
                  </p>
                </div>
                <img
                  alt=""
                  class="w-72 h-64 object-cover object-center rounded"
                  src={Conten3}
                />
              </div>
            </div>
          </div>

          <div className="describe-two">
            <div class="container px-5 py-24 mx-auto text-xl">
              <div class="lg:w-4/5 mx-auto flex flex-wrap justify-between">
                <img
                  alt="bocil"
                  class="w-72 h-64 object-cover object-center rounded"
                  src={Conten4}
                />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 p-9 lg:mt-0 ">
                  <h1 class="text-blue-300 text-3xl title-font font-bold mb-5">
                    Tersedia Forum Diskusi
                  </h1>
                  <p class="leading-relaxed">
                    Smart Family memungkinkan para orang tua untuk saling
                    bertukar pikiran dengan kendala atau permasalahan yang
                    dihadapai dalam mendidik anaknya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="landing-page__article mt-16">
          <h1 className="Current-article font-bold text-xl text-center ">
            Artikel Terkini
          </h1>
          <h3 className="next-list-article mb-8 font-normal text-blue-400 text-right">
            Selengkapnya
          </h3>{" "}
          {/* link menuju seluruh daftar artikel */}
          {/* TODO memunculkan data artikel dari API */}
          <div className="flex flex-wrap -m-4 px-16">
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center">
                <img
                  src={Pict}
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                />
                <div class="w-full mb-6">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Melatih Kecerdasan Interpersonal pada Anak
                  </h2>
                  <p class="mb-4 text-base font-semibold text-gray-500">
                    14 Oct 2022 <br /> Dhian Gowinda Luh Safitri
                  </p>
                  <span>
                    <ButtonArticle />
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center">
                <img
                  src={Pict}
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Melatih Kecerdasan Interpersonal pada Anak
                  </h2>
                  <p class="mb-4 text-base font-semibold text-gray-500">
                    14 Oct 2022 <br /> Dhian Gowinda Luh Safitri
                  </p>
                  <span>
                    <ButtonArticle />
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center">
                <img
                  src={Pict}
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Melatih Kecerdasan Interpersonal pada Anak
                  </h2>
                  <p class="mb-4 text-base font-semibold text-gray-500">
                    14 Oct 2022 <br /> Dhian Gowinda Luh Safitri
                  </p>
                  <span>
                    <ButtonArticle />
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center">
                <img
                  src={Pict}
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Melatih Kecerdasan Interpersonal pada Anak
                  </h2>
                  <p class="mb-4 text-base font-semibold text-gray-500">
                    14 Oct 2022 <br /> Dhian Gowinda Luh Safitri
                  </p>
                  <span>
                    <ButtonArticle />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
      </section>
    </>
  );
}

export default LandingPage;
