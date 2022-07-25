// 依赖
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// 页面
import Home from './pages/home';
import Topics from './pages/topics';
import About from './pages/about';

function Pages() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </Router>
  );
}

export default Pages;
