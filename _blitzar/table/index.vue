<template>
    <div class="demo">
        <BlitzTable :schemaColumns="schema" :rows="rows"  :searchField="{
        component: 'Input',
        placeholder: 'Search...',
        debounce: 300,
        clearable: true,
      }" 
      mode="edit"
      paginationFieldPosition="center"
      :paginationField="{
        // label: 'Open page:',
        component: 'Pagination',
        total: 50,
        showPageSize: true,
      }"

      />
    </div>
</template>

<script setup>
import { BlitzTable } from 'blitzar'
import 'blitzar/dist/style.css'
import schema from './schema';

const rows = [
  {
    balance: 93683,
    birthdate: '1946-07-22',
    firstName: 'Harper',
    lastName: 'Nolan',
    company: 'Tortor At Risus LLC',
  },
  { balance: 69632, birthdate: '1945-11-27', firstName: 'Whoopi', lastName: 'David', company: 'Ipsum Institute' }, // prettier-ignore
  { balance: 75903, birthdate: '1955-10-01', firstName: 'Peter', lastName: 'Mendez', company: 'Curabitur Dictum LLC' }, // prettier-ignore
  { balance: 53509, birthdate: '1977-06-21', firstName: 'Harrison', lastName: 'Miller', company: 'Enim Etiam Imperdiet Industries' }, // prettier-ignore
  { balance: 93450, birthdate: '2017-11-27', firstName: 'Wendy', lastName: 'Strong', company: 'Ac PC' }, // prettier-ignore
  { balance: 64590, birthdate: '1975-12-10', firstName: 'Kyla', lastName: 'Dalton', company: 'Urna Nec Luctus PC' }, // prettier-ignore
  { balance: 72444, birthdate: '2001-07-31', firstName: 'Aimee', lastName: 'Stephens', company: 'Tempus Incorporated' }, // prettier-ignore
  { balance: 99856, birthdate: '1972-01-28', firstName: 'Phelan', lastName: 'Jennings', company: 'Consectetuer Adipiscing Elit LLP' }, // prettier-ignore
  { balance: 83325, birthdate: '1966-11-17', firstName: 'Xena', lastName: 'Emerson', company: 'Mollis Foundation' }, // prettier-ignore
  { balance: 50981, birthdate: '1995-07-26', firstName: 'Althea', lastName: 'Mcdaniel', company: 'Non Foundation' }, // prettier-ignore
  { balance: 97869, birthdate: '1945-10-01', firstName: 'Shad', lastName: 'Beard', company: 'Mollis Incorporated' }, // prettier-ignore
]
</script>

<style scoped lang="less">
.demo {
    padding: 10px;


}
</style>