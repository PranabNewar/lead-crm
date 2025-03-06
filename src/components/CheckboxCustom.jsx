import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

const CheckboxCustom = ({ setFormData, name, labelName, formData }) => {
  return (
    <FormGroup size="small">
      <FormControlLabel
        // sx={{
        //   "& .MuiTypography-root": {
        //     fontSize: {
        //       xs: "0.75rem", // 12px on extra small screens
        //       sm: "0.875rem", // 14px on small screens
        //       md: "1rem", // 16px on medium screens and above
        //     },
        //   },
        // }}
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
