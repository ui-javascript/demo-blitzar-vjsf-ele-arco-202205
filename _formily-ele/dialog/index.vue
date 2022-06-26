<template>
  <ElButton @click="handleOpen">点击打开表单</ElButton>
</template>

<script setup>
import { FormDialog, FormLayout, FormItem, Input } from '@formily/element-plus'
import { ElButton } from 'element-plus'
import { createSchemaField } from '@formily/vue'
import schema from "./index.data"

const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

// 弹框表单组件
const DialogForm = {
  data() {

    return {
      schema,
    }
  },
  render() {
    return (
      <FormLayout labelCol={6} wrapperCol={10}>
        <SchemaField schema={this.schema} />
        <FormDialog.Footer>
          <span style={{ marginLeft: '4px' }}>扩展文案</span>
        </FormDialog.Footer>
      </FormLayout>
    )
  },
}

const handleOpen = () => {
  FormDialog('弹框表单', DialogForm)
    .forOpen((payload, next) => {
      setTimeout(() => {
        next({
          initialValues: {
            aaa: '123',
          },
        })
      }, 200)
    })
    .forConfirm((payload, next) => {
      setTimeout(() => {
        console.log(payload)
        next(payload)
      }, 1000)
    })
    .forCancel((payload, next) => {
      setTimeout(() => {
        console.log(payload)
        next(payload)
      }, 200)
    })
    .open()
    .then(console.log)
    .catch(console.error)
}
</script>