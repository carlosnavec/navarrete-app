import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './ui/pages/HomePage';
import DetailPage from './ui/pages/DetailPage';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/detail/:name" element={<DetailPage/>} />
      </Routes>
    </Router>
  );
};

export default App;