import React from "react";
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import LandingPage from "./pages/LandingPage";
import ArticlePage from './pages/ArticlePage';
<<<<<<< HEAD
import AboutPage from "./pages/AboutPage";
import DetailPage from './pages/DetailPage';
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
=======
import ForumPage from './pages/ForumPage';
import ConsultationPage from './pages/ConsultationPage';
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
>>>>>>> 8452ae2647f2d4df7fdf5b2d2a360a78742897a4

function App() {
    return (
        <section>
<<<<<<< HEAD
            <header>
                <Navigation />
            </header>
z
            <main>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/article' element={<ArticlePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/articles/:id' element={<DetailPage />} />
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </main>

            <div>
                <Footer />
            </div>
=======
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
>>>>>>> 8452ae2647f2d4df7fdf5b2d2a360a78742897a4
        </section>
    )
}

export default App;
