<template>
  <div class="demo">
    <Space style="margin-bottom: 10px;">
      <Select id="mode" v-model="mode" name="mode" style="width: 250px;">
        <Option value="edit">编辑模式</Option>
        <!-- <Option value="readonly">只读模式</Option> -->
        <!-- <Option value="disabled">禁用模式</Option> -->
        <Option value="raw">文本模式</Option>
      </Select>

      <Button @click="submit">提交</Button>
    </Space>

    <BlitzTable :key="rows.map(i => i.id).join('_')" :sortable="false" labelPosition="left" :schemaColumns="schema" :rows="rowsRaw" :mode="mode"
      :paginationField="paginationField" :searchField="searchField" @rowDeleted="rowDeleted"
      @updateCell="onUpdateCell" />

  </div>
</template>

<script setup name="TableApp">
import { ref } from "vue"
import { Modal } from '@arco-design/web-vue';
import { BlitzTable } from 'blitzar'
import 'blitzar/dist/style.css'
import schemaRaw from './schema'
import rowsRaw from "./data"

const mode = ref('edit')
const rows = ref(rowsRaw)
const schema = ref(schemaRaw)

const paginationField = {
  component: 'Pagination',
  total: 50,
  showPageSize: true,
}

const searchField = {
  component: 'Input',
  placeholder: '筛选搜索...',
  debounce: 300,
  allowClear: true,

}


const onUpdateCell = ({ rowId, colId, value, origin }) => {
  console.log('@updateCell', { rowId, colId, value, origin })
  const row = rows.value.find((r) => r.id === rowId)
  if (!row) return
  console.log("修改")
  row[colId] = value

  console.log(rows.value)
}

const rowDeleted = (rowIndex) => {

  console.log(rowIndex)
  console.log(rows.value)

  // @tip rowsRaw不需要再操作, 框架自动处理了
  // rowsRaw.splice(rowIndex, 1)
  rows.value.splice(rowIndex, 1)
}

const submit = () => {
  console.log(rowsRaw)

  Modal.info({
    title: 'Info Title',
    content: JSON.stringify(rows.value, null, 2)
  });

}
</script>

<style scoped lang="less">
.demo {
  padding: 10px;

  :deep(td) {
    font-size: 14px;
    // padding: 4px 4px;

    box-sizing: border-box;
    color: rgb(var(--gray-10));
    line-height: 1.5715;
    text-align: left;
    word-break: break-all;
    background-color: var(--color-bg-2);
    border-bottom: 1px solid var(--color-neutral-3);
  }

  :deep(th) {
    text-align: left;
  }

}
</style>