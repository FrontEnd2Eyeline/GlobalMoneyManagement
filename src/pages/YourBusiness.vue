<template>
  <el-container class="backHeader">
    <div class="martitle">

    </div>
    <div class="center martitle">
      <h2 class="fontTitulosW">Tu Negocio</h2>
    </div>
    <Icoins class="marPage"></Icoins>
    <el-main class="backWhite ">
      <div class="login-wrapper border border-light center backNegocio">
        <div class="padtitles">
          <h2 class="fontTitMain">Comienza a ganar comisiones con criptomonedas</h2>
          <p class="fontSizeTextFoo padtexttitles">Refiere a tus amigos utilizando el voz a voz, redes sociales, videos,
            entre
            otras herramientas. Recibe comisiones de acuerdo al plan adquirido por tu referido y aumenta tus
            ganancias de manera exponencial.</p>
        </div>
        <el-row :gutter="10">
          <el-col :span="4">
            <div class="">
              &nbsp;
            </div>
          </el-col>
          <el-col :span="8">
            <div class="marTexts">
              <h3 class="fontTitComisiones">
                Sistema de comisiones
              </h3>
              <p class="fontSizeTextComi">
                Nota 1: todo patrocinador debe tener un paquete activo al momento de referir un usuario a nuestra
                plataforma y todo está estructurado de acuerdo al plan de negocios donde este el patrocinador en plan
                amigos la comisión de ganancia funciona con seis referidos o más de su mismo plan donde su comisión será
                remunerada por un aumento en las ganancias de su paquete activo, se incrementará de un 10% al 15%
                mensual si uno de sus referidos se retira su plan volverá a la ganancia inicial del 10% de su cuenta
                activa.<br><br>

                Nota 2: Si un referido compra un paquete GMM PREMIUM el patrocinador recibirá un bono directo a su
                cuenta del 5% y una ganancia directa en su paquete activo del 12% sobre su balance activo.
              </p>
            </div>
          </el-col>

          <el-col  :span="8">
            <div class="padTexts mrg54">
              <div class="marTexts">
                <p class="fontSizeTextComi">
                  Nota 3: Si un referido compra un paquete GMM PLATINIUM el patrocinador recibirá un bono directo a su
                  cuenta del 7% y una ganancia directa en su paquete activo del 15% sobre su balance activo. <br><br>
                  Nota 4: todos los referidos del plan Negocios que incluye planes PREMIUM Y PLATINIUM, su duración debe
                  ser de un año o su cuenta será castigada con una penalidad directa del 12% de su saldo en el activo
                  menos el 5% al momento del retiro.
                </p>
              </div>
              <div>
                <img class="widthIcos" src="../assets/Icons/YourBusiness/icoBusiness.png">
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              &nbsp;
            </div>
          </el-col>
        </el-row>
      </div>

    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
  import Footer from '../components/components/Footer'
  import Icoins from '../components/components/Icoins'

  export default {
    name: 'YourBusiness',
    components: {Icoins, Footer}
  }
</script>
<style lang="scss" scoped>

  .el-textarea__inner {
    max-height: 96px !important;
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
  }

  .textareamax {
    max-height: 96px;

  }

  .el-main {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0px;
  }

  .el-footer {
    padding: 0px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }

  /* BackGround */

  .backHeader {
    background-image: url('../assets/Imgs/Fondo.jpg');
    background-repeat: no-repeat;
    background-attachment: inherit;
    background-position: center center;
    background-size: cover;
    padding: 0%;
  }

  .backNegocio {
    background-image: url('../assets/Imgs/YourBusiness/Tu_Negocio.jpg');
    background-repeat: no-repeat;
    /* background-attachment: inherit; */
    background-position: center;
    background-size: auto;
    padding: 0%;
  }

  .degrade {
    background: rgba(0, 28, 36, 0.9);
    background: -moz-linear-gradient(left, rgba(0, 28, 36, 0.9) 0%, rgba(0, 28, 36, 1) 0%, rgba(0, 195, 255, 1) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(0, 28, 36, 0.9)), color-stop(0%, rgba(0, 28, 36, 1)), color-stop(100%, rgba(0, 195, 255, 1)));
    background: -webkit-linear-gradient(left, rgba(0, 28, 36, 0.9) 0%, rgba(0, 28, 36, 1) 0%, rgba(0, 195, 255, 1) 100%);
    background: -o-linear-gradient(left, rgba(0, 28, 36, 0.9) 0%, rgba(0, 28, 36, 1) 0%, rgba(0, 195, 255, 1) 100%);
    background: -ms-linear-gradient(left, rgba(0, 28, 36, 0.9) 0%, rgba(0, 28, 36, 1) 0%, rgba(0, 195, 255, 1) 100%);
    background: linear-gradient(to right, rgba(0, 28, 36, 0.9) 0%, rgba(0, 28, 36, 1) 0%, rgba(0, 195, 255, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#001c24', endColorstr='#00c3ff', GradientType=1);
  }

  .backWhite {
    background: white;
  }

  .hei34 {
    height: 34em;
  }


  /*Textos*/

  .textRightWhi {
    text-align: right;
    color: white;
  }

  .textLeft {
    text-align: left;
  }

  .fontSizeTextFoo {
    font-size: 1.2em !important;
    color: black !important;
    text-align: right;
    padding-top: 2%;
  }

  .fontSizeTextComi {
    font-size: 1.2em !important;
    color: black !important;
    text-align: left;
    padding-top: 2%;
  }

  .fontTitulosW {
    font-size: 3.4em;
    color: #FFF;
    text-align: left;
    font-weight: bold;
    padding-top: 5%;
  }

  .fontTitMain {
    font-size: 2.4em;
    color: black;
    text-align: right;
    font-weight: bold;
    padding-top: 6%;
    line-height: 40px;
  }

  .fontTitComisiones {
    font-size: 2.4em;
    color: black;
    text-align: left;
    font-weight: bold;
    padding-top: 6%;
    line-height: 40px;
  }


  .fontInfo {
    font-size: 1.1em;
    color: black;
    text-align: left;
    padding-bottom: 2%;
    padding-left: 2%;
    padding-top: 2%;
  }

  .fontInfoDeg {
    font-size: 1.1em;
    color: white;
    text-align: right;
    padding-bottom: 2%;
    padding-left: 26%;
    padding-top: 2%;
  }

  /*Iconos*/

  .widthIcos {
    width: 70%;
  }

  /*Márgenes*/

  .mrg54{
    margin-top: 5.4%;
  }

  .marPage {
    margin-bottom: 5em;
  }

  .marBut10px {
    margin-bottom: 10px;
  }

  .righTMaIco {
    text-align: right;
  }

  .martitle {
    margin-top: 10em;
  }

  .marTexts {
    margin-top: 2em;
  }

  /*Paddings*/

  .padtitles {
    padding-right: 20%;
    padding-left: 22%;
  }

  .padtexttitles {
    padding-left: 50%;
  }

  .padTexts {
    padding: 8%
  }

  .padInfo {
    padding: 3%;
    padding-left: 3% !important;
    padding-right: 0px !important;
  }

  .center {
    text-align: center;
    margin: auto;
    display: block;
  }

</style>
