<!--<template>-->
<!--  <div>-->
<!--    <div v-for="(field, index) in page.fields" :key="index">-->
<!--      {{page.fields}}-->
<!--      <v-select-->
<!--        v-model="field.selectValue"-->
<!--        label="Select"-->
<!--        variant="outlined"-->
<!--        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"-->
<!--      ></v-select>-->
<!--      <v-text-field variant="outlined" v-model="field.textValue"></v-text-field>-->
<!--      <v-btn @click="page.clearFields(index)">send</v-btn>-->

<!--    </div>-->
<!--    <button @click="page.addField()">Add Field</button>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import {usePageStore} from "@/store/Page";-->
<!--const months = ['Jan', 'March', 'April', 'June'];-->
<!--months.splice(2, 1, 'May',)-->
<!--console.log(months)-->
<!--const page = usePageStore()-->
<!--</script>-->

<template>
  <div>
    <v-text-field v-model="search" label="Search"></v-text-field>
    <v-list v-if="search">
      <v-list-item
        v-for="user in filteredUsers"
        :key="user.id"
        @click="displayUser(user)"
      >
        <v-list-item-content>
          <v-list-item-title>{{ user.username }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const users: ({ country: string; build: string; id: number; email: string; age: number; username: string } | { country: string; id: number; email: string; age: number; username: string } | { country: string; id: number; email: string; age: number; username: string } | { country: string; id: number; email: string; age: number; username: string } | { country: string; id: number; email: string; age: number; username: string } | { country: string; id: number; email: string; age: number; username: string } | { country: string; id: number; email: string; age: number; username: string } | { country: string; id: number; email: string; age: number; username: string } | { country: string; id: number; email: string; age: number; username: string } | { country: string; id: number; email: string; age: number; username: string })[] = [
    {
      "id": 1,
      "username": "john_doe",
      "email": "john@example.com",
      "age": 30,
      "country": "USA",
      "build": "D20"
    },
    {
      "id": 2,
      "username": "jane_smith",
      "email": "jane@example.com",
      "age": 25,
      "country": "Canada",
      "build": "D30"
    },
    {
      "id": 3,
      "username": "alex_87",
      "email": "alex@example.com",
      "age": 40,
      "country": "UK",
      "build": "D40"
    },
    {
      "id": 4,
      "username": "emily_rose",
      "email": "emily@example.com",
      "age": 22,
      "country": "Australia",
      "build": "D50"
    },
    {
      "id": 5,
      "username": "michael23",
      "email": "michael@example.com",
      "age": 35,
      "country": "Germany",
      "build": "D60"
    },
    {
      "id": 6,
      "username": "sara_park",
      "email": "sara@example.com",
      "age": 28,
      "country": "South Korea"
    },
    {
      "id": 7,
      "username": "david_w",
      "email": "david@example.com",
      "age": 33,
      "country": "Canada"
    },
    {
      "id": 8,
      "username": "lisa_johnson",
      "email": "lisa@example.com",
      "age": 45,
      "country": "USA"
    },
    {
      "id": 9,
      "username": "tom_h",
      "email": "tom@example.com",
      "age": 27,
      "country": "UK"
    },
    {
      "id": 10,
      "username": "anna_85",
      "email": "anna@example.com",
      "age": 38,
      "country": "France"
    }
  ]
;
const search = ref('');

const filteredUsers = computed(() => {
  return users.filter(user =>
    user.username.toLowerCase().includes(search.value.toLowerCase()) ||
    user.email.toLowerCase().includes(search.value.toLowerCase()) ||
    user.country.toLowerCase().includes(search.value.toLowerCase()) ||
    user.age.toString().includes(search.value)
  );
});

console.log(users)

const displayUser = (user: any) => {
  console.log(user);
};
</script>
