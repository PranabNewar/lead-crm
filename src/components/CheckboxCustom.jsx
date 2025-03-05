import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

const CheckboxCustom = ({ setFormData, name, labelName, formData }) => {
  return (
    <FormGroup size="small">
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            checked={formData[name]}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [name]: e.target.checked ? true : false,
              }))
            }
          />
        }
        label={labelName}
      />
    </FormGroup>
  );
};

export default CheckboxCustom;
