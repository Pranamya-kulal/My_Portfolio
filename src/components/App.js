import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Welcome to My Portfolio!</h1>
        </header>
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Let’s connect</Link></li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <p>Contact: pranamya444@gmail.com</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
