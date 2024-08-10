<template>
    <div class="inputs">
        <div class="bind">
            <div class="text-div">
                <p class="txt">OTP Fillup</p>
            </div>
            <div class="otp-boxs">
                <input type="text" class="box">
                <input type="text" class="box">
                <p class="otp-hipen">-</p>
                <input type="text" class="box">
                <input type="text" class="box">
            </div>
        </div>
       
    </div>
    <div class="button-signup">
        <router-link to="/khelboo-credentials/login" class="btn signup2" active-class="active">Sign Up</router-link>
    </div>
    
</template>
<style scoped>
.bind {
    width: 100%;
    height: 85px;
    /* height: 100%; */
    /* background-color: blue; */
}

.text-div {
    padding: 0px 0px 10px 3px;
    display: flex;
}

.inputs {
    width: 100%;
    height: max-content;
    color: #433E3F;
    display: flex;
    /* padding-top: 20px; */
    align-items: center;
    justify-content: space-between;
    /* padding: 10px; */
    margin-top: 100px;
    margin-bottom: 100px;
}

.otp-hipen {
    font-size: 1.5rem;
}

.otp-boxs {
    width: 100%;
    height: max-content;
    display: flex;
    /* width: 100%; */
    /* background-color: rgb(207, 9, 9); */
    justify-content: space-between;
    align-items: center;
    /* padding: 0px 2vw; */
    /* background-color: aqua; */
}

.box {
    border-radius: 5px;
    width: 19%;
    height: 55px;
    max-width: 100px;
    border: 1px solid #D9D9D9;
    padding-left: 10px;
    font-size: 2rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    
}

.box:focus {
  border-color: #007bff; 
  box-shadow: 0 0 8px 2px rgba(0, 123, 255, 0.7); 
  outline: none; 
}

@media (max-width: 700px) {
    /* .otp-boxs{
            width: 80%;
            background-color: red;
        }
        .box{
            width: 80px;
        } */
}
</style>