import React from "react";
import "./loginup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import hash from "hash-it";
import { useContext } from "react";
import { MyContext } from "../../myContext";

function LoginUp() {
  const { text, setText } = useContext(MyContext);
  const [invalid, setInvalid] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();
  const [lol, setLol] = useState(false);

  function login() {
    setLol(true);
    console.log(text);
  }

  function register() {
    setLol(false);
  }

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email: event.target.email.value,
        password: event.target.password.value,
      });
      if (response.data.userType === "superAdmin") {
        setText(true);

        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("userType", hash(response.data.userType));
        sessionStorage.setItem("user_id", response.data._id);
        sessionStorage.setItem("userName", response.data.name);
        navigate("/items");
      } else {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("userType", response.data.userType);
        sessionStorage.setItem("user_id", response.data._id);
        sessionStorage.setItem("userName", response.data.name);
        navigate("/");
      }
    } catch (error) {
      setInvalid(false);
      setTimeout(() => {
        setInvalid(true);
      }, 3000);
      console.log(error);
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        name: event.target.name.value,
        email: event.target.Email.value,
        password: event.target.Password.value,
      });
      if (response.status === 201) {
        navigate("/");
      }

      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("userType", response.data.userType);
      sessionStorage.setItem("user_id", response.data._id);
      sessionStorage.setItem("userName", response.data.name);

      // handle successful registration
    } catch (error) {
      setInvalid(false);
      setError(error.response.data.message);
      setTimeout(() => {
        setInvalid(true);
      }, 3000);
      console.log(error);
    }
  };
  return (
    <>
      <form className="form_container">
        <div className="logo_container"></div>
        <div className="title_container">
          <p className="title">Create an Account</p>
          <span className="subtitle">
            Get started with our app, just create an account and enjoy the
            experience.
          </span>
        </div>
        <br />
        <div className="input_container">
          <label className="input_label" htmlFor="email_field">
            Email
          </label>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="icon">
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#141B34"
              d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"></path>
            <path
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="#141B34"
              d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"></path>
          </svg>
          <input
            placeholder="name@mail.com"
            title="Input title"
            name="input-name"
            type="text"
            className="input_field"
            id="email_field"
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="password_field">
            Password
          </label>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="icon">
            <path
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#141B34"
              d="M18 11.006V12.9999C18 15.5478 16.4771 17.6743 14.0036 19.1651C11.5301 20.656 8.49994 21 6 21C3.50006 21 0.5 21 0.5 21C0.5 21 0.5 21 0.5 19.1651C0.5 17.6743 1.97795 15.5478 4.4515 14.057C6.92504 12.5662 9.92484 11.0046 12 11.0046H18Z"></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="#141B34"
              d="M12 7.00461C14.21 7.00461 16 5.21461 16 3.00461C16 0.794614 14.21 -0.995386 12 -0.995386C9.78999 -0.995386 8 0.794614 8 3.00461C8 5.21461 9.78999 7.00461 12 7.00461Z"></path>
          </svg>
          <input
            placeholder="********"
            title="Input title"
            name="input-name"
            type="password"
            className="input_field"
            id="password_field"
            required
          />
        </div>
        <div className="button_container">
          <button type="submit" className="button">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}
export default LoginUp;
