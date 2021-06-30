<template>
    <div class="box">
        <el-button v-on:click="backhome">插{{message}}</el-button>
        <p v-html="p_html"></p>
        <p>{{p_html}}</p>
        <b>在你的站点上动态渲染任意的 HTML 是非常危险的，因为它很容易导致 XSS 攻击。请只对可信内容使用 HTML 插值，绝不要将用户提供的内容作为插值。</b>
        <p>{{(yes?"使用":"不使用")+"javascript表达式"}}</p>
        <p v-if="yes">使用JavaScript表达式</p>
        <a v-bind:[attributename]="message" target="_blank">{{message}}</a>
        <p v-on:click="goPage5">点击展开page5</p>
        <router-view></router-view>
        <p>v-bind:缩写为：(建议使用)</p>
        <p>v:on:缩写为@（建议使用）</p>
        <p>生命周期的created中添加防抖函数</p>
        <i>关于防抖和节流，明天再再看</i>
    </div>
</template>

<script>
import router from '../../router'
export default {
  name: 'page4',
  data () {
    return {message: 'www.baidu,com', p_html: '<h1>原始HTML</h1>', yes: true, attributename: 'href'}
  },
  methods: {
    goPage5 () {
      router.push('/page4/page5')
    },
    backhome () {
      router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
