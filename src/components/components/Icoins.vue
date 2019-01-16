<template>
  <el-container>
    <el-main>
      <div>
        <el-row :gutter="10">
          <el-col :xm="24" :sm="12" :md="4" :lg="6" >
            <div >
              &nbsp;
            </div>
          </el-col>
          <el-col :xm="24" :sm="12" :md="4" :lg="3" >
            <div class="center ">
              <img class="widthIcos" src="../../assets/Imgs/Header/iconoBIT.png" >
              <br>
              <h3 class="fontTitValorBitcoin">
                $4,479.09
              </h3>
              <br>
              <h4 class="fontValorBitcoin">
                BITCOIN
              </h4>
            </div>
          </el-col>
          <el-col :xm="24" :sm="12" :md="4" :lg="3" >
            <div class="center ">
              <img class="widthIcos" src="../../assets/Imgs/Header/iconoMONERO.png" >
              <br>
              <h3 class="fontTitValorBitcoin">
                $67.94
              </h3>
              <br>
              <h4 class="fontValorBitcoin">
                MONEIRO
              </h4>
            </div>
          </el-col>
          <el-col :xm="24" :sm="12" :md="4" :lg="3" >
            <div class="center">
              <img class="widthIcos" src="../../assets/Imgs/Header/iconoZCASH.png" >
              <br>
              <h3 class="fontTitValorBitcoin">
                $81.25
              </h3>
              <h4 class="fontValorBitcoin">
                ZCASH
              </h4>
            </div>
          </el-col>
          <el-col :xm="24" :sm="12" :md="4" :lg="3" >
            <div class="center">
              <img class="widthIcos" src="../../assets/Imgs/Header/iconoETHEREUM.png" >
              <br>
              <h3 class="fontTitValorBitcoin">
                $130.92
              </h3>
              <h4 class="fontValorBitcoin">
                ETHERIUM
              </h4>
            </div>
          </el-col>
          <el-col :xm="24" :sm="12" :md="4" :lg="6" >
            <div >
              &nbsp;
            </div>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>


<style scoped>

/*Texto*/

    .fontTitValorBitcoin{
        font-size: 2rem;
        color: #FFF;
        text-align: center;
        font-family: Avenir;
        font-weight: bold;
    }

    .fontValorBitcoin{
        font-size: 1.2rem;
        color: #FFF;
        text-align: center;
        font-family: Avenir;
        padding-bottom: 2%;
    }

  .center{
    text-align: center;
    margin: auto;
    display: block;
  }

  .contenedor {
    position: relative;
    display: inline-block;
    text-align: center;
  }

  .texto-encima {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .centrado {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }


  /*Animación2*/
  .flip {
    position: relative;
    transition: all 1s ease;
    transform: perspective(600px);
    transform-origin: 100% 50%;
    transform-style: preserve-3d;
  }

  .flip:hover {
    transform: perspective(600px) rotateY(-180deg) translateX(100%);
  }

  .flip .flip-1,
  .flip .flip-2 {
    position: absolute;
    backface-visibility: hidden;
  }

  .flip .flip-2 {
    transform: rotateY(-180deg);
  }

  /*Animación*/

  .aButton:hover {
    transition: 1.0s ease all;
    -moz-transition: 1.0s ease all;
    -webkit-transition: 1.0s ease all;
    background-color: #ffd700;
    color: #696969;
  }

  .shadow {
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  }

  .rotateY {
    cursor: pointer;
  }

  .rotateY:hover {
    transform: rotateY(360deg);
    -moz-transform: rotateY(360deg);
    -webkit-transform: rotateY(360deg);
    transform-origin: center;
    -moz-transform-origin: center;
    -webkit-transform-origin: center;

    transition: transform 1.0s ease all;
    -moz-transition: -moz-transform 1.0s ease all;
    -webkit-transition: -webkit-transform 1.0s ease all;
  }

  /*ImgIcons*/

  .widthIcos {
    width: 60%;
  }

  .widthIcosFlip {
    width: 7.4em;
    max-width: 200% !important;
    position: absolute;
    top: 25%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .fontTitulosW {
    font-size: 3.25rem;
    color: #FFF;
    text-align: center;
    font-weight: bold;
    padding: 5%;
  }

  .fontTitValorBitcoin {
    font-size: 1.2em;
    color: #FFF;
    text-align: center;
    font-family: Avenir;
    font-weight: bold;
  }

  .fontValorBitcoin {
    font-size: 0.7em;
    color: #FFF;
    text-align: right;
    font-family: Avenir;
    padding-bottom: 2%;
    margin-top: -8%;
  }

</style>

<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.4.11/lib/index.js"></script>

<script>
  export default {
    // name: "Icoins"
  }
</script>


