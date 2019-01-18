<template>
  <el-container class="backHeader">
    <div class="martitle">
      &nbsp;
    </div>
    <div class="martitle center">
      <h2>Sobre Nosotros</h2>
    </div>
    <Icoins class="marPage"></Icoins>
    <el-main>
      <div>
        <el-row>
          <el-col :span="24">
            &nbsp;
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :lg="8">
            &nbsp;
          </el-col>
          <el-col :lg="16">
            <p>
              Fundada en 2017, GMMCLUB es una plataforma de comercio de activos digitales líder en operaciones el mundo.
            </p>
            <p>
              Actualmente, GMMCLUB ofrece operaciones fijas con los principales activos digitales, donde son operadas por
              Expertos de trading en activos digitales donde estan incluidos Bitcoin, Bitcoin Cash, Ethereum,
              Classic y Litecoin.
            </p>
            <p>
              GMMCLUB se ha expandido recientemente a los Estados Unidos
              y espera atender a más usuarios en todo el mundo en el futuro.
            </p>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :lg="8">
            <h2>
              Nuestra misión
            </h2>
          </el-col>
          <el-col :lg="16">
            <p>
              Creemos que bitcoin y blockchain eliminarán las barreras comerciales, mejorarán la eficiencia
              de las transacciones y transformarán drásticamente nuestro sistema financiero global.
            </p>
            <p>
              Queremos ofrecer a nuestros clientes la plataforma de comercio con operadores independientes
              de alto ranking en el mercado de activos digitales en las modalidades de exchange margin founding
              más segura y confiable, al mismo tiempo que cumplimos con los más altos estándares de ciberseguridad
              normativos en los Estados Unidos y el mundo.
            </p>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :lg="8">
            <h2>
              Estamos siempre aquí para usted
            </h2>
          </el-col>
          <el-col :lg="16">
            <p>
              En GMMCLUB, valoramos a nuestros clientes.
            </p>
            <p>
              Con un equipo de especialistas altamente capacitados, disponibles las 24 horas, los 7 días de la
              semana para recibir atención al cliente, estamos listos para ayudarlo con cualquier problema
              que pueda surgir mientras realiza inversiones en nuestra plataforma.
            </p>
            <p>
              Nos enorgullecemos de un excelente servicio al cliente y transparencia.
              Estará comercializando sus inversiones de activos digitales en una de las
              plataformas más seguras y confiables disponibles.
            </p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            &nbsp;
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
    import Icoins from "../components/components/Icoins"
    import Footer from "../components/components/Footer"
    export default {
      name: "WeAre",
      components: {Footer, Icoins}
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
