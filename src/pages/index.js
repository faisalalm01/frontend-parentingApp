import React from "react";
import { Routes, Route } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import LandingPage from "./LandingPage";
import ArticlePage from './ArticlePage';
import AboutPage from "./AboutPage";
import DetailPage from './DetailPage';

function Main() {
    return (
        <section>
            <header>
                <Navigation />
            </header>

            <main>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/article' element={<ArticlePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/articles/:id' element={<DetailPage />} />
                    
                </Routes>
            </main>

            <div>
                <Footer />
            </div>
        </section>
    )
}

export default Main;
