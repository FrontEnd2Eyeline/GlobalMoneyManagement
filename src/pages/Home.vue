<template>
  <div>
    <label>Hola</label>

  </div>


</template>

<script>
  import AuthUser from '@/services/AuthUser'
  import App from '@/App'

  export default {
    mounted: function () {
      console.log(AuthUser.isLogged())
      console.log('está logeado', App.loginControl)
      this.$store.commit('SET_LAYOUT', 'home-layout')
      if (!AuthUser.isLogged()) {
        this.$router.replace({name: 'login'})
      }
    },
    created () {

    },
    beforeDestroy () {

    }
  }
</script>

<style scoped>

</style>
