<template>
  <div>
    <v-col cols="12" lg="4">
   <landlord-info :landlord="props.landlord" />
    </v-col>
  </div>
</template>

<script lang="ts" setup>
import {defineAsyncComponent} from "vue";
import type {Landlord} from "@/types";
const LandlordInfo = defineAsyncComponent(() =>  import("@/components/landlordInfo/landlordInfo"))

const props = defineProps({
  landlord: {
    type: Object as () => Landlord,
    default: () => ({
      name: "Joanna",
      surname: "Grzybik",
      birthdayDate: '1995-12-11',
      country: "Poland",
      city: "Wrocław",
      zipCode: "50-572",
      phoneNumber: '+488611111111',
      email: 'joanna.grzybik@wp.pl'
    }),
  },
});
</script>

<style scoped>

</style>
