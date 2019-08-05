<template>
  <el-container class="backHeader">
    <Menu></Menu>
    <h2 class="fontTitulosW">Sobre Nosotros</h2>
    <Icoins class= "visibilidad titulo"></Icoins>
    <el-main>
      <div>
        <el-row :gutter="10">
          <el-col :xs="3" :sm="2" :md="4" :lg="5">
            &nbsp;
          </el-col>
          <el-col :xs="18" :sm="20" :md="18" :lg="17">
            <p class="fontNosotros">
              Fundada en 2017, GMMCLUB es una plataforma de comercio de activos digitales líder en operaciones el mundo.
              Actualmente, GMMCLUB ofrece operaciones fijas con los principales activos digitales, donde son operadas por
              Expertos de trading en activos digitales donde estan incluidos Bitcoin, Bitcoin Cash, Ethereum,
              Classic y Litecoin.
              GMMCLUB se ha expandido recientemente a los Estados Unidos
              y espera atender a más usuarios en todo el mundo en el futuro.
            </p>
          </el-col>
          <el-col :xs="3" :sm="2" :md="2" :lg="2">
            &nbsp;
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            &nbsp;
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :xs="3" :sm="2" :md="2" :lg="2">
            &nbsp;
          </el-col>
          <el-col :xs="19" :sm="20" :md="20" :lg="6">
            <h2 class="fontTitNosotros">
              Nuestra misión
            </h2>
          </el-col>
          <el-col :xs="2" :sm="2" :md="4" :lg="14">
            &nbsp;
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="3" :sm="2" :md="4" :lg="5">
            &nbsp;
          </el-col>
          <el-col :xs="18" :sm="20" :md="18" :lg="17">
            <p class="fontNosotros">
              Creemos que bitcoin y blockchain eliminarán las barreras comerciales, mejorarán la eficiencia
              de las transacciones y transformarán drásticamente nuestro sistema financiero global.
            </p>
            <p class="fontNosotros">
              Queremos ofrecer a nuestros clientes la plataforma de comercio con operadores independientes
              de alto ranking en el mercado de activos digitales en las modalidades de exchange margin founding
              más segura y confiable, al mismo tiempo que cumplimos con los más altos estándares de ciberseguridad
              normativos en los Estados Unidos y el mundo.
            </p>
          </el-col>
          <el-col :xs="3" :sm="2" :md="2" :lg="2">
            &nbsp;
          </el-col>
        </el-row>
        <el-row>
          <el-col span="24">
            &nbsp;
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :xs="3" :sm="2" :md="2" :lg="2">
            &nbsp;
          </el-col>
          <el-col :xs="19" :sm="20" :md="20" :lg="8">
            <h2 class="fontTitNosotros">
              Estamos siempre aquí para usted
            </h2>
          </el-col>
          <el-col :xs="2" :sm="2" :md="4" :lg="14">
            &nbsp;
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="3" :sm="2" :md="4" :lg="5">
            &nbsp;
          </el-col>
          <el-col :xs="18" :sm="20" :md="18" :lg="17">
            <p class="fontNosotros">
              En GMMCLUB, valoramos a nuestros clientes.
            </p>
            <p class="fontNosotros">
              Con un equipo de especialistas altamente capacitados, disponibles las 24 horas, los 7 días de la
              semana para recibir atención al cliente, estamos listos para ayudarlo con cualquier problema
              que pueda surgir mientras realiza inversiones en nuestra plataforma.
            </p>
            <p class="fontNosotros">
              Nos enorgullecemos de un excelente servicio al cliente y transparencia.
              Estará comercializando sus inversiones de activos digitales en una de las
              plataformas más seguras y confiables disponibles.
            </p>
          </el-col>
          <el-col :xs="3" :sm="2" :md="2" :lg="2">
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
    <el-footer class="el-footer">
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
  import Icoins from '../components/components/Icoins'
  import Footer from '../components/components/Footer'
  import Menu from '../components/components/Menu'
export default {
    name: 'nosotros',
    components: {Menu, Footer, Icoins}
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
    padding: 0%;
    overflow-x: hidden;
  }
  .martitle {
    margin-top: 10em;
  }
  .marPage {
    margin-bottom: 5em;
  }

  /*Textos*/
  @media only screen and (max-width: 576px){
    .fontTitulosW {
      font-size: 2em;
      color: #FFF;
      text-align: center;
      font-weight: bold;
      padding: 5%;
      line-height: 50px;
    }
    .fontTitNosotros{
      font-size: 1.2rem;
      color: #FFF;
      text-align: justify;
      font-weight: bold;
      line-height: 1.5em;
    }
    .fontNosotros{
      font-size: 1.0rem;
      color: #FFF;
      text-align: justify;
      font-weight: 300;
      line-height: 1.5em;

    }
  }
  @media only screen and (min-width: 577px) and (max-width: 992px){
    .fontTitulosW {
      font-size: 2.9em;
      color: #FFF;
      text-align: center;
      font-weight: bold;
      padding: 5%;
      line-height: 50px;
    }
    .fontTitNosotros{
      font-size: 1.7rem;
      color: #FFF;
      text-align: justify;
      font-weight: bold;
      line-height: 1.5em;
    }
    .fontNosotros{
      font-size: 1.2rem;
      color: #FFF;
      text-align: justify;
      font-weight: 300;
      line-height: 1.5em;
    }
  }
  @media only screen and (min-width: 993px){
    .fontTitulosW {
      font-size: 3.4em;
      color: #FFF;
      text-align: center;
      font-weight: bold;
      padding: 5%;
      line-height: 50px;
    }
    .fontTitNosotros{
      font-size: 2.4rem;
      color:#FFF;
      text-align: left;
      font-weight: bold;
      line-height: 1.5em;
    }
    .fontNosotros{
      font-size: 1.2rem;
      color: #FFF;
      text-align: justify;
      font-weight: 300;
      line-height: 1.5em;
    }
  }

  /*Portada*/

  @media only screen and (max-width: 320px){

    .visibilidad{
      visibility: hidden;
    }

    .titulo{
      margin-top: -45em;
    }
  }
  @media only screen and (min-width: 321px) and (max-width: 639px){
    .visibilidad{
      visibility: hidden;
    }
    .titulo{
      margin-top: -57em;
    }
  }
  @media only screen and (min-width: 640px) and (max-width: 767px){
    .visibilidad{
      visibility: hidden;
    }
    .titulo{
      margin-top: -69em;
    }
  }
  @media only screen and (min-width: 768px){
    visibilidad{
      visibility: visible;
    }
    .titulo{
      margin-top: 0;
    }
  }
</style>
