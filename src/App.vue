<template>

  <div class="page-main-body poppins-regular">
    <image-view :class="isImageLeft ? '' : 'imageActive'"></image-view>
    <div class="input-credential-section">

      <head-button @sendData="receiveData"></head-button>
      <component :is="activeComp" @sendData="receiveData"></component>
      <extra-view></extra-view>
    
    </div>
    <image-view :class="isImageLeft ? 'imageActive' : ''"></image-view>
    <!-- <router-view name="rightContent" class="router-view"></router-view> -->
  
  </div>

</template>

<script>
import InputOtp from './components/InputOtp.vue';
import ImageView from './components/ImageView.vue';
import HeadButton from './components/HeadButton.vue';
import InputSignup from './components/InputSignup.vue';
import ExtraView from './components/ExtraSection.vue'
import InputLogin from './components/InputLogin.vue';
export default {
  name: 'App',
  components: {
    ImageView, HeadButton, InputSignup, ExtraView,InputLogin,InputOtp
  },
  data(){
    return{
      // toggleValue: 'InputSignup',
      isImageLeft: true,
      receivedMessage: 'InputSignup'
    }
  },
  methods: {
    receiveData(data) {
      if(data == 'InputLogin'){
        this.isImageLeft = false; 
      }
      else if (data == 'InputSignup'){
        this.isImageLeft = true;
      }
      this.receivedMessage = data;
    }
  },
  computed: {
    activeComp() {
      return this.receivedMessage;
    }
  }
 
}
</script>

<style scoped>
.imageActive{
  display: none;
}

.page-main-body{
    margin-top: 5vw;
    padding-bottom: 5vw;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-around;
    padding: 3vw;
}

.input-credential-section{
    width: 426px;
    height: 820px;
    padding: 2vw;
    position: relative;

}
@media (max-width: 700px){
  .router-view{
    display: none;
  }
  .page-main-body{
    justify-content: center;
  }
}
</style>