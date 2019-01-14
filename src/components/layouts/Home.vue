<template>
  <div id="app">
    <div class="login-box">
      <div class="logo">
      </div>
      <div class="card">
        <div class="body">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Principal Layout'
      }
    }

  }
</script>
