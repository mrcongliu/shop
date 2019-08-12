import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

/* In React, everything is JavaScript, which gives us a lot of flexibility. */
/* By using ternary operator, we can add className only when user has signed in. */
const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
