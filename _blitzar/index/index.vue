<template>
    <div style="padding: 10px;">
        <Select id="mode" v-model="mode" name="mode" style="margin-bottom: 1rem">
            <Option value="edit">edit</Option>
            <Option value="readonly">readonly</Option>
            <Option value="disabled">disabled</Option>
            <Option value="raw">raw</Option>
        </Select>

        <blitz-form
            labelPosition="left"
            v-model="formData"
            :mode="mode"
            :actionButtons="['edit', 'cancel', 'save', 'delete']"
            :actionButtonDefaults="actionButtonDefaults"
            :schema="schema"
            :columnCount="2"
            @delete="handleDelete"
            @updateField="handleUpdateField"
            @save="handleSave"
        />
    </div>
</template>

<script setup>
import { ref } from "vue"
import { BlitzForm } from 'blitzar'
import 'blitzar/dist/style.css'
import schema from './schema';

const formData = ref({})

const handleDelete = () => {

}

const handleUpdateField = (obj) => {
    console.log(obj)
}

const handleSave = ({ formData, newData, oldData }) => {
    console.log('formData', formData)
    console.log('newData', newData)
    console.log('oldData', oldData)
}


const actionButtonDefaults = {
    edit: {
        slot: `编辑`,
        component: 'Button',
        type: "outline",
        // componentClasses: 'my-button-class',
    },
    cancel: {
        slot: `取消`,
        component: 'Button',
        type: "outline",
        // componentStyle: 'background: none; border: none;' 
    },
    save: {
        slot: `保存`,
        component: 'Button',
        type: "outline",
        // componentStyle: 'background: none; border: thin solid green; color: green',
    },
    delete: {
        slot: `删除`,
        component: 'Button',
        type: "outline",
        // status: "danger",
        showCondition: (_, { mode }) => mode !== 'edit',
        // componentStyle: 'background: none; border: none; color: crimson',
    },
}

const mode = ref('readonly')

</script>