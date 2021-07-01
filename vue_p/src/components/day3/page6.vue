<template>
    <div class="app">
        <div id="main" style="width:600px;height:400px" @click="mounted">点击显示echart</div>
        <div class="backhome" @click="backHome">点击返回</div>
    </div>
</template>

<script>
import router from '../../router'
export default {
  name: 'page6',
  data () {
    return {
      option: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    }
  },
  methods: {
    drawpid (id) {
      var myChart = this.$echarts.init(document.getElementById(id))
      myChart.setOption(this.option)
    },
    mounted () {
      this.$nextTick(function () {
        this.drawpid('main')
      })
    },
    backHome () {
      router.push('/')
    }
  }
}
</script>

<style scoped lang="less">
    .app{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
