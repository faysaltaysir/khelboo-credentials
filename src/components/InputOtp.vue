<template>
    <div class="inputs-otp-section">

            <div class="text-div">
                <p class="txt">OTP Fillup</p>
            </div>
        
            <div class="otp-box-section">

                <input type="text" class="otp-box">
                <input type="text" class="otp-box">
                <p class="otp-hipen">-</p>
                <input type="text" class="otp-box">
                <input type="text" class="otp-box">
        
            </div>
    </div>
    
    <div class="button-holding-box">
        <router-link to="/khelboo-credentials/login" class="button-style signup-login-main-button" active-class="active">Sign Up</router-link>
    </div>
    
</template>
<style scoped>


.text-div {
    padding: 0px 0px 10px 3px;
}

.inputs-otp-section {
    width: 100%;
    height: max-content;
    color: #433E3F;
    align-items: center;
    justify-content: space-between;
    margin-top: 100px;
    margin-bottom: 100px;
}

.otp-hipen {
    font-size: 1.5rem;
}

.otp-box-section {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.otp-box {
    border-radius: 5px;
    width: 19%;
    height: 55px;
    max-width: 100px;
    border: 1px solid #D9D9D9;
    padding-left: 10px;
    font-size: 2rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

</style>