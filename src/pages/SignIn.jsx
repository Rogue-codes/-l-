import React from 'react'
import styled from 'styled-components';
import home from "../Assets/reg.webp";
import { useFormik } from "formik";
import { Link } from 'react-router-dom';

function SignIn() {
    const emailRegex = RegExp(/^\S+@\S+\.\S+$/);
    const formik = useFormik({
      initialValues: {
        email: "",
        password: ""
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validate: (values) => {
        let errors = {};
        if (!values.Fname) {
          errors.Fname = "Required";
        }
        if (!values.Lname) {
          errors.Lname = "Required";
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (!emailRegex.test(values.email)) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Required";
        }
        if (!values.confirmPassword) {
          errors.confirmPassword = "Required";
        } else if (values.confirmPassword !== values.password) {
          errors.confirmPassword = "password must match";
        }
  
        return errors;
      },
    });
  return (
    <Container>
        <form action="" onSubmit={formik.handleSubmit}>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="email"
          placeholder="Email"
          name="email"
          id="email"
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="error">{formik.errors.email}</p>
        ) : (
          ""
        )}
        <input
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          placeholder="Password"
          name="password"
          id="password"
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="error">{formik.errors.password}</p>
        ) : (
          ""
        )}
        <button type="submit">Register</button>
        <p className="login">
          Don't have an account ? <Link to="/register">sign up</Link>
        </p>
      </form>
    </Container>
  )
}

export default SignIn
const Container = styled.div`
  @media (max-width: 767px) {
    background-position: 70% 50%;
    align-items: flex-start;
  }
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      90deg,
      #0d98d39c 0%,
      #0d91d39b 32%,
      #0d91d39a 100%
    ),
    url(${home});
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  form {
    @media (max-width: 767px) {
      width: 90%;
      margin-top: 15%;
    }
    width: 50%;
    height: auto;
    padding-top: 10%;
    padding-bottom:10%;
    background: #f8f8f8ac;
    input[type="email"] {
      font-family: "Poppins", sans-serif;
      width: 80%;
      height: 8vh;
      margin-left: 10%;
      margin-top: 2%;
      padding: 2%;
      border: 1px solid #2f53e9;
      color: #2f53e9;
      &::placeholder {
        color: #2f53e9;
      }
    }
    input[type="password"] {
      font-family: "Poppins", sans-serif;
      width: 80%;
      height: 8vh;
      margin-left: 10%;
      margin-top: 2%;
      padding: 2%;
      border: 1px solid #2f53e9;
      color: #2f53e9;
      &::placeholder {
        color: #2f53e9;
      }
    }
    button {
      @media (max-width: 767px) {
        font-size: 1.3rem;
      }
      width: 80%;
      height: 8vh;
      margin-left: 10%;
      margin-top: 5%;
      border: none;
      background: #2f53e9;
      font-size: 1.3vw;
      color: white;
      cursor: pointer;
      font-family: "Poppins", sans-serif;
    }
    .error {
      @media (max-width: 767px) {
        font-size: 1rem;
      }
      color: red;
      margin-left: 10%;
      font-size: 1vw;
      font-family: "Poppins", sans-serif;
    }
    .login {
      text-align: center;
      margin-top: 2%;
      font-family: "Poppins", sans-serif;
    }
  }
`