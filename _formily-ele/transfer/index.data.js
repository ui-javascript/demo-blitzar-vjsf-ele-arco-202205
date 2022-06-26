const schema = {
  type: 'object',
  properties: {
    transfer: {
      type: 'array',
      title: '穿梭框',
      enum: [
        { label: '选项1', key: 1 },
        { label: '选项2', key: 2 },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Transfer',
    },
  },
}

export default schema;