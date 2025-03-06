import { TextField } from "@mui/material";
import React from "react";

const TextFieldCustom = ({
  setFormData,
  labelName,
  name,
  placeHolder,
  formData,
  required = false,
  type = "text",
  error,
}) => {
  return (
    <TextField
      name={name}
      type={type}
      label={labelName}
      fullWidth
      size="small"
      margin="none"
      value={formData[name]}
      placeholder={placeHolder}
      required={required}
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, [name]: e.target.value }))
      }
      error={!!error}
      helperText={error}
    />
  );
};

export default TextFieldCustom;
