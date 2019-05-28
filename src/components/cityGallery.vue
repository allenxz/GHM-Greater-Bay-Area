<template>
  <div class="wrapper">
    <div class="scene">
      <div class="cube">
        <div class="cube__face cube__face--front">
          <svg class="svg-face" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177 177">
            <line class="pattern1" x1="5" y1="5" x2="172" y2="5"/>
            <line class="pattern1" x1="5" y1="172" x2="172" y2="172"/>
            <line class="pattern1" x1="5" y1="5" x2="5" y2="172"/>
            <line class="pattern1" x1="172" y1="5" x2="172" y2="172"/>
            <line class="pattern2" x1="172" y1="88.5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="88.5" y1="5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="5" y1="88.5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="88.5" y1="172" x2="88.5" y2="88.5"/>
          </svg>
        </div>
        <div class="cube__face cube__face--back">
          <svg class="svg-face" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177 177">
            <line class="pattern1" x1="5" y1="5" x2="172" y2="5"/>
            <line class="pattern1" x1="5" y1="172" x2="172" y2="172"/>
            <line class="pattern1" x1="5" y1="5" x2="5" y2="172"/>
            <line class="pattern1" x1="172" y1="5" x2="172" y2="172"/>
            <line class="pattern2" x1="172" y1="88.5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="88.5" y1="5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="5" y1="88.5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="88.5" y1="172" x2="88.5" y2="88.5"/>
          </svg>
        </div>
        <div class="cube__face cube__face--right">
          <svg class="svg-face" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177 177">
            <line class="pattern1" x1="5" y1="5" x2="172" y2="5"/>
            <line class="pattern1" x1="5" y1="172" x2="172" y2="172"/>
            <line class="pattern1" x1="5" y1="5" x2="5" y2="172"/>
            <line class="pattern1" x1="172" y1="5" x2="172" y2="172"/>
            <line class="pattern2" x1="172" y1="88.5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="88.5" y1="5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="5" y1="88.5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="88.5" y1="172" x2="88.5" y2="88.5"/>
          </svg>
        </div>
        <div class="cube__face cube__face--left">
          <svg class="svg-face" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177 177">
            <line class="pattern1" x1="5" y1="5" x2="172" y2="5"/>
            <line class="pattern1" x1="5" y1="172" x2="172" y2="172"/>
            <line class="pattern1" x1="5" y1="5" x2="5" y2="172"/>
            <line class="pattern1" x1="172" y1="5" x2="172" y2="172"/>
            <line class="pattern2" x1="172" y1="88.5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="88.5" y1="5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="5" y1="88.5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="88.5" y1="172" x2="88.5" y2="88.5"/>
          </svg>
        </div>
        <div class="cube__face cube__face--top">
          <svg class="svg-face" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177 177">
            <line class="pattern1" x1="5" y1="5" x2="172" y2="5"/>
            <line class="pattern1" x1="5" y1="172" x2="172" y2="172"/>
            <line class="pattern1" x1="5" y1="5" x2="5" y2="172"/>
            <line class="pattern1" x1="172" y1="5" x2="172" y2="172"/>
            <line class="pattern2" x1="172" y1="88.5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="88.5" y1="5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="5" y1="88.5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="88.5" y1="172" x2="88.5" y2="88.5"/>
          </svg>
        </div>
        <div class="cube__face cube__face--bottom">
          <svg class="svg-face" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177 177">
            <line class="pattern1" x1="5" y1="5" x2="172" y2="5"/>
            <line class="pattern1" x1="5" y1="172" x2="172" y2="172"/>
            <line class="pattern1" x1="5" y1="5" x2="5" y2="172"/>
            <line class="pattern1" x1="172" y1="5" x2="172" y2="172"/>
            <line class="pattern2" x1="172" y1="88.5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="88.5" y1="5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="5" y1="88.5" x2="88.5" y2="88.5"/>
            <line class="pattern2" x1="88.5" y1="172" x2="88.5" y2="88.5"/>
          </svg>
        </div>
      </div>
    </div>
    <a-carousel arrows dotsClass="slick-dots slick-thumb">
      <a slot="customPaging" slot-scope="props">
        <img :src="getImgUrl(props.i)" />
      </a>
      <div v-for="item in 4" :key="item.index">
        <img :src="url[item-1]" style="width:439px;height:422px;"/>
        <p class="desc">{{desc[item-1]}}</p>
      </div>
    </a-carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      url: [
        'https://s2.ax1x.com/2019/05/15/E7gIxJ.jpg',
        'https://s2.ax1x.com/2019/05/15/E7g524.jpg',
        'https://s2.ax1x.com/2019/05/15/E7g7rR.jpg',
        'https://s2.ax1x.com/2019/05/15/E7gTM9.jpg'
      ],
      desc: [
        '一颗无比璀璨的“东方之珠。香港， 巩固和提升作为国际金融、航运、贸易中心和国际航空枢纽的地位，推动金融、商贸、物流、专业服务等向高增值方向发展，建设亚太区国际法律及争议解决服务中心。',
        '商业和繁荣的的交织。经历了回归前后两重天的澳人们激情感怀着、珍惜着。澳门拒绝“安于现状”，拒绝重复，这海岸线上财富的传奇，正以极其迅且疾的速度更新着自己的记录。',
        '大湾区统筹龙头。相当长时期内，广州的地位毋庸置疑，目前广州的GDP虽然稍逊深圳，但其省会行政规划统筹和引领作用，只会得到加强。广州未来：粤港澳大湾区核心增长极、国家科技产业创新中心、国际交往中心。',
        '科技创新中心，引擎之一。深圳近年来科技兴业，科技实力傲视群雄，已跻身世界科技城市之列。深圳未来：粤港澳大湾区建设的新引擎、全球科技产业创新中心、“一带一路”交通枢纽、全球影响力的海洋中心城市。'
      ]
    }
  },
  methods: {
    getImgUrl (i) {
      return this.url[i];
    }
  }
} 
</script>
<style scoped>
.wrapper{
  margin-top: 150px;
}
.desc{
  width: 60%;
  margin: 30px auto;
  text-align: center;
  font-size: 18px;
  line-height: 40px;
}
.ant-carousel{
  height: 100vh;
  margin: 80px 0;
}
.ant-carousel >>> .slick-dots {
  height: auto;
}
.ant-carousel >>> .slick-slide img{
  border: 5px solid #FFF;
  display: block;
  margin: auto;
  max-width: 80%;
}
.ant-carousel >>> .slick-thumb {
  bottom: -45px;
}
.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img{
    filter: grayscale(0%);
}
 .slick-active img{
  border: 1px solid rgb(94, 94, 94);
}
.scene {
  width: 20rem;
  height: 20rem;
  margin: 10rem auto;
  perspective: 1200px;
  position:absolute;
  left:5rem;
  top:-5rem;
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
  stroke: hsl(0, 0%, 10%);
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
}
</style>
