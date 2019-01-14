<template>
  <div>
    <label>Hola</label>

  </div>


</template>

<script>
  import AuthUser from '@/services/AuthUser'
  import App from '@/App'

  export default {
    created () {
      console.log(App.loginControl)
      this.$store.commit('SET_LAYOUT', 'home-layout')
      if (!AuthUser.isLogged) {
        this.$router.replace({name: 'login'})
      }
    }
  }
</script>

<style scoped>

</style>
