import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container as BContainer } from 'react-bootstrap';
import { Navbar as BNavbar } from 'react-bootstrap';
import { Nav as BNav } from 'react-bootstrap';

import { USERLINKS, ADMINLINKS } from './constants';

import cl from './Header.module.scss';

const Header = ({isAdmin = false}) => {
  const [links, setLinks] = useState({});

  useEffect(() => { setLinks(isAdmin ? ADMINLINKS : USERLINKS) }, []);

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
            <BNav.Link onClick={handleClick} data-href={links.home}>Home</BNav.Link>
            <BNav.Link onClick={handleClick} data-href={links.about}>About</BNav.Link>
            <BNav.Link onClick={handleClick} data-href={links.gallery}>Gallery</BNav.Link>
            <BNav.Link onClick={handleClick} data-href={links.contacts}>Contacts</BNav.Link>
            <Link className={cl.link} to="/auth">Auth</Link>
            <Link className={cl.link} to="/admin">Admin</Link>
          </BNav>
        </BContainer>
      </BNavbar>
    </header>
  )
};

export default Header;