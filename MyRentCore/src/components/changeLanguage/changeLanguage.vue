<template>
  <v-btn variant="text" icon @click="toggleLanguage">
    <v-icon>mdi-translate</v-icon>
  </v-btn>
</template>

<script lang="ts" setup>

import {useI18n} from "vue-i18n";

const { locale} = useI18n()
function toggleLanguage() {
  if (locale.value === 'en') {
    locale.value = 'pl';
  } else {
    locale.value = 'en';
  }
  localStorage.setItem('lang', locale.value)
  console.log(locale.value)
}
</script>
<style scoped>
</style>
