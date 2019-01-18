<template>
    <el-container>
      <el-row :gutter="8">
        <el-col :span="4">
          <img src="../../assets/Imgs/LogoText.png" class="LogoGMM">
        </el-col>
        <el-col :span="12" class="espacio">
          &nbsp;
        </el-col>
        <el-col :span="2">
          Membresía
        </el-col>
        <el-col :span="2">
          Registro
        </el-col>
        <el-col :span="2">
          Contacto
        </el-col>
        <el-col :span="2">
          <el-button @click="logout">LogOut</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="8">
        <el-col :span="16" class="espacio">
          &nbsp;
        </el-col>
        <el-col :span="8">
          <p>
            Actualizar datos
          </p>
        </el-col>
      </el-row>
    </el-container>
</template>

<script>
    export default {
        name: "HeaderPanel1"
    }
</script>

<style scoped>
  .LogoGMM{
    margin: 0 auto;
    display: block;
  }
  .espacio{
    visibility: hidden;
  }
</style>
