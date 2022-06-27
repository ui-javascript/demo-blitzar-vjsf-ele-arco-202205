<template>
  <div class="demo">
    <div style="margin-bottom: 10px;clear: both;">

      <Space>
        <Select id="mode" v-model="mode" name="mode" style="width: 250px;">
          <Option value="raw">常规编辑</Option>
          <Option value="edit">行内编辑</Option>
        </Select>

        <Button @click="submit">查询</Button>

        <Button :disabled="selectedRows.length === 0" status="danger" @click="delSelected">删除勾选项</Button>

        <Button v-show="isEdit" :disabled="editRowIds.length === 0" @click="submitEdit">保存编辑信息</Button>
      </Space>

      <Space style="float: right;">
        <Alert type="success" closable v-if="isEdit && editRowIds.length === 0">已保存</Alert>

        <Alert type="info" :show-icon="false" :key="editRowIds.map(i => i).join('_')" v-if="isEdit">定期自动保存数据
          <IconRefresh :stroke-width="3" :style="{ fontSize: '16px' }" spin />
        </Alert>
      </Space>

    </div>


    <BlitzTable :rows="rowsRaw"
      :key="tableReloadKey + '_' +selectedRows.map(i => i.id).join('_') + '_' + rows.map(i => i.id).join('_') + '_' + mode + '_' + pagination.pageSize + '_' + pagination.current"
      v-model:selectedRows="selectedRows" :sortable="false" labelPosition="left" :schemaColumns="tableSchema"
      :mode="mode" :rowsPerPage="pagination.pageSize" :paginationField="paginationField" :searchField="searchField"
      @rowDeleted="rowDeleted" @updateCell="onUpdateCell" />

    <Drawer :visible="visible" :width="500" @ok="handleOk" @cancel="handleCancel" unmountOnClose>
      <template #title>
        编辑 {{ editingItem.firstName }} {{ editingItem.lastName }}
      </template>

      <BlitzForm showErrorsOn="always" labelPosition="left" labelWidth="100px" v-model="editingItem" mode="edit"
        :schema="schemaRaw" :columnCount="1" />

    </Drawer>

    <Modal v-model:visible="modalVisible" @ok="handleModalOk" @cancel="modalVisible = false">
      <template #title>
        提交编辑过的人员信息
      </template>

      <pre>
{{ JSON.stringify(rows.filter(i => editRowIds.includes(i.id)).map(i => i.firstName + " " + i.lastName), null, 2) }}
</pre>

    </Modal>

  </div>
</template>

<script setup name="TableApp">
import { ref, computed, onMounted } from "vue"
import { Modal, Message } from '@arco-design/web-vue';
import { IconRefresh } from '@arco-design/web-vue/es/icon';

import { BlitzTable, BlitzForm } from 'blitzar'
import 'blitzar/dist/style.css'
import schemaRaw, { operaterSchemaRaw, selectionSchemaRaw, idxSchemaRaw } from './schema'
import rowsData from "./data"

const mode = ref('raw')

// 防止失去焦点, 得准备两份数据
let rowsRaw = rowsData
const rows = ref(rowsRaw)

const tableSchema = computed(() => {
  operaterSchemaRaw[0].events.click = editItem

  return mode.value === "edit"
    ? selectionSchemaRaw.concat(idxSchemaRaw).concat(schemaRaw)
    : selectionSchemaRaw.concat(idxSchemaRaw).concat(schemaRaw).concat(operaterSchemaRaw)
})

const selectedRows = ref([])
const editRowIds = ref([])
const editingItem = ref([])
const tableReloadKey = ref(false)
const visible = ref(false)
const modalVisible = ref(false)
const isEdit = computed(() => mode.value === 'edit')

const pagination = ref({
  pageSize: 10,
  current: 1,
})

const paginationField = computed(() => {
  return {
    component: 'Pagination',
    total: 50,
    showPageSize: true,
    pageSize: pagination.value.pageSize,
    current: pagination.value.current,
    // @tofix 这一句会导致失去聚焦 
    // disabled: editRowIds.value.length > 0,
    events: {
      change: (current) => {
        if (editRowIds.value.length > 0) {
          Message.warning(`页面跳转前需要先保存编辑信息`)
          return false
        }
        // console.log("当前页码: " + current)
        pagination.value.current = current
        Message.info(`页面跳转${current}`)
      },
      pageSizeChange: (pageSize) => {
        if (editRowIds.value.length > 0) {
          Message.warning(`页面跳转前需要先保存编辑信息`)
          return false
        }

        // console.log("每页数量: " + pageSize)
        pagination.value.pageSize = pageSize
        pagination.value.current = 1
      }
    }
  }
})

const searchField = false
// const searchField = {
//   component: 'Input',
//   placeholder: '筛选搜索...',
//   debounce: 300,
//   allowClear: true,
// }


const onUpdateCell = ({ rowId, colId, value, origin }) => {
  if (!editRowIds.value.includes(rowId)) {
    editRowIds.value.push(rowId)
  }
  console.log('@updateCell', { rowId, colId, value, origin })
  const row = rows.value.find((r) => r.id === rowId)
  if (!row) return
  console.log("修改")
  row[colId] = value

  console.log(rows.value)
}

const rowDeleted = (rowIndex) => {
  console.log(rowIndex)
  // console.log(rows.value)

  // @tip rowsRaw不需要再操作, 框架自动处理了
  // rowsRaw.splice(rowIndex, 1)
  rows.value.splice(rowIndex, 1)
}

const editItem = (_, formContext) => {
  // console.log(formContext.rowData)
  visible.value = true

  // 数据是隔离后的副本
  editingItem.value = formContext.rowData
  // item.value = Object.assign({}, formContext.rowData)
}

const submit = () => {
  console.log(rowsRaw)

  Modal.info({
    title: '显示全部信息',
    content: JSON.stringify(rows.value, null, 2)
  });

}


const submitEdit = () => {
  modalVisible.value = true
}


const delSelected = () => {
  // console.log(selectedRows.value)
  // const selectedRowIds = selectedRows.value.map(i => i.id)
  // rowsRaw = rowsRaw.value.filter(i => !selectedRowIds.includes(i.id))
  // rows.value = rows.value.filter(i => !selectedRowIds.includes(i.id))
  // selectedRows.value = []

  Modal.error({
    title: '确认删除吗',
    content: JSON.stringify(selectedRows.value.map(i => i.firstName + " " + i.lastName), null, 2)
  });

}

const handleOk = () => {
  visible.value = false

  
}

const handleCancel = () => {
  visible.value = false
}

const handleModalOk = () => {
  editRowIds.value = []
  console.log(editRowIds.value.length)
  modalVisible.value = false
}

onMounted(() => {

})

</script>

<style scoped lang="less">
.demo {
  padding: 10px;

  :deep(td) {
    font-size: 14px;
    padding: 4px;

    box-sizing: border-box;
    color: rgb(var(--gray-10));

    line-height: 1.5715;
    text-align: left;
    word-break: break-all;
    background-color: var(--color-bg-2);
    border-bottom: 1px solid var(--color-neutral-3);
  }

  :deep(th) {
    box-sizing: border-box;
    // padding: 4px;
    font-size: 14px;

    padding: 16px 4px;
    line-height: 1.5715;
    word-break: break-all;
    background-color: var(--color-neutral-2);

    border-bottom: 1px solid var(--color-neutral-3);
    text-align: left;
  }


  .arco-alert {

    padding: 4px 15px;

  }

}
</style>

<!-- <style lang="less">
.blitz-form__form {
    :deep(.blitz-field__label, .blitz-field__sub-label) {
        width: 100px;
    }
}
</style> -->