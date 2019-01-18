<template>
  <el-container class="backHeader">
    <Menu></Menu>
    <div class="center martitle">
      <h2 class="fontTitulosW">
        Deposito & Reitro
      </h2>
      <Icons class="marPage"></Icons>
      <el-main>
        <el-row>
          <el-col :span="24">
            &nbsp;
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :md="2" :lg="4">
            &nbsp;
          </el-col>
          <el-col :md="20" :lg="16">
            <div>
              <h2 class="fontTitDeposito">
                1. Proporcione información correcta y precisa
              </h2>
              <ul class="fontDeposito1">
                <li>
                  <p>
                    Verifiación KYC:
                  </p>
                  <p class="fontDeposito2" style="padding-left: 0 !important;">
                    Proporcione su información en inglés. Hemos encontrado que hay nombres de cuenta proporcionados en chino, que no se aceptan para el proceso de
                    depósito y retiro. Si proporcionó el nombre de la cuenta china durante la verificación de identidad, comuníquese con nuestro servicio de atención
                    al cliente para modificarla. Después de eso, elimine su wallet de GMM y vuelva a vincular.
                  </p>
                </li>
                <li>
                  <p>
                    Información Wallet
                  </p>
                  <p class="fontDeposito2" style="padding-left: 0 !important;">
                    Proporcione todos los dígitos de forma correcta de la wallet de su preferencia de la opción copiar y pegar. Para evitar billeteras que no sean de su propiedad
                    nosotros recomendamos el uso de la billetera www.eyewallet.com ya que esta nos da todos los servicios requeridos para la satisfacción del usuario.
                  </p>
                </li>
              </ul>
              <h2 class="fontTitDeposito">
                2. Tarifas de servicio
              </h2>
              <p class="fontDeposito2" style="padding-left: 3% !important;">
                Se cobran tarifas por retiro, que incluyen:
              </p>
              <ul class="fontDeposito1">
                <li>
                  5% de GMM de su saldo en retiro y será cargado desde el saldo de su cuenta a la wallet
                </li>
                <li>
                  5% de GMM de su saldo ingresado serán descontados al momento de procesar su pago desde su billetera
                </li>
              </ul>
              <br>
              <ol class="fontDeposito2">
                <li>
                  Si su solicitud de retiro es rechazada antes de la aprobación, la tarifa de servicio / de ingreso o retiro se devolverá a su cuenta.
                </li>
                <li>
                  Sin embargo, si su retiro ya ha sido aprobado, debes verificar la wallet y la tarifa de servicio del 5% que cobra GMM
                  por los servicios prestados a su cuenta de GMM
                </li>
                <li>
                  Transferencias entre cuentas GMM tendrá un costo de servicio del 1.5 % por la transacción realizada
                </li>
              </ol>
            </div>
          </el-col>
          <el-col :md="2" :lg="4">
            &nbsp;
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            &nbsp;
          </el-col>
        </el-row>
      </el-main>
    </div>
    <el-footer class="el-footer">
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
  import Icons from "../components/components/Icoins"
  import Footer from "../components/components/Footer"
  import Menu from "../components/components/Menu";
  export default {
    name: "deposit",
    components: {Menu, Icons, Footer}
  }
</script>

<style scoped>

  .el-footer {
    padding: 0px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }

  .backHeader {
    background-image: url('../assets/Imgs/backRed.jpg');
    background-repeat: no-repeat;
    background-attachment: inherit;
    background-position: center center;
    background-size: cover;
    padding: 0;
  }
  .martitle {
    margin-top: 10em;
  }
  .marPage {
    margin-bottom: 5em;
  }
  .center {
    text-align: center;
    margin: auto;
    display: block;
  }
  .fontTitulosW {
    font-size: 3.4em;
    color: #FFF;
    text-align: center;
    font-weight: bold;
    padding: 5%;
  }
  @media only screen and (max-width: 576px){
    .fontTitDeposito{
      font-size: 1.5rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
      margin-left: 0.7em;
    }
    .fontDeposito1{
      font-size: 1.0rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
      padding: 2%;
      margin-left: 0.65em;
    }
    .fontDeposito2{
      font-size: 1.0rem;
      color: #FFF;
      text-align: left;
      font-weight: 300;
      padding: 2%;
      margin-left: 0.65em;
    }
  }
  @media only screen and (min-width: 577px) and (max-width: 992px){
    .fontTitDeposito{
      font-size: 1.9rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
      margin-left: 0.5em;
    }
    .fontDeposito1{
      font-size: 1.2rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
      margin-left: 0.9em;
    }
    .fontDeposito2{
      font-size: 1.2rem;
      color: #FFF;
      text-align: left;
      font-weight: 300;
      margin-left: 0.9em;
    }
  }
  @media only screen and (min-width: 993px){
    .fontTitDeposito{
      font-size: 2.2rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
      line-height: 50px;
      padding: 3%;
    }
    .fontDeposito1{
      font-size: 1.2rem;
      color: #FFF;
      text-align: justify;
      font-weight: bold;
      padding-left: 7%;
      line-height: 40px;
    }
    .fontDeposito2{
      font-size: 1.2rem;
      color: #FFF;
      text-align: justify;
      font-weight: 300;
      padding-left: 7%;
      line-height: 40px;
    }
  }
</style>
