<template>
    <el-container class="backHeader">
      <Menu></Menu>
      <div class="martitle">
        <h2 class="fontTitulosW">Bienvenidos a Global Money Management</h2>
      </div>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
</template>

<script>
  import Menu from "./components/components/Menu"
  import Icoins from "./components/components/Icoins"
  import Footer from "./components/components/Footer"
    export default {
        name: "Index",
        components: {Menu, Icoins, Footer}
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
  .fontTitulosW {
    font-size: 3.4em;
    color: #FFF;
    text-align: center;
    font-weight: bold;
    padding: 5%;
    line-height: 50px;
  }
</style>
