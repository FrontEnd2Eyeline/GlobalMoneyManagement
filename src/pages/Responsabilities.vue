<template>
  <el-container class="backHeader">
    <Menu></Menu>
    <div class="martitle center">
      <h2 class="fontTitulosW">
        Responsabilidades fiscales del cliente
      </h2>
    </div>
    <Icons class="marPage"></Icons>
    <el-main>
      <el-row>
        <el-col :span="24">
          &nbsp;
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :sm="2" :lg="4">
          &nbsp;
        </el-col>
        <el-col :sm="20" :lg="16">
          <p class="fontTitResponsabilidades">
            Última actualización el 13 de julio de 2018
          </p>
          <p class="fontResponsabilidades2">
            GMMClub le recuerda a todos los clientes su responsabilidad de pagar los impuestos aplicables del comercio de activos digitales. Consulte a su asesor
            impositivo ya que las leyes y regulaciones tributarias cambian periódicamente. GMMClub no es responsable de las obligaciones fiscales de los clientes.
          </p>
          <h2 class="fontTitResponsabilidades">
            Historial de transacciones
          </h2>
          <p class="fontResponsabilidades2">
            El historial de transacciones del cliente proporciona información utilizada para determinar cualquier ganancia en su actividad de activos
            digitales en GMMCLUB. Tal información incluye:
          </p>
          <ul class="fontResponsabilidades1">
            <li>
              Hora y fecha
            </li>
            <li>
              Tipos de activos digitales
            </li>
            <li>
              Cantidad de activos digitales
            </li>
            <li>
              Matricula
            </li>
          </ul>
          <p class="fontResponsabilidades2">
            El Servicio de Rentas Internas de los Estados Unidos (IRS) ha publicado pautas sobre cómo informar y pagar impuestos relacionados con activos digitales
            (también llamados moneda virtual o moneda virtual convertible). Los clientes pueden leer las pautas del sitio web oficial de www.irs.gov,
            incluido <a href="https://www.irs.gov/pub/irs-drop/n-14-21.pdf" target="_blank"> https://www.irs.gov/pub/irs-drop/n-14-21.pdf</a>
          </p>

          <h2 class="fontTitResponsabilidades">
            Cumplimiento de leyes locales o regionales
          </h2>
          <p class="fontResponsabilidades2">
            El usuario en este momento acuerda y se obliga a cumplir con todas las leyes locales de su jurisdicción y libera desde este momento a Eyeline Corp USA a sus socios consejeros
            funcionarios empleados asesores y representantes de toda responsabilidad por la falta de cumplimiento a legislaciones locales ajenas a la jusridicion de Eyeline Corp USA.
          </p>
        </el-col>
        <el-col :sm="2" :lg="4">
          &nbsp;
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
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
  import Menu from "../components/components/Menu"
  import Icons from "../components/components/Icoins"
  import Footer from "../components/components/Footer"
  export default {
    name: "Responsabilities",
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
    line-height: 50px;
  }
  a, a:hover{
    color: #FFF;
    text-decoration: none;
  }
  ul{
    padding-left: 5%;
  }

  @media only screen and (max-width: 576px){
    .fontTitResponsabilidades{
      font-size: 1.5rem;
      color: #FFF;
      text-align: center;
      font-weight: bold;
    }
    .fontResponsabilidades1{
      font-size: 1.0rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
      padding: 2%;
      margin-left: 0.65em;
    }
    .fontResponsabilidades2{
      font-size: 1.0rem;
      color: #FFF;
      text-align: left;
      font-weight: 300;
      padding: 2%;
      margin-left: 0.65em;
    }
  }
  @media only screen and (min-width: 577px) and (max-width: 992px){
    .fontTitResponsabilidades{
      font-size: 1.9rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
      margin-left: 0.5em;
    }
    .fontResponsabilidades1{
      font-size: 1.2rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
      margin-left: 0.9em;
    }
    .fontResponsabilidades2{
      font-size: 1.2rem;
      color: #FFF;
      text-align: left;
      font-weight: 300;
      margin-left: 0.9em;
    }
  }
  @media only screen and (min-width: 993px){
    .fontTitResponsabilidades{
      font-size: 2.2rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
      line-height: 50px;
      padding: 3% 0;
    }
    .fontResponsabilidades1{
      font-size: 1.2rem;
      color: #FFF;
      text-align: justify;
      font-weight: bold;
      line-height: 40px;
    }
    .fontResponsabilidades2{
      font-size: 1.2rem;
      color: #FFF;
      text-align: justify;
      font-weight: 300;
      line-height: 40px;
    }
  }
</style>

