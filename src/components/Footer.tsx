import React from 'react';
//import './Footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>Copyright &copy; 2021 - Kiki Aryani</p>
      <div className="home__social">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <FaWhatsappSquare />
          </a>
          <a href='https://github.com/username" target="_blank" rel="noopener noreferrer'>
          <FaGithubSquare />
          </a>
        </div>
    </footer>
  );
};

export default Footer;
