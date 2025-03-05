import { TextField } from "@mui/material";
import React from "react";

const MultilineTextField = ({
  setFormData,
  labelName,
  name,
  formData,
  placeholder,
}) => {
  return (
    <TextField
      name={name}
      value={formData[name]}
      id="outlined-multiline-static"
      placeholder={placeholder}
      label={labelName}
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, [name]: e.target.value }))
      }
      multiline
      minRows={4}
      fullWidth
    />
  );
};

export default MultilineTextField;
