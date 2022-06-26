export default {
  type: 'object',
  properties: {
    string_array: {
      type: 'array',
      title: '字符串数组',
      'x-decorator': 'FormItem',
      maxItems: 3,
      'x-component': 'ArrayTabs',
      items: {
        type: 'string',
        'x-decorator': 'FormItem',
        required: true,
        'x-component': 'Input',
      },
    },
    array: {
      type: 'array',
      title: '对象数组',
      'x-decorator': 'FormItem',
      maxItems: 3,
      'x-component': 'ArrayTabs',
      items: {
        type: 'object',
        properties: {
          aaa: {
            type: 'string',
            'x-decorator': 'FormItem',
            title: 'AAA',
            required: true,
            'x-component': 'Input',
          },
          bbb: {
            type: 'string',
            'x-decorator': 'FormItem',
            title: 'BBB',
            required: true,
            'x-component': 'Input',
          },
        },
      },
    },
  },
}