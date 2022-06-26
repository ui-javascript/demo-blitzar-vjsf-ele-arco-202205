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
  Space,
  Input,
  ArrayTabs,
} from '@formily/element-plus'
import schema from "./index.data";

const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Space,
    Input,
    ArrayTabs,
  },
})

const form = createForm()

const log = (values) => {
 alert(JSON.stringify(values, null, 2))
}
</script>

<style lang="scss" scoped></style>