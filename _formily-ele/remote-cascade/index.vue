<template>
  <Form :form="form">
    <SchemaField
      :schema="schema"
      :scope="{ useAsyncDataSource, transformAddress }"
    />
    <Submit @submit="onSubmit">提交</Submit>
  </Form>
</template>

<script setup>
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form, FormItem, Cascader, Submit } from '@formily/element-plus'
import { action } from '@formily/reactive'
import schema from "./index.schema"

const transformAddress = (data = {}) => {
  return Object.entries(data).reduce(
    (
      buf,
      [key, value]) => {
      if (typeof value === 'string')
        return buf.concat({
          label: value,
          value: key,
        })
      const { name, code, cities, districts } = value
      const _cities = transformAddress(cities)
      const _districts = transformAddress(districts)
      return buf.concat({
        label: name,
        value: code,
        children: _cities.length
          ? _cities
          : _districts.length
          ? _districts
          : undefined,
      })
    },
    []
  )
}

const useAsyncDataSource = (url, transform) => {
  return (field) => {
    field.loading = true

    fetch(url)
      .then((res) => res.json())
      .then(
        action.bound((data) => {
          field.dataSource = transform(data)
          field.loading = false
        })
      )
  }
}


const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Cascader,
  },
})

const onSubmit = (values) => {
      alert(JSON.stringify(values, null, 2))
}
</script>