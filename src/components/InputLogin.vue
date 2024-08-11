<template>
    <div class="inputs-section-box">

        <div class="especific-input-section">
            <p>Email/Phone Number</p>
            <input type="text" name="phone" id="phone" class="input-text input-box-style">
        </div>
        <div class="especific-input-section">
            <p>Password</p>
            <input type="password" name="password" id="password" class="input-text input-box-style">
        </div>

        <div class="pass-rem-forget-div">
            <div class="remember-me-div">
                <input type="checkbox" name="remember" id="remember" class="check-box">
                <label for="remember" class="check-box">Remember me</label>
            </div>
            <div class="forget-pass-div">
                <a href="">Forget Password?</a>
            </div>
        </div> 
        <div class="button-holding-box">
            <router-link to="/khelboo-credentials/otp" class="button-style signup-login-main-button">Log In</router-link> 
        </div>

    </div> 

</template>
    
<style scoped>
    .remember-me-div{
        display: flex;
    }
    .remember-me-div .check-box{
        cursor: pointer;
        padding-left: 3px;
    }
    .remember-me-div .check-box:hover{
        opacity: 0.7;
        cursor: pointer;
    }
    .forget-pass-div a{
        color: red;
        text-decoration: none;
        cursor: pointer;
    }
    .forget-pass-div a:hover{
        color: black;
    }
    .pass-rem-forget-div{
        display: flex;
        justify-content: space-between;
        font-size: 0.8rem;
    }
    
    
</style>

<script>
    export default{
    
    }
</script>