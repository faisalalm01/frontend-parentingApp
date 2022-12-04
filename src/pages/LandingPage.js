import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <section>
        <div>
          {/* image */}
          <h3>Smart <span>Family</span></h3>
          <p>Mari mendidik anak untuk masa depan menjadi lebih baik.</p>
        </div>

        <div>
          <ul>
            <li>
              <Link to="/forum"> Forum diskusi </Link>
            </li>
            <li>
              <Link to="/consultation"> Konsultasi </Link>
            </li>
            <li>
              <Link to="#"> Chat Bot </Link>
            </li>
          </ul>
        </div>

        <section className='describe__landingPage'>
        <div className='describe-one'>
          {/* image */}
          <h2>Mengapa Memilih Smart Family?</h2>
          <p>Merupakan website penyedia informasi untuk membantu anda dalam mendidik anak dengan cara terbaik</p>
        </div>

        <div className='describe-two'>
          {/* image */}
          <h2>Tersedia Forum Diskusi</h2>
          <p>Smart Family memungkinkan para orang tua untuk saling bertukar fikiran dengan kendala atau permasalahan yang dihadapi dalam mendidik anaknya</p>
        </div>

        <div className='describe-tree'>
          {/* image */}
          <h2>Konsultasi dengan Ahli</h2>
          <p>Smart Family juga menyediakan sesi konsultasi dengan ahli untuk membantu para orang tua menyelesaikan permasalahan yang dihadapi dalam mendidik anaknya</p>
        </div>

        <div className='describe-two'>
          {/* image */}
          <h2>Tersedia Forum Diskusi</h2>
          <p>Smart Family memungkinkan para orang tua untuk saling bertukar fikiran dengan kendala atau permasalahan yang dihadapi dalam mendidik anaknya</p>
        </div>
        </section>

        <section>
          <h1>Artikel Terkini</h1>
          <h3>Selengkapnya</h3> {/* link menuju seluruh daftar artikel */}
          {/* TODO memunculkan data artikel dari API */}
        </section>
    </section>
  );
}

export default LandingPage;
