export const uiSchema = {
 
}

export const jsonSchema = {
    title: '使用ui-schema配置ui:hidden表达式',
    type: 'object',
    properties: {
        case1: {
            title: '整体隐藏',
            type: 'object',
            properties: {
                showMore: {
                    title: '显示更多',
                    type: 'boolean',
                    default: false
                },
                x1: {
                    title: '输入框1',
                    type: 'string',
                    'ui:hidden': '{{rootFormData.case1.showMore === false}}'
                },
                x2: {
                    title: '输入框2',
                    type: 'string',
                    'ui:hidden': '{{rootFormData.case1.showMore === false}}'
                }
            }
        },
        case3: {
            title: '列表/显示不同组件',
            type: 'object',
            properties: {
                ruleList: {
                    title: '球员筛选',
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            attr: {
                                title: '标准',
                                type: 'string',
                                enum: [
                                    'goal',
                                    'league'
                                ],
                                enumNames: [
                                    '入球数',
                                    '所在联盟'
                                ],
                                'ui:width': '40%'
                            },
                            relation: {
                                title: '-',
                                type: 'string',
                                enum: [
                                    '>',
                                    '<',
                                    '='
                                ],
                                'ui:hidden': "{{parentFormData.attr === 'league'}}",
                                'ui:width': '20%'
                            },
                            goal: {
                                title: '入球数',
                                type: 'string',
                                pattern: '^[0-9]+$',
                                message: {
                                    pattern: '输入正确得分'
                                },
                                'ui:hidden': "{{parentFormData.attr !== 'goal'}}",
                                'ui:width': '40%'
                            },
                            league: {
                                title: '名称',
                                type: 'string',
                                enum: [
                                    'a',
                                    'b',
                                    'c'
                                ],
                                enumNames: [
                                    '西甲',
                                    '英超',
                                    '中超'
                                ],
                                'ui:hidden': "{{parentFormData.attr !== 'league'}}",
                                'ui:width': '40%'
                            }
                        }
                    }
                }
            }
        }
    }
}


export const errorSchema = {

}