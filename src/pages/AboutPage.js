import React from 'react';
import CaptainList from '../components/captains/CaptainList';
import { getAllCaptains } from '../utils/data-captain';

function AboutPage() {
  const captains = getAllCaptains();

  return (
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
            <CaptainList captains={captains} />
          </div>
        </section>

        <div className='mitra'>
          <h2>Mitra & Kerja Sama</h2>
        </div>
    </section>
  );
}

export default AboutPage;