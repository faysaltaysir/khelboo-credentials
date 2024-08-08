import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import InputBox from './components/InputSignup.vue';
import OtpView from './components/OtpView.vue';
// import InputLogin from './components/InputLogin.vue';
import LoginPage from './LoginPage.vue';
import SignUp from './SignUp.vue';
import InputLogin from './components/InputLogin.vue';
import OtpPage from './OtpPage.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/signup', 
            components: {
                mainContent:SignUp,
                subContent:InputLogin 
            }
        },
        { 
            path: '/otp', 
            components:{
                mainContent:OtpPage
            }
        },
        { 
            path: '/login', 
            components:{
                mainContent:LoginPage
            }
        },
        // { 
        //     path: '/signup', 
        //     components:{
        //         mainContent:LoginPage
        //     }
        // }
    ]
});


const app = createApp(App);
app.use(router);
app.mount('#app');
