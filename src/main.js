import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN-VybGR6UNqCa6X3Gm-0hFEcCMwjNwiM",
  authDomain: "letsquiz-6c95e.firebaseapp.com",
  projectId: "letsquiz-6c95e",
  storageBucket: "letsquiz-6c95e.appspot.com",
  messagingSenderId: "816653119285",
  appId: "1:816653119285:web:25426532de06861d98667c",
  measurementId: "G-99Z6G6MX4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
