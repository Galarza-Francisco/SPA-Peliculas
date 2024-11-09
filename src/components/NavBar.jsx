import React from 'react'
import { Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo2.png';

const NavBar = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PelisApp</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar