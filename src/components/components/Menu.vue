<template>
    <el-container>
      <el-main>
        <div>
          <el-row gutter="20">
            <el-col :lg="3">
              <img src="../../assets/Imgs/logo_GMM.png" class="logoGMM">
            </el-col>
            <el-col :lg="3">
              <p class="colorMenu">
                LOGIN
              </p>
            </el-col>
            <el-col :lg="3">
              <p class="colorMenu">
                SIGN UP
              </p>
            </el-col>
            <el-col :lg="3">
              <p class="colorMenu">
                INICIO
              </p>
            </el-col>
            <el-col :lg="3">
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
            <!--<el-col :lg="3">-->
              <!--ESPAÑOL-->
            <!--</el-col>-->
          </el-row>
          <el-row>
            <el-col :span="4">
              <img src="../../assets/Imgs/logo_GMM.png" class="logoGMM">
            </el-col>
            <el-col :span="20">
              <el-tabs v-model="Menu" @tab-click="handleClick">
                <el-tab-pane label="LOGIN" name="first">
                  LOGIN
                </el-tab-pane>
                <el-tab-pane label="SIGN UP" name="second">
                  SIGN UP
                </el-tab-pane>
                <el-tab-pane label="INICIO" name="third">
                  INICIO
                </el-tab-pane>
                <el-tab-pane label="LEGALES" name="fourth">
                  LEGALES
                </el-tab-pane>
                <el-tab-pane label="NOTICIAS" name="fifth">
                  NOTICIAS
                </el-tab-pane>
                <el-tab-pane label="FEEDBACK" name="sixth">
                  FEEDBACK
                </el-tab-pane>
                <el-tab-pane label="CONTACTO" name="seventh">
                  CONTACTO
                </el-tab-pane>
                <el-tab-pane label="ESPAÑOL" name="eight">
                  ESPAÑOL
                </el-tab-pane>
              </el-tabs>
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
        name: "Menu"
    }
</script>

<style scoped>

  @media only screen and (max-width: 1200px){
    .logoGMM{
      width: 2.5em;
    }
    .colorMenu{
      color: #000 !important;
      text-align: left;
    }
  }

  @media only screen and (min-width: 1201px)  {
    .logoGMM{
      width: 2.5em;
      margin: 0 auto;
      display: block;
    }
    .colorMenu{
      color: #000 !important;
      text-align: center;
    }
  }

</style>
