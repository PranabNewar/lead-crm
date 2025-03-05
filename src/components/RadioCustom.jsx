import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const RadioCustom = ({ setFormData, name, option, labelName, formData }) => {
  return (
    <FormControl fullWidth>
      <FormLabel id="demo-radio-buttons-group-label">{labelName}</FormLabel>
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
    </FormControl>
  );
};

export default RadioCustom;
