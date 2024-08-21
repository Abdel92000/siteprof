import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">



      <Link to="/" className='navbar'>
        Accueil
      </Link>

      <Link to="Contact" className='navbar'>
        Contact
      </Link>


      <Link to="Connexion" className='navbar'>
        Connexion
      </Link>

      <Link to="Planning" className='navbar'>
        Planning
      </Link>

      <Link to="Apropos" className='navbar'>
        À propos
      </Link>




    </nav>
  );
}

export default Navbar;
