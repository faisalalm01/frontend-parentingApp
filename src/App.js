import React from "react";
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import LandingPage from "./pages/LandingPage";
import ArticlePage from './pages/ArticlePage';
import ForumPage from './pages/ForumPage';
import ConsultationPage from './pages/ConsultationPage';
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
    return (
        <section>
            {/* <header>
                <Navigation />
            </header> */}

            <main>
                <Routes>
                    <Route exact path='/' element={<LandingPage />} />
                    <Route path='/article' element={<ArticlePage />} />
                    <Route path='/forum' element={<ForumPage />} />
                    <Route path='/consultation' element={<ConsultationPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                </Routes>
            </main>

            {/* <div>
                <Footer />
            </div> */}
        </section>
    )
}

export default App;
