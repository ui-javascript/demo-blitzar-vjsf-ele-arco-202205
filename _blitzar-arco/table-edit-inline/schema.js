import { ROW_SELECTION_ID } from 'blitzar'
import { Modal } from '@arco-design/web-vue';

const schema = [
    {
        id: ROW_SELECTION_ID,
        label: '勾选栏',
        component: 'Checkbox',
        style: 'width: 70px',
        dynamicProps: ['showCondition'],
        showCondition: (_, { mode }) => mode === 'edit',
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

    // @todo 这里用到了函数, 是变化的部分
    {
        component: 'Button',
        type: "text",
        label: "操作栏",
        slot: '编辑',
        // style: 'width: 70px',
        // class: "arco-table-td arco-table-cell",
        sortable: false,
        dynamicProps: ['showCondition'],
        showCondition: (_, { mode }) => mode === 'edit',
        events: {
            click: (_, formContext) => {
                console.log(formContext)
                // console.log(formContext.rowData)
                Modal.info({
                    title: 'Info Title',
                    content: JSON.stringify(formContext.rowData, null, 2)
                  });
                
            },
        },
    },
    {
        component: 'Button',
        type: "text",
        // label: "操作栏",
        slot: '删除',
        status: "danger",
        // style: 'width: 70px',
        // class: "arco-table-td arco-table-cell",
        sortable: false,
        dynamicProps: ['showCondition'],
        showCondition: (_, { mode }) => mode === 'edit',
        events: {
            click: (_, formContext) => {
                // console.log(formContext)
                formContext.deleteRow()
            },
        },
    },

    // {
    //     component: 'div',
    //     label: "多列操作栏",
    //     // style: 'width: 70px',
    //     // class: "arco-table-td arco-table-cell",
    //     dynamicProps: ['showCondition'],
    //     showCondition: (_, { mode }) => mode === 'edit',
    //     sortable: false,
    //     slot: [
    //         {
    //             component: 'Button',
    //             type: "text",
    //             slot: '编辑',
    //             events: {
    //                 click: (_, formContext) => {
    //                     console.log(formContext)
    //                     // formContext.deleteRow()
    //                 },
    //             },
    //         },
    //         {
    //             component: 'Button',
    //             type: "text",
    //             slot: '删除',
    //             status: "danger",
    //             events: {
    //                 click: (_, formContext) => {
    //                     console.log(formContext)
    //                     // formContext.deleteRow()
    //                 },
    //             },
    //         }

    //     ]
    // },
];

export default schema;  