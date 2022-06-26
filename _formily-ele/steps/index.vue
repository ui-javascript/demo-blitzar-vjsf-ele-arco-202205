<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema" :scope="{ formStep }" />
    <FormConsumer>
      <template #default>
        <FormButtonGroup>
          <ElButton
            :disabled="!formStep.allowBack"
            @click="
              () => {
                formStep.back()
              }
            "
          >
            上一步
          </ElButton>
          <ElButton
            :disabled="!formStep.allowNext"
            @click="
              () => {
                formStep.next()
              }
            "
          >
            下一步
          </ElButton>
          <Submit :disabled="formStep.allowNext" @submit="log">提交</Submit>
        </FormButtonGroup>
      </template>
    </FormConsumer>
  </FormProvider>
</template>

<script setup>
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField, FormConsumer } from '@formily/vue'
import {
  FormItem,
  FormStep,
  FormButtonGroup,
  Submit,
  Input,
} from '@formily/element-plus'
import { ElButton } from 'element-plus'
import schema from "./index.data"


const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    FormStep,
    Input,
  },
})

const form = createForm()
const formStep = FormStep.createFormStep()

const logging = (values) => alert(JSON.stringify(values, null, 2))

const log = () => {
  formStep.submit(logging)
}
</script>

<style lang="scss" scoped></style>