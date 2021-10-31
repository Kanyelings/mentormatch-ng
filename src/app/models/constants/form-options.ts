import {FormOption} from "../entity/form-option";
import {Role} from "../entity/role";

export const DEPARTMENTS: FormOption[] = [
  {name: "Computer", value: "COME"},
  {name: "Electrical and Electronic", value: "EEEE"},
  {name: "Mechanical and Industrial", value: "MECE"},
  {name: "Civil and Architecture", value: "CVLE"},
  {name: "Petroleum", value: "PETE"},
  {name: "Mining and Mineral", value: "MINE"},
  {name: "Chemical and Biomedical", value: "BMEE"},
  {name: "Chemical and Biological", value: "CBE"},
  {name: "Biotechnol", value: "BIOTECH"},
];

export const ROLES: FormOption[] = [
  {name: "Mentor", value: "mentor"},
  {name: "Mentee", value: "mentee"},
];

export const GENDERS: string[] = [
  "Male",
  "Female",
  "Other"
];
