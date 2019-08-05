<template>
    <el-container>
      <el-main>
        <div class="visi">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">Ocultar menú</el-radio-button>
            <el-radio-button :label="true">Mostrar menú</el-radio-button>
          </el-radio-group>
          <el-menu background-color="#F00414" text-color="white" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-menu-item index="1">
              <p>
                INICIO
              </p>
            </el-menu-item>
            <el-menu-item index="2">
              <p>
                INVERSIONES
              </p>
            </el-menu-item>
            <el-menu-item index="3">
              <p>
                NOTICIAS
              </p>
            </el-menu-item>
            <el-menu-item index="4">
              <p>
                INVITAR AMIGOS
              </p>
            </el-menu-item>
            <el-menu-item index="5">
              <p>
                AYUDA
              </p>
            </el-menu-item>
            <el-menu-item index="6">
              <p>
                ESTRUCTURA
              </p>
            </el-menu-item>
            <el-menu-item index="7">
              <p>
                LÍDERES
              </p>
            </el-menu-item>
            <el-menu-item index="8">
              <p>
                LENGUAJE
              </p>
            </el-menu-item>
            <el-submenu index="9">
              <template slot="title">
                <p>
                  CONFIGURACIÓN
                </p>
              </template>
              <el-menu-item index="9-1">
                Add
              </el-menu-item>
              <el-menu-item index="9-2">
                View
              </el-menu-item>
              <el-menu-item index="9-3">
                Delete
              </el-menu-item>
              <el-menu-item index="9-4">
                Update
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
        <div class="visi2">
          <el-menu mode="horizontal" background-color="#F00414" text-color="white" class="el-menu--horizontal">
            <el-menu-item index="1">
              <p>
                INICIO
              </p>
            </el-menu-item>
            <el-menu-item index="2">
              <p>
                INVERSIONES
              </p>
            </el-menu-item>
            <el-menu-item index="3">
              <p>
                NOTICIAS
              </p>
            </el-menu-item>
            <el-menu-item index="4">
              <p>
                INVITAR AMIGOS
              </p>
            </el-menu-item>
            <el-menu-item index="5">
              <p>
                AYUDA
              </p>
            </el-menu-item>
            <el-menu-item index="6">
              <p>
                ESTRUCTURA
              </p>
            </el-menu-item>
            <el-menu-item index="7">
              <p>
                LÍDERES
              </p>
            </el-menu-item>
            <el-menu-item index="8">
              <p>
                LENGUAJE
              </p>
            </el-menu-item>
            <el-submenu index="9">
              <template slot="title">
                <p>
                  CONFIGURACIÓN
                </p>
              </template>
              <el-menu-item index="9-1">
                Add
              </el-menu-item>
              <el-menu-item index="9-2">
                View
              </el-menu-item>
              <el-menu-item index="9-3">
                Delete
              </el-menu-item>
              <el-menu-item index="9-4">
                Update
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "HeaderPanel3"
    }
    //Preguntarle a Edwin
    //https://jsfiddle.net/api/post/library/pure/
    /*var Main = {
      data() {
        return {
          isCollapse: true
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }*/
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
 @media only screen and (max-width: 767px) {
   p{
     font-size:15px;
   }
   .visi{
     visibility: hidden;
   }
   .visi2{
     visibility: hidden;
   }
 }
  @media only screen and (min-width: 768px) and (max-width: 1023px){
    p{
      font-size: 12px;
    }
    .visi{
      visibility: visible;
    }
    .visi2{
      visibility: hidden;
      display: none;
    }
  }
  @media only screen and (min-width: 1024px) and (max-width: 1279px){
    p{
      font-size: 12px;
    }
   .visi{
      visibility: hidden;
      display: none;
    }
    .visi2{
      visibility: visible;
    }
  }
  @media only screen and (min-width: 1280px){
    p{
      font-size: 15px;
    }
    .visi{
      visibility: hidden;
      display: none;
    }
    .visi2{
      visibility: visible;
    }
  }
</style>
