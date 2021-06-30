<template>
    <el-row>
        <el-button @click="onClick">关闭</el-button>
        <el-popconfirm
            title="嘿"
        >
            <el-button slot="reference">page2</el-button>
        </el-popconfirm>
    </el-row>
</template>

<script>
import router from '../../router'
export default {
  name: 'page2',
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
