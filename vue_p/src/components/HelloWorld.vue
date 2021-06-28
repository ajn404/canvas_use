<template>
    <div class="box">
        <div class="tit">我的唱片</div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    body{
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .box{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: url("../assets/78590.jpg") no-repeat center;
        background-size: 200px 200px;
        background-clip: border-box;
        cursor: pointer;
            /*    背景被裁剪到边框盒*/
        /*padding-box 内边距框    */
        /*content-box 内容框   */
        .tit{
            font-size: 20px;
            line-height: 200px;
            color: hsl(333,90%,20%);
            font-weight: 900;
            display: flex;
            justify-content: center;
            animation: rotating 4s linear infinite;

        }
        &:hover {
         .tit {
             color: #2c3e50;
             animation: none;
             font-size: 25px;
             transition: all .5s;
         }
        }
    }
    @keyframes rotating {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }

</style>
