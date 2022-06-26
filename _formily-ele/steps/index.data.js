const schema = {
  type: "object",
  properties: {
    collapse: {
      type: "void",
      "x-component": "FormStep",
      "x-component-props": {
        formStep: "{{formStep}}",
      },
      properties: {
        step1: {
          type: "void",
          "x-component": "FormStep.StepPane",
          "x-component-props": {
            title: "第一步",
          },
          properties: {
            aaa: {
              type: "string",
              title: "AAA",
              required: true,
              "x-decorator": "FormItem",
              "x-component": "Input",
            },
          },
        },
        step2: {
          type: "void",
          "x-component": "FormStep.StepPane",
          "x-component-props": {
            title: "第二步",
          },
          properties: {
            bbb: {
              type: "string",
              title: "BBB",
              required: true,
              "x-decorator": "FormItem",
              "x-component": "Input",
            },
          },
        },
        step3: {
          type: "void",
          "x-component": "FormStep.StepPane",
          "x-component-props": {
            title: "第三步",
          },
          properties: {
            ccc: {
              type: "string",
              title: "CCC",
              required: true,
              "x-decorator": "FormItem",
              "x-component": "Input",
            },
          },
        },
      },
    },
  },
};

export default schema;