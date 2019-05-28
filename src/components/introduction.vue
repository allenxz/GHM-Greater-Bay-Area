<template>
  <div>
    <div class="banner"></div>
    <!-- 基本介绍 start -->
    <div class="main-area">
      <!-- 背景 start-->
      <h3 class="bg-h3">背景</h3>
      <a-row class="background">
        <a-col :span="10" class="background-img">
          <img src="../assets/images/name.jpg" alt="粤港澳大湾区" class="img-responsive">
        </a-col>
        <a-col :span="10" class="text background-text">
          <p>为构筑更好的国内外和平发展环境，助推中华民族伟大复兴，使中国发展更多惠及周边国家，实现共同发展，形成人类命运共同体。2013年9月和10月，国家主席习近平分别在哈萨克斯坦和东南亚访问期间提出共建“丝绸之路经济带”和“21世纪海上丝绸之路”的重大倡议。2013年11月，中共十八届三中全会通过的《中共中央关于全面深化改革若干重大问题的决定》进一步明确提出要推进丝绸之路经济带、海上丝绸之路建设，形成全方位开放的新格局。
为落实“一带一路”倡议，2015年3月，由国家发展改革委、外交部、商务部联合出台的《推动共建丝绸之路经济带和21世纪海上丝绸之路的愿景与行动》第一次在国家层面提出了“粤港澳深化合作，打造粤港澳大湾区”的构想。
</p>
        </a-col>
      </a-row>
      <!-- 背景 end-->
      <!-- 目的 start-->
      <div class="work jarallax">
        <div class="container">
          <div class="work-agileinfo">
            <h3>目的</h3>
            <p>为全面贯彻党的十九大精神，全面准确贯彻“一国两制”方针，充分发挥粤港澳综合优势，深化内地与港澳合作，进一步提升粤港澳大湾区在国家经济发展和对外开放中的支撑引领作用，支持香港、澳门融入国家发展大局，增进香港、澳门同胞福祉，保持香港、澳门长期繁荣稳定，让港澳同胞同祖国人民共担民族复兴的历史责任、共享祖国繁荣富强的伟大荣光。</p>
          </div>
        </div>
      </div>
      <!-- 目的 end-->
      <!-- 指导思想 start-->
      <h3 class="dt-h3">指导思想</h3>
      <div class="container">
        <p class="text">深入贯彻习近平新时代中国特色社会主义思想和党的十九大精神，统筹推进“五位一体”总体布局和协调推进“四个全面”战略布局，全面准确贯彻“一国两制”、“港人治港”、“澳人治澳”、高度自治的方针，严格依照宪法和基本法办事，坚持新发展理念，充分认识和利用“一国两制”制度优势、港澳独特优势和广东改革开放先行先试优势，解放思想、大胆探索，不断深化粤港澳互利合作，进一步建立互利共赢的区域合作关系，推动区域经济协同发展，为港澳发展注入新动能，为全国推进供给侧结构性改革、实施创新驱动发展战略、构建开放型经济新体制提供支撑，建设富有活力和国际竞争力的一流湾区和世界级城市群，打造高质量发展的典范</p>
      </div>
      <!-- 指导思想 end-->
      <scrollToTop/>
    </div>
    <!-- 基本介绍 end -->
  </div>
</template>

<script>
import scrollToTop from './scrollToTop';
export default {
  components: {
    scrollToTop
  } 
}

</script>
<style scoped>
  .background-img{
    margin-right: 80px;
  }
  .banner{
    background:url(../assets/images/banner-1.jpg)no-repeat center center;
    background-size: cover; 
    min-height:300px;
  }
  .main-area{
    margin-top: 40px;
  }
  .bg-h3{
    width: 125px;
  }
  .dt-h3{
    width: 200px;
    margin-top: 90px;
  }
  h3{
    color: #000;
    font-family: 'Raleway', sans-serif;
    font-size: 2em;
    font-weight: 500;
    margin-bottom: 0.8em;
    text-transform: capitalize;
    margin: 0 auto;
    border-left: 5px solid #01edc9;
    padding-left: 0.6em;
    line-height: 0.9em;
  }
  .background{
    width: 80%;
    margin:90px 150px;
  }
  .img-responsive{
    display: block;
    max-width: 100%;
    height: auto;
  }
  .text{
    font-size: 18px;
    color: rgb(153, 153, 153);
    line-height: 1.8em;
  }
  .mid-banner{
    background:url(../assets/images/mid-banner.jpg)no-repeat center center;
    background-size: cover; 
    height:200px;
    margin-bottom: 40px;
  }
  .content{
    height: 100%;
    padding: 90px;
    text-align: center;
    background: rgba(0, 0, 0, 0.53);
    color: #fff;
    font-size: 25px;
  }
  .container{
    width: 60%;
    margin: 40px auto 160px auto;
  }
  .container p{
    text-align: center;
  }
  .work {
    background: url(../assets/images/mid-banner.jpg)no-repeat 0px 0px;
    background-size: cover;
    background-attachment: fixed;
    padding: 5em 0;
  }
  .work-agileinfo {
    text-align: center;
    background: rgba(0, 0, 0, 0.53);
    padding: 3em;
  }
  .work-agileinfo h3 {
    font-size: 2em;
    color: #fff;
  }
  .work-agileinfo p {
    font-size:1em;
    line-height:1.8em; 
    color: #fff;
    margin: 2em auto;
    letter-spacing: 2px;
  } 
</style>
