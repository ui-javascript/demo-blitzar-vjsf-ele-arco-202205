const schema = {
  type: "object",
  properties: {
    base: {
      type: "array",
      title: "上传",
      "x-decorator": "FormItem",
      "x-component": "Upload",
      "x-component-props": {
        action: "https://formily-vue.free.beeceptor.com/file",
        textContent: "上传",
      },
      required: true,
    },
    card: {
      type: "array",
      title: "卡片上传",
      "x-decorator": "FormItem",
      "x-component": "Upload",
      "x-component-props": {
        listType: "picture-card",
        action: "https://formily-vue.free.beeceptor.com/file",
      },
      required: true,
    },
    drag: {
      type: "array",
      title: "拖拽上传",
      "x-decorator": "FormItem",
      "x-component": "Upload",
      "x-component-props": {
        action: "https://formily-vue.free.beeceptor.com/file",
        textContent: "将文件拖到此处，或者点击上传",
        drag: true,
      },
      required: true,
    },
  },
};

export default schema;