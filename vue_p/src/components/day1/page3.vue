<template>
    <el-row>
        <el-button @click="onClick">关闭</el-button>
        <el-button type="primary">page3</el-button>
    </el-row>
</template>

<script>
import router from '../../router'
export default {
  name: 'page3',
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
            margin-top: 10px;
            margin-left: 10px;
            width: 160px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
