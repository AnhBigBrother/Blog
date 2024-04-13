import { useState } from "react";
import Header from "./components/header/header";
import React from "react";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = (props) => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-start items-center bg-book">
      <div className="font-roboto w-full max-w-[996px] flex flex-col justify-start items-start px-3">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Navigate to="/blogs" replace={true} />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
