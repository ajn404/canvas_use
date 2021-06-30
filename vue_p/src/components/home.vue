<template>
    <el-container style="height: 100%; border: 1px solid #eee">
        <el-aside width="50%" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-menu"></i>6月</template>
                    <el-menu-item-group>
                        <template slot="title">VUE</template>
                        <el-menu-item index="1-1" @click="printRouter">嵌套路由</el-menu-item>
                        <el-menu-item index="1-2">暂定</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="less">
                        <el-menu-item index="1-3">暂定</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>7月</template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-menu"></i>8月</template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="3-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="3-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>设置</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>学习历程</span>
            </el-header>
            <el-main>
                <el-table :data="tableData">
                    <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="事件" width="120">
                    </el-table-column>
                    <el-table-column prop="description" label="描述">
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </el-container>
</template>

<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>

<script>
import router from '../router'
export default {
  name: 'home',
  data () {
    const day1 = {
      date: '2021-06-29',
      name: 'vue-router',
      description: '在 Vue 实例内部，你可以通过 $router 访问路由实例。因此你可以调用 this.$router.push'
    }
    const day2 = {
      date: '2021-06-29',
      name: 'vue基础',
      description: 'slot插值'
    }
    const tableData = [day1, day2]
    return {
      tableData
    }
  },
  methods: {
    printRouter () {
      router.push('page1')
    }
  }
}
</script>
