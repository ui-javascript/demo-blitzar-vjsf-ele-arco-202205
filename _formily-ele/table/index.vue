<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema" />
    <Submit @submit="log">提交</Submit>
  </FormProvider>
</template>

<script setup>
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/vue'
import {
  Submit,
  FormItem,
  ArrayTable,
  Input,
  Editable,
} from '@formily/element-plus'

import schema from "./index.schema"

const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    ArrayTable,
    Input,
    Editable,
  },
})

const form = createForm()

const log = (...v) => {
  console.log(...v)
}
</script>