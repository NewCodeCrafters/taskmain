import React from "react";

const TextInput = ({
  label,
  leftIcon,
  rightIcon,
  hint,
  error,
  ...inputProps
}) => {
  return <div>{label && <label>{label}</label>}</div>;
};

export default TextInput;
