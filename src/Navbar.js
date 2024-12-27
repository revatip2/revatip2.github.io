import React from 'react';
import './Navbar.css';
import { HashLink as Link } from 'react-router-hash-link';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1>>>></h1>
//       <ul>
//     <li><a href="#about">About</a></li>
//     <li><a href="#projects">Projects</a></li> {/* Scroll to Projects section */}
//     <li><a href="#education">Education</a></li>
//     <li><a href="#experiences">Experiences</a></li>
//     <li><a href="#contact">Contact</a></li>
//   </ul>
//     </nav>
//   );
// };
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>>>></h1>
      <ul>
        <li><Link to="#about">About</Link></li>
        <li><Link to="#projects">Projects</Link></li> {/* Scroll to Projects section */}
        <li><Link to="#education">Education</Link></li>
        <li><Link to="#experiences">Experiences</Link></li>
        <li><Link to="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};
export default Navbar;

