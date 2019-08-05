<template>
  <el-container>
    <el-main style="background-color: #f01414;">
      <el-row :gutter="20">
        <div>
          <el-col :span="2"> <!--:sm="12" :md="6" :lg="2"-->
            <div>
              <p>
                INICIO
              </p>
            </div>
          </el-col>
          <el-col :span="2"><!--:sm="12" :md="6" :lg="2"-->
            <div>
              <p>
                INVERSIONES
              </p>
            </div>
          </el-col>
          <el-col :span="2"> <!--:sm="12" :md="6" :lg="2"-->
            <div>
              <p>
                NOTICIAS
              </p>
            </div>
          </el-col>
          <el-col :span="2"><!--:sm="12" :md="6" :lg="3"-->
            <div>
              <p>
                INVITAR AMIGOS
              </p>
            </div>
          </el-col>
          <el-col :span="2"><!--:sm="12" :md="6" :lg="2"-->
            <div>
              <p>
                AYUDA
              </p>
            </div>
          </el-col>
          <el-col :span="2"><!--:sm="12" :md="6" :lg="2"-->
            <div>
              <p>
                ESTRUCTURA
              </p>
            </div>
          </el-col>
          <el-col :span="2"><!--:sm="12" :md="6" :lg="2"-->
            <div>
              <p>
                LÍDERES
              </p>
            </div>
          </el-col>
          <el-col :span="2"><!--:sm="12" :md="6" :lg="2"-->
            <div>
              <p>
                LENGUAJE
              </p>
            </div>
          </el-col>
          <el-col :span="3"><!--:lg="3"-->
            <div>
              &nbsp;
            </div>
          </el-col>
          <el-col :span="1"><!--:sm="12" :md="12" :lg="1"-->
            <div style="font-size: 12px; text-align: right">
              <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px; color: white"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>View</el-dropdown-item>
                  <el-dropdown-item>Add</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                  <el-dropdown-item>Update Data</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
          <el-col span="3"><!--:sm="12" :md="12" :lg="3"-->
            <div>
              <p style="text-align: left">
                CONFIGURACIÓN
              </p>
            </div>
          </el-col>
          <!--<el-col :span="2">
            <div class="grid-content bg-purple">INICIO</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">INVERSIONES</div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">NOTICIAS</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">INVITAR AMIGOS</div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">AYUDA</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">ESTRUCTURA</div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">LÍDERES</div>
          </el-col>
          <el-col :span="2">
            &nbsp;
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple" style=" font-size: 12px">
              <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>View</el-dropdown-item>
                  <el-dropdown-item>Add</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
          <el-col style="text-align: right; font-size: 12px" :span="2">
            <div class="grid-content bg-purple">CONFIGURACIÓN</div>
          </el-col>-->
        </div>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
    export default {
      name: 'HeaderPanel2',
      methods: {
        goTo (page) {
          if (page === 'inicio') {
            this.$router.push({name: 'Cpanel'})
          } else if (page === 'inversiones') {
            this.$router.push({name: 'inversiones'})
          } else if (page === 'noticias') {
            this.$router.push({name: 'noticias'})
          } else if (page === 'invitar') {
            this.$router.push({name: 'invitar'})
          } else if (page === 'ayuda') {
            this.$router.push({name: 'ayuda'})
          } else if (page === 'estructura') {
            this.$router.push({name: 'estructura'})
          } else if (page === 'lideres') {
            this.$router.push({name: 'lideres'})
          }
        },
        setLayout (layout) {
          this.$message('click on item ' + layout)
          this.$store.commit('SET_LAYOUT', 'perfil-layout')
          this.$router.push({name: 'perfil'})
        }
      }
    }
</script>

<style scoped>
  p{
    text-align: center;
    color: #ededed;
    font-weight: bold;
  }
</style>
