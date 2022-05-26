import React from "react";
import { NavbarContainer, Menu, MenuLink } from "./NavbarStyles";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Menu>
          <MenuLink href="">BUYCAR</MenuLink>
          <MenuLink href="">SELLCAR</MenuLink>
          <MenuLink href="/insurance">INSURANCE</MenuLink>
          <MenuLink href="">FINANCE</MenuLink>
          <MenuLink href="">AUCTIONS</MenuLink>
          <MenuLink href="">MORE</MenuLink>
        </Menu>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
