<template>
  <el-container>
    <el-footer>
      <div class="backSectionFoot">
        <el-row>
          <el-col :span="24">
            &nbsp;
          </el-col>
        </el-row>
        <el-row gutter="20" class="center2">
          <div class="center">
            <el-col :md="24" :lg="8">
              <h1 class="fontSiz">
                Global Money Management
              </h1>
            </el-col>
            <el-col :md="24" :lg="8">
              <div>
                <p class="fontSizecard2">
                  Puedes abrir tu cuenta con un deposito de 0,1 BTC + 5% para trámites de operación. ¡Así de fácil!
                </p>
              </div>
            </el-col>
            <div>
              <el-col :md="24" :lg="8">
                <div class="center2">
                  <el-button class="btnRegister center" size="medium">
                    CREA TU CUENTA
                  </el-button>
                </div>
              </el-col>
            </div>
          </div>
        </el-row>
        <el-row>
          <el-col :span="24">
            &nbsp;
          </el-col>
        </el-row>
      </div>
      <div class="backPrimary">
        <el-row>
          <el-col :span="24">
            &nbsp;
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <div>
            <el-col :lg="2">
              &nbsp;
            </el-col>
            <el-col :md="24" :lg="5">
              <h5 class="fontTitFooter">
                GMM CLUB
              </h5>
              <ul class="pie">
                <li>
                  &nbsp;
                </li>
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
                <li>
                  &nbsp;
                </li>
              </ul>
            </el-col>
            <el-col :md="24" :lg="5">
              <h5 class="fontTitFooter">
                AYUDAS
              </h5>
              <ul class="pie">
                <li>
                  &nbsp;
                </li>
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
                <li>
                  &nbsp;
                </li>
              </ul>
            </el-col>
            <el-col :md="24" :lg="5">
              <h5 class="fontTitFooter">
                LEGALES
              </h5>
              <ul class="pie">
                <li>
                  &nbsp;&nbsp;
                </li>
                <li class="colorMenu">
                  Términos y condiciones
                </li>
                <li>
                  &nbsp;
                </li>
              </ul>
            </el-col>
            <el-col :md="24" :lg="5">
              <h5>
                &nbsp;
              </h5>
              <ul class="pie">
                <li>
                  <img src="../../assets/Imgs/LogoText.png" class="icoGmmText" alt="">
                </li>
                <li>
                  <div>
                    <el-container>
                      <div>
                        <el-row>
                          <div>
                            <el-col :span="24">
                              &nbsp;
                            </el-col>
                          </div>
                        </el-row>
                      </div>
                      <div>
                        <el-row>
                          <div class="center2">
                            <el-col :xs="8" :sm="4" :md="4" :lg="8">
                              <img src="../../assets/Imgs/icono_facebook.png" alt="" class="icoRedes">
                            </el-col>
                            <el-col :xs="8" :sm="4" :md="4" :lg="8">
                              <img src="../../assets/Imgs/icono_twitter.png" alt="" class="icoRedes">
                            </el-col>
                            <el-col :xs="8" :sm="4" :md="4" :lg="8">
                              <img src="../../assets/Imgs/icono_instagram.png" alt="" class="icoRedes">
                            </el-col>
                          </div>
                        </el-row>
                      </div>
                      <div>
                        <el-row>
                          <div>
                            <el-col :span="24">
                              &nbsp;
                            </el-col>
                          </div>
                        </el-row>
                      </div>
                    </el-container>
                  </div>
                </li>
                <li>
                  <img src="../../assets/Imgs/Look.png" alt="" class="icoBits">
                </li>
              </ul>
            </el-col>
            <el-col :lg="2">
              &nbsp;
            </el-col>
          </div>
        </el-row>
        <el-row>
          <el-col :span="24">
            &nbsp;
          </el-col>
        </el-row>
      </div>

      <div class="backSecundary">
        <el-row>
          <div>
            <el-col :span="24">
              <p class="copyright">
                Global Money Management, All Rights reserved - GMM CLUB LIMITED Gilmer Terrace, Wellington, 6011, Nueva Zelanda
              </p>
            </el-col>
          </div>
        </el-row>
      </div>
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
    /* background-size: cover; */
  }

  .backPrimary{
    background: #161d44 !important;
  }

  .backSecundary{
    background: #576289 !important;
  }
  /*Centrado*/

  .center{
    display: block !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .center2{
    display: flex !important;
    justify-content: center !important;
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

  /*textos*/

  @media only screen and (max-width: 576px){

    .fontTitFooter{
      font-size: 1.3rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
      padding-left: 5%;
    }

    .fontSiz{
      color: white !important;
      font-size: 2.6em;
      text-align: center;
      line-height: 50px;
    }

    .fontSizecard2{
      font-size: 1.2em !important;
      color: white !important;
      text-align: center;
    }

    .copyright{
      color: #FFF !important;
      text-align: center !important;
    }

  }

  @media only screen and (min-width: 577px) and (max-width: 992px){

    .fontTitFooter{
      font-size: 1.3rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
    }

    .fontSiz{
      color: white !important;
      line-height: 50px;
      font-size: 3em;
      text-align: center;
    }

    .fontSizecard2{
      font-size: 1.5em !important;
      line-height: 50px;
      color: white !important;
      text-align: center;
    }

    .copyright{
      color: #FFF !important;
      text-align: center !important;
    }

  }

  @media only screen and (min-width: 993px){

    .fontTitFooter{
      font-size: 1.7rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
    }

    .fontSiz{
      color: white !important;
      font-size: 3.5em;
      line-height: 50px;
      text-align: center;
      padding: 5%;
    }

    .fontSizecard2{
      font-size: 1.8em!important;
      line-height: 30px;
      color: white !important;
      text-align: left;
      padding: 5%;
    }

    .copyright{
      color: #FFF !important;
      text-align: center !important;
    }
  }

  a, a:hover{
    color: #FFF !important;
    text-decoration: none;
  }

  /*Imagenes*/

  @media only screen and (max-width: 576px){

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

    .icoBits{
      width: 10em;
      margin: 0 auto;
      display: block;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 992px){

    .icoGmmText{
      width: 12em !important;
    }

    .icoRedes{
      width: 3.5em !important;
    }

    .icoBits{
      width: 12em;
    }
  }

  @media only screen and (min-width: 993px){

    .icoGmmText{
      width: 12em !important;
    }

    .icoRedes{
      width: 3.7em !important;
      margin: 0 auto;
      display: block;
    }

    .icoBits{
      width: 12em !important;
    }
  }


</style>
