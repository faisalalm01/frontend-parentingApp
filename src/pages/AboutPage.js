<<<<<<< HEAD
import React from "react";

import CaptainList from "../components/captains/CaptainList";

import { getAllCaptains } from "../utils/data-captain";
=======
import React from 'react';

import CaptainList from '../components/captains/CaptainList';

import { getAllCaptains } from '../utils/data-captain';
>>>>>>> 8452ae2647f2d4df7fdf5b2d2a360a78742897a4

function AboutPage() {
  const captains = getAllCaptains();

  return (
<<<<<<< HEAD
    <>
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>
        <p class="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
        <div class="flex mt-6 items-center pb-5 mb-5">
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
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="./images/cuate.png"/>
    </div>
  </div>

      <section className="about-page">
        <div class="container px-5 py-24 mx-auto text-xl">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="bocil"
              class="lg:w-1/2 w-full lg:h-auto h-20 object-cover object-center p-7 rounded"
              src="./images/hero-about.png"
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 p-9 lg:mt-0 ">
              <h1 class="text-gray-900 text-3xl title-font font-bold mb-5">
                Latar Belakang
              </h1>
              <p class="leading-relaxed">
                Usia 0-6 tahun merupakan periode emas dalam pertumbuhan setiap
                anak. Tahun-tahun awal kehidupan inilah yang menentukan
                bagaimana karakter dan kecerdasannya terbentuk. Dengan stimulasi
                yang tepat, anak akan bertumbuh dan berkembang secara maksimal.
              </p>
              <div class="flex mt-6 items-center pb-5 mb-5">
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

    

        <section className="captain">
          <div className="captain-head">
            <h1>Para Kapten</h1>
            <p>
              Sama seperti kapal yang akan terombang-ambing tanpa kapten, Smart
              Family juga tak akan bisa berjalan tanpa para pemimpin petualangan
              ini.{" "}
            </p>
          </div>

          <div className="captains-list">
=======
    <section className='about-page'>
        <div className='about-page__one'>
          {/* image */}
          <h3>Selamat Datang</h3>
          <p>Petualangan Smart Family dimulai sejak tahun 2022. Sebagai website penyedia informasi untuk membantu para orang tua dalam mendidik anaknya mulai dari usia dini dengan cara yang terbaik.</p>
          <p>Smart Family terdiri dari tim beranggotakan frontend web developer yang berkolaborasi untuk menghasilkan website penyedia informasi terbaik bagi generasi terbaik Indonesia.</p>
        </div>

        <div className='about-page__two'>
          {/* image */}
          <h3>Latar Belakang</h3>
          <p>Usia 0-6 tahun merupakan periode emas dalam pertumbuhan setiap anak. Tahun-tahun awal kehidupan inilah yang menentukan bagaimana karakter dan kecerdasannya terbentuk. Dengan stimulasi yang tepat, anak akan bertumbuh dan berkembang secara maksimal.</p>
          <p>Melihat betapa krusial optimalisasi perkembangan pada usia dini, pendidikan yang diberikan tentu juga harus memadai. Namun, kami menyadari bahwa kurangnya akses terhadap informasi berkualitas, serta belum adanaya sebuah forum diskusi untuk membahas permasalahan mendidik anak usia dini serta sedikit tersedianya sesi konsultasi dengan para ahli, masih menjadi batasan nyata dalam mendidik anak usia dini Indonesia.</p>
        </div>

        <section className='captain'>
          <div className='captain-head'>
            <h1>Para Kapten</h1>
            <p>Sama seperti kapal yang akan terombang-ambing tanpa kapten, Smart Family juga tak akan bisa berjalan tanpa para pemimpin petualangan ini. </p>
          </div>

          <div className='captains-list'>
>>>>>>> 8452ae2647f2d4df7fdf5b2d2a360a78742897a4
            <CaptainList captains={captains} />
          </div>
        </section>

<<<<<<< HEAD
        <div className="mitra">
          <h2>Mitra & Kerja Sama</h2>
          {/* image mitra */}
        </div>
      </section>
    </>
  );
}

export default AboutPage;
=======
        <div className='mitra'>
          <h2>Mitra & Kerja Sama</h2>
          {/* image mitra */}
        </div>
    </section>
  );
}

export default AboutPage;
>>>>>>> 8452ae2647f2d4df7fdf5b2d2a360a78742897a4
