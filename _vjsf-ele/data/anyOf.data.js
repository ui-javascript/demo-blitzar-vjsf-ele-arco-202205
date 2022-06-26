

export const jsonSchema = {
    title: '人员信息',
    type: 'object',
    properties: {
        price: {
            type: 'number',
            title: '月薪资',
            default: 99999.99
        },
        userInfo: {
            title: '个人资料设置方式',
            anyOf: [
                {
                    title: '通过用户名设置',
                    required: ['firstName'],
                    properties: {
                        type: {
                            'ui:widget': 'HiddenWidget',
                            title: '类型',
                            type: 'string',
                            default: 'userInfo'
                        },
                        firstName: {
                            type: 'string',
                            title: '名字',
                            default: 'Jun'
                        },
                        lastName: {
                            type: 'string',
                            title: '姓',
                            default: 'Liu'
                        }
                    }
                },
                {
                    title: '通过用户id设置',
                    properties: {
                        type: {
                            'ui:widget': 'HiddenWidget',
                            title: '类型',
                            type: 'string',
                            default: 'userId'
                        },
                        idCode: {
                            type: 'string',
                            title: 'ID',
                            default: '10086'
                        }
                    }
                }
            ]
        },
    },
    anyOf: [{
        title: '设置更多信息',
        properties: {
            age: {
                title: '年龄',
                type: 'number',
                anyOf: [
                    {
                        const: 18
                    },
                    {
                        const: 28
                    }
                ]
            },
            url: {
                title: '个人主页',
                format: 'uri',
                type: 'string',
                default: 'https://lljj.me'
            },
            projects: {
                title: '项目经验',
                type: 'array',
                minItems: 1,
                items: {
                    type: 'object',
                    anyOf: [
                        {
                            title: '在线演示项目',
                            properties: {
                                url: {
                                    title: '输入项目地址',
                                    type: 'string',
                                    format: 'uri',
                                    default: 'https://www.demo.com'
                                }
                            }
                        },
                        {
                            title: '文字表述项目',
                            required: ['name'],
                            properties: {
                                name: {
                                    type: 'string',
                                    title: '项目名称',
                                    default: 'Vjsf'
                                },
                                description: {
                                    type: 'string',
                                    title: '项目表述',
                                    default: '基于JSON Schema 快速生成form表单'
                                }
                            }
                        }
                    ]
                }
            }
        }
    }, {
        title: '不设置',
        properties: {}
    }]
}



export const uiSchema = {
    userInfo: {
        anyOfSelect: {
            // 默认是select, radio需要单独指定
            'ui:widget': 'RadioWidget'
        },
        anyOf: [
            {
                'ui:title': '使用用户名设置（ui-schema）', // 这里会覆盖schema 配置
            },
        ]
    },
    anyOfSelect: {
        'ui:title': '是否需要更多信息',
    }
}

export const errorSchema = {

}