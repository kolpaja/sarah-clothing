import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...otherButtonProps }) => (
  <CustomButtonContainer {...otherButtonProps}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
