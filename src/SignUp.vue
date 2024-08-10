<script>
import InputSignup from './components/InputSignup.vue';
export default{
    components: {
        InputSignup,
    }
}
</script>
<template>
    <div class="page-main-body">
        <!-- left -->
        <div class="page-left">
            <img src="./assets/img1.png" alt="img" class="main-img">  
        </div>
        <!-- right -->
        <div class="page-right">
            <div class="head">
                <p><img src="./assets/logo-main.png" alt="" class="logo"></p>
            <p class="welcome">Welcome Back!</p>
            <p class="para">Enter your credential to access your account</p>
            </div>
            
            <div class="btns">
                
                <router-link to="/khelboo-credentials/login" class="btn login">Log In</router-link>
                <router-link to="/khelboo-credentials/signup" class="btn signup">Sign Up</router-link>
                
            </div>
            <input-signup></input-signup>
            <!-- <router-view name="subContent"></router-view> -->
            <div class="extra">
                
                <router-link to="/khelboo-credentials/otp" class="btn signup2">Sign Up</router-link>
                <div class="or">
                    <hr>
                    <p class="orin">or</p>
                    <hr>
                </div>
                <div class="btns-type2">
                    <button class="btn-type2 google">Sign in with Google+</button>
                    <button class="btn-type2 facebook">Login with Facebook</button>
                </div>
                
            </div>
            
        </div>
    </div>
    
</template>
<style scoped>
.logo{
    width: 320px;
    height: 85px;
}
.head{
    height: 150px;
    /* font-size: 2vw; */
}
.login{
    width: 50%;
    background-color: #D9D9D9;
    color: #474747;
    position: absolute;
    left: 0px;
    z-index: 1;
}
.signup{
    position: absolute;
    /* right: px; */
    width: 55%;
    background-color: #FB8904;
    color: #FFF;
    /* left: 00px; */
    right: 0px;
    z-index: 2;
}
.login:hover{
    background-color: #b3b2b2;
}
@media ( max-width: 700px){
    .page-left{
        position: absolute;
        visibility: hidden;
    }
    .page-main-body{
        justify-content: center;
    }
    .page-right{
        width: 80vw;
    }
}
</style>