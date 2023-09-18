<template>
  <v-app>
    <v-layout>
    <v-app-bar
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <router-view></router-view>

      <v-footer app class="bg-grey-lighten-1">
        <v-row justify="center" no-gutters>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Roman Spelina</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-layout>
  </v-app>
</template>
<script setup lang="ts">

</script>

<style scoped>

</style>
