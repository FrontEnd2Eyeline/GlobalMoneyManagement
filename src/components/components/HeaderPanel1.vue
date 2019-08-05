<template>
  <el-container>
    <el-main>
      <el-row :gutter="8">
        <el-col :sm="8" :md="8" :lg="4" :xl="4">
          <img src="../../assets/Imgs/LogoText.png" class="LogoGMM">
        </el-col>
        <el-col :sm="1" :md="1" :lg="12" :xl="12" class="espacio">
          &nbsp;
        </el-col>
        <el-col :sm="4" :md="4" :lg="2" :xl="2">
          <img src="../../assets/Imgs/IconoMembresia.png" class="iconosPanel">
          <p>
            MEMBRESÍA
          </p>
        </el-col>
        <el-col :sm="4" :md="4" :lg="2" :xl="2">
          <img src="../../assets/Imgs/IconoRegistro.png" class="iconosPanel">
          <p>
            REGISTRO
          </p>
        </el-col>
        <el-col :sm="4" :md="4" :lg="2" :xl="2">
          <img src="../../assets/Imgs/IconoContactos.png" class="iconosPanel">
          <p>
            CONTACTO
          </p>
        </el-col>
        <el-col @click="" :sm="3" :md="3" :lg="2" :xl="2">
          <img src="../../assets/Imgs/IconoSalir.png" class="iconosPanel2">
          <!--<el-button @click="logout">
            <img src="../../assets/Imgs/IconoSalir.png">
          </el-button>-->
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import LoadInformation from '@/services/LoadInformation'
  export default {
    name: 'HeaderPanel1',
    data () {
      return {
        user: ''
      }
    },
    methods: {
      logOut () {
        LoadInformation.logOut(this.user).then(data => {
          console.log('cero sesion', data)
          localStorage.removeItem('access-token')
          localStorage.removeItem('user')
          alert('Su sesión fue cerrada')
          this.$store.commit('SET_LAYOUT', 'login-layout')
          this.$router.push({name: 'login'})
        }).catch(error => {
          console.log('error de cierre de sesion', error)
        })
      },
      goTo (page) {
        if (page === 'inicio') {
          this.$router.push({name: 'Cpanel'})
        }
      }
    }
  }
</script>

<style scoped>

  .espacio{
    visibility: hidden;
  }
  p{
    text-align: center;
    font-weight: 500;

  }
  @media only screen and (max-width: 768px){

    .LogoGMM{
      margin: 0 auto;
      display: block;
      width: 90%;
    }

    .iconosPanel{
      width: 35%;
      margin: 0 auto;
      display: block;
    }
    .iconosPanel2{
      width: 75%;
      margin: 0 auto;
      display: block;
    }
    .coloRed {
      color: #f01414;
      font-size: 1.3em;
    }

  }
  @media only screen and (min-width: 769px) and (max-width: 1200px){

    .LogoGMM{
      width: 65%;
      margin: 0 auto;
      display: block;
    }

    .iconosPanel{
      width: 25%;
      margin: 0 auto;
      display: block;
    }
    .iconosPanel2{
      width: 55%;
      margin: 0 auto;
      display: block;
    }
    .coloRed {
      color: #f01414;
      font-size: 1.3em;
    }


  }
  @media only screen and (min-width: 1201px){

    .LogoGMM{
      margin: 0 auto;
      display: block;
    }

    .iconosPanel{
      width: 40%;
      margin: 0 auto;
      display: block;
    }
    .iconosPanel2{
      width: 70%;
      margin: 0 auto;
      display: block;
    }
    .coloRed {
      color: #f01414;
      font-size: 1.3em;
    }

  }
</style>
