import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import InputBox from './components/InputSignup.vue';
import OtpView from './components/InputOtp.vue';
// import InputLogin from './components/InputLogin.vue';
import LoginPage from './LoginPage.vue';
import SignUp from './SignUp.vue';
import InputLogin from './components/InputLogin.vue';
import OtpPage from './OtpPage.vue';
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
