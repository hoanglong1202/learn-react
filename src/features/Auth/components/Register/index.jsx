import React from "react";
import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm";
import { register } from "../../userSlice";
import { unwrapResult } from "@reduxjs/toolkit";

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      values.username = values.email;
      const result = await dispatch(register(values));
      const user = unwrapResult(result);

    } catch (error) {
      console.log("Some errors occer: " + error);
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
