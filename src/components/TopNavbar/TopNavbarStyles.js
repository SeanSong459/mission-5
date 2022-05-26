import styled from "styled-components";

export const TopNavbarContainer = styled.div`
  width: 100%;
  /* height: 90px; */
`;

export const TopNavbarWrapper = styled.div`
  height: 100px;
  margin: auto 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContainer = styled.div`
  display: flex;
  padding-left: 5%;
  align-items: center;
`;

export const Logo = styled.img`
  /* margin: 10px; */
  max-width: 180px;
  height: auto;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Icon = styled.img`
  margin: auto 10px;
`;

export const NavButton = styled.a`
  display: flex;
  justify-content: space-between;
  background-color: #3274b8;
  width: 120px;
  padding: 0.4rem 0.8rem;
  border-radius: 44px;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;

export const NavButtonText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope&display=swap");
  margin-left: 0.6rem;
  color: white;
  font-size: 1.4rem;
  font-family: "Manrope", sans-serif;
`;

export const NavButtonIcon = styled.img`
  margin: auto 10px;
  border-color: white;
  /* height: 30px; */
`;
