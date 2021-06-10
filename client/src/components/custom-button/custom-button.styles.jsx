import styled, { css } from "styled-components";

const ButtonStyles = css`
  background-color: black;
  color: white;
  border: solid 1px;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  &:active {
    transform: translateY(5px);
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
  &:active {
    transform: translateY(5px);
  }
`;

const isGoogleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
    transform: scale(1.1);
  }
  &:active {
    transform: translateY(5px);
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return isGoogleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : ButtonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 20px 0 20px;
  font-size: 12px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: 400;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
