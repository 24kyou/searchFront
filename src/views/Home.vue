<template>
  <div >
    <el-container style="height: 1000px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router unique-opened>
          <el-submenu :index="index +''" v-for="(item,index) in routes"
                      :key="index" >
            <template #title>{{ item.name }}</template>
            <template slot="title"><i :class="item.iconCls" style="color: black;margin-right: 5px"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item :index="children.path"
                          v-for="(children,index) in item.children" :key="index" >{{ children.name }}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view class="homeRouterView"/>
      </el-main>
    </el-container>
  </div>
</template>

<script>


export default {
  computed:{
    routes() {
      return this.$router.options.routes
    }
  }
}
</script>
<style scoped>

.homeRouterView {
  margin-top: 10px;
}
</style>
