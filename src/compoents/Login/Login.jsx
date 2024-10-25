import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { Fragment, useEffect, useState, useContext } from "react";
import Form from "../Form/Form";
import FlashMessage from "../FlashMessage.jsx/FlashMessage";
import UserContext from "../store/userContext";

const Login = () => {
  const [open, setOpen] = useState(false); // State to handle Snackbar visibility
  const [message, setMessage] = useState(""); // State to store message content
  const [severity, setSeverity] = useState("success"); // State to define severity (error, success)
  const navigate = useNavigate();
  const { setCurrentlyLoggedInUser } = useContext(UserContext);

  const loginFields = [
    { placeholder: "Email", name: "email", type: "email" },
    { placeholder: "Password", name: "password", type: "password" },
  ];

  const handleLogin = async (formData) => {
    const { email, password } = formData;

    // Basic email validation using REGEX
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setSeverity("error");
      setOpen(true);
      return;
    }

    // Check if password is provided
    if (!password) {
      setMessage("Password is required.");
      setSeverity("error");
      setOpen(true);
      return;
    }
    try {
      const response = await fetch("http://localhost:9090/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      setCurrentlyLoggedInUser(data.user); // Set user data in context
      localStorage.setItem("user", JSON.stringify(data.user)); // Optionally store in local storage, But be carefull with sensitive data Effa... Yes you!
      localStorage.setItem("token", data.access_token); // Storing JWT token in local storage

      setMessage("Login successful!"); // Set success message
      setSeverity("success"); // set severity to true
      setOpen(true); // Show flash message

      // Redirect or update UI as necessary
      setTimeout(() => {
        navigate("/home");
      }, 1000);

      return data;
    } catch (error) {
      setMessage("Login failed. Please check your credentials.");
      setSeverity("error");
      setOpen(true); // Show flash message
    }
  };
  return (
    <Fragment>
      {/* FlashMessage Component */}
      <FlashMessage
        open={open}
        setOpen={setOpen}
        message={message}
        severity={severity}
      />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>ALXConnect</h1>
        </header>
        <main>
          <section>
            <h2>Welcome Back!</h2>
            <p>Login to your account</p>
          </section>
          <Form
            formType="login"
            fields={loginFields}
            handleSubmit={handleLogin}
          />
          <div className={styles.got__acct}>
            <p>
              Don&apos;t have an account ? <Link to="/register">Sign Up</Link>
            </p>
          </div>
          <div className={`${styles.socials}`}>
            <div className={styles.social__text}>
              <span>__________</span>
              <p>or sign in with</p>
              <span>__________</span>
            </div>
            <div className={styles.icon}>
              <svg
                width="176"
                height="44"
                viewBox="0 0 176 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.1654 19.4703H27.125V19.4167H15.5V24.5833H22.7999C21.7349 27.591 18.8732 29.75 15.5 29.75C11.2201 29.75 7.75 26.2799 7.75 22C7.75 17.7201 11.2201 14.25 15.5 14.25C17.4756 14.25 19.273 14.9953 20.6415 16.2127L24.295 12.5592C21.988 10.4092 18.9022 9.08333 15.5 9.08333C8.36677 9.08333 2.58333 14.8668 2.58333 22C2.58333 29.1332 8.36677 34.9167 15.5 34.9167C22.6332 34.9167 28.4167 29.1332 28.4167 22C28.4167 21.1339 28.3275 20.2885 28.1654 19.4703Z"
                  fill="#FFC107"
                />
                <path
                  d="M4.07263 15.9879L8.3164 19.1002C9.46469 16.2572 12.2457 14.25 15.5 14.25C17.4756 14.25 19.273 14.9953 20.6415 16.2127L24.295 12.5592C21.9881 10.4092 18.9023 9.08333 15.5 9.08333C10.5387 9.08333 6.23617 11.8843 4.07263 15.9879Z"
                  fill="#FF3D00"
                />
                <path
                  d="M15.5 34.9167C18.8364 34.9167 21.8679 33.6399 24.16 31.5635L20.1623 28.1806C18.8219 29.2 17.184 29.7513 15.5 29.75C12.1404 29.75 9.28772 27.6078 8.21306 24.6182L4.00093 27.8635C6.13864 32.0466 10.4799 34.9167 15.5 34.9167Z"
                  fill="#4CAF50"
                />
                <path
                  d="M28.1654 19.4703H27.125V19.4167H15.5V24.5833H22.7999C22.2904 26.0148 21.3728 27.2656 20.1603 28.1813L20.1623 28.18L24.16 31.5629C23.8771 31.8199 28.4167 28.4583 28.4167 22C28.4167 21.1339 28.3275 20.2885 28.1654 19.4703Z"
                  fill="#1976D2"
                />
                <path
                  d="M95.0738 6.74524H67.9288C66.999 6.74524 66.2452 7.49897 66.2452 8.42876V35.5738C66.2452 36.5036 66.999 37.2574 67.9288 37.2574H95.0738C96.0036 37.2574 96.7574 36.5036 96.7574 35.5738V8.42876C96.7574 7.49897 96.0036 6.74524 95.0738 6.74524Z"
                  fill="#3D5A98"
                />
                <path
                  d="M87.2956 37.2548V25.4392H91.2608L91.8538 20.8347H87.2956V17.8956C87.2956 16.5627 87.6669 15.6527 89.5773 15.6527H92.0162V11.5277C90.8352 11.4048 89.6483 11.3463 88.4609 11.3523C84.9495 11.3523 82.5313 13.4922 82.5313 17.4393V20.8347H78.5661V25.4392H82.5313V37.2548H87.2956Z"
                  fill="white"
                />
                <path
                  d="M163.258 37.18C161.462 38.9217 159.5 38.6467 157.612 37.8217C155.613 36.9783 153.78 36.9417 151.672 37.8217C149.032 38.9583 147.638 38.6283 146.062 37.18C137.115 27.9583 138.435 13.915 148.592 13.4017C151.067 13.53 152.79 14.7583 154.238 14.8683C156.402 14.4283 158.473 13.1633 160.783 13.3283C163.552 13.5483 165.642 14.6483 167.017 16.6283C161.297 20.0567 162.653 27.5917 167.897 29.7C166.852 32.45 165.495 35.1817 163.24 37.1983L163.258 37.18ZM154.055 13.2917C153.78 9.20333 157.098 5.83 160.912 5.5C161.443 10.23 156.622 13.75 154.055 13.2917Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default Login;
