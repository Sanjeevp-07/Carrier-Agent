import { Profile } from "../types/profile";

export const defaultProfile: Profile = {
  personal: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
  },

  education: {
    college: "",
    degree: "",
    cgpa: "",
    graduationYear: "",
  },

  professional: {
    experience: "",
    projects: "",
  },

  social: {
    github: "",
    linkedin: "",
    portfolio: "",
    leetcode: "",
  },

  skills: [],

  resume: null,
};