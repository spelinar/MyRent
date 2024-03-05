import {defineStore} from "pinia";
import {ref} from "vue";
import {Field} from "@/types";

export const usePageStore = defineStore('page', () => {

  const fields = ref<Field[]>([])

  function addField() {
    fields.value.push({selectValue: '', textValue: ''})
  }

  return {
    fields,
    addField
  }
})
