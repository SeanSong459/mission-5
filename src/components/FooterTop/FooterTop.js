import React from "react";
import {
  FooterContainer,
  FooterRow,
  FooterColumn,
  FooterTitle,
  FooterLink,
} from "./FooterTopStyle";

const FooterTop = () => {
  return (
    <div>
      <FooterContainer>
        <FooterRow>
          <FooterColumn>
            <FooterTitle>CARS</FooterTitle>
            <FooterLink href="#">How to Buy</FooterLink>
            <FooterLink href="#">Sell Your Car</FooterLink>
            <FooterLink href="#">Finance & Insurance</FooterLink>
            <FooterLink href="#">Auctions & Events</FooterLink>
            <FooterLink href="#">Buyer & Seller Fees</FooterLink>
            <FooterLink href="#">Vehicle Sale Price History Tool</FooterLink>
            <FooterLink href="#">Shipping Costs</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>FINANCE & INSURANCE</FooterTitle>
            <FooterLink href="#">Finance Homepage</FooterLink>
            <FooterLink href="#">Car & Personal Finance</FooterLink>
            <FooterLink href="#">Loan Calculator</FooterLink>
            <FooterLink href="#">Car Insurance</FooterLink>
            <FooterLink href="#">Mechanical Breakdown Insurance</FooterLink>
            <FooterLink href="#">General Insurances</FooterLink>
            <FooterLink href="#">Trucks Finance</FooterLink>
            <FooterLink href="#">Financial Information</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>SEARCH&nbsp;FOR</FooterTitle>
            <FooterLink href="#">Cars</FooterLink>
            <FooterLink href="#">Trucks & Machinery</FooterLink>
            <FooterLink href="#">Damaged & End of Life Cars</FooterLink>
            <FooterLink href="#">Boats & Marine</FooterLink>
            <FooterLink href="#">Motorcycles & Scooters</FooterLink>
            <FooterLink href="#">General Goods</FooterLink>
            <FooterLink href="#">Buses, Caravans & Motorhomes</FooterLink>
            <FooterLink href="#">Turners Auction Schedule</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>ABOUT&nbsp;US</FooterTitle>
            <FooterLink href="#">Overview</FooterLink>
            <FooterLink href="#">Turners Careers</FooterLink>
            <FooterLink href="#">Terms and Conditions</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Turners Live</FooterLink>
            <FooterLink href="#">The Good Oil Blog</FooterLink>
            <FooterLink href="#">Email Alerts</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </FooterColumn>
        </FooterRow>
      </FooterContainer>
    </div>
  );
};

export default FooterTop;
