<template>
    <div class="box">
        <div class="tit" >
          <router-link tag="a" to="page1">
            嵌套路由使用
          </router-link>
        </div>
        <span class="demonstration">走马灯</span>
        <el-carousel>
            <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
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
                a{
                    color: #fff;
                    text-decoration: none;
                }

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
        .el-carousel{
            width: 400px;
            height: 150px;
            overflow-y: hidden;
            .el-carousel__item{
                &:nth-child(2n){
                    background: linear-gradient(to left,#123456,#876543);
                }
                &:nth-child(2n+1){
                    background: #999999;
                }
                h3{
                    color: #475669;
                    font-size: 14px;
                    opacity: 0.75;
                    line-height: 150px;
                    margin: 0;
                }
            }
            .el-carousel__arrow{
                top:30%;
            }
        }
    }
</style>
