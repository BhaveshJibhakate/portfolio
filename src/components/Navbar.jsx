import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: #333;
  padding: 15px 20px;
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    background: #333;
    position: absolute;
    top: 60px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    transition: left 0.3s ease;
    padding: 20px 0;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;

  @media (max-width: 768px) {
    margin: 12px 0;
    text-align: center;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #61dafb;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 28px;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 20px;
    top: 15px;
  }
`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Hamburger onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <NavList open={open}>
        <NavItem>
          <NavLink href="#about" onClick={() => setOpen(false)}>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#skills" onClick={() => setOpen(false)}>Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#projects" onClick={() => setOpen(false)}>Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;
