<template>
    <blitz-form :actionButtons="['edit', 'cancel', 'save', 'delete']" @delete="() => { }" v-model="formData"
        :schema="schema" :columnCount="2" />

</template>

<script>
import { BlitzForm } from 'blitzar'
import 'blitzar/dist/style.css'


const schema = [
    {
        id: 'name',
        component: 'AInput',
        label: 'Superhero name',
        subLabel: 'Think of something cool.',
        placeholder: 'Something',
      
        props: {
            "allow-clear": true,
            allowClear: true,
        }
    },
    {
        id: 'powerOrigin',
        label: 'Power origin',
        subLabel: 'Where does your power come from?',
        component: 'ASelect',
        slot: [
            { component: 'AOption', value: '', slot: 'Select one', disabled: true },
            { component: 'AOption', value: 'mutation', slot: 'Mutation' },
            { component: 'AOption', value: 'self', slot: 'Self taught' },
            { component: 'AOption', value: 'item', slot: 'Magic item' },
            { component: 'AOption', value: 'gear', slot: 'Gear' },
        ],
    },
]

const formData = {}

export default {
    name: 'App',
    components: { BlitzForm },
    data() {
        return {
            schema,
            formData,
        }
    }
}
</script>