import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
// import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import WhatIsPython from './pages/Introduction/WhatIsPython/WhatIsPython';
import HelloWorld from './pages/Introduction/HelloWorld/HelloWorld';
import Comments from './pages/Introduction/Comments/Comments';

import Variables from './pages/Variables/Variables';
import DataTypes from './pages/DataTypes/DataTypes';
import ArithmeticOps from './pages/ArithmeticOps/ArithmeticOps';

import ConditionalStatements from './pages/ConditionalStatements/ConditionalStatements';
import ForLoop from './pages/ForLoop/ForLoop';
import WhileLoop from './pages/WhileLoop/WhileLoop';

import Functions from './pages/Functions/Functions';

import Quiz from './pages/Quiz/Quiz';

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
        <li>
          <Link to="/variables">Variables</Link>
        </li>
        <li>
          <Link to="/datatypes">Data Types</Link>
        </li>
        <li>
          <Link to="/arithmeticops">Arithmetic Ops</Link>
        </li>
        <li>
          <Link to="/conditionals">Conditional Statements</Link>
        </li>
        <li>
          <Link to="/forloop">For Loop</Link>
        </li>
        <li>
          <Link to="/whileloop">While Loop</Link>
        </li>
        <li>
          <Link to="/functions">Functions</Link>
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
        <Route path="/intro/whatispython" element={<WhatIsPython />} />
        <Route path="/intro/helloworld" element={<HelloWorld />} />
        <Route path="/intro/comment" element={<Comments />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/variables" element={<Variables />} />
        <Route path="/datatypes" element={<DataTypes />} />
        <Route path="/arithmeticops" element={<ArithmeticOps />} />
        <Route path="/conditionals" element={<ConditionalStatements />} />
        <Route path="/forloop" element={<ForLoop />} />
        <Route path="/whileloop" element={<WhileLoop />} />
        <Route path="/functions" element={<Functions />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
