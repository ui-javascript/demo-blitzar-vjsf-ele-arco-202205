export default [
  {
    id: "firstName",
    label: "First Name",
    component: "Input"
  },
  {
    id: "lastName",
    label: "Last Name",
    component: "Input"
  },
  {
    id: "company",
    label: "Company",
    // component: "Textarea",
    component: "Input",
  },
  {
    id: "birthdate",
    label: "Birthdate",
    component: "DatePicker"
  },
  {
    id: "balance",
    label: "Balance",
    component: "InputNumber",
    // parseValue: (val) => val.toLocaleString(),
  },

  // 这里用到了函数
  {
    mode: 'edit',
    component: 'Button',
    slot: '⛔️',
    events: {
      click: (pointerEvent, formContext) => {
        formContext.deleteRow()
      },
    },
  },
];
