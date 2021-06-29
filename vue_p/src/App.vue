<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<!--这里的 <router-view> 是最顶层的出口，渲染最高级路由匹配到的组件-->
<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
}
</style>
