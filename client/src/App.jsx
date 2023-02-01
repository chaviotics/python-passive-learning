import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
// import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import Quiz from './pages/Quiz/Quiz';
import WhatIsPython from './pages/Introduction/WhatIsPython/WhatIsPython';
import HelloWorld from './pages/Introduction/HelloWorld/HelloWorld';
import Comments from './pages/Introduction/Comments/Comments';

function NavBar() {
  return (
    <nav style={{ backgroundColor: 'white' }}>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/intro/whatispython">What is Python</Link>
        </li>
        <li>
          <Link to="/intro/helloworld">Hello, World!</Link>
        </li>
        <li>
          <Link to="/intro/comment">Comment</Link>
        </li>
        <li></li>
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
        <Route path="/intro/whatispython" element={<WhatIsPython />} />
        <Route path="/intro/helloworld" element={<HelloWorld />} />
        <Route path="/intro/comment" element={<Comments />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
