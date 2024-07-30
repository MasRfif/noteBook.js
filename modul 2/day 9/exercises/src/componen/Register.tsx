import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string()ascascasc
    .email("Invalid email address")
    .required("Email is required"),cascasc
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is reqcascuired")
    .min(8, "Confirm password must be at least 8 characters long"),
});

const SignupForm = () => {
    


ac










}
    