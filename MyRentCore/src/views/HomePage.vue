<template>
  <div>
    <div v-for="(field, index) in page.fields" :key="index">
      {{page.fields}}
      <v-select
        v-model="field.selectValue"
        label="Select"
        variant="outlined"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      ></v-select>
      <v-text-field variant="outlined" v-model="field.textValue"></v-text-field>
      <v-btn @click="page.clearFields(index)">send</v-btn>

    </div>
    <button @click="page.addField()">Add Field</button>
  </div>
</template>

<script setup lang="ts">
import {usePageStore} from "@/store/Page";

const page = usePageStore()
</script>
