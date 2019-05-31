<template>
<el-container>
  <el-header>
    <el-row type="flex" justify="start" :gutter="4px">
      <el-col :span="8" >
        <div>
          <img  src="../../assets/logo.png"/>
        </div>

      </el-col>
      <el-col :span="8"></el-col>
      <el-col :span="8"></el-col>
      <el-col :span="8"></el-col>
    </el-row>


  </el-header>
  <el-aside class="el-col-6">

    <el-menu >


        <el-submenu>
          <el-menu-item-group>
            <el-menu-item v-for="item in menu_groups" :key="item.id">{{item.value}}</el-menu-item>

          </el-menu-item-group>

        </el-submenu>

      <el-menu-item v-for="item in one_level_menu">{{item.value}}</el-menu-item>
    </el-menu>

  </el-aside>
<el-main>
<el-container style="background: #d6d6d6;padding: 0px 10%">
  <el-header>
 <el-row :gutter="4px" type="flex" justify="start">
   <el-col :span="4" style="text-align: left">
     <h3>结算报表</h3>
   </el-col>
   <el-col :span="4"></el-col>
   <el-col :span="4"></el-col>
   <el-col :span="4"></el-col>
   <el-col :span="4"></el-col>
   <el-col :span="4"></el-col>


 </el-row>
  </el-header>
  <el-main style="background: #fff;border-top: 2px solid  #c0ccda ;height: 100%">

  </el-main>
  <el-footer>@copyright 2000-0000 .</el-footer>


</el-container>




</el-main>
  <el-footer></el-footer>
</el-container>


</template>

<script>
    export default {
        name: "Home.vue"
    }
</script>

<style scoped>

</style>
