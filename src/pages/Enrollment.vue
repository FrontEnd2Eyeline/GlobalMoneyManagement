<template>
  <el-container class="backHeaderwe">
    <Menu></Menu>
    <div class="martitle">
    </div>
    <div class="center martitle">
      <h2 class="fontTitulosW">Matrícula</h2>
    </div>
    <Icoins class="marPage"></Icoins>
    <el-main class=" backMatricula">
      <el-row :gutter="10">
        <el-col :span="4">
          <div>
            &nbsp;
          </div>
        </el-col>
        <el-col :span="16">
          <div>
            <div>
              <h2 class="fontTitMain">Tasas de honorarios de GMMCLUB</h2>
              <p class="fontSizeTextFoo">
                Tarifas transacciones
              </p>
              <p class="fontSizeTextFoo">
                Recargo de moneda dígital / tasa de retirada
              </p>
              <p class="fontSizeTextFoo">
                Depósito 5%
              </p>
              <p class="fontSizeTextFoo">
                Retiro 5%
              </p>
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <div>
            &nbsp;
          </div>
        </el-col>
      </el-row>
      <div class="login-wrapper border border-light center marTexts">


      </div>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>


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

  .backHeaderwe {
    background-image: url('../assets/Imgs/backRed.jpg');
    background-repeat: no-repeat;
    background-attachment: inherit;
    background-position: center center;
    background-size: cover;
    padding: 0%;
  }

  .backHeader {
    background-image: url('../assets/Imgs/Fondo.jpg');
    background-repeat: no-repeat;
    background-attachment: inherit;
    background-position: center center;
    background-size: cover;
    padding: 0%;
  }

  .backMatricula {
    background-image: url('../assets/Imgs/Matricula/bcMatricula.jpg');
    background-repeat: no-repeat;
    background-attachment: inherit;
    background-position: center center;
    background-size: cover;
    padding: 2.4%;
  }

  .degrade {
    background: rgba(240,20,20,0.96);
    background: -moz-linear-gradient(left, rgba(240,20,20,0.96) 0%, rgba(0,0,0,0.96) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(240,20,20,0.96)), color-stop(100%, rgba(0,0,0,0.96)));
    background: -webkit-linear-gradient(left, rgba(240,20,20,0.96) 0%, rgba(0,0,0,0.96) 100%);
    background: -o-linear-gradient(left, rgba(240,20,20,0.96) 0%, rgba(0,0,0,0.96) 100%);
    background: -ms-linear-gradient(left, rgba(240,20,20,0.96) 0%, rgba(0,0,0,0.96) 100%);
    background: linear-gradient(to right, rgba(240,20,20,0.96) 0%, rgba(0,0,0,0.96) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f01414', endColorstr='#000000', GradientType=1 );
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
    text-align: center;
    line-height: 30px;
    padding-top: 2%;
  }

  .fontTitulosW {
    font-size: 3.4em;
    color: #FFF;
    text-align: left;
    font-weight: bold;
    padding: 5%;
  }

  .fontTitMain {
    font-size: 3.4em;
    color: black;
    text-align: center;
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

  .pad15Right {
    padding-right: 16%;
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

<script>
  import Icoins from '../components/components/Icoins'
  import Footer from '../components/components/Footer'
  import Menu from '../components/components/Menu'

export default {
    name: 'Enrollment',
    components: {Menu, Footer, Icoins}
  }
</script>
