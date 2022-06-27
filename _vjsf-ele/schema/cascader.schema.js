export const uiSchema = {
    name: {
        'ui:options': {
            placeholder: '请输入收件人'
        },
        'err:options': {
            required: '请输入收件人'
        }
    },
    address1: {
        'ui:field': 'DistpickerField',
        'ui:fieldProps': {
            placeholders: {
                  province: '------- 省 --------',
                  city: '--- 市 ---',
                  area: '--- 区 ---',
              }
        },
    },
    address3: {
        'ui:title': '不使用ui:field',
    }
}

export const jsonSchema = {
    id: 'DistpickerTest',
    title: '地址填写',
    type: 'object',
    definitions: {
        item: {
            title: '名称/编码',
            type: 'string'
        },
        address: {
            default: {
                province: 440000,
                city: "广州市",
                area: "海珠区"
            },
            type: 'object',
            properties: {
                province: {
                    title: '省份',
                    $ref: '#/definitions/item'
                },
                city: {
                    title: '城市',
                    $ref: '#/definitions/item'
                },
                area: {
                    title: '区县',
                    $ref: '#/definitions/item'
                }
            }
        }
    },
    required: ['name'],
    properties: {
        name: {
            title: '收件人',
            type: 'string',
            default: 'HH'
        },
        address1: {
            $ref: '#/definitions/address'
        },
        address3: {
            $ref: '#/definitions/address'
        }
    }
}


export const errorSchema = {

}