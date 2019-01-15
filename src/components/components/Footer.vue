<template>
  <el-container>
    <el-footer>
      <el-row>
        <div class="backSectionFoot">
          <el-col :lg="8">
            <h1 class="fontTitFooter">
              Global Money Management
            </h1>
          </el-col>
          <el-col :lg="8">
            <p>
              Puedes abrir tu cuenta con un deposito de 0,1 BTC + 5% para trámites de operación. ¡Así de fácil!
            </p>
          </el-col>
          <el-col :lg="8">
            <el-button class="btnRegister" size="medium">
              CREA TU CUENTA
            </el-button>
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
              <li class="colorMenu">
                Sobre Nosotros
              </li>
              <li class="colorMenu">
                Divulgación
              </li>
              <li class="colorMenu">
                Política
              </li>
              <li class="colorMenu">
                Cumplimiento de la ley
              </li>
              <li class="colorMenu">
                Responsabilidades
              </li>
            </ul>
          </el-col>
          <el-col :lg="6">
            <h5 class="fontTitFooter">
              AYUDAS
            </h5>
            <ul class="pie">
              <li class="colorMenu">
                Feedback
              </li>
              <li class="colorMenu">
                Contacto
              </li>
              <li class="colorMenu">
                Noticias
              </li>
              <li class="colorMenu">
                Matricula
              </li>
            </ul>
          </el-col>
          <el-col :lg="6">
            <h5 class="fontTitFooter">
              LEGALES
            </h5>
            <ul class="pie">
              <li class="colorMenu">
                Términos y condiciones
              </li>
            </ul>
          </el-col>
          <el-col :lg="6">
            <el-container>
              <el-row>
                <el-col :span="24">
                  <img src="../../assets/Imgs/LogoText.png" class="icoGmmText" alt="">
                </el-col>
              </el-row>
              <el-row>
                <el-col :xs="8" :sm="4" :md="4" :lg="8">
                  <img src="../../assets/Imgs/icono_facebook.png" alt="" class="icoRedes">
                </el-col>
                <el-col :xs="8" :sm="4" :md="4" :lg="8">
                  <img src="../../assets/Imgs/icono_twitter.png" alt="" class="icoRedes">
                </el-col>
                <el-col :xs="8" :sm="4" :md="4" :lg="8">
                  <img src="../../assets/Imgs/icono_instagram.png" alt="" class="icoRedes">
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <img src="../../assets/Imgs/Look.png" alt="" class="icoBits">
                </el-col>
              </el-row>
            </el-container>
          </el-col>
        </div>
      </el-row>
      <el-row>
        <div class="backSecundary">
          <el-col :span="24">
            <p>
              Global Money Management, All Rights reserved - GMM CLUB LIMITED Gilmer Terrace, Wellington, 6011, Nueva Zelanda
            </p>
          </el-col>
        </div>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
  /*Fondos*/

  .backSectionFoot {
    background-image: url('../../assets/Imgs/fondo_espacio.png');
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
    list-style-type: none;
  }

  .colorMenu{
    color: #FFF !important;
  }

  .fontTitFooter{
    font-size: 1.3rem;
    color: #FFF;
    text-align: left;
    font-weight: bold;
    padding-left: 5%;
  }

  .fontSiz{
    color: white !important;
    font-size: 3em;
    text-align: center;
  }

  .fontSizecard2{
    font-size: 1.2em !important;
    color: white !important;
    text-align: center
  }

  a, a:hover{
    color: #FFF !important;
    text-decoration: none;
  }

  /*Imagenes*/

  .icoGmmText{
    width: 10em !important;
    margin: 0 auto;
    display: block;
  }

  .icoRedes{
    width: 2.5em !important;
    margin: 0 auto;
    display: block;
  }

  .icosBits{
    width: 10em;
    margin: 0 auto;
    display: block;
  }


</style>
