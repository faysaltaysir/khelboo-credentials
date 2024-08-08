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
                <router-link to="/khelboo-credentials/login"><button class="btn login">Log In</button></router-link>
                <router-link to="/khelboo-credentials/signup"><button class="btn signup">Sign Up</button></router-link>
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
    position: relative;
    left: 10px;
    z-index: 2;
    color: #FFF;
}
.signup{
    background-color: #D9D9D9;
    color: #474747;
    position: relative;
    right: 10px;
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