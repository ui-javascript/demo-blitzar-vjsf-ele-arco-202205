<template>
    <div class="demo">
        <Select id="mode" v-model="mode" name="mode" style="margin-bottom: 1rem;width: 250px;">
            <Option value="edit">编辑模式</Option>
            <Option value="readonly">只读模式</Option>
            <Option value="disabled">禁用模式</Option>
            <Option value="raw">文本模式</Option>
        </Select>

        <blitz-form
            labelPosition="left"
            labelWidth="100px"
            actionButtonsPosition="bottom"
            v-model="formData"
            :mode="mode"
            :actionButtons="['save']"
            :actionButtonDefaults="actionButtonDefaults"
            :schema="schema"
            :columnCount="2"
            @delete="handleDelete"
            @updateField="handleUpdateField"
            @save="handleSave"
        />
    </div>
</template>


<script setup name="IndexApp">
import { ref } from "vue"
import { BlitzForm } from 'blitzar'
import 'blitzar/dist/style.css'
import schema from './schema';

const formData = ref({})
const mode = ref('edit')


const handleDelete = () => {

}

const handleUpdateField = (obj) => {
    console.log(obj)
}

const handleSave = ({ formData, newData, oldData }) => {
    alert(JSON.stringify(formData, null, 2))
    // console.log('formData', formData)
    console.log('newData', newData)
    console.log('oldData', oldData)
}


const actionButtonDefaults = {
    // edit: {
    //     slot: `编辑`,
    //     component: 'Button',
    //     type: "outline",
    //     // componentClasses: 'my-button-class',
    // },
    // cancel: {
    //     slot: `取消`,
    //     component: 'Button',
    //     type: "outline",
    //     // componentStyle: 'background: none; border: none;' 
    // },
    save: {
        slot: `保存`,
        component: 'Button',
        type: "outline",
        showCondition: (_, { mode }) => {
            // @tofix mode一直显示'edit'
            console.log(mode)
            return mode == 'edit'
        },
        // componentStyle: 'background: none; border: thin solid green; color: green',
    },
    // delete: {
    //     slot: `删除`,
    //     component: 'Button',
    //     type: "outline",
    //     // status: "danger",
    //     showCondition: (_, { mode }) => mode !== 'edit',
    //     // componentStyle: 'background: none; border: none; color: crimson',
    // },
}


</script>

<style scoped lang="less">
.demo {
    padding: 10px;

    :deep(.blitz-field__label, .blitz-field__sub-label) {
        width: 100px;
    }
}
</style>