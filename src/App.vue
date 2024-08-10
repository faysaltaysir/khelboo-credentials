<template>
  <!-- <router-view name="subContent"></router-view> -->
  <!-- <sign-up></sign-up> -->
  <!-- <router-view name="mainContent"></router-view> -->

  <div class="page-main-body">
    <!-- <image-view></image-view> -->
    <router-view name="leftContent"></router-view>    
    <div class="page-right">
      <head-button></head-button>
      <router-view name="subContent"></router-view>
      <!-- <input-signup></input-signup> -->
      <extra-view></extra-view>
    </div>
    <router-view name="rightContent"></router-view>
  </div>

  <footer-view></footer-view>
</template>

<script>
import SignUp from './SignUp.vue';
import FooterView from './components/FooterView.vue'
import ImageView from './components/ImageView.vue';
import HeadButton from './components/HeadButton.vue';
import InputSignup from './components/InputSignup.vue';
import ExtraView from './components/Extra.vue'
export default {
  name: 'App',
  components: {
    SignUp, FooterView, ImageView, HeadButton, InputSignup, ExtraView
    // FooterView
  }
}
</script>

<style>
.active{
  background-color: #FB8904;
  color: #FFF;
  z-index: 3;
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
</style>