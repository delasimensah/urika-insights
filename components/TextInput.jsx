import React from "react";

//mui
import { TextField } from "@mui/material";

const TextInput = ({
  label,
  type,
  value,
  handleChange,
  multiline,
  maxRows,
  required,
}) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      type={type}
      value={value}
      onChange={handleChange}
      fullWidth
      color="secondary"
      multiline={multiline}
      maxRows={maxRows}
      required={required}
    />
  );
};

export default TextInput;
