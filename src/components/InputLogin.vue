<template>
    <div class="inputs">
        <p>Email/Phone Number</p>
        <input type="text" name="phone" id="phone" class="input-text input-box-style">
        <p>Password</p>
        <input type="text" name="password" id="password" class="input-text input-box-style">
        <div class="pass-rem">
            <div class="rem">
                <input type="checkbox" name="remember" id="remember" class="check">
                <label for="remember" class="check">Remember me</label>
            </div>
            <div class="forget">
                <a href="">Forget Password?</a>
            </div>
        </div> 
        <div class="button-signup">
            <router-link to="/khelboo-credentials/otp" class="btn signup2">Log In</router-link> 
        </div>
    </div>    

    </template>
    
    <style scoped>
    .rem{
        display: flex;
    }
    .rem .check{
        cursor: pointer;
    }
    .forget a{
        color: red;
        text-decoration: none;
        cursor: pointer;
    }
    .forget a:hover{
        color: black;
    }
    .pass-rem{
        display: flex;
        justify-content: space-between;
        font-size: 0.8rem;
    }
    .inputs{
        width: 100%;
        height: max-content;
        text-align: left;
        color: #433E3F;
    }
    .input-text{
        width: 100%;
        height: 55px;
        border-radius: 7px;
        border: 1px solid #D9D9D9;
        margin-bottom: 10px;
        font-size: 1.5rem;
    }
    </style>
<script>
    export default{
    
    }
</script>