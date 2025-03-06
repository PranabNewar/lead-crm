import React from "react";
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  companySizeOption,
  filterLeadSourceOption,
  intererestedProductOption,
  leadInitialState,
  leadStatusOption,
  prefferedContactMethodOption,
} from "../utils/utils";
import { Typography } from "@mui/material";
import TextFieldCustom from "../components/TextFieldCustom";
import MultipleSelect from "../components/MultipleSelect";
import SelectCustom from "../components/Selectcustom";
import RadioCustom from "../components/RadioCustom";
import MultilineTextField from "../components/MultilineTextField";
import CheckboxCustom from "../components/CheckboxCustom";
import { useLeads } from "../context/useLeads";
import toast from "react-hot-toast";
import { validateForm } from "../utils/fromValidation";

const CreateLead = () => {
  const { dispatch } = useLeads();

  const [formData, setFormData] = useState(leadInitialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm(formData, setErrors)) return;
    const newLead = {
      ...formData,
      id: Math.random().toString(36).substring(2, 11),
      created_at: Date.now(),
    };
    toast.loading("Creating lead...");
    setIsSubmitting(true);
    setTimeout(() => {
      dispatch({ type: "ADD_LEAD", payload: newLead });
      toast.dismiss();
      toast.success("Lead created successfully");
      setIsSubmitting(false);
      setFormData(leadInitialState);
    }, 2000);
  };
  return (
    <Box component="div" sx={{ mt: 10, p: { xs: 1.5, sm: 4 } }}>
      <Box
        sx={{
          mb: 2,
          maxWidth: { lg: "70vw", sm: "85vw", xs: "100vw" },
          mx: "auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontSize: { xs: "2rem", sm: "2.125rem" } }}
          component="h4"
        >
          Create new lead
        </Typography>

        <Grid
          container
          spacing={2}
          component="form"
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            px: { sm: 4, xs: 2 },
            py: { sm: 4, xs: 2 },
            mx: "auto",
            mt: 4,
          }}
          onSubmit={handleSubmit}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextFieldCustom
              name="fullName"
              labelName="Full name"
              setFormData={setFormData}
              formData={formData}
              placeHolder={"Enter your full name"}
              required={true}
              error={errors.fullName}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextFieldCustom
              name="email"
              type="email"
              labelName="Email"
              setFormData={setFormData}
              formData={formData}
              placeHolder={"Enter your email"}
              required={true}
              error={errors.email}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextFieldCustom
              type="tel"
              name="phone"
              labelName="Phone"
              setFormData={setFormData}
              formData={formData}
              placeHolder={"Enter your phone number"}
              required={true}
              error={errors.phone}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextFieldCustom
              name="companyName"
              labelName="Company Name"
              setFormData={setFormData}
              formData={formData}
              placeHolder={"Enter your company name"}
              required={true}
              error={errors.companyName}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Autocomplete
              size="small"
              disablePortal
              options={filterLeadSourceOption}
              value={formData.leadSource}
              onChange={(event, newValue) =>
                setFormData((prev) => ({
                  ...prev,
                  leadSource: newValue ? newValue.value : "",
                }))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Lead source"
                  required
                  error={Boolean(errors.leadSource)}
                  helperText={errors.leadSource}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <MultipleSelect
              setFormData={setFormData}
              labelName="Interested products"
              formData={formData}
              name={"interestedProducts"}
              option={intererestedProductOption}
              placeHolder={"Select interested products"}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <SelectCustom
              setFormData={setFormData}
              name="companySize"
              option={companySizeOption}
              labelName="Company size"
              formData={formData}
              placeholder={"Select company size"}
            />
          </Grid>
          <Grid size={12}>
            <RadioCustom
              setFormData={setFormData}
              name="leadStatus"
              option={leadStatusOption}
              labelName="Lead Status"
              required={true}
              errormsg={errors.leadStatus}
              formData={formData}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <RadioCustom
              setFormData={setFormData}
              name="prefferedContactMethod"
              option={prefferedContactMethodOption}
              labelName="Preffered contact method"
              formData={formData}
            />
          </Grid>
          <Grid size={12}>
            <MultilineTextField
              setFormData={setFormData}
              labelName="Additional Notes"
              name="additionalNotes"
              formData={formData}
              placeholder={"Enter additional notes"}
            />
          </Grid>
          {/* Checkbox */}
          <Grid size={12}>
            <CheckboxCustom
              setFormData={setFormData}
              name="newsletter"
              labelName="Subscribe to newsletter"
              formData={formData}
            />
          </Grid>
          {/* Submit Button */}
          <Grid size={12} sx={{ textAlign: "center" }}>
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              sx={{ textTransform: "none" }}
              color="primary"
            >
              {isSubmitting ? (
                <>
                  {" "}
                  <CircularProgress size={10} sx={{ mx: 1 }} /> Creating...
                </>
              ) : (
                "Create Lead"
              )}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default CreateLead;
