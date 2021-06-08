import React, { useState } from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "your username",
    email: "example@email.com",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password did not match!");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  const resetInput = (e) => {
    e.target.value = "";
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          onFocus={(e) => resetInput(e)}
          onChange={handleChange}
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          onFocus={(e) => resetInput(e)}
          onChange={handleChange}
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          onChange={handleChange}
          required
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
