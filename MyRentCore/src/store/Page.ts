import {defineStore} from "pinia";
import {ref} from "vue";
import {Field} from "@/types";

export const usePageStore = defineStore('page', () => {

  const fields = ref<Field[]>([])

  function addField() {
    fields.value.push({selectValue: '', textValue: ''})
  }
  function clearFields(index) {
    if (fields.value.length > 0) {
      fields.value.splice(index, 1);
    }
  }

  return {
    fields,
    addField,
    clearFields
  }
})
