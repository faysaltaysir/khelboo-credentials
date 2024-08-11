import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import InputLogin from './components/InputLogin.vue';
import InputSignup from './components/InputSignup.vue';
import InputOtp from './components/InputOtp.vue';
import ImageView from './components/ImageView.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/khelboo-credentials/signup', 
            components: {
                leftContent: ImageView,
                subContent:InputSignup 
            }
        },
        { 
            path: '/khelboo-credentials/otp', 
            components:{
                leftContent: ImageView,
                subContent:InputOtp
            }
        },
        { 
            path: '/khelboo-credentials/login', 
            components:{
                rightContent: ImageView,
                subContent:InputLogin
            }
        },
    ]
});


const app = createApp(App);
app.use(router);
app.mount('#app');
