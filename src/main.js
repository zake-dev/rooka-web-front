import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Kakao.init(process.env.VUE_APP_KAKAO_API_KEY)

createApp(App).use(store).use(router).mount("#app")
