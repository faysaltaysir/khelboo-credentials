<template>
  <!-- <sign-up></sign-up> -->
  <router-view name="mainContent"></router-view>
  <footer-view></footer-view>
</template>
  
<script>
  import SignUp from './SignUp.vue';
  import FooterView from './components/FooterView.vue'

  export default {
    name: 'App',
    components: {
      SignUp,FooterView
      // FooterView
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  *{
      margin: 0px;
      /* background-color: burlywood; */
  }
  </style>
  