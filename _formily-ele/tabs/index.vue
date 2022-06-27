<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema" :scope="{ formTab }" />
    <FormButtonGroup alignFormItem>
      <ElButton
        @click="
          () => {
            form.query('tab3').take((field) => {
              field.visible = !field.visible
            })
          }
        "
      >
        显示/隐藏最后一个Tab
      </ElButton>
      <ElButton
        @click="
          () => {
            formTab.setActiveKey('tab2')
          }
        "
      >
        切换第二个Tab
      </ElButton>
      <Submit @submit="log">提交</Submit>
    </FormButtonGroup>
  </FormProvider>
</template>

<script setup>
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/vue'
import {
  FormItem,
  FormTab,
  FormButtonGroup,
  Submit,
  Input,
} from '@formily/element-plus'
import { ElButton } from 'element-plus'
import schema from "./index.schema"

const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    FormTab,
    Input,
  },
})



const form = createForm()
const formTab = FormTab.createFormTab()

const log = (values) => {
  alert(JSON.stringify(values, null, 2))
}


</script>

<style lang="scss" scoped></style>