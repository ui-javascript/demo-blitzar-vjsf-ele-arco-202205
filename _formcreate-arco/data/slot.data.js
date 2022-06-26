export default [
    {
        type: 'input',
        field: 'input',
        title: '插槽',
        props: {
            placeholder: "占位内容",
        },
        children: [
           {
                type:'span',
                slot: 'prefix',
                children: ['prefix']
           },
           {
               type:'span',
               slot: 'suffix',
               children: ['suffix']
           },
        ]
    }
]