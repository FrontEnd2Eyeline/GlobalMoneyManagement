<template>
  <div>
    <label>Hola</label>

  </div>


</template>

<script>
  import AuthUser from '@/services/AuthUser'

  export default {
    created () {
      this.$store.commit('SET_LAYOUT', 'home-layout')
      console.log(AuthUser.isLogged())
      if (!AuthUser.isLogged()) {
        this.$router.replace({name: 'login'})
      }
    }
  }
</script>

<style scoped>

</style>
