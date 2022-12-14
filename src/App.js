/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import ArticlePage from "./pages/ArticlePage";
import AboutPage from "./pages/AboutPage";
import DetailPage from './pages/';
import Profile from './pages/Profile'
import ConsultationPage from "./pages/ConsultationPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

function App() {
    return (
        <section>
            <header>
                <Navigation />
            </header>

            <main>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/article' element={<ArticlePage />} />
                    <Route path='/chat' element={<ConsultationPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/articles/:id' element={<DetailPage />} />
                    <Route path= '/profile' element ={<Profile/>}/>

                </Routes>
            </main>

            <div>
                <Footer />
            </div>
        </section>
    )

}

export default App;
