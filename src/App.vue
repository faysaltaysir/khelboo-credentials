<template>

  <div class="page-main-body poppins-regular">
    
    <router-view name="leftContent" class="router-view"></router-view>    
    
    <div class="input-credential-section">

      <head-button></head-button>
      <router-view name="subContent"></router-view>
      <extra-view></extra-view>
    
    </div>
    
    <router-view name="rightContent" class="router-view"></router-view>
  
  </div>

</template>

<script>
import ImageView from './components/ImageView.vue';
import HeadButton from './components/HeadButton.vue';
import InputSignup from './components/InputSignup.vue';
import ExtraView from './components/ExtraSection.vue'
export default {
  name: 'App',
  components: {
    ImageView, HeadButton, InputSignup, ExtraView
  }
}
</script>

<style scoped>


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