<template>
    <!-- head -->
    <div class="head">
        <p><img src="./assets/logo-main.png" alt="" class="logo"></p>
        <p class="welcome">Welcome Back!</p>
        <p class="para">Enter your credential to access your account</p>
    </div>
    <!-- signup login -->
    <div class="btns">

        <router-link to="/khelboo-credentials/login" class="btn login" active-class="active">Log In</router-link>
        <router-link to="/khelboo-credentials/signup" class="btn signup" :class="isSignUpActive ? 'active' : ''">Sign Up</router-link>

    </div>
</template>
<style scoped>
    
</style>
<script>
export default{
    computed: {
    isSignUpActive() {
      return this.$route.path.includes('/khelboo-credentials/signup') || 
             this.$route.path.includes('/khelboo-credentials/otp');
    }
  }
}
</script>