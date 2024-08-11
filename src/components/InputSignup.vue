<template>
<div class="inputs-section-box">
    <div class="especific-input-section">
        <p>Phone Number</p>
        <input type="text" name="phone" id="phone" class="input-box-style">
    </div>
    <div class="especific-input-section">
        <p>Password</p>
        <input type="password" name="password" id="password" class="input-box-style">
    </div>
    <div class="especific-input-section">
        <p>Confirm Password</p>
        <input type="password" name="confpass" id="confpass" class="input-box-style">
    </div>
    <div class="button-holding-box">
        <router-link to="/khelboo-credentials/otp" class="button-style signup-login-main-button">Sign Up</router-link>
    </div>
</div>    
</template>

<style scoped>
</style>
<script>
export default{

}
</script>