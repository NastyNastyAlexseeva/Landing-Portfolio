import { Link } from "react-router-dom";
import { Container as BContainer } from 'react-bootstrap';
import { Navbar as BNavbar } from 'react-bootstrap';
import { Nav as BNav } from 'react-bootstrap';

import cl from './Header.module.scss';

const Header = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const $currentElement = document.querySelector(e.target.dataset.href);

    $currentElement && $currentElement.scrollIntoView();
  };

  return (
    <header className={cl.header}>
      <BNavbar>
        <BContainer>
          <BNav>
            {/** переделаю ближе к финалу, нужно для io */}
            <BNav.Link onClick={handleClick} data-href="#home">Home</BNav.Link>
            <BNav.Link onClick={handleClick} data-href="#about">About</BNav.Link>
            <BNav.Link onClick={handleClick} data-href="#gallery">Gallery</BNav.Link>
            <BNav.Link onClick={handleClick} data-href="#contacts">Contacts</BNav.Link>
            <BNav.Link><Link to="/auth">Auth</Link></BNav.Link>
            <BNav.Link><Link to="/admin">Admin</Link></BNav.Link>
          </BNav>
        </BContainer>
      </BNavbar>
    </header>
  )
};

export default Header;