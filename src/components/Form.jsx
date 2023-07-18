import React from "react";
import { useState } from "react";

const Form = () => {
  //   let form = document.getElementById("myForm");
  //   let formHandle = (e) => {
  //     e.preventDefault();
  //     let fname = document.forms["myForm"]["fname"].value;
  //     alert(fname);
  //   };
  //   form.addEventListener("submit", formHandle);

  const [form, setForm] = useState("");

  //TODO: one way to handle the form

  //   const formHandle = (e) => {
  //     e.preventDefault();
  //     let fname = document.forms["myForm"]["fname"].value;
  // alert(fname);
  //     setForm(fname);
  // alert("Function is working");
  //   };

  //TODO: Another way Onchnage Handling the form
  const formHandle = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form action="" name="myForm" id="myForm" onSubmit={formHandle}>
        <label for="fname">Name:</label>
        <input
          type="text"
          name="fname"
          id="fname"
          onChange={(e) => setForm(e.target.value)}
        />
        <br />
        <input type="submit" value="Send" name="" id="" />
      </form>
      <h1>{form}</h1>
    </>
  );
};

export default Form;
