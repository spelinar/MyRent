<template>
  <v-card>
    <v-row class="justify-center mt-3 mb-3">
      <v-avatar
        color="grey"
        size="100"
        rounded="xl"
      >
        <v-img :src="avatarProfile"></v-img>
      </v-avatar>
    </v-row>
    <v-card-title class="text-h6 ">Dane osobowe</v-card-title>
    <div v-for="(value, indexValue) in props.landlord" :key="indexValue">
      <v-card-text class="pb-0">
        <b>{{ landLordTranslationKey[indexValue] }}: </b> {{ value }}
      </v-card-text>
    </div>
    {{localTranslations.title}}
    <v-card-title class="text-subtitle-1 mt-7">Contacts</v-card-title>
    <div></div>

  </v-card>
</template>

<script lang="ts" setup>

import {Landlord} from "@/types";
import avatar from "@/assets/Avatar.png"
import {useI18n} from "vue-i18n";
import {useComponentTranslations} from "@/plugins/dynamicTranslations";

const props = defineProps<{
  landlord: Landlord
}>()
const avatarProfile = avatar
const landLordTranslationKey: Landlord = {
  name: "Imię",
  surname: "Nazwisko",
  birthdayDate: 'Data usrodzenia',
  country: "Kraj",
  city: "Miejscowość",
  zipCode: "Kod pocztowy",
  phoneNumber: "NumerTelefonu",
  email: "Email"
}
const { locale } = useI18n();
const { localTranslations } = useComponentTranslations(locale.value, './')
</script>

<style scoped>

</style>
