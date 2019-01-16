<template>
    <el-container>
      <div>
        <el-aside>
          <el-menu>
            <el-menu-item-group>
              <el-menu-item index="1">
                <img src="../../assets/Imgs/logo_GMM.png" class="logoGMM">
              </el-menu-item>
              <el-menu-item index="2">
                LOGIN &nbsp;|
              </el-menu-item>
              <el-menu-item index="3">
                SIGN UP
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group justify="end">
              <el-menu-item index="4">
                INICIO
              </el-menu-item>
              <el-menu-item index="5">
                LEGALES
              </el-menu-item>
              <el-menu-item index="6">
                NOTICIAS
              </el-menu-item>
              <el-menu-item index="7">
                FEEDBACK
              </el-menu-item>
              <el-menu-item index="8">
                CONTACTO
              </el-menu-item>
              <el-menu-item index="9">
                ESPAÑOL
              </el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </el-aside>
      </div>
    </el-container>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>
  .logoGMM{
    width: 2.5em;
  }
</style>
