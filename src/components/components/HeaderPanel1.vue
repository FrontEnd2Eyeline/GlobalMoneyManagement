<template>
    <el-container>
      <div>
        <el-row :gutter="8">
          <el-col :lg="4" :xl="4">
            <img src="../../assets/Imgs/LogoText.png" class="LogoGMM">
          </el-col>
          <el-col :lg="12" :xl="12" class="espacio">
            &nbsp;
          </el-col>
          <el-col :lg="2" :xl="2">
            <p>
              Membresia
            </p>
          </el-col>
          <el-col :lg="2" :xl="2">
            <p>
              Registro
            </p>
          </el-col>
          <el-col :lg="2" :xl="2">
            <p>
              Contacto
            </p>
          </el-col>
          <el-col :lg="2" :xl="2">
            <el-button @click="logout">LogOut</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="8">
          <el-col :lg="20" class="espacio">
            &nbsp;
          </el-col>
          <el-col :lg="4">
            <p>
              Actualizar datos
            </p>
          </el-col>
        </el-row>
      </div>


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
  p{
    text-align: center;
  }
</style>
