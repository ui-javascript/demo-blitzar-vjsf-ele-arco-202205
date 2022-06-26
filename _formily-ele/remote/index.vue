<template>
  <Form :form="form">
    <SchemaField :schema="schema" :scope="{ useAsyncDataSource, loadData }" />
    <Submit @submit="onSubmit">提交</Submit>
  </Form>
</template>

<script setup>
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { action } from '@formily/reactive'
import { Form, FormItem, Select, Submit} from '@formily/element-plus'

import schema from './index.data'

const useAsyncDataSource = (service) => (field) => {
  field.loading = true
  service(field).then(
    action.bound((data) => {
      field.dataSource = data
      field.loading = false
    })
  )
}

const loadData = async (field) => {
  const linkage = field.query('linkage').get('value')
  if (!linkage) return []
  return new Promise((resolve) => {
    setTimeout(() => {
      if (linkage === 1) {
        resolve([
          {
            label: 'AAA',
            value: 'aaa',
          },
          {
            label: 'BBB',
            value: 'ccc',
          },
        ])
      } else if (linkage === 2) {
        resolve([
          {
            label: 'CCC',
            value: 'ccc',
          },
          {
            label: 'DDD',
            value: 'ddd',
          },
        ])
      }
    }, 1000)
  })
}

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Select,
  },
})

const onSubmit = (value) => {
    alert(JSON.stringify(value, null, 2))
}
</script>