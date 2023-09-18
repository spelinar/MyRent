<template>
  <v-app-bar
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>{{$t('layout.title')}}</v-app-bar-title>

    <v-spacer></v-spacer>
    <change-language />
  </v-app-bar>
</template>

<script lang="ts" setup>

import ChangeLanguage from "@/components/changeLanguage/changeLanguage.vue";
</script>

<style scoped>

</style>
