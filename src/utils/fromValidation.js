export const validateForm = (formData, setErrors) => {
  const newErrors = {};

  if (!formData.fullName.trim()) {
    newErrors.fullName = "Full name is required";
  }
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Invalid email format";
  }
  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (!/^\d+$/.test(formData.phone)) {
    newErrors.phone = "Phone number should contain only digits";
  }
  if (!formData.companyName.trim()) {
    newErrors.companyName = "Company name is required";
  }
  if (!formData.leadSource) {
    newErrors.leadSource = "Lead source is required";
  }
  if (!formData.leadStatus) {
    newErrors.leadStatus = "Lead status is required";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
