<template>
    <el-row>
        <el-button @click="onClick">默认按钮,点击返回</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <router-link tag="button" to="/page1/page2" >
            page2
        </router-link>
        <router-link tag="button" to="/page1/page3" >
            page3
        </router-link>
        <router-view></router-view>
    </el-row>
</template>

<script>
import router from '../../router'
export default {
  name: 'page1',
  methods: {
    onClick () {
      router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
    .el-row{
        display: flex;
        flex-direction: column;
        button{
            margin-top: 30px;
            margin-left: 50vw;
            width: 160px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
