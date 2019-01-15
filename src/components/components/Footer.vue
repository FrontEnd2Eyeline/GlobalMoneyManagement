<template>
  <el-container>
    <el-row>
      <div class="backSectionFoot">
        <el-col :lg="8">
          <h1>
            Global Money Management
          </h1>
        </el-col>
        <el-col :lg="8">
          <p>
            Puedes abrir tu cuenta con un deposito de 0,1 BTC + 5% para trámites de operación. ¡Así de fácil!
          </p>
        </el-col>
        <el-col :span="8">
          <el-button class="btnRegister" size="medium"></el-button>
        </el-col>
      </div>
    </el-row>
    <el-row>
      <div class="backPrimary">
        <el-col :lg="6">
          <h5 class="fontTitFooter">
            GMM CLUB
          </h5>
          <ul class="pie">
            <li>
              Sobre Nosotros
            </li>
            <li>
              Divulgación
            </li>
            <li>
              Política
            </li>
            <li>
              Cumplimiento de la ley
            </li>
            <li>
              Responsabilidades
            </li>
          </ul>
        </el-col>
        <el-col :lg="6">
          <h5 class="fontTitFooter">
            AYUDAS
          </h5>
          <ul class="pie">
            <li>
              Feedback
            </li>
            <li>
              Contacto
            </li>
            <li>
              Noticias
            </li>
            <li>
              Matricula
            </li>
          </ul>
        </el-col>
        <el-col :lg="6">
          <h5 class="fontTitFooter">
            LEGALES
          </h5>
          <ul class="pie">
            <li>
              Términos y condiciones
            </li>
          </ul>
        </el-col>
        <el-col :lg="6">
          <el-container>
            <el-row>
              <el-col :span="24">
                Aqui va el logo de GMM
              </el-col>
            </el-row>
            <el-row>
              <el-col :xs="8" :sm="4" :md="4" :lg="8">
                Aqui va el logo de Facebook para GMM
              </el-col>
              <el-col :xs="8" :sm="4" :md="4" :lg="8">
                Aqui va el logo de Twitter para GMM
              </el-col>
              <el-col :xs="8" :sm="4" :md="4" :lg="8">
                Aqui va el logo de Instagram para GMM
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                Aqui va el logo de secure
              </el-col>
            </el-row>
          </el-container>
        </el-col>
      </div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="backSecundary">
          <p>
            Global Money Management, All Rights reserved - GMM CLUB LIMITED Gilmer Terrace, Wellington, 6011, Nueva Zelanda
          </p>
        </div>

      </el-col>
    </el-row>
  </el-container>
</template>



<style scoped>
  /*Fondos*/

  .backSectionFoot {
    /*background-image: url('../assets/GMM/Backgrounds/Foot2.png'); */
    background-repeat: initial;
    /* background-attachment: fixed; */
    background-position: center center;
    /* background-size: cover; */
  }

  .backPrimary{
    background: #161d44 !important
  }

  .backSecundary{
    background: #576289 !important
  }

  /*Botones*/

  .btnRegister{
    background: hsla(0, 0%, 100%, 0.500);
    color: white;
    border-radius: 12px;
    font-size: 1.5em;
  }

  /*Primary*/

  .pie{
    list-style-image: none;
  }
  .fontTitFooter{
    font-size: 1.3rem;
    color: #FFF;
    text-align: left;
    font-weight: bold;
    padding-left: 5%;
  }
</style>

<script>
  export default {
    name: "Footer"
  }
</script>
