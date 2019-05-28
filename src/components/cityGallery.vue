<template>
  <div class="wrapper">
    <a-carousel arrows dotsClass="container slick-dots slick-thumb">
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
  padding-top: 1px;
  /* background: #A6CDE2; */
  background: linear-gradient(54deg, #9164ff, #8bfff4);
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
  margin: 80px 0 0 0;
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
</style>
