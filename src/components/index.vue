<template>
  <header>
    <div class="row">
      <div class="hero">
        <h1>粤 港 澳 大 湾 区</h1>
        <div class="button">
          <a class="btn btn-animation" @click="toShow">观看视频</a>
          <router-link class="btn btn-animation" to="/main/introduction">了解更多</router-link>
        </div>
      </div>
    </div>
    <div class="player hide">
      <video id="video" width="960" height="720">
          <source src="../assets/videos/yga.mp4" type="video/ogg">
          <source src="../assets/videos/yga.mp4" type="video/mp4">
      </video>
    </div>
    <a class="btn btn-animation close hide" @click="toClose">关闭视频</a>
  </header>
</template>

<script>
  export default{
    data: function () {
      return {
        show: 'none'
      }
    },
    methods: {
      toShow () {
        document.querySelector('.player').classList.remove('hide');
        document.querySelector('.close').classList.remove('hide');
        document.querySelector('.row').classList.add('hide');
        var video = document.getElementById('video');
        video.load();
        video.play();
      },
      toClose () {
        document.querySelector('.player').classList.add('hide');
        document.querySelector('.close').classList.add('hide');
        document.querySelector('.row').classList.remove('hide');
        var video = document.getElementById('video');
        video.pause();
      }
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
.close{
  position: absolute;
  top:30px;
  left:46%;
  z-index: 99;
}
.hide{
  display: none;
}
.player{
  width: 100%; 
  height: 100vh;
  z-index: 50;
  margin: 0 auto;
  animation: wrapper-gradient 0.5s linear;
}
.player video {
    width: 100%;
    height: 100%;
    display: block;
}

@keyframes wrapper-gradient {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
 
.row::after{
    content:"";
    clear:both;
    display:block;
}

header{
  background:linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)), url("..\assets\images\nN7f-hmuuiyw1979176.jpg");
  background-size:cover;
  background-repeat: no-repeat;
  height: 100vh;
}

.row {
    width:1200px;
    margin:0 auto;
}

.hero{
    position:absolute;
    width:1200px;
    margin-top:0px;
    margin-left:0px;
}

h1{
    color:white;
    text-transform: uppercase;
    font-size:80px;
    animation-name: heading;
    animation-duration: 3s;
    animation-fill-mode: forwards;  
    text-align:center;
    margin-top: 275px;
}

.button{
    margin:80px auto;
    width: 300px;
}

.btn{
    border:solid 1px white;
    padding:10px 30px;
    color:white;
    text-decoration:none;
    margin-right:35px;
    text-transform: uppercase;
    font-size:13px;
}

.btn-animation{
    animation-name: btn;
    animation-fill-mode: forwards;
}

.btn-animation:hover{
    background-color:#00B3FE;
}

@keyframes btn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

/* .scene {
  width: 20rem;
  height: 20rem;
  margin: 10rem auto;
  perspective: 1200px;
  position:fixed;
  left:36%;
  top:-10%;
  z-index: -1;
}
.cube {
  position: relative;
  width: 100%;
  height: 100%;
  font-weight: bold;
  transform-style: preserve-3d;
  animation: rotate 10s linear infinite;
}
.cube__face {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 20rem;
  font-size: 3rem;
  opacity: .8;
}
.cube__face--front {
  background-color: transparent;
  transform: rotateY(0deg) translateZ(10rem);
}
.cube__face--back {
  background-color: transparent;
  transform: rotateY(180deg) translateZ(10rem);
}
.cube__face--right {
  background-color: transparent;
  transform: rotateY(90deg) translateZ(10rem);
}
.cube__face--left {
  background-color: transparent;
  transform: rotateY(-90deg) translateZ(10rem);
}
.cube__face--top {
  background-color: transparent;
  transform: rotateX(90deg) translateZ(10rem);
}
.cube__face--bottom {
  background-color: transparent;
  transform: rotateX(-90deg) translateZ(10rem);
}
@keyframes rotate {
  0% {
    transform: rotate3d(1, 1, 0, 360deg);
  }
  50% {
    transform: rotate3d(1, 1, 0, 180deg);
  }
  100% {
    transform: rotate3d(0, 0, 0, 0);
  }
}
svg {
  width: 100%;
}
.svg-face {
  fill:none;
  stroke: hsl(0, 0%, 20%);
  stroke-width: 10;
  stroke-linecap:square;
}
.pattern1 {
  stroke-dasharray: 0 167;
  stroke-dashoffset: -83.5;
  animation: pattern1 4s linear infinite; 
}
.pattern2 {
  stroke-dasharray: 83.5;
  stroke-dashoffset: 83.5;
  animation: pattern2 4s linear infinite;
}
@keyframes pattern1 {
  0% {
    stroke-dasharray: 0 167;
    stroke-dashoffset: -83.5;
  }
  25% {
    stroke-dasharray: 167 167;
    stroke-dashoffset: 0;
  }
  50%, 75%, 100% {
    stroke-dasharray: 0 167;
    stroke-dashoffset: -83.5;
  }
}
@keyframes pattern2 {
  0%, 25%, 50% {
    stroke-dasharray: 83.5;
    stroke-dashoffset: 83.5;
  }
  75% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 83.5;
  }
} */
</style>
