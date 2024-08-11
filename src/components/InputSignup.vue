<template>
<div class="inputs">
    <div class="phone same">
        <p>Phone Number</p>
        <input type="text" name="phone" id="phone" class="input-box-style">
    </div>
    <div class="password same">
        <p>Password</p>
        <input type="password" name="password" id="password" class="input-box-style">
    </div>
    <div class="confirm same">
        <p>Confirm Password</p>
        <input type="password" name="confpass" id="confpass" class="input-box-style">
    </div>
    <div class="button-signup">
        <router-link to="/khelboo-credentials/otp" class="btn signup2">Sign Up</router-link>
    </div>
    
</div>    
</template>

<style scoped>

.same{
    height: 81px;
    display: flex;
    flex-direction: column;
}
.inputs{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
    width: 100%;
    height: max-content;
    text-align: left;
    color: #433E3F;
    font-size: 1rem;
    /* background-color: aqua; */
}


</style>
<script>
export default{

}
</script>