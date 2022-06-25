export const uiSchema = {
    bio: {
        'ui:type': 'textarea',
        'ui:placeholder': '请输入 ...',
        'err:required': '请输入（ui-schema中配置）',
    },
}

export const jsonSchema = {
    type: 'object',
    required: [
        'userName',
        'homePage',
        'bio'
    ],
    properties: {
        userName: {
            type: 'string',
            title: '用户名',
            default: 'Liu.Jun'
        },
        homePage: {
            type: 'string',
            format: 'uri',
            title: '个人主页',
            'err:required': '请输入个人主页地址（schema中配置）',
            'err:format': '请输入正确的Url地址（schema中配置）'
        },
        bio: {
            type: 'string',
            title: '签名',
            minLength: 10
        },
        listOfStrings: {
            type: 'array',
            title: 'A list of strings',
            description: '最少包含两个item',
            uniqueItems: true,
            minItems: 2,
            items: {
                type: 'string',
                default: 'bazinga'
            }
        },
        fixedItemsList: {
            type: 'array',
            title: 'A list of fixed items',
            items: [
                {
                    title: 'A string value',
                    type: 'string',
                    maxLength: 2
                }
            ]
        }
    }
}


export const errorSchema = {
    userName: {
        'err:options': {
            required: '请输入用户名'
        }
    },
    bio: {
        'err:minLength': '签名最小长度10个字符串'
    },
    listOfStrings: {
        'err:uniqueItems': '不能包含重复的值',
        items: {
            'err:options': {
                required: '不能为空 ~'
            }
        }
    },
    fixedItemsList: {
        items: [
            {
                'err:maxLength': '老铁，最多只能输入两个字符'
            }
        ]
    }
}