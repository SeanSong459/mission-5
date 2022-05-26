import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  /* padding: 0.5rem 0; */
  /* display: flex;
  justify-content: space-between; */
  /* align-items: center; */
  /* flex-wrap: wrap; */
  background-color: #3274b8;
  /* position: absolute; */
  /* margin-top: 90px; */
`;

export const Menu = styled.div`
  height: 100%;
  margin: 0 10rem;
  /* padding: 1rem 0; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: relative; */
`;

export const MenuLink = styled.a`
  /* padding-top: 30px; */
  width: 255px;
  padding: 14px;
  /* height: 100%; */
  /* padding: 0.85rem 4rem; */
  /* width: 5rem; */
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  color: white;
  transition: all 0.3s ease-in;
  font-size: 1rem;

  &:hover {
    background-color: #1c4982;
  }
`;

// export default Navbar;
