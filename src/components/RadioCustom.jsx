import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@mui/material";
import React from "react";

const RadioCustom = ({
  setFormData,
  name,
  option,
  labelName,
  formData,
  errormsg = "",
  required = false,
}) => {
  return (
    <FormControl fullWidth>
      <FormLabel
        id="demo-radio-buttons-group-label"
        error={!!errormsg}
        required={required}
      >
        {labelName}
      </FormLabel>
      <RadioGroup
        size="small"
        aria-labelledby="demo-radio-buttons-group-label"
        name={name}
        value={formData[name]}
        sx={{ flexDirection: "row" }}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, [name]: e.target.value }))
        }
      >
        {option?.map((size) => (
          <FormControlLabel
            key={size.label}
            value={size.value}
            control={<Radio size="small" />}
            label={size.label}
          />
        ))}
      </RadioGroup>
      {errormsg && (
        <FormHelperText sx={{ color: "#d32f2f" }}> {errormsg}</FormHelperText>
      )}
    </FormControl>
  );
};

export default RadioCustom;
