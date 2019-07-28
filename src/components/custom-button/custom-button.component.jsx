import React from "react";

import "./custom-button.styles.scss";

/* In React, everything is JavaScript, which gives us a lot of flexibility. */
/* By using ternary operator, we can add className only when user has signed in. */
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
