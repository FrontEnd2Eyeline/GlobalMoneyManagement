<template>
    <el-container>
      <header></header>
      <el-main>
        <div>
          <el-row>
            <el-col :span="24">
              &nbsp;
            </el-col>
          </el-row>
          <el-row>
            <el-col :md="2" :lg="4">
              &nbsp;
            </el-col>
            <el-col :md="20" :lg="16">
              <div>
                <h2 class="fontTitDeposito">
                  1. Proporcione información correcta y precisa
                </h2>
                <br>
                <ul>
                  <li>
                    <p class="fontDeposito1">
                      Verifiación KYC:
                    </p>
                    <p class="fontDeposito2">
                      Proporcione su información en inglés. Hemos encontrado que hay nombres de cuenta proporcionados en chino, que no se aceptan para el proceso de
                      depósito y retiro. Si proporcionó el nombre de la cuenta china durante la verificación de identidad, comuníquese con nuestro servicio de atención
                      al cliente para modificarla. Después de eso, elimine su wallet de GMM y vuelva a vincular.
                    </p>
                  </li>
                  <li>
                    <p class="fontDeposito1">
                      Información Wallet
                    </p>
                    <p class="fontDeposito2">
                      Proporcione todos los dígitos de forma correcta de la wallet de su preferencia de la opción copiar y pegar. Para evitar billeteras que no sean de su propiedad
                      nosotros recomendamos el uso de la billetera www.eyewallet.com ya que esta nos da todos los servicios requeridos para la satisfacción del usuario.
                    </p>
                  </li>
                </ul>
                <h2 class="fontTitDeposito">
                  2. Tarifas de servicio
                </h2>
                <p class="fontDeposito2">
                  Se cobran tarifas por retiro, que incluyen:
                </p>
                <p class="fontDeposito1">
                  5% de GMM de su saldo en retiro y será cargado desde el saldo de su cuenta a la wallet
                </p>
                <p class="fontDeposito1">
                  5% de GMM de su saldo ingresado serán descontados al momento de procesar su pago desde su billetera
                </p>
                <ol>
                  <li class="fontDeposito2">
                    Si su solicitud de retiro es rechazada antes de la aprobación, la tarifa de servicio / de ingreso o retiro se devolverá a su cuenta.
                  </li>
                  <li class="fontDeposito2">
                    Sin embargo, si su retiro ya ha sido aprobado, debes verificar la wallet y la tarifa de servicio del 5% que cobra GMM
                    por los servicios prestados a su cuenta de GMM
                  </li>
                  <li class="fontDeposito2">
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
        </div>
      </el-main>
      <footer></footer>
    </el-container>
</template>

<script>
    export default {
        name: "depositoRetiro"
    }
</script>

<style scoped>

  @media only screen and (max-width: 576px){
    .fontTitLDeposito{
      font-size: 1.5rem;
      color: #000;
      text-align: left;
      font-weight: bold;
      margin-left: 0.7em;
    }

    .fontDeposito1{
      font-size: 1.0rem;
      color: #000;
      text-align: left;
      font-weight: bold;
      padding: 2%;
      margin-left: 0.65em;
    }

    .fontDeposito2{
      font-size: 1.0rem;
      color: #000;
      text-align: left;
      font-weight: 300;
      padding: 2%;
      margin-left: 0.65em;
    }

  }

  @media only screen and (min-width: 577px) and (max-width: 992px){

    .fontTitDeposito{
      font-size: 1.9rem;
      color: #000;
      text-align: left;
      font-weight: bold;
      margin-left: 0.5em;
    }

    .fontDeposito1{
      font-size: 1.2rem;
      color: #000;
      text-align: left;
      font-weight: bold;
      margin-left: 0.9em;
    }

    .fontDeposito2{
      font-size: 1.2rem;
      color: #000;
      text-align: left;
      font-weight: 300;
      margin-left: 0.9em;
    }

  }

  @media only screen and (min-width: 993px){

    .fontTitDeposito{
      font-size: 2.2rem;
      color: #000;
      text-align: left;
      font-weight: bold;
      margin-left: 0.5em;
    }

    .fontDeposito1{
      font-size: 1.2rem;
      color: #000;
      text-align: left;
      font-weight: bold;
      margin-left: 1em;
    }

    .fontDeposito2{
      font-size: 1.2rem;
      color: #000;
      text-align: left;
      font-weight: 300;
      margin-left: 1em;
    }

  }

</style>
