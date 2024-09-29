import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Example1/Home'; 
import Skills from './pages/Example2/Skillss'; 
import Projects from './pages/Example3/Project'; 
import Contact from './pages/Example4/Contact';
import Footer from './components/Footer';
import About from './pages/Example5/About';
import 'boxicons/css/boxicons.min.css';


const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} /> {/* Tambahkan untuk home default */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
