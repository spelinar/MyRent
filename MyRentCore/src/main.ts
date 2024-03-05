// Components
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Composables
import { createApp } from 'vue'

// Plugins
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import {createPinia} from "pinia";
import {i18n} from "@/plugins/i18n";
const pinia = createPinia()
const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(vuetify)
app.use(pinia)
app.mount('#app')
