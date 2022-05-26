import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #9a9b9c;
  width: 100%;
  margin-top: 100px;
`;

export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 80%;
  padding: 50px 10px 50px 60px;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const FooterLink = styled.a`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap");
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 191.6%;

  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: black;
    transition: 200ms ease-in;
  }
`;

export const FooterTitle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap");
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
`;

export const FooterContent = styled.div``;
