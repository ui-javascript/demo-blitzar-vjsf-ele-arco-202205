export default [
  {
    label: '#️',
    component: 'Input',
    class: "arco-table-td",
    parseValue: (_, formContext) => {
      return formContext.rowIndex + 1
    },
  },
  {
    id: "firstName",
    label: "First Name",
    component: "Input",
    class: "arco-table-td",
  },
  {
    id: "lastName",
    label: "Last Name",
    component: "Input",
    class: "arco-table-td",
  },
  {
    id: "company",
    label: "Company",
    // component: "Textarea",
    component: "Input",
    class: "arco-table-td",
  },
  {
    id: "birthdate",
    label: "Birthdate",
    component: "DatePicker",
    class: "arco-table-td",
  },
  {
    id: "balance",
    label: "Balance",
    component: "InputNumber",
    class: "arco-table-td",
    // parseValue: (val) => val.toLocaleString(),
  },

  // 这里用到了函数
  {
    mode: 'edit',
    component: 'Button',
    // class: "arco-table-td",
    slot: '⛔️',
    dynamicProps: ['showCondition', 'disabled'],
    // component props:
    showCondition: (val, { mode }) => {
      console.log('mode', mode)    
      return  mode == 'edit'
    },
    disabled: (val, { mode }) => {
      console.log('mode', mode) 
      return mode != 'edit'
    },
    events: {
      click: (pointerEvent, formContext) => {
        formContext.deleteRow()
      },
    },
  },
];
