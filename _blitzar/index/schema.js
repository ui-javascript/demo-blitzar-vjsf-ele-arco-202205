export default [
  {
    id: "Input",
    component: "Input",
    label: "Input",
    // subLabel: 'Input Something',
    placeholder: "Input Something",
    allowClear: true,
    required: true,
    defaultValue: "Something",
  },


  {
    id: "InputNumber",
    component: "InputNumber",
    label: "InputNumber",
    // @tofix button模式未生效
    // mode: "button",
  },

  {
    id: "Textarea",
    component: "Textarea",
    label: "Textarea",
  },

  {
    id: "InputTag",
    component: "InputTag",
    label: "InputTag",
    allowClear: true,
    defaultValue: ["test"],
  },

  {
    id: "Switch",
    component: "Switch",
    label: "Switch",
    style: "width: 80px;",
  },

  {
    id: "Radio",
    label: "Radio",
    // subLabel: 'Checkbox',
    component: "RadioGroup",
    slot: [
      { component: "Radio", value: "1", slot: "1", disabled: true },
      { component: "Radio", value: "2", slot: "2" },
      { component: "Radio", value: "3", slot: "3" },
    ],
  },

  {
    id: "Checkbox",
    label: "Checkbox",
    // subLabel: 'Checkbox',
    component: "CheckboxGroup",
    slot: [
      { component: "Checkbox", value: "1", slot: "1", disabled: true },
      { component: "Checkbox", value: "2", slot: "2" },
      { component: "Checkbox", value: "3", slot: "3" },
    ],
  },

  {
    id: "Select",
    label: "Select",
    // subLabel: 'Select',
    component: "Select",
    slot: [
      { component: "Option", value: "", slot: "Select one", disabled: true },
      { component: "Option", value: "mutation", slot: "Mutation" },
      { component: "Option", value: "self", slot: "Self taught" },
      { component: "Option", value: "item", slot: "Magic item" },
      { component: "Option", value: "gear", slot: "Gear" },
    ],
  },


  {
    id: "Rate",
    component: "Rate",
    label: "Rate",
  },
  
  {
    id: "Slider",
    component: "Slider",
    label: "Slider",
    step: 5,
    showTicks: true,
    range: true,
  },




  {
    id: "Cascader",
    component: "Cascader",
    label: "Cascader",
    options: [
      {
        value: "beijing",
        label: "Beijing",
        children: [
          {
            value: "chaoyang",
            label: "ChaoYang",
            children: [
              {
                value: "datunli",
                label: "Datunli",
              },
            ],
          },
          {
            value: "haidian",
            label: "Haidian",
          },
          {
            value: "dongcheng",
            label: "Dongcheng",
          },
          {
            value: "xicheng",
            label: "Xicheng",
            children: [
              {
                value: "jinrongjie",
                label: "Jinrongjie",
              },
              {
                value: "tianqiao",
                label: "Tianqiao",
              },
            ],
          },
        ],
      },
      {
        value: "shanghai",
        label: "Shanghai",
        children: [
          {
            value: "huangpu",
            label: "Huangpu",
          },
        ],
      },
    ],
  },

  {
    id: "DatePicker",
    component: "DatePicker",
    label: "DatePicker",
  },

  {
    id: "TimePicker",
    component: "TimePicker",
    label: "TimePicker",
  },

  {
    id: "Avatar",
    component: "Avatar",
    label: "Avatar",
    slot: "Luo0412",
  },
];
