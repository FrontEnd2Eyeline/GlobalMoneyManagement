<template>
  <el-container class="backHeader">
    <div class="martitle">

    </div>
    <div class="center martitle">
      <h2 class="fontTitulosW">Feedback</h2>
    </div>
    <Icoins class="marPage"></Icoins>
    <el-main class="backWhite ">
      <div class="login-wrapper border border-light center">

        <el-row :gutter="10">
          <el-col :span="4">
            <div class="">
              &nbsp;
            </div>
          </el-col>
          <el-col class="backMain" :span="8">
            <div>
              <div>
                <h2 class="fontTitMain">Para nosotros es importante saber que piensas</h2>
              </div>
              <el-row class="marTexts">
                <el-col :md="24" :lg="24">
                  <div class="righTMaIco pad15Right">
                    <p class="fontSizeTextFoo">
                      Utilice el siguiente formulario para enviarnos sus comentarios. Leemos todos los comentarios
                      cuidadosamente, pero no podemos responder a cada presentación individualmente. Si proporciona su
                      dirección de correo electrónico, acepta que podamos comunicarnos con usted para comprender mejor
                      los comentarios que envió.
                    </p>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col class="degrade" :span="8">
            <div class="padTexts">
              <div>
                <img class="widthIcos" src="../assets/Icons/YourBusiness/icoBusiness.png">
              </div>
              <div class="marTexts">
                <div class="marBut10px">
                  <el-input placeholder="Tu nombre">
                  </el-input>
                </div>
                <div class="marBut10px">
                  <el-input placeholder="Tu correo electrónico">
                  </el-input>
                </div>
                <div class="textareamax">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: 4}"
                    placeholder="Tu mensaje"
                    maxlength="250"
                    v-model="textarea">
                  </el-input>
                </div>
              </div>
            </div>
            <div>
              <h2 class="textRightWhi">
                Enviar
              </h2>
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
  import Icoins from '../components/components/Icoins'
  import Footer from '../components/components/Footer'

  export default {
    name: 'Feedback',
    components: {Footer, Icoins}
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

  .backMain {
    background-image: url('../assets/Imgs/Contact/backWhiteContact.png');
    background-repeat: no-repeat;
    background-attachment: inherit;
    background-position: center center;
    background-size: cover;
    padding: 2.4%;
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
    text-align: left;
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

  .pad15Right{
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
