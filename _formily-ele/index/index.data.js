export default {
  type: "object",
  properties: {
    string_array: {
      type: "array",
      "x-component": "ArrayCards",
      maxItems: 3,
      "x-decorator": "FormItem",
      "x-component-props": {
        title: "字符串数组",
      },
      items: {
        type: "void",
        properties: {
          index: {
            type: "void",
            "x-component": "ArrayCards.Index",
          },
          input: {
            type: "string",
            "x-decorator": "FormItem",
            title: "Input",
            required: true,
            "x-component": "Input",
          },
          remove: {
            type: "void",
            "x-component": "ArrayCards.Remove",
          },
          moveUp: {
            type: "void",
            "x-component": "ArrayCards.MoveUp",
          },
          moveDown: {
            type: "void",
            "x-component": "ArrayCards.MoveDown",
          },
        },
      },
      properties: {
        addition: {
          type: "void",
          title: "添加条目",
          "x-component": "ArrayCards.Addition",
        },
      },
    },
    array: {
      type: "array",
      "x-component": "ArrayCards",
      maxItems: 3,
      "x-decorator": "FormItem",
      "x-component-props": {
        title: "对象数组",
      },
      items: {
        type: "object",
        properties: {
          index: {
            type: "void",
            "x-component": "ArrayCards.Index",
          },
          input: {
            type: "string",
            "x-decorator": "FormItem",
            title: "Input",
            required: true,
            "x-component": "Input",
          },
          remove: {
            type: "void",
            "x-component": "ArrayCards.Remove",
          },
          moveUp: {
            type: "void",
            "x-component": "ArrayCards.MoveUp",
          },
          moveDown: {
            type: "void",
            "x-component": "ArrayCards.MoveDown",
          },
        },
      },
      properties: {
        addition: {
          type: "void",
          title: "添加条目",
          "x-component": "ArrayCards.Addition",
        },
      },
    },
  },
};
