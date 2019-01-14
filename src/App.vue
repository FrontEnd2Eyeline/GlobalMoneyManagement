<template>
  <el-container id="app">

    <el-aside v-show="loginControl" width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item index="1-1">Option 1</el-menu-item>
            <el-menu-item index="1-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="1-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">Option4</template>
            <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>Navigator Two</template>
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item index="2-1">Option 1</el-menu-item>
            <el-menu-item index="2-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="2-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">Option 4</template>
            <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>Navigator Three</template>
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item index="3-1">Option 1</el-menu-item>
            <el-menu-item index="3-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="3-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">Option 4</template>
            <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>


    <el-container>

      <el-header v-show="loginControl" style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>Tom</span>
        <el-button @click="logout">LogOut</el-button>
      </el-header>

      <el-main>
        <component :is="layout"></component>
      </el-main>
    </el-container>

  </el-container>

</template>

<script>
  import AuthUser from '@/services/AuthUser'
  import TheLanguageSwitcher from '@/components/TheLanguageSwitcher'
  import LoginLayout from '@/components/layouts/Login'
  import HomeLayout from '@/components/layouts/Home'
  import RegisterLayout from '@/pages/Register'
  import Index from '@/pages/Index'
  import {mapState} from 'vuex'

  export default {
    mounted: function () {
      console.log('aut', AuthUser.isLogged())
      if (AuthUser.isLogged()) {
        this.loginControl = true
        console.log('cambió a true')
        console.log(this.loginControl)
      } else {
        this.loginControl = false
        console.log('cambió a false')
      }
      console.log(this.loginControl)
    },
    components: {
      TheLanguageSwitcher, LoginLayout, HomeLayout, RegisterLayout, Index
    },
    data () {
      return {
        loginControl: false
      }
    },
    computed: mapState(['layout']),
    created () {
    },
    methods: {
      logout () {
        localStorage.removeItem('access-token')
        localStorage.removeItem('user')
        AuthUser.user.serializeToken = ''
        this.loginControl = false
        this.$router.push(this.$route.query.replace || ({name: 'login'}))
        console.log(localStorage)
        console.log('token auth', window.localStorage)
      }
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
