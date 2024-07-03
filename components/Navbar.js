// components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Abu Taher Md Shahin</h1>
          <p className="text-sm">Frontend Web Developer</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="about" smooth={true} duration={500} className="hover:text-gray-200">About Me</Link></li>
            <li><Link to="resume" smooth={true} duration={500} className="hover:text-gray-200">Resume</Link></li>
            <li><Link to="skills" smooth={true} duration={500} className="hover:text-gray-200">Skills</Link></li>
            <li><Link to="projects" smooth={true} duration={500} className="hover:text-gray-200">Projects</Link></li>
            <li><Link to="education" smooth={true} duration={500} className="hover:text-gray-200">Education</Link></li>
            <li><Link to="contact" smooth={true} duration={500} className="hover:text-gray-200">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
