<template>
    <el-container>
      <el-row :gutter="20">
        <el-col :span="1">
          <div class="grid-content bg-purple">INICIO</div>
        </el-col>
        <el-col :span="1.9">
          <div class="grid-content bg-purple">INVERSIONES</div>
        </el-col>
        <el-col :span="1.9">
          <div class="grid-content bg-purple">NOTICIAS</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">INVITAR AMIGOS</div>
        </el-col>
        <el-col :span="1.9">
          <div class="grid-content bg-purple">AYUDA</div>
        </el-col>
        <el-col :span="1.9">
          <div class="grid-content bg-purple">ESTRUCTURA</div>
        </el-col>
        <el-col :span="13">
          <div class="grid-content bg-purple">LÍDERES</div>
        </el-col>
        <el-col :span="0.1">
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
        <el-col style="text-align: right; font-size: 12px" :span="1.1">
          <div class="grid-content bg-purple">CONFIGURACIÓN</div>
        </el-col>
      </el-row>
    </el-container>
</template>

<script>
    export default {
        name: "HeaderPanel2"
    }
</script>

<style scoped>

</style>
