<template>
  <div>
    <nav class="navbar">
      <img class="logo" src="../assets/images/logo.png">
      <ul>
        <li><router-link to="/main/aboutUs">关于我们</router-link></li>
        <li><router-link to="/main/significance">意义</router-link></li>
        <li><router-link to="/main/course">谋划历程</router-link></li>
        <li><router-link to="/main/cityGallery">战略城市</router-link></li>
        <li><router-link to="/main/introduction">基本介绍</router-link></li>
        <li><router-link to="/index">首页</router-link></li>
      </ul>
    </nav>
    <main class="view">
      <transition name="slide-fade">
        <router-view/>
      </transition>
    </main>
    <footer>
      <img class="teamLogo" src="../assets/images/teamLogo.png">
      <p>©Copyright 2019 "十佳青年小组"</p>
    </footer>
  </div>
</template>
  
<script>
export default {
}

</script>
<style scoped>
@import url('../../static/css/reset.css');
  .navbar{
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 99;
    box-shadow: 3px 3px 5px #888888;
  }
  .logo{
    position: relative;
    top:-60px;
    left:10px;
    height: 192px;
    width: 256px;
  }
  .navbar ul{
    position: relative;
    top:-192px;
    margin: -20px 120px;
  }
  .navbar li{
    float: right;
    text-align: center;
    cursor: pointer;
    width: 100px;
    height: 60px;
    line-height: 50px;
    box-sizing: border-box;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 1px;
    margin-top: 30px;
    margin-left: 35px;
    color: #363537;
    box-shadow: 0 0 0 #B1DDF8, 0 0 0 #36B4E7, 0 0 0 #007DB7;
    transition: all .15s ease-in;
  }
   .navbar li:hover{
    margin-top: 37.5px;
    margin-left: 42.5px;
    color: #00B3FE;
    box-shadow: 5px -5px 0 #B1DDF8, 8px -8px 0 #36B4E7, 10px -10px 0 #007DB7;
  }
  .router-link-active{
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    color: #00B3FE;
  }
  .view{
    margin-top: 80px;
    padding-bottom:180px;
  }
  footer{
    margin-top:-180px;
    width: 100%;
    height: 180px;
    background: #F8F8F8;
  }
  footer p{
    text-align: center;
  }
  .teamLogo{
    position: relative;
    left: 44%;
    height: 120px;
    width: 160px;
  }
  /* 切换动画 */
  .slide-fade{
    position: absolute;left:0;right: 0;
  }
  .slide-fade-enter-active{
    transition: all 1.2s ease;
  }
  .slide-fade-leave-active{
    transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    left:0;
    right: 0;
    transform: translateY(50px);
    opacity: 0;
  }
</style>
button {
