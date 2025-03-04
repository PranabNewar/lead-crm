import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import { top100Films } from "../utils/leadSourceOption";
import { leadsData } from "../utils/leadsData";
import { useLeads } from "../context/useLeads";

import { leadStatusOption } from "../utils/utils";
import MultipleSelect from "./MultipleSelect";

const LeadForm = () => {
  const { leads, dispatch } = useLeads();
  console.log("🚀 ~ LeadForm ~ leads:", leads);
  const [formData, setFormData] = useState({
    id: "",
    fullName: "",
    email: "",
    phone: "",
    leadSource: "",
    leadStatus: "",
    interestedProducts: [],
    newsletter: false,
  });
  console.log("🚀 ~ LeadForm ~ formData:", formData);

  const handleSubmit = (e) => {
    console.log("🚀 ~ handleSubmit ~ e:", e);
    e.preventDefault();
    const newLead = {
      ...formData,
      id: Math.random().toString(36).substring(2, 11),
    };

    dispatch({ type: "ADD_LEAD", payload: newLead });
  };
  console.log("🚀 ~ handleSubmit ~ leadsData:", leadsData);

  return (
    <Box
      component="form"
      sx={{ maxWidth: 400, mx: "auto", mt: 4 }}
      onSubmit={handleSubmit}
    >
      <TextField
        name="fullName"
        label="Full name"
        fullWidth
        margin="normal"
        // value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, fullName: e.target.value }))
        }
        // error={!!errors.name}
        // helperText={errors.name}
      />
      <TextField
        name="email"
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        // value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
        // error={!!errors.name}
        // helperText={errors.name}
      />
      <TextField
        name="phone"
        label="Phone"
        type="tel"
        fullWidth
        margin="normal"
        // value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, phone: e.target.value }))
        }
        // error={!!errors.name}
        // helperText={errors.name}
      />

      <FormControl
        margin="normal"
        //  error={!!errors.gender}
      >
        <FormLabel>Lead status</FormLabel>
        <RadioGroup
          name="leadStatus"
          //  value={formData.gender}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, leadStatus: e.target.value }))
          }
          row
        >
          {leadStatusOption?.map((option) => (
            <FormControlLabel
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <MultipleSelect
        setFormData={setFormData}
        labelName="Interested products"
      />
      {/* search */}
      <Autocomplete
        disablePortal
        options={top100Films}
        // sx={{ width: 300 }}
        onChange={(event, newValue) =>
          setFormData((prev) => ({
            ...prev,
            leadSource: newValue.value, // newValue contains the selected option
          }))
        }
        renderInput={(params) => <TextField {...params} label="Lead source" />}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  newsletter: e.target.checked ? true : false,
                }))
              }
            />
          }
          label="Subscribe to newsletter"
        />
      </FormGroup>
      {/* Submit Button */}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Create Lead
      </Button>
    </Box>
  );
};

export default LeadForm;
