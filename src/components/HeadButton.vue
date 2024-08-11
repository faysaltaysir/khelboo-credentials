<template>
    <!-- head -->
    <div class="head">
        <p><img src="../assets/logo-main.png" alt="" class="khelboo-logo"></p>
        <p class="welcome-text">Welcome Back!</p>
        <p class="head-para">Enter your credential to access your account</p>
    </div>
    <!-- signup login -->
    <div class="signup-login-button-merge-section">

        <button class="button-style login-merge-button" @click="loginButton" 
            :class="isLogin ? 'active' : ''"> Log In</button>
        <button class="button-style signup-merge-button" @click="signupButton" 
            :class="isSignup ? 'active' : ''">Sign Up</button>
    </div>

</template>

<script>

export default {
    
    name: 'HeadButton',
    computed: {
        isSignUpActive() {

            // isSignupActive=false;
            return true;
        }
    },
    data(){
        return{
            isSignup: true,
            isLogin: false,
        }
    },
    methods: {
        loginButton() {
            this.isSignup=false;
            this.isLogin=true;
            this.$emit('sendData', 'InputLogin');
        },
        signupButton() {
            this.isSignup=true;
            this.isLogin=false;
            this.$emit('sendData', 'InputSignup');
        },
    }
}
</script>

<style scoped>
.button-style:hover{
    background-color: #c4c4c4;
}
.head-para{
    text-align: left;
}
.khelboo-logo{
    height: 5rem;
}
.welcome-text{
    margin-top: 1px;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: left;
}
.signup-login-button-merge-section {
    position: relative;
    width: 100%;
    height: 45px;
    margin-top: 1vw;
    margin-bottom: 20px;
}

.login-merge-button {
    width: 50%;
    position: absolute;
    left: 0px;
    z-index: 1;
}

.signup-merge-button {
    position: absolute;
    width: 55%;
    right: 0px;
    z-index: 2;
}

.active {
    background-color: #FB8904;
    color: #FFF;
    z-index: 3;
}

.active:hover {
    background-color: #ffa33a;
}
</style>