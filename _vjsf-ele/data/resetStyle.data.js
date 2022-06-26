export const uiSchema = {
    'ui:order': ['number', '*'],
    inputText: {
        // 这里的优先级更高
        'ui:description': '这里重置了描述信息',
        'ui:emptyValue': '',
        'ui:options': {
            style: {
                boxShadow: '0 0 6px 2px #2b9939'
            },
            class: {
                className_hei: true
            },
            type: 'textarea',
            autofocus: true,
            rows: 6,
            placeholder: '请输入你的内容'
        }
    },
    number: {
        'ui:title': '这里重置了标题'
    },
    integerRange: {
        'ui:widget': 'el-slider',
    }
}

export const jsonSchema = {
    type: 'object',
    properties: {
        firstName: {
            type: 'string',
            title: 'First name',
            'ui:placeholder': '请输入FirstName（配置在schema中）'
        },
        bio: {
            type: 'string',
            title: 'Bio',
            minLength: 10,
            'ui:options': {
                type: 'textarea',
                placeholder: 'placeholder（配置在schema中）',
                rows: 4
            }
        },
        inputText: {
            title: 'Input Text',
            type: 'string'
        },
        number: {
            title: 'Number (默认渲染组件)',
            type: 'number'
        },
        integerRange: {
            title: 'Integer range (使用 ElSlider)',
            type: 'integer',
            minimum: 42,
            maximum: 100
        }
    }
}