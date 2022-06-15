import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlj28vxr1yiDcLXIX98-YLedZp0WRw6W4",
  authDomain: "best-website-c402f.firebaseapp.com",
  projectId: "best-website-c402f",
  storageBucket: "best-website-c402f.appspot.com",
  messagingSenderId: "902857292935",
  appId: "1:902857292935:web:a11cbb8d5dfdc3bf120c22"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const store = createStore({
  state() {
    return {
      count: 77
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})


createApp(App).use(store).use(router).mount('#app')