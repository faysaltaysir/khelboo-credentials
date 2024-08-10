<script>
import InputLogin from './components/InputLogin.vue';
export default{
    components:{
        InputLogin
    }
}

</script>

<template>
    <div class="page-main-body">
        <!-- left -->
        
        <!-- right -->
        <div class="page-right">
            <p><img src="./assets/logo-main.png" alt="" class="logo"></p>
            <p class="welcome">Welcome Back!</p>
            <p class="para">Enter your credential to access your account</p>
            <div class="btns">
                <router-link to="/khelboo-credentials/login" class="btn login">Log In</router-link>
                <router-link to="/khelboo-credentials/signup" class="btn signup">Sign Up</router-link>
            </div>

            <input-login></input-login>
            
            <div class="extra">
                <button class="btn signup2">Log in</button>
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
        <div class="page-left">
            <img src="./assets/img1.png" alt="img" class="main-img">  
        </div>
    </div>
    
</template>
<style scoped>

.login{
    background-color: #FB8904;
    width: 50%;
    color: #FFF;
    position: absolute;
    left: 0px;
    z-index: 2;
}
.signup{
    position: absolute;
    /* right: px; */
    width: 55%;
    background-color: #D9D9D9;
    color: #474747;
    /* left: 00px; */
    right: 0px;
    z-index: 1;
}
.signup:hover{
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