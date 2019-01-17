<template>
    <el-container class="center">
      <el-main>
        <div>
          <el-row gutter="20">
            <el-col :lg="2">
              <img src="../../assets/Imgs/logo_GMM.png" class="logoGMM hidden-md-and-down">
            </el-col>
            <el-col :lg="2">
              <p class="colorMenu">
                LOGIN
              </p>
            </el-col>
            <el-col :lg="2">
              <p class="colorMenu">
                SIGNUP
              </p>
            </el-col>
            <el-col :lg="2">
              Espacio vacios
            </el-col>
            <el-col :lg="2">
              <p class="colorMenu">
                INICIO
              </p>
            </el-col>
            <el-col :lg="2">
              <p class="colorMenu">
                LEGALES
              </p>
            </el-col>
            <el-col :lg="3">
              <p class="colorMenu">
                NOTICIAS
              </p>
            </el-col>
            <el-col :lg="3">
              <p class="colorMenu">
                FEEDBACK
              </p>
            </el-col>
            <el-col :lg="3">
              <p class="colorMenu">
                CONTACTO
              </p>
            </el-col>
            <el-col :lg="3">
             <p class="colorMenu">
               ESPAÑOL
             </p>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <el-main>


      </el-main>
    </el-container>
</template>

<script>
    export default {
      name: 'Menu'
    }
</script>

<style scoped>

  @media only screen and (max-width: 1200px){
    .logoGMM{
      width: 3.8em;
      margin-left: -90%;
    }
    .colorMenu{
      color: white !important;
      text-align: left;
    }
  }

  @media only screen and (min-width: 1201px)  {
    .logoGMM{
      width: 3.8em;
      margin: 0 auto;
      display: block;
    }
    .colorMenu{
      color: white !important;
      text-align: center;
    }
  }

  .center{
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

</style>
