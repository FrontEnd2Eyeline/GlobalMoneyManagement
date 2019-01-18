<template>
    <el-container class="backMenu">
      <el-main>
        <div>
          <el-row>
            <el-col class="espacio" :lg="2">
              &nbsp;
            </el-col>
            <el-col :lg="2">
              <img src="../../assets/Imgs/logo_GMM.png" class="logoGMM hidden-md-and-down">
            </el-col>
            <el-col :span="2">
              <div>
                <p class="colorMenu">
                  LOGIN
                </p>
              </div>
            </el-col>
            <el-col :lg="2">
              <div>
                <p class="colorMenu">
                  SIGNUP
                </p>
              </div>
            </el-col>
            <el-col class="espacio" :lg="2">
              <div>
                &nbsp;
              </div>
            </el-col>
            <el-col :lg="2">
              <div>
                <p class="colorMenu">
                  INICIO
                </p>
              </div>
            </el-col>
            <el-col :lg="2">
              <div>
                <p class="colorMenu">
                  LEGALES
                </p>
              </div>
            </el-col>
            <el-col :lg="2">
              <div>
                <p class="colorMenu">
                  NOTICIAS
                </p>
              </div>
            </el-col>
            <el-col :lg="2">
              <p class="colorMenu">
                FEEDBACK
              </p>
            </el-col>
            <el-col :lg="2">
              <p class="colorMenu">
                CONTACTO
              </p>
            </el-col>
            <el-col :lg="2">
              <div>
                <p class="colorMenu">
                  ESPAÑOL
                </p>
              </div>
            </el-col>
            <el-col :lg="2" class="espacio">
              <div>
                &nbsp;
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
</template>

<script>
    export default {
      name: 'Menu'
    }
</script>

<style scoped>

  /*Background*/

  .backMenu{
    background: rgba(0,0,0,0.62);
    background: -moz-linear-gradient(left, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.62) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(0,0,0,0.62)), color-stop(100%, rgba(0,0,0,0.62)));
    background: -webkit-linear-gradient(left, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.62) 100%);
    background: -o-linear-gradient(left, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.62) 100%);
    background: -ms-linear-gradient(left, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.62) 100%);
    background: linear-gradient(to right, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.62) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000', GradientType=1 );
  }

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
      width: 2.5em;
      margin: 0 auto;
      display: block;
    }
    .colorMenu{
      color: white !important;
      text-align: center;
    }
  }

  .espacio{
    visibility: hidden;
  }

</style>
