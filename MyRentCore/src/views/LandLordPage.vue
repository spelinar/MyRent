<template>
  <div>
    <v-col cols="12" lg="4">
      <v-data-table
        :headers="headers"
        :items="items"
      ></v-data-table>
    </v-col>
    <v-icon icon="fas fa-home">fa-solid fa-home</v-icon>sadasdasd
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

const headers = [
    { title: 'Pyramid', value: 'name' },
    { title: 'Location', value: 'location' },
    { title: 'Construction Date', value: 'constructionDate' },
    {
      title: 'Dimensions',
      align: 'center',
      children: [
        { title: 'Height (m)', value: 'height' },
        { title: 'Base (m)', value: 'base' },
        { title: 'Volume (m³)', value: 'volume' },
      ],
    },
  ]

const items = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: '1',
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: '0',
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: '6',
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    iron: '7',
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    iron: '16',
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    iron: '1',
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    iron: '2',
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    iron: '8',
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    iron: '45',
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    iron: '22',
  },
]
console.log(items)
</script>

<style scoped>

</style>
