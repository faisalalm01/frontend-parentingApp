import React from "react";

import CaptainList from "../components/captains/CaptainList";

import { getAllCaptains } from "../utils/data-captain";

function AboutPage() {
  const captains = getAllCaptains();

  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Selamat Datang
            </h1>
            <p className="leading-relaxed mb-4">
              Petualangan Smart Family dimulai sejak tahun 2022 sebagai website
              penyedia informasi untuk membantu para orang tua dalam mendidik
              anaknya mulai dari usia dini dengan cara yang terbaik.
            </p>
            <div className="flex mt-6 items-center pb-5 mb-5">
              <p>
                Smart Family terdiri dari tim beranggotakan frontend web
                developer yang berkolaborasi untuk menghasilkan website penyedia
                informasi terbaik bagi generasi terbaik Indonesia.
              </p>
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="./images/cuate.png"
          />
        </div>
      </div>

      <section className="about-page">
        <div className="container px-5 py-24 mx-auto text-xl">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="bocil"
              className="lg:w-1/2 w-full lg:h-auto h-20 object-cover object-center p-7 rounded"
              src="./images/hero-about.png"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 p-9 lg:mt-0 ">
              <h1 className="text-gray-900 text-3xl title-font font-bold mb-5">
                Latar Belakang
              </h1>
              <p className="leading-relaxed">
                Usia 0-6 tahun merupakan periode emas dalam pertumbuhan setiap
                anak. Tahun-tahun awal kehidupan inilah yang menentukan
                bagaimana karakter dan kecerdasannya terbentuk. Dengan stimulasi
                yang tepat, anak akan bertumbuh dan berkembang secara maksimal.
              </p>
              <div className="flex mt-6 items-center pb-5 mb-5">
                <p>
                  Melihat betapa krusial optimalisasi perkembangan pada usia
                  dini, pendidikan yang diberikan tentu juga harus memadai.
                  Namun, kami menyadari bahwa kurangnya akses terhadap informasi
                  berkualitas, serta belum adanaya sebuah forum diskusi untuk
                  membahas permasalahan mendidik anak usia dini serta sedikit
                  tersedianya sesi konsultasi dengan para ahli, masih menjadi
                  batasan nyata dalam mendidik anak usia dini Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="">
        <div className="container px-5 py-24 mx-auto text-xl">
          <div className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            <h1>Para Kapten</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base px-60">
              Sama seperti kapal yang akan terombang-ambing tanpa kapten, Smart
              Family juga tak akan bisa berjalan tanpa para pemimpin petualangan
              ini.{" "}
            </p>
          </div>
          </div>

          <div className="container px-5 py-24 mx-auto">
            <CaptainList captains={captains} />
          </div>
        </section>

        <div className="mitra">
          <h2>Mitra & Kerja Sama</h2>
          {/* image mitra */}
        </div>
      </section>
    </>
  );
}

export default AboutPage;
