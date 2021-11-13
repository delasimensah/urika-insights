import React from "react";

//mui
import { TextField } from "@mui/material";

const TextInput = ({ label, type, value, handleChange }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      type={type}
      value={value}
      onChange={handleChange}
      fullWidth
      color="primary"
    />
  );
};

export default TextInput;
