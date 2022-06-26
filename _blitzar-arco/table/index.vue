<template>
  <div class="demo">
    <Select id="mode" v-model="mode" name="mode" style="margin-bottom: 1rem;width: 250px;">
      <Option value="edit">编辑模式</Option>
      <Option value="readonly">只读模式</Option>
      <Option value="disabled">禁用模式</Option>
      <Option value="raw">文本模式</Option>
    </Select>

    <BlitzTable labelPosition="left" :schemaColumns="schema" :rows="data" :mode="mode" :paginationField="paginationField"
      :searchField="searchField" @rowDeleted="rowDeleted" @updateCell="onUpdateCell" />

  </div>
</template>

<script setup name="TableApp">
import { ref } from "vue"
import { BlitzTable } from 'blitzar'
import 'blitzar/dist/style.css'
// import schema from './schema';
import data from "./data"
// import { ROW_SELECTION_ID } from 'blitzar'

const mode = ref('edit')
const rows = ref(data)

const schema = [
  // { id: ROW_SELECTION_ID, label: '选择', component: 'Checkbox', style: 'width: 100px' },
  
  {
    label: '#️',
    component: 'InputNumber',
    sortable: true,
    // class: "arco-table-td arco-table-cell",
    parseValue: (_, formContext) => {
      return formContext.rowIndex + 1
    },
  },
  {
    id: "firstName",
    label: "First Name",
    component: "Input",
    // class: "arco-table-td arco-table-cell",
  },
  {
    id: "lastName",
    label: "Last Name",
    component: "Input",
    // class: "arco-table-td arco-table-cell",
  },
  {
    id: "company",
    label: "Company",
    // component: "Textarea",
    component: "Input",
    // class: "arco-table-td arco-table-cell",
  },
  {
    id: "birthdate",
    label: "Birthdate",
    component: "DatePicker",
    // class: "arco-table-td arco-table-cell",
  },
  {
    id: "balance",
    label: "Balance",
    component: "InputNumber",
    // class: "arco-table-td arco-table-cell",
    // parseValue: (val) => val.toLocaleString(),
  },

  // 这里用到了函数
  {
    mode: 'edit',
    component: 'div',
    // class: "arco-table-td arco-table-cell",
    dynamicProps: ['showCondition'],
    showCondition: () => mode.value === 'edit',
    slot: {
      type: 'text',
      slot: '删除',
      component: 'Button',
      events: {
        click: (pointerEvent, formContext) => {
          // formContext.deleteRow()
          console.log(pointerEvent, formContext)
        },
      },
    }
  },
];


const paginationField = {
  component: 'Pagination',
  total: 50,
  showPageSize: true,
}

const searchField = {
  component: 'Input',
  placeholder: 'Search...',
  debounce: 300,
  clearable: true,
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
  data.splice(rowIndex, 1)
  rows.value.splice(rowIndex, 1)

  console.log(rows.value)
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