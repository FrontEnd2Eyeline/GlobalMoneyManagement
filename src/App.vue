<template>
  <component :is="layout"></component>

</template>

<script>
  import TheLanguageSwitcher from '@/components/TheLanguageSwitcher'
  import LoginLayout from '@/components/layouts/Login'
  import HomeLayout from '@/components/layouts/Home'
  import RegisterLayout from '@/pages/Register'
  import UserPanelLayout from '@/pages/UserPanel'
  import {mapState} from 'vuex'

  export default {

    components: {
      TheLanguageSwitcher, LoginLayout, HomeLayout, RegisterLayout, UserPanelLayout
    },
    data () {
      return {
        loginControl: false
      }
    },
    computed: mapState(['layout']),
    created () {
    }
  }
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
