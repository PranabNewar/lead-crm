import { Autocomplete, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { top100Films } from "../utils/leadSourceOption";
import { useLeads } from "../context/useLeads";
import Grid from "@mui/material/Grid2";
import {
  companySizeOption,
  leadStatusOption,
  prefferedContactMethodOption,
} from "../utils/utils";
import MultipleSelect from "./MultipleSelect";
import TextFieldCustom from "./TextFieldCustom";
import MultilineTextField from "./MultilineTextField";
import CheckboxCustom from "./CheckboxCustom";
import RadioCustom from "./RadioCustom";
import SelectCustom from "./Selectcustom";
const LeadForm = () => {
  const { dispatch } = useLeads();
  const [formData, setFormData] = useState({
    id: "",
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    companySize: "",
    prefferedContactMethod: "",
    additionalNotes: "",
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
      created_at: Date.now(),
    };

    dispatch({ type: "ADD_LEAD", payload: newLead });
  };
  return (
    <Grid
      container
      spacing={2}
      component="form"
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        px: 4,
        py: 2,
        mx: "auto",
        mt: 4,
        maxWidth: "70vw",
      }}
      onSubmit={handleSubmit}
    >
      <Grid size={6}>
        <TextFieldCustom
          name="fullName"
          labelName="Full name"
          setFormData={setFormData}
        />
      </Grid>
      <Grid size={6}>
        <TextFieldCustom
          name="email"
          labelName="Email"
          setFormData={setFormData}
        />
      </Grid>
      <Grid size={6}>
        <TextFieldCustom
          name="phone"
          labelName="Phone"
          setFormData={setFormData}
        />
      </Grid>

      <Grid size={6}>
        <TextFieldCustom
          name="companyName"
          labelName="Company Name"
          setFormData={setFormData}
        />
      </Grid>
      <Grid size={6}>
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
          renderInput={(params) => (
            <TextField {...params} label="Lead source" />
          )}
        />
      </Grid>
      <Grid size={6}>
        <MultipleSelect
          setFormData={setFormData}
          labelName="Interested products"
        />
      </Grid>
      <Grid size={6}>
        <SelectCustom
          setFormData={setFormData}
          name="companySize"
          option={companySizeOption}
          labelName="Company size"
        />
      </Grid>
      <Grid size={12}>
        <RadioCustom
          setFormData={setFormData}
          name="leadStatus"
          option={leadStatusOption}
          labelName="Lead Status"
        />
      </Grid>
      <Grid size={6}>
        <RadioCustom
          setFormData={setFormData}
          name="prefferedContactMethod"
          option={prefferedContactMethodOption}
          labelName="Preffered contact method"
        />
      </Grid>
      <Grid size={12}>
        <MultilineTextField
          setFormData={setFormData}
          labelName="Additional Notes"
          name="additionalNotes"
        />
      </Grid>
      {/* Checkbox */}
      <Grid size={8}>
        <CheckboxCustom
          setFormData={setFormData}
          name="newsletter"
          labelName="Subscribe to newsletter"
        />
      </Grid>
      {/* Submit Button */}
      <Grid size={12} sx={{ textAlign: "center" }}>
        <Button type="submit" variant="contained" color="primary">
          Create Lead
        </Button>
      </Grid>
    </Grid>
  );
};

export default LeadForm;
