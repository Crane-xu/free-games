// 依赖
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// 全局组件
import NavBar from './components/nav-bar';
// 页面
import Home from './pages/home';
import Detail from './pages/detail';
import Topics from './pages/topics';

function Pages() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail/:gameId" element={<Detail />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </Router>
  );
}

export default Pages;
