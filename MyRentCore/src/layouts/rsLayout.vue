<template>
  <v-app>
    <v-layout>
      <rs-app-bar/>

      <router-view></router-view>

      <rs-footer />
    </v-layout>
  </v-app>
</template>
<script setup lang="ts">

import RsAppBar from "@/components/LayoutComponents/rsAppBar.vue";
import RsFooter from "@/components/LayoutComponents/rsFooter.vue";
</script>

<style scoped>

</style>
