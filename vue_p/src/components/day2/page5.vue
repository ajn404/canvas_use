<template>
    <p v-on:click="goBack">page5</p>
</template>

<script>
import router from '../../router'
export default {
  name: 'page5',
  methods: {
    goBack () {
      router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
