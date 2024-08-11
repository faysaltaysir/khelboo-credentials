<template>
    <div class="inputs">

        <div class="same">
            <p>Email/Phone Number</p>
            <input type="text" name="phone" id="phone" class="input-text input-box-style">
        </div>
        <div class="same">
            <p>Password</p>
            <input type="password" name="password" id="password" class="input-text input-box-style">
        </div>

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
        text-align: left;
    }
    .input-text{
        height: 55px;
    }
    .same{
        height: 81px;
        display: flex;
        flex-direction: column;
    }
    </style>
<script>
    export default{
    
    }
</script>