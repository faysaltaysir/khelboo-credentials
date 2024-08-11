<template>

  <div class="page-main-body">
    
    <router-view name="leftContent" class="view"></router-view>    
    
    <div class="page-right">

      <head-button></head-button>
      <router-view name="subContent"></router-view>
      <extra-view></extra-view>
    
    </div>
    
    <router-view name="rightContent" class="view"></router-view>
  
  </div>

  <!-- <footer-view></footer-view> -->
</template>

<script>
import FooterView from './components/FooterView.vue'
import ImageView from './components/ImageView.vue';
import HeadButton from './components/HeadButton.vue';
import InputSignup from './components/InputSignup.vue';
import ExtraView from './components/Extra.vue'
export default {
  name: 'App',
  components: {
     FooterView, ImageView, HeadButton, InputSignup, ExtraView
  }
}
</script>

<style>

.active{
  background-color: #FB8904;
  color: #FFF;
  z-index: 3;
}
.active:hover{
  background-color: #ffa33a;
  /* opacity: .9; */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0px;
  /* background-color: burlywood; */
  }
  @media (max-width: 700px){
    .view{
     display: none;
    }
    .page-main-body{
      justify-content: center;
    }
  }
</style>