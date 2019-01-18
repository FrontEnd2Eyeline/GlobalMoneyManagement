<template>
    <el-container class="backHeader">
      <div class="martitle">
        &nbsp;
      </div>
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
            <p>
              Última actualización el 13 de julio de 2018
            </p>
            <p>
              GMMClub le recuerda a todos los clientes su responsabilidad de pagar los impuestos aplicables del comercio de activos digitales. Consulte a su asesor
              impositivo ya que las leyes y regulaciones tributarias cambian periódicamente. GMMClub no es responsable de las obligaciones fiscales de los clientes.
            </p>
            <h2>
              Historial de transacciones
            </h2>
            <p>
              El historial de transacciones del cliente proporciona información utilizada para determinar cualquier ganancia en su actividad de activos
              digitales en GMMCLUB. Tal información incluye:
            </p>
            <ul>
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
            <p>
              El Servicio de Rentas Internas de los Estados Unidos (IRS) ha publicado pautas sobre cómo informar y pagar impuestos relacionados con activos digitales
              (también llamados moneda virtual o moneda virtual convertible). Los clientes pueden leer las pautas del sitio web oficial de www.irs.gov,
              incluido https://www.irs.gov/pub/irs-drop/n-14-21.pdf
            </p>
            <h2>
              Cumplimiento de leyes locales o regionales
            </h2>
            <p>
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
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
</template>

<script>
    import Icons from "../components/components/Icoins"
    import Footer from "../components/components/Footer"
    export default {
      name: "Responsabilites",
      components: {Icons, Footer}
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
