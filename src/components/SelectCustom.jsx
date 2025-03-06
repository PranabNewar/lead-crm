import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectCustom = ({
  setFormData,
  name,
  option,
  labelName,
  formData,
  placeholder,
}) => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="demo-simple-select-label">Company size</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={formData[name]}
        placeholder={placeholder}
        label={labelName}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, [name]: e.target.value }))
        }
      >
        {option?.map((size) => (
          <MenuItem key={size.label} value={size.value}>
            {size.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCustom;
