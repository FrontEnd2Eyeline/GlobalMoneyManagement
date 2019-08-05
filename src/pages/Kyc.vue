<template>
<el-container class="backHeader">
  <Menu></Menu>
  <div class="martitle">
    <h2 class="fontTitulosW">Verificación KYC</h2>
  </div>
  <Icoins class="marPage"></Icoins>
  <el-main>
    <el-row>
      <el-col :lg="24">
        &nbsp;
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :lg="6">
        <h1 class="fontTitKYC">
          Cuenta individual
        </h1>
      </el-col>
      <el-col :lg="18">
        <p class="fontKYC">
          El nivel 1 de KYC solo requiere información básica, incluida la nacionalidad, el nombre
          y la identificación del pasaporte. Si proporciona información inexacta o falsa, deberá
          asumir todas las consecuencias.
        </p>
        <p class="fontKYC">
          El nivel 2 de KYC requiere pruebas de su identificación. Antes de realizar la verificación,
          prepara lo siguiente:
        </p>
        <br>
        <ol class="fontKYC2" style="padding-left: 3%">
          <li>
            Imagen de un pasaporte internacional válido con una fecha de vencimiento claramente visible
          </li>
          <li>
            La foto en su pasaporte debe ser claramente visible
          </li>
          <li>
            La resolución de la imagen debe ser mayor a 300dpi
          </li>
          <li>
            La imagen debe cargarse en el formato de archivo: jpg, jpeg, png o pdf. El tamaño máximo de archivo es de 3MB.
          </li>
        </ol>
        <br>
        <p class="fontKYC">
          Comprobante de domicilio: cargue su licencia de conducir o tarjeta de identificación. Pero si su dirección
          no está impresa en los documentos mencionados, cargue las facturas que incluyan su dirección residencial
          con fecha no inferior a 3 meses.
        </p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :lg="7">
        &nbsp;
      </el-col>
      <el-col :lg="10">
        <br><br>
        <el-carousel  indicator-position="outside">
          <el-carousel-item>

          </el-carousel-item>
          <el-carousel-item>

          </el-carousel-item>
          <el-carousel-item>

          </el-carousel-item>
        </el-carousel>
        <br><br>
      </el-col>
      <el-col :lg="7">
        &nbsp;
      </el-col>
    </el-row>
    <el-row :gutter="10">
      
      <el-col :lg="6">
        <h1 class="fontTitKYC">
          Cuenta negocios
        </h1>
      </el-col>
      <el-col :lg="18">
        <p class="fontKYC">
          Una cuenta negocios le permite operar bajo el nombre de una compañía (en países o regiones que servimos).
          Ofrece los mismos beneficios que una cuenta individual. Puede autorizar hasta cuatro personas nominadas
          para realizar operaciones y administrar la cuenta en nombre de la empresa.
        </p>
        <p class="fontKYC">
          Registre una nueva cuenta de inversión primero. Luego, vaya a “Configuración> Verificación”,
          y elija “Verificación corporativa”. La revisión generalmente toma 3-5 días hábiles.
        </p>
        <p class="fontKYC">
          Deberá proporcionar la información de su empresa, como por ejemplo:
        </p>
        <ul class="fontKYC2" style="padding-left: 3%">
          <li>
            País de registro
          </li>
          <li>
            Nombre de la empresa
          </li>
          <li>
            Nombre anterior de la empresa (si corresponde)
          </li>
          <li>
            Número de registro
          </li>
          <li>
            Fecha de incorporación
          </li>
          <li>
            Dirección
          </li>
          <li>
            Información de accionistas y directores
          </li>
          <li>
            Información que incluye registro comercial, memorando de la compañía, informe anual, resoluciones
            de la junta y más
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :lg="24">
        &nbsp;
      </el-col>
    </el-row>
  </el-main>
  <el-footer class="el-footer">
    <Footer></Footer>
  </el-footer>
</el-container>
</template>

<script>
  import Icoins from "../components/components/Icoins"
  import Footer from "../components/components/Footer"
  import Menu from "../components/components/Menu";
  import ElCarouselItem from "../../dist/static/js/vendor.60eeb562ede9b666a552";
  export default {
    name: "kyc",
    components: {ElCarouselItem, Menu, Icoins, Footer}
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
  .fontTitulosW {
    font-size: 3.4em;
    color: #FFF;
    text-align: center;
    font-weight: bold;
    padding: 5%;
    line-height: 50px;
  }
  .monik:nth-child(2n) {
    background-color: #99a9bf;
  }

  .monik:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  @media only screen and (max-width: 576px){
    .fontTitKYC{
      font-size: 1.5rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
    }
    .fontKYC{
      font-size: 1.0rem;
      color: #FFF;
      text-align: left;
      font-weight: 300;
    }
    .fontKYC2{
      font-size: 1.0rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
    }
  }
  @media only screen and (min-width: 577px) and (max-width: 992px){
    .fontTitKYC{
      font-size: 1.9rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
      margin-left: 0.5em;
    }
    .fontKYC{
      font-size: 1.2rem;
      color: #FFF;
      text-align: left;
      font-weight: 300;
      margin-left: 0.9em;
    }
    .fontKYC2{
      font-size: 1.2rem;
      color: #FFF;
      text-align: justify;
      font-weight: bold;
      line-height: 1.5em;
    }
  }
  @media only screen and (min-width: 993px){
    .fontTitKYC{
      font-size: 2.2rem;
      color:#FFF;
      text-align: left;
      font-weight: bold;
      line-height: 1.5em;
    }
    .fontKYC{
      font-size: 1.2rem;
      color: #FFF;
      text-align: justify;
      font-weight: 300;
      line-height: 1.5em;
    }
    .fontKYC2{
      font-size: 1.2rem;
      color: #FFF;
      text-align: justify;
      font-weight: bold;
      line-height: 1.5em;
    }
  }
</style>
