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
      // error={!!errors.name}
      // helperText={errors.name}
    />
  );
};

export default TextFieldCustom;
