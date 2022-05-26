import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./FAQ.css";

export default function SimpleAccordion() {
  return (
    <>
      <div className="AccordionTitle">FAQ</div>
      <div className="AccordionContainer">
        {/* -------------------First Accordion----------------- */}
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#1D4A82" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                // width: 300,
                color: "#1D4A82",
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "20px",
                lineHeight: "27px",
                textAlign: "center",
              }}
            >
              Who is underwriter?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                // width: 300,
                color: "#3174B8",
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "20px",
                lineHeight: "27px",
              }}
            >
              Our Car Insurance is underwritten by Vero Insurance New Zealand
              Limited. Find out about their Financial Strength Rating.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* -------------------Second Accordion----------------- */}
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#1D4A82" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                // width: 300,
                color: "#1D4A82",
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "20px",
                lineHeight: "27px",
              }}
            >
              If I need to cancel my policy, can I get a refund?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                // width: 300,
                color: "#3174B8",
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "20px",
                lineHeight: "27px",
              }}
            >
              You may at any time cancel your policy by giving us notice in
              writing. If you request cancellation, your policy is not
              refundable unless cancelled within 15 days of the start of the
              period of insurance.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* -------------------Third Accordion----------------- */}
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#1D4A82" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                // width: 300,
                color: "#1D4A82",
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "20px",
                lineHeight: "27px",
                textAlign: "center",
              }}
            >
              How do I make a car insurance claim?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                // width: 300,
                color: "#3174B8",
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "20px",
                lineHeight: "27px",
              }}
            >
              If you've had an accident or your car has been stolen, phone 0800
              227 787 to get assistance with your claim. Our car insurance
              claims are managed by Vero Insurance New Zealand Limited. It's
              important to do these things before making your claim: ensure
              everyone is safe and contact emergency services if anyone has been
              injured in an accident notify the police if your car has been
              stolen or maliciously damaged (note the police record report
              number and officer details) take all reasonable care to prevent
              further loss or liability. 4 Simple Steps to Making a Claim (based
              on your claim being accepted)
              <br />
              <br />
              1. Call us with your registration and policy number to lodge your
              claim.
              <br />
              <br />
              2. You take your car to a reputable repairer and give them your
              claim number. They'll take photos of the damage and email them to
              us with a quote to repair your car.
              <br />
              <br />
              3. Your car will be assessed to ensure quality repairs and costs
              are fair and reasonable.
              <br />
              <br />
              4. We'll manage the process and payments with the repairer, and
              keep you updated on progress.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* -------------------Fourth Accordion----------------- */}
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#1D4A82" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                // width: 300,
                color: "#1D4A82",
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "20px",
                lineHeight: "27px",
              }}
            >
              What if my windscreen or window is damaged?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                // width: 300,
                color: "#3174B8",
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "20px",
                lineHeight: "27px",
              }}
            >
              If this is the only damage to your car phone 0800 227 787 to lodge
              your claim and find a reputable glass company to repair the
              damage. Depending on the policy you have with us you may have to
              pay an excess if the windscreen needs replacing.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* -------------------Fifth Accordion----------------- */}
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#1D4A82" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                // width: 300,
                color: "#1D4A82",
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "20px",
                lineHeight: "27px",
              }}
            >
              What if I caused the accident and the other person wants to make a
              claim against me?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                // width: 300,
                color: "#3174B8",
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "20px",
                lineHeight: "27px",
              }}
            >
              Do not admit fault for the damage/accident and do not promise to
              pay for any costs. Tell them we're your insurance company and they
              can call us on 0800 227 787.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* -------------------Sixth Accordion----------------- */}
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#1D4A82" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                // width: 300,
                color: "#1D4A82",
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "20px",
                lineHeight: "27px",
              }}
            >
              How can I make a premium payment by credit card?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                // width: 300,
                color: "#3174B8",
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "20px",
                lineHeight: "27px",
              }}
            >
              You can pay online directly to Vero with your credit or debit
              card. Please use your Customer PRN and policy number as the
              reference.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* -------------------Seventh Accordion----------------- */}
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#1D4A82" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                // width: 300,
                color: "#1D4A82",
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "20px",
                lineHeight: "27px",
              }}
            >
              Someone drove into my car, what do I do?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                // width: 300,
                color: "#3174B8",
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "20px",
                lineHeight: "27px",
              }}
            >
              It’s important to get as much information from them as possible
              e.g. drivers full name, drivers licence no, address, phone number,
              car registration, insurance company (if any). If you’re not at
              fault for the accident and we have other person’s details, we may
              waive your excess.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion> */}
      </div>
    </>
  );
}
