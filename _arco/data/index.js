export default [
    {
        type: 'group',
        field: 'group',
        title: 'group',
        value: [{ field1: 'aaa', field2: 'sss' }, { field1: 'aaa', field2: 'sss' }],
        props: {
            defaultValue: { field1: 'field1', field2: 'field2' },
            rule: [
                {
                    type: 'input', field: 'field1', title: 'field1', 
                    
                    // effect: {
                    //     required: true
                    // },
                    validate: [{type: 'number', min:10, required: true, message:'最小为10'}],

                    col:{
                        span:12
                    },
                    wrap: {
                        labelCol: {
                            span: 6,
                        }
                    }
                },
                { type: 'input', field: 'field2', title: 'field2',  effect:{
                    required: '请输入内容'
                },
                col:{
                    span:12
                } },

                {
                    type:'checkbox',
                    field:'label',
                    title:'标签',
                    value: [],
                    options:[
                        {label:'好用',value:0},
                        {label:'快速',value:1},
                        {label:'高效',value:2},
                        {label:'全能',value:3},
                    ],
                    validate: [{type: 'array', min:3, required: true, message:'最少选择3个'}]
                }
            ]
        }
    },
]