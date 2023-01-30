import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Introduction from './pages/Intro';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Main</Link>
          <Link to="/intro">Intro</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intro" element={<Introduction />} />
      </Routes>
    </div>
  );
}

export default App;
