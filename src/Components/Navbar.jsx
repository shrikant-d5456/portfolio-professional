import React, { useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-white text-xl font-bold mb-1">Awailable to work</div>
        <div className={`md:flex lg:flex hidden space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#about" className="text-gray-100 hover:text-white">About</a>
          <a href="#experience" className="text-gray-100 hover:text-white">Experience</a>
          <a href="#skills" className="text-gray-100 hover:text-white">Skills</a>
          <a href="#projects" className="text-gray-100 hover:text-white">Projects</a>
          <a href="#contact" className="text-gray-100 hover:text-white">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-100 focus:outline-none focus:text-white">
            {isOpen ? <BsX className="h-6 w-6" /> : <BsList className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <Fade direction='left'>
        <div className="md:hidden border-t-2 transition-all">
          <a href="#about" onClick={toggleMenu} className="block px-4 py-2 text-gray-100 hover:text-white">About</a>
          <a href="#experience" onClick={toggleMenu} className="block px-4 py-2 text-gray-100 hover:text-white">Experience</a>
          <a href="#skills" onClick={toggleMenu} className="block px-4 py-2 text-gray-100 hover:text-white">Skills</a>
          <a href="#projects" onClick={toggleMenu} className="block px-4 py-2 text-gray-100 hover:text-white">Projects</a>
          <a href="#contact" onClick={toggleMenu} className="block px-4 py-2 text-gray-100 hover:text-white">Contact</a>
        </div>
        </Fade>
      )}
    </nav>
  );
};

export default Navbar;
