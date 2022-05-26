import React from "react";
import LogoImg from "../../assets/logo2.png";
import VectorSearch from "../../assets/VectorSearch.png";
import VectorLocation from "../../assets/VectorLocation.png";
import VectorContact from "../../assets/VectorContact.png";
import VectorMan from "../../assets/VectorMan.png";
import {
  TopNavbarContainer,
  TopNavbarWrapper,
  LeftContainer,
  Logo,
  RightContainer,
  IconWrapper,
  Icon,
  NavButton,
  NavButtonText,
  NavButtonIcon,
} from "./TopNavbarStyles";

const TopNavbar = () => {
  return (
    <>
      <TopNavbarContainer>
        <TopNavbarWrapper>
          <LeftContainer>
            <a href="/">
              <Logo src={LogoImg}></Logo>
            </a>
          </LeftContainer>
          <RightContainer>
            <IconWrapper>
              <Icon src={VectorSearch}></Icon>
              <Icon src={VectorLocation}></Icon>
              <Icon src={VectorContact}></Icon>
            </IconWrapper>

            <NavButton href="/login">
              <NavButtonText>Login</NavButtonText>
              <NavButtonIcon src={VectorMan}></NavButtonIcon>
            </NavButton>
            {/* <Button
              variant="contained"
              endIcon={<SendIcon />}
              style={{ borderRadius: 44 }}
            >
              Login
            </Button> */}
          </RightContainer>
        </TopNavbarWrapper>
      </TopNavbarContainer>
    </>
  );
};

export default TopNavbar;
