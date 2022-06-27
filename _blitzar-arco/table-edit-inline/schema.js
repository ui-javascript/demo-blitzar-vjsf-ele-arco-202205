// import { ROW_SELECTION_ID } from 'blitzar'

const schema = [
    // { id: ROW_SELECTION_ID, label: '选择', component: 'Checkbox', style: 'width: 100px' },

    {
        label: '#️',
        component: 'InputNumber',
        sortable: true,
        // class: "arco-table-td arco-table-cell",
        parseValue: (_, formContext) => {
            return formContext.rowIndex + 1
        },
    },
    {
        id: "firstName",
        label: "First Name",
        component: "Input",
        // class: "arco-table-td arco-table-cell",
    },
    {
        id: "lastName",
        label: "Last Name",
        component: "Input",
        // class: "arco-table-td arco-table-cell",
    },
    {
        id: "company",
        label: "Company",
        // component: "Textarea",
        component: "Input",
        // class: "arco-table-td arco-table-cell",
    },
    {
        id: "birthdate",
        label: "Birthdate",
        component: "DatePicker",
        // class: "arco-table-td arco-table-cell",
    },
    {
        id: "balance",
        label: "Balance",
        component: "InputNumber",
        // class: "arco-table-td arco-table-cell",
        // parseValue: (val) => val.toLocaleString(),
    },

    // 这里用到了函数
    {
        mode: 'edit',
        component: 'Button',
        type: "text",
        slot: '删除',
        // class: "arco-table-td arco-table-cell",
        sortable: false,
        // @tofix 未能生效
        dynamicProps: ['showCondition'],
        showCondition: (_, {mode}) => mode === 'edit',
        events: {
            click: (_, formContext) => {
                // console.log(formContext)
                formContext.deleteRow()
            },
        },
    },
];

export default schema;  