<template>
  <Form :form="form" :label-col="4" :wrapper-col="10">
    <SchemaField :schema="schema" />
    <FormButtonGroup align-form-item>
      <Submit @submit="onSubmit">提交</Submit>
    </FormButtonGroup>
  </Form>
</template>

<script setup>
// import { h } from 'vue'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import {
  Form,
  FormItem,
  Upload,
  Submit,
  FormButtonGroup,
} from '@formily/element-plus'
import schema from "./index.data.js"

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Upload,
  },
})

const onSubmit = (value) => {
  alert(JSON.stringify(value))
}
</script>