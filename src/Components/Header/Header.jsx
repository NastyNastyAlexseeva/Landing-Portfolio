import { Link } from "react-router-dom";
import { Container as BContainer } from 'react-bootstrap';
import { Navbar as BNavbar } from 'react-bootstrap';
import { Nav as BNav } from 'react-bootstrap';

import cl from './Header.module.scss';

const Header = () => {
  return (
      <BNavbar>
        <BContainer>
          <BNav>
            <BNav.Link href="#home">Home</BNav.Link>
            <BNav.Link href="#about">About</BNav.Link>
            <BNav.Link href="#gallery">Gallery</BNav.Link>
            <BNav.Link href="#contacts">Contacts</BNav.Link>
            <BNav.Link><Link to="/auth">Auth</Link></BNav.Link>
            <BNav.Link><Link to="/admin">Admin</Link></BNav.Link>
          </BNav>
        </BContainer>
      </BNavbar>
  )
};

export default Header;