export const leadStatusOption = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "qualified", label: "Qualified" },
  { value: "lost", label: "Lost" },
];
export const companySizeOption = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];
export const prefferedContactMethodOption = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "whatsapp", label: "WhatsApp" },
];
export const leadSourceOption = [
  { value: "website", label: "Website" },
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "refferal", label: "Refferal" },
  { value: "social-media", label: "Social Media" },
  { value: "other", label: "Other" },
];
export const intererestedProductOption = [
  { value: "crm", label: "CRM" },
  { value: "chatbot", label: "Chatbot" },
  { value: "delivery", label: "Delivery" },
  { value: "marketing", label: "Marketing" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "support", label: "Customer Support" },
  { value: "analytics", label: "Analytics" },
  { value: "automation", label: "Automation" },
];
export const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Leads",
    path: "/leads",
  },
  {
    title: "Ask help",
    path: "/ask-help",
  },
  {
    title: "Create lead",
    path: "/create-lead",
  },
];

export const leadInitialState = {
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
};
export const filterStatusOption = [
  { value: "all", label: "All" },
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "qualified", label: "Qualified" },
  { value: "lost", label: "Lost" },
];
export const filterLeadSourceOption = [
  { value: "all", label: "All" },
  { value: "website", label: "Website" },
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "referral", label: "Referral" },
  { value: "social-media", label: "Social Media" },
  { value: "other", label: "Other" },
];
