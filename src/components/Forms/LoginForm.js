import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import "./Loginform.css";
import { authentication } from "../../firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleButton from "react-google-button";
import FacebookIcon from "@mui/icons-material/Facebook";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    // .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="LoginContainer">
      <div className="LoginLeftContainer">
        <div className="LoginTitle">Login</div>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <br />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ marginTop: "30px" }}
          />
          <Button
            color="success"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ marginTop: "30px" }}
          >
            Login
          </Button>
        </form>
      </div>
      <div className="SocialButtonContainer">
        <GoogleButton onClick={signInWithGoogle} />
        <Button
          variant="contained"
          startIcon={<FacebookIcon />}
          sx={{ height: "50px", marginTop: "10px", backgroundColor: "#3b5998" }}
        >
          Sign in with Facebook
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
