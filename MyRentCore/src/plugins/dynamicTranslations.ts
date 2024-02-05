import { ref } from 'vue';

export const useComponentTranslations = (locale: string, path: string) => {
  const localTranslations = ref({});

  const loadTranslations = async () => {
    try {
      const translations = await import(path + "/" + locale + ".ts");
      localTranslations.value = translations.default;
    } catch (error) {
      console.error("No translation", error);
    }
  };
  loadTranslations();
  return {
    localTranslations
  };
};
