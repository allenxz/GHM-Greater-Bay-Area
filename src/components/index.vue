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
</style>
