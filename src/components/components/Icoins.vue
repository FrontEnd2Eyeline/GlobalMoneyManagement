<template>
  <el-container>
    <el-main>
      <div>
        <el-row>
          <el-col :md="4" :lg="6">
            <div>
              &nbsp;&nbsp;
            </div>
          </el-col>
          <el-col :xm="24" :sm="12" :md="4" :lg="3">
            <div class="center ">
              <img class="widthIcos" src="../../assets/Imgs/Header/iconoBIT.png">
              <br>
              <div class="mrgTop">
                <h3 class="fontTitValorBitcoin">
                  $4,479.09
                </h3>
                <br>
                <h4 class="fontValorBitcoin">
                  BITCOIN
                </h4>
              </div>
            </div>
          </el-col>
          <el-col :xm="24" :sm="12" :md="4" :lg="3">
            <div class="center ">
              <img class="widthIcos" src="../../assets/Imgs/Header/iconoMONERO.png">
              <br>
              <div class="mrgTop">
                <h3 class="fontTitValorBitcoin">
                  $67.94
                </h3>
                <br>
                <h4 class="fontValorBitcoin">
                  MONEIRO
                </h4>
              </div>
            </div>
          </el-col>
          <el-col :xm="24" :sm="12" :md="4" :lg="3">
            <div class="center">
              <img class="widthIcos" src="../../assets/Imgs/Header/iconoZCASH.png">
              <br>
              <div class="mrgTop">
                <h3 class="fontTitValorBitcoin">
                  $81.25
                </h3>
                <br>
                <h4 class="fontValorBitcoin">
                  ZCASH
                </h4>
              </div>
            </div>
          </el-col>
          <el-col :xm="24" :sm="12" :md="4" :lg="3">
            <div class="center">
              <img class="widthIcos" src="../../assets/Imgs/Header/iconoETHEREUM.png">
              <br>
              <div class="mrgTop">
                <h3 class="fontTitValorBitcoin">
                  $130.92
                </h3>
                <br>
                <h4 class="fontValorBitcoin">
                  ETHERIUM
                </h4>
              </div>
            </div>
          </el-col>
          <el-col :md="4" :lg="6">
            <div>
              &nbsp;&nbsp;
            </div>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>


<style scoped>

  /*Texto*/

  .fontTitValorBitcoin {
    font-size: 2rem;
    color: #FFF;
    text-align: center;
    font-weight: bold;
  }

  .fontValorBitcoin {
    font-size: 1.2rem;
    color: #FFF;
    text-align: center;
    padding-bottom: 2%;
  }

  .fontTitulosW {
    font-size: 3.4em;
    color: #FFF;
    text-align: center;
    font-weight: bold;
    padding: 5%;
  }

  .fontTitValorBitcoin {
    font-size: 1.5em;
    color: #FFF;
    text-align: center;
    font-weight: bold;
  }

  .fontValorBitcoin {
    font-size: 0.9em;
    color: #FFF;
    text-align: center;
    padding-bottom: 2%;
    margin-top: -8%;
  }

  .center {
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

  /*Animación*/
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

  /*ImgIcons*/

  .widthIcos {
    width: 80%;
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



  /*Margenes*/
  .mrgTop{
    margin-top: 1em;
  }

</style>

<!--<script src="//unpkg.com/vue/dist/vue.js"></script>-->
<!--<script src="//unpkg.com/element-ui@2.4.11/lib/index.js"></script>-->

<script>
  export default {
    name: 'Icoins'
  }
</script>


