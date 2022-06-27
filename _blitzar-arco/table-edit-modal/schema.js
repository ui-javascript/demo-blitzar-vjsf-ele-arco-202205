import { ROW_SELECTION_ID } from 'blitzar'

const schema = [
    {
        id: ROW_SELECTION_ID,
        label: '选择',
        component: 'Checkbox',
        style: 'width: 70px',
    },
    {
        label: '#️',
        component: 'InputNumber',
        // @todo 序号无法重新点击排序
        // sortable: true,
        disabled: true,
        style: 'width: 70px',
        // class: "arco-table-td arco-table-cell",
        parseValue: (_, formContext) => {
            return formContext.rowIndex + 1
        },
    },
    {
        id: "firstName",
        label: "First Name",
        component: "Input",
        // style: 'width: 70px',
        // class: "arco-table-td arco-table-cell",
    },
    {
        id: "lastName",
        label: "Last Name",
        component: "Input",
        // style: 'width: 70px',
        // class: "arco-table-td arco-table-cell",
    },
    {
        id: "company",
        label: "公司",
        // component: "Textarea",
        component: "Input",
        // style: 'width: 70px',
        // class: "arco-table-td arco-table-cell",
    },
    {
        id: "birthdate",
        label: "生日",
        component: "DatePicker",
        // style: 'width: 70px',
        // class: "arco-table-td arco-table-cell",
    },
    {
        id: "balance",
        label: "收入",
        component: "InputNumber",
        // style: 'width: 70px',
        // class: "arco-table-td arco-table-cell",
        // parseValue: (val) => val.toLocaleString(),
    },

    // 这里用到了函数
    {
        mode: 'edit',
        component: 'Button',
        type: "text",
        label: "操作栏",
        slot: '删除',
        // style: 'width: 70px',
        // class: "arco-table-td arco-table-cell",
        sortable: false,
        // @tofix 未能生效
        dynamicProps: ['showCondition'],
        showCondition: (_, { mode }) => mode === 'edit',
        events: {
            click: (_, formContext) => {
                // console.log(formContext)
                formContext.deleteRow()
            },
        },
    },
];

export default schema;  