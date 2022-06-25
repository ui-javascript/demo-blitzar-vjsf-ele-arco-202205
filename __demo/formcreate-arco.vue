<template>
    <p>value: {{ value.group }}</p>
    <form-create v-model:api="fApi" v-model="value" :rule="rule" :option="options" />
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            fApi: {},
            value: {},
            options: {
                onSubmit: (formData) => {
                    alert(JSON.stringify(formData))
                }
            },
            rule: [
                {
                    type: 'group',
                    field: 'group',
                    title: 'group',
                    value: [{ field1: 'aaa', field2: 'sss' }, { field1: 'aaa', field2: 'sss' }],
                    props: {
                        defaultValue: { field1: 'field1', field2: 'field2' },
                        rule: [
                            { type: 'input', field: 'field1', title: 'field1' },
                            { type: 'input', field: 'field2', title: 'field2' },
                        ]
                    }
                },
            ]
        }

    }
}
</script>