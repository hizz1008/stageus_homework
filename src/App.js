import React from "react";

import { useParams, BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import HeaderContainer from "./container/HeaderContainer";
import NavSlide from "./container/NavSlide.js";

import VideoArticles from "./container/VideoArticles.js";

import MainPage from "./pages/MainPage.js";
import LoginPage from "./pages/LoginPage.js";
import SignUpPage from "./pages/SignUpPage.js";
import Shorts from "./pages/Shorts.js";
import VideoViewer from "./pages/VideoViewer.js";
import CreateVideoPage from "./pages/CreateVideoPage.js";

import ProfilePage from "./pages/ProfilePage.js";
import ProfileEditPage from "./pages/ProfileEditPage";

import "./css/reset.css";

import "./css/common.css";

const App = () => {
  return (
    // <BrowserRouter>
    //   <HeaderContainer />
    //   <NavSlide />
    //   <Routes>
    //     <Route path="/" element={<MainPage />} />
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/shorts" element={<Shorts />} />
    //     <Route path="/video-viewer/:id" element={<VideoViewer />} />
    //   </Routes>
    // </BrowserRouter>

    <React.StrictMode>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profileEdit" element={<ProfileEditPage />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/createVideo" element={<CreateVideoPage />} />
            <Route path="/video-viewer/:id" element={<VideoViewer />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </React.StrictMode>
  );
};

export default App;
