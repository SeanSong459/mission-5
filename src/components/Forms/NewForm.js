import React from "react";
import * as Yup from "yup";
import {
  FormikStepper,
  FormikStep,
  InputField,
  RadioField,
  SelectField,
} from "formik-stepper";
import { Field } from "formik";
import { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import "./NewForm.css";
import Grid from "@mui/material/Grid";
import { v4 as uuidv4 } from "uuid";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const validationSchema = Yup.object().shape({
  InsuranceType: Yup.string()
    .required("please choose one option")
    // .oneOf(["1", "2", "3"]),
    .oneOf(["ThirdParty", "ThirdPartyFireTheft", "Comprehensive"]),
  LicenceType: Yup.string()
    .required("please choose one option")
    // .oneOf(["1", "2", "3"]),
    .oneOf(["LearnerLicence", "RestrictedLicence", "FullLicence"]),
  RegistrationNumber: Yup.string().required(
    "The registration number is required"
  ),
  Address: Yup.string().required("The address field is required"),
  Useage: Yup.string()
    .required("please choose one option")
    .oneOf(["Private", "Business"]),
  FirstName: Yup.string().required("First Name is required"),
  LastName: Yup.string().required("Last Name is required"),
});

// couldn't add disabled={isSubmitting} to the button as the button being hided, https://formik.org/docs/guides/form-submission
// might be the reason cause double submit https://formik.org/docs/examples/async-submission

const NewForm = () => {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), FirstName: "", LastName: "", DateofBirth: "" },
  ]);
  const userInfo = collection(db, "Quote");

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), firstName: "", lastName: "", DateofBirth: "" },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  const onSubmit = async (values, { setSubmitting }) => {
    await sleep(500);
    alert(JSON.stringify(values, null, 2));
    let result = JSON.stringify(values, null, 2);
    console.log(result);
    // onSubmit.preventDefault();
    // const payload = JSON.stringify(values, null, 2);
    await addDoc(userInfo, { values });
    db.collection("Quote").add({ values });
    setSubmitting(false); //// Important
  };

  return (
    <div className="FormContainer">
      <FormikStepper
        /// Accept all Formik props
        onSubmit={onSubmit}
        // isSubmitting="true" /// onSubmit Function
        initialValues={{
          RegistrationNumber: "",
          Address: "",
          Useage: "Private",
          InsuranceType: "",
          FirstName: "",
          LastName: "",
          DateofBirth: "",
          LicenceType: "",
          ClaimTimes: "",
          AdditionalDrivers: "",
          // StartDate: "",
        }}
        validationSchema={validationSchema}
        labelsColor="secondary" /// The text label color can be root variables or css => #fff
        withStepperLine /// false as default and If it is false, it hides stepper line
        // nextBtnLabel="step" /// Next as default
        prevBtnLabel="return" /// Prev as default
        submitBtnLabel="Done" /// Submit as default
        nextBtnColor="blue" /// as default and The color can be root variables or css => #fff
        prevBtnColor="danger" /// as default and The color can be root variables or css => #fff
        submitBtnColor="success" /// as default and The color can be root variables or css => #fff
      >
        {/*  First Step */}
        <FormikStep
          label="Car details" /// The text label of Step
          withIcons="fa fa-user" // to add icon into the circle must add icon as class Name like Fontawesome
          withNumbers /// If true, it hides the icon and shows the step number
          iconColor="white" /// The color can be root variables or css => #fff
          circleColor="danger" /// The color can be root variables or css => #fff
        >
          <SelectField
            label="Select type of Insurance"
            name="InsuranceType"
            // labelColor="#dc3545"
            placeholder="Choose your car Insurance"
            // isMulti
            options={[
              { value: "ThirdParty", label: "Third party" },
              {
                value: "ThirdPartyFireTheft",
                label: "Third party, Fire & Theft",
              },
              { value: "Comprehensive", label: "Comprehensive" },
            ]}
          />
          <InputField
            name="RegistrationNumber"
            label="Enter your car Registration number"
            placeholder="ABC123"
          ></InputField>
          <InputField
            name="Address"
            label="Where do you usually park your car"
            placeholder="Please enter the Address"
          />
          <RadioField
            name="Useage"
            label="How do you use your car"
            labelColor="#000"
            options={[
              { label: "Private", value: "Private" },
              { label: "Business", value: "Business" },
            ]}
          />
        </FormikStep>
        {/*---------------- Second Step --------------------*/}
        <FormikStep
          label="Driver details"
          withIcons="fa fa-lock"
          iconColor="white"
          circleColor="danger"
        >
          <div style={{ marginBottom: "10px" }}>
            <Label>* Driver</Label>
          </div>
          {inputFields.map((inputField) => (
            <div key={inputField.id}>
              {/* <Grid className="DriverNameWrapper"> */}
              <Grid container rowSpacing={3} spacing={9}>
                <Grid item xs={6} md={6} sm={6} lg={3}>
                  <InputField
                    className="DriverFirstName"
                    name="FirstName"
                    // label="Drivers"
                    placeholder="First Name"
                    floating
                    // value={inputField.FirstName}
                  ></InputField>
                </Grid>
                <Grid item xs={6} md={6} sm={6} lg={3}>
                  <InputField
                    className="DriverLastName"
                    name="LastName"
                    placeholder="Last Name"
                    floating
                    // value={inputField.LastName}
                  ></InputField>
                </Grid>
                <Grid item xs={6} md={6} sm={6} lg={3}>
                  <InputField
                    name="DateofBirth"
                    label="Date of birth"
                    type="date"
                    floating
                    // value={inputField.DateofBirth}
                  ></InputField>
                </Grid>
                <Grid item xs={6} md={6} sm={6} lg={3}>
                  <IconButton
                    disabled={inputFields.length === 1}
                    onClick={() => handleRemoveFields(inputField.id)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={handleAddFields}>
                    <AddIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </div>
          ))}
          <SelectField
            label="Licence type"
            name="LicenceType"
            // labelColor="#dc3545"
            placeholder="select one"
            // isMulti
            options={[
              { value: "LearnerLicence", label: "Learner Licence" },
              {
                value: "RestrictedLicence",
                label: "Restricted Licence",
              },
              { value: "FullLicence", label: "Full Licence" },
            ]}
          />

          <FormGroup style={{ marginTop: 30, marginBottom: 30 }}>
            <div className="dropdown-wrapper">
              <Label>
                In the last three years have you had any vihicle stolen, any
                accidents, claims or lost your licence?
              </Label>
              <br />
              <Input
                tag={Field}
                name="ClaimTimes"
                component="select"
                style={{ minWidth: "100" }}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3">4</option>
                <option value="3">5</option>
                <option value="3">6</option>
              </Input>
            </div>
          </FormGroup>
          <FormGroup style={{ marginTop: 30, marginBottom: 30 }}>
            <div className="dropdown-wrapper">
              <Label>
                How many additional drivers would you like listed on this
                policy?
              </Label>
              <br />
              <Input
                tag={Field}
                name="AdditionalDrivers"
                component="select"
                style={{ minWidth: "100" }}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3">4</option>
                <option value="3">5</option>
                <option value="3">6</option>
              </Input>
            </div>
          </FormGroup>
          <div className="BottomFormText">
            *You must list all drivers who will use the vehicle at least once a
            month. Also add drivers who will use the vehicle regularly for a
            specific time. i.e. children who come home for university holidays
            or visiting family members. You can add up to five regular drivers
            to your policy.{" "}
          </div>
        </FormikStep>
        {/* <FormikStep
          label="Quote details" /// The text label of Step
          withIcons="fa fa-user" // to add icon into the circle must add icon as class Name like Fontawesome
          withNumbers /// If true, it hides the icon and shows the step number
          iconColor="white" /// The color can be root variables or css => #fff
          circleColor="danger"
        >
          <InputField
            name="StartDate"
            label="Policy start date"
            type="date"
            // floating
            // value={inputField.DateofBirth}
          ></InputField>
        </FormikStep> */}
      </FormikStepper>
    </div>
  );
};

export default NewForm;
