<template>
<div class="inputs">
    <div class="phone same">
        <p>Phone Number</p>
        <input type="text" name="phone" id="phone">
    </div>
    <div class="password same">
        <p>Password</p>
        <input type="text" name="password" id="password">
    </div>
    <div class="confirm same">
        <p>Confirm Password</p>
        <input type="text" name="confpass" id="confpass">
    </div>
    
</div>    
</template>

<style scoped>
.same{
    height: 81px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* align-items: end; */

/* background-color: aqua; */
}
.inputs{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 285px;
    text-align: left;
    color: #433E3F;
    font-size: 1rem;
}
input{
    width: 100%;
    height: 55px;
    border-radius: 7px; 
    border: 1px solid #D9D9D9;
    margin-bottom: 10px;
    font-size: 1.5rem;
    margin-top: 5px;
}
</style>
<script>
export default{

}
</script>