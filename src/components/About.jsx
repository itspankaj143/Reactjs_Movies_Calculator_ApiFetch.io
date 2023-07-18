import React from "react";
import img from "../mountain.jpg";
import { NavLink, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>Hello I am from About Fields...</h1>
      <img src={img} alt="" height={300} />
      <NavLink to="/about/contact">Contact Me</NavLink>
      <Outlet />
    </>
  );
};

export default About;
