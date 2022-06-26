<template>
    <div class="demo">
           <BlitzListForm v-model="formData" :schema="schema" />
    </div>
</template>

<script setup>
import { ref } from "vue"
import { BlitzListForm } from 'blitzar'
import 'blitzar/dist/style.css'
import schema from './schema';

const formData = ref([])
</script>

<style scoped lang="less">
.demo {
    padding: 10px;
}
</style>