import React from "react";
import CardSection from "../components/Cards/CardSection";
import SimpleAccordion from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import FooterTop from "../components/FooterTop/FooterTop";
import Hero from "../components/Hero/Hero";
import Table from "../components/Table/Table";

const Insurance = () => {
  return (
    <>
      <Hero />
      <Table />
      <CardSection />
      <SimpleAccordion />
      <FooterTop />
      <Footer />
    </>
  );
};

export default Insurance;
