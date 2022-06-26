export default [
    {
        id: 'name',
        component: 'Input',
        label: 'Superhero name',
        // subLabel: 'Think of something cool.',
        placeholder: 'Something',
        allowClear: true,
        required: true,
    },
    {
        id: 'powerOrigin',
        label: 'Power origin',
        subLabel: 'Where does your power come from?',
        component: 'Select',
        slot: [
            { component: 'Option', value: '', slot: 'Select one', disabled: true },
            { component: 'Option', value: 'mutation', slot: 'Mutation' },
            { component: 'Option', value: 'self', slot: 'Self taught' },
            { component: 'Option', value: 'item', slot: 'Magic item' },
            { component: 'Option', value: 'gear', slot: 'Gear' },
        ],
    },
]