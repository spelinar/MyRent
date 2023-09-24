<template>
  <v-app>
    <v-layout>
      <rs-app-bar/>
      <v-main class="tlo">
        <router-view></router-view>
      </v-main>
      <rs-footer/>
    </v-layout>
  </v-app>
</template>
<script setup lang="ts">

import RsAppBar from "@/components/LayoutComponents/rsAppBar.vue";
import RsFooter from "@/components/LayoutComponents/rsFooter.vue";
</script>

<style scoped>
.tlo {
  background: #f6f6f6;
}
</style>
