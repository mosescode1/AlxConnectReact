import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ formType, fields, handleSubmit }) => {
  const [formData, setFormData] = useState({});
  // const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await handleSubmit(formData);

      // console.log(data); Dear Effa, Do whatever you like with the data haha! but be careful not to break things! 😂
    } catch (error) {
      setError("Failed to submit form. Please try again.");
    }
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
      {/* {error && <p className={styles.error}>{error}</p>} */}
    </form>
  );
};

export default Form;
