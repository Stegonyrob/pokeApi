import '@/assets/main.scss'
import { createApp } from "vue";
import { createPinia } from "pinia";

import './components/repository/repository.js'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'



const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
