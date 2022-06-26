export default [
  {
    id: "firstName",
    label: "First Name",
    // component: "Input"
  },
  {
    id: "lastName",
    label: "Last Name",
  },
  {
    id: "company",
    label: "Company",
  },
  {
    id: "birthdate",
    label: "Birthdate",
  },
  {
    id: "balance",
    label: "Balance",
    parseValue: (val) => val.toLocaleString(),
  },
];
