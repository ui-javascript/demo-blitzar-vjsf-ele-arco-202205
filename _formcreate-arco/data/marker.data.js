export default [
    {
        type:'inputNumber',
        field:'number',
        title:'库存',
        value: 0
    },
    {
        type:'input',
        field:'info',
        title:'简介',
        value: '',
        props:{
            type:'textarea'
        }
    },

    {
        type:'select',
        field:'select',
        title:'下拉选择',
        value: '',
        options: [{value:0, label:'0'.repeat(5)}]
    }
]