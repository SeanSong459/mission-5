import React from "react";
import { HeroContainer } from "./HeroStyles";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <Link className="HeroLink" to="/insurance/newquote">
          Get&nbsp; a&nbsp; quote
        </Link>
      </HeroContainer>
    </>
  );
};

export default Hero;
