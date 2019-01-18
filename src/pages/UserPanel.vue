<template>
  <el-container>
    <el-container>
      <div>
        <span> Hola</span>
        <div style="text-align: right; font-size: 12px">
          <el-button @click="logout">LogOut</el-button>
        </div>
      </div>
      <el-header>
        <HeaderPanel2></HeaderPanel2>
        <!--<el-row :gutter="20">-->
        <!--<el-col :span="1">-->
          <!--<div class="grid-content bg-purple">INICIO</div>-->
        <!--</el-col>-->
        <!--<el-col :span="1.9">-->
          <!--<div class="grid-content bg-purple">INVERSIONES</div>-->
        <!--</el-col>-->
        <!--<el-col :span="1.9">-->
          <!--<div class="grid-content bg-purple">NOTICIAS</div>-->
        <!--</el-col>-->
        <!--<el-col :span="2">-->
          <!--<div class="grid-content bg-purple">INVITAR AMIGOS</div>-->
        <!--</el-col>-->
        <!--<el-col :span="1.9">-->
          <!--<div class="grid-content bg-purple">AYUDA</div>-->
        <!--</el-col>-->
        <!--<el-col :span="1.9">-->
          <!--<div class="grid-content bg-purple">ESTRUCTURA</div>-->
        <!--</el-col>-->
        <!--<el-col :span="13">-->
          <!--<div class="grid-content bg-purple">LÍDERES</div>-->
        <!--</el-col>-->
        <!--<el-col :span="0.1">-->
          <!--<div class="grid-content bg-purple" style=" font-size: 12px">-->
            <!--<el-dropdown>-->
              <!--<i class="el-icon-setting" style="margin-right: 15px"></i>-->
              <!--<el-dropdown-menu slot="dropdown">-->
                <!--<el-dropdown-item>View</el-dropdown-item>-->
                <!--<el-dropdown-item>Add</el-dropdown-item>-->
                <!--<el-dropdown-item>Delete</el-dropdown-item>-->
              <!--</el-dropdown-menu>-->
            <!--</el-dropdown>-->
          <!--</div>-->
        <!--</el-col>-->
        <!--<el-col style="text-align: right; font-size: 12px" :span="1.1">-->
          <!--<div class="grid-content bg-purple">CONFIGURACIÓN</div>-->
        <!--</el-col>-->
      <!--</el-row>-->
      </el-header>
      <el-main :gutter="20">
        <el-row>
          <el-col :span="16">
            <div class="grid-content bg-purple">
               <span>
          Bienvenido (a) Pendejo {{user_perfil.nombre}} {{user_perfil.apellido}}
        </span>
              <div>
        <span>
          Su ultima visita fue muy lejos
        </span>
              </div>

              <div>
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>Soporte general</span>
                    <span style="float: right; padding: 3px 0" type="text">Saldo</span>

                  </div>
                  <el-row v-for="saldo in saldos" :key="saldo.id">
                    <el-col :span="6">
                      <div class="text item">
                        {{saldo.nombreV }}
                      </div>
                    </el-col>
                    <el-col style="float: right; padding: 3px 0" :span="6">
                      <div class="text item">
                        {{saldo.saldo }}
                      </div>
                    </el-col>
                  </el-row>


                </el-card>
                <el-button style="margin-left: 25em; padding: 3px 0" type="text">Operation button</el-button>
              </div>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>Accesos rápidos</span>

                </div>
                <el-row v-for="acces in access" :key="acces.id">
                  <el-col :span="6">
                    <div>
                      <i :class="acces.img"></i>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="text item">
                      {{acces.name }}
                    </div>
                  </el-col>
                </el-row>
              </el-card>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>Transacciones</span>
                </div>
                <el-row v-for="transaccion in transacciones" :key="transaccion.id">
                  <el-col :span="6">
                    <div class="text item">
                      {{transaccion.name }}
                    </div>
                  </el-col>
                  <el-col style="float: right; padding: 3px 0" :span="6">
                    <div>
                      <i class="el-icon-arrow-right"></i>
                    </div>
                  </el-col>
                </el-row>
              </el-card>
              <el-card class="box-card">
                <span>ACÁ VA UNA IMÁGEN</span>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Api from '@/services/Api'
  import HeaderPanel2 from "../components/components/HeaderPanel2";

  export default {
    components: {HeaderPanel2},
    data () {
      return {
        user: '',
        user_perfil: {
          apellido: null,
          celular: null,
          contrato: null,
          email: null,
          estado: null,
          id: null,
          nombre: null,
          pais: null,
          paisId: null,
          perfil: null,
          rolId: null,
          urlAvatar: null,
          verificado: null
        },
        tableData: [{
          date: '132456',
          name: 'yo',
          address: 'jodio'
        },
        {
          date: '132456',
          name: 'yo',
          address: 'jodio'
        }],
        saldos: [
          {
            nombreV: 'Balance',
            saldo: 0
          },
          {
            nombreV: 'Comisiones',
            saldo: 0
          }
        ],
        access: [
          {
            name: 'Noticias',
            img: 'el-icon-share'
          },
          {
            name: 'Estructura',
            img: 'el-icon-delete'
          },
          {
            name: ' Líderes',
            img: 'el-icon-edit'
          }
        ],
        transacciones: [
          {
            name: 'Historial'
          },
          {
            name: 'Mis comisiones'
          },
          {
            name: 'Lista de retiros'
          },
          {
            name: 'Retirar fondos'
          }
        ]
      }
    },
    created () {
      Api.post('/api/user/perfil', '', {user: this.user}).then(data => {
        this.user_perfil = data.data
        console.log('perfil de usuario', this.user_perfil)
      }).catch(error => {
        console.log('error al obtener perfil', error)
      })
      this.$store.commit('SET_LAYOUT', 'UserPanel-layout')
    },
    methods: {
      logout () {
        Api.post('/api/user/logout', '', {user: this.user}).then(data => {
          console.log('cero sesion', data)
          localStorage.removeItem('access-token')
          localStorage.removeItem('user')
          this.$router.push({name: 'login'})
        }).catch(error => {
          console.log('error de cierre de sesion', error)
        })
      },
      getUserPerfil () {
      }
    },
    destroyed () {
      this.$store.commit('SET_LAYOUT', 'login-layout')
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
