import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section>
            <div className="footer-one">
                <h3 className="logo__footer">Smart <span>Family</span></h3>
                <p>Jl. Batik Kumeli No. 50, Sakaluyu, Kec. Cibeunying Kaler, Kota Bandung Jawa Barat 40123</p>
            </div>

            <div className="footer-two">
                <p>Mari mendidik anak untuk masa depan yang lebih baik</p>
            </div>

            {/* footer-tree dan four kasih link */}
            <div className="footer-tree">
                <h4>
                    <Link to={`/about`}>Tentang Kami</Link>
                </h4>
            </div>

            <div>
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
            
        </section>  
    )
}

export default Footer;
