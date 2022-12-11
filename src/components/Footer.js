import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section>
<<<<<<< HEAD
            <div className="mx-auto flex flex-wrap p-2 px-32 flex-col md:flex-row justify-between">
            <div className="footer-one mt-8">
                <h3 className="logo__footer capitalize text-3xl font-light">Smart <span className="text-blue-500 font-bold">Family</span></h3>
                <p className="font-semibold ">Jl. Batik Kumeli No. 50,<br/> Sakaluyu, Kec. Cibeunying <br/> Kaler, Kota Bandung Jawa Barat <br/> 40123</p>
            </div>

            <div className="footer-two">
                <p className="flex-wrap items-center text-gray-400 font-semibold text-lg">Mari mendidik anak untuk masa depan yang lebih baik</p>
=======
            <div className="footer-one">
                <h3 className="logo__footer">Smart <span>Family</span></h3>
                <p>Jl. Batik Kumeli No. 50, Sakaluyu, Kec. Cibeunying Kaler, Kota Bandung Jawa Barat 40123</p>
            </div>

            <div className="footer-two">
                <p>Mari mendidik anak untuk masa depan yang lebih baik</p>
>>>>>>> 8452ae2647f2d4df7fdf5b2d2a360a78742897a4
            </div>

            {/* footer-tree dan four kasih link */}
            <div className="footer-tree">
                <h4>
<<<<<<< HEAD
                    <Link className="flex-wrap items-center font-bold text-base" to={`/about`}>Tentang Kami</Link>
=======
                    <Link to={`/about`}>Tentang Kami</Link>
>>>>>>> 8452ae2647f2d4df7fdf5b2d2a360a78742897a4
                </h4>
            </div>

            <div>
<<<<<<< HEAD
                <h4 className="font-semibold text-lg">
                    <Link to={`#`}>Hubungi Kami</Link>
                </h4>
                <h4 className="font-semibold text-lg">
                    <Link to={`#`}>FAQ</Link>
                </h4>
            </div>
            </div>
            <hr/>
            {/* sampai sini link end */}

            <div className="footer-five my-6">
              <p className="font-semibold text-sm ml-20">CopyRight 2022 Smart Family | Membantu masa depan anak anda.</p>
            </div>
            
=======
                <h4>
                    <Link to={`#`}>Hubungi Kami</Link>
                </h4>
                <h4>
                    <Link to={`#`}>FAQ</Link>
                </h4>
            </div>
            {/* sampai sini link end */}

            <div className="footer-five">
              <p>CopyRight 2022 Smart Family | Membantu masa depan anak anda.</p>
            </div>
>>>>>>> 8452ae2647f2d4df7fdf5b2d2a360a78742897a4
        </section>  
    )
}

export default Footer;
