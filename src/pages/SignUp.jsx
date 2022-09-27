import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import home from "../Assets/reg.webp";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import {gsap, Power3} from 'gsap'

function SignUp() {
  const containerRef = useRef()
  const formRef = useRef()
  useEffect(() => {
    gsap.to(containerRef.current, 2, { opacity: 1, ease: Power3.easeOut});
    gsap.to(formRef.current, .5, { opacity: 1, y:'-2%', ease: Power3.easeOut});
  });
  const emailRegex = RegExp(/^\S+@\S+\.\S+$/);
  const formik = useFormik({
    initialValues: {
      Fname: "",
      Lname: "",
      email: "",
      password: "",
      confirmPassword: "",
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

  console.log(formik.touched);
  return (
    <Container ref={containerRef}>
      <form action="" onSubmit={formik.handleSubmit} ref={formRef}>
        <div className="name">
          <div className="fname">
            <input
              value={formik.values.Fname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="First Name"
              name="Fname"
              id="Fname"
            />
            {formik.touched.Fname && formik.errors.Fname ? (
              <p className="error">{formik.errors.Fname}</p>
            ) : (
              ""
            )}
          </div>

          <div className="fname">
            <input
              value={formik.values.Lname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="Last Name"
              name="Lname"
              id="Lname"
            />
            {formik.touched.Lname && formik.errors.Lname ? (
              <p className="error">{formik.errors.Lname}</p>
            ) : (
              ""
            )}
          </div>
        </div>
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
        <input
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          placeholder="Password"
          name="confirmPassword"
          id="confirmPassword"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <p className="error">{formik.errors.confirmPassword}</p>
        ) : (
          ""
        )}
        <button type="submit">Register</button>
        <p className="login">
          already have an account ? <Link to="/login">Login</Link>
        </p>
      </form>
    </Container>
  );
}

export default SignUp;
const Container = styled.div`
  @media (max-width: 767px) {
    background-position: 70% 50%;
    align-items: flex-start;
  }
  max-width: 100%;
  opacity: 0;
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
      margin-top: 10%;
    }
    margin-top: 5%;
    width: 50%;
    height: auto;
    padding-bottom: 5%;
    background: #f8f8f8ac;
    .name {
      @media (max-width: 767px) {
        flex-direction: column;
      }
      width: 80%;
      height: 8vh;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5%;
      height: auto;
      .fname {
        @media (max-width: 767px) {
          width: 100%;
        }
        width: 50%;
        .error {
          margin-left: 0;
        }
      }
      input {
        @media (max-width: 767px) {
          margin-top: 5%;
        }
        font-family: "Poppins", sans-serif;
        width: 99%;
        height: 8vh;
        padding: 2%;
        border: 1px solid #2f53e9;
        color: #2f53e9;
        display: block;
        &::placeholder {
          color: #2f53e9;
        }
      }
    }
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
`;
