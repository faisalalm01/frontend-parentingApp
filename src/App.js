/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import ArticlePage from "./pages/ArticlePage";
import ForumPage from "./pages/ForumPage";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
    // const navigate = useNavigate();

    // useEffect(async() =>{
    //     if(!localStorage.getItem(pot))
    // })

      return (
          <section>
      <header>
        <Navigation />
      </header>

      <main>
        <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles/:id" element={<DetailPage />} />
        </Routes>
      </main>

      <div>
        <Footer />
      </div>
    </section>
  );
}

export default App;
