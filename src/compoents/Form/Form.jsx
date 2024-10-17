import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ formType, fields, handleSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      {fields.map((field) => (
        <div className={styles.form__group} key={field.name}>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ""}
            placeholder={field.placeholder}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">
        {formType === "register" ? "Register" : "Login"}
      </button>
    </form>
  );
};

export default Form;
