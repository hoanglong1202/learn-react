import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputField from "../../../../components/form-control/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

ToDoForm.propTypes = {
  onsubmit: PropTypes.func,
};

function ToDoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required("Please enter title"),
  });

  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    console.log("TO DO FORM: " + JSON.stringify(values));
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <h2>What to Do</h2>
      <InputField form={form} label="To Do" name="title" />
    </form>
  );
}

export default ToDoForm;
