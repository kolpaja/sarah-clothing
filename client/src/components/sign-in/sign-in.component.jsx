import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredeintials, setCredentials] = useState({
    email: "your-email@mail.com",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredeintials, [name]: value });
  };

  const { email, password } = userCredeintials;

  const resetInput = (event) => {
    event.target.value = "";
  };
  return (
    <div className="sign-in">
      <h1 className="title">I already have an account</h1>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onFocus={(event) => resetInput(event)}
          handleChange={handleChange}
          required
        />

        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
