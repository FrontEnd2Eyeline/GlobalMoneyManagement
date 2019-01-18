template>
<el-container class="backHeader">
  <div class="martitle">
    &nbsp;
  </div>
  <div class="center martitle">
    <h2 class="fontTitulosW">KYC</h2>
  </div>
  <Icoins class="marPage"></Icoins>
  <el-main>
    <el-row>
      <el-col :span="24">
        &nbsp;
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :lg="8">
        <h1>
          Cuenta individual
        </h1>
      </el-col>
      <el-col :lg="16">
        <p>
          El nivel 1 de KYC solo requiere información básica, incluida la nacionalidad, el nombre
          y la identificación del pasaporte. Si proporciona información inexacta o falsa, deberá
          asumir todas las consecuencias.
        </p>
        <p>
          El nivel 2 de KYC requiere pruebas de su identificación. Antes de realizar la verificación,
          prepara lo siguiente:
        </p>
        <ol>
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
        <p>
          Comprobante de domicilio: cargue su licencia de conducir o tarjeta de identificación. Pero si su dirección
          no está impresa en los documentos mencionados, cargue las facturas que incluyan su dirección residencial
          con fecha no inferior a 3 meses.
        </p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <h1>Aqui va un slider</h1>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :lg="8">
        <h1>
          Cuenta negocios
        </h1>
      </el-col>
      <el-col :lg="16">
        <p>
          Una cuenta negocios le permite operar bajo el nombre de una compañía (en países o regiones que servimos).
          Ofrece los mismos beneficios que una cuenta individual. Puede autorizar hasta cuatro personas nominadas
          para realizar operaciones y administrar la cuenta en nombre de la empresa.
        </p>
        <p>
          Registre una nueva cuenta de inversión primero. Luego, vaya a “Configuración> Verificación”,
          y elija “Verificación corporativa”. La revisión generalmente toma 3-5 días hábiles.
        </p>
        <p>
          Deberá proporcionar la información de su empresa, como por ejemplo:
        </p>
        <ul>
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
      <el-col :span="24">
        &nbsp;
      </el-col>
    </el-row>
  </el-main>
  <el-footer>
    <Footer></Footer>
  </el-footer>
</el-container>
</template>

<script>
  import Icoins from "../components/components/Icoins"
  import Footer from "../components/components/Footer"
  export default {
    name: "Kyc",
    components: {Icoins, Footer}
  }
</script>

<style scoped>
  .backHeader {
    background-image: url('../assets/Imgs/Fondo.jpg');
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
    text-align: left;
    font-weight: bold;
    padding: 5%;
  }
</style>
