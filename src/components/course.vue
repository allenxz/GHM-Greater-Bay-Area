<template>
  <section class="timeline">
    <p class="desc">“粤港澳大湾区”从学术界的讨论到地方政策的考量，再到国家战略的提出，历时20余年。</p>
    <ul>  
        <li>
            <div>
                <time>1994年</time>
                <div class="discovery">
                    <p>
                        时任香港科技大学校长吴家玮提出，对标旧金山，建设深港湾区。
                    </p>
                </div>
            </div>
        </li>
        <li>
            <div>
                <time>2014年</time>
                <div class="discovery">
                    <p>
                        深圳市政府工作报告提出“打造湾区经济”。
                    </p>
                </div>
            </div>
        </li>
        <li>
            <div>
                <time>2016年3月</time>
                <div class="discovery">
                    <p>
                        《中华人民共和国国民经济和社会发展第十三个五年规划纲要》正式发布，明确提出“支持港澳在泛珠三角区域合作中发挥重要作用。
                    </p>
                </div>
            </div>
        </li>
        <li>
            <div>
                <time>2017年7月1日</time>
                <div class="discovery">
                    <p>
                        《深化粤港澳合作，推进大湾区建设框架协议》在香港签署，国家主席习近平出席签署仪式。在习近平见证下，香港特别行政区行政长官林郑月娥、澳门特别行政区行政长官崔世安、国家发展和改革委员会主任何立峰、广东省省长马兴瑞共同签署了《深化粤港澳合作，推进大湾区建设框架协议》。
                    </p>
                </div>
            </div>
        </li>
        <li>
            <div>
                <time>2017年12月18日</time>
                <div class="discovery">
                    <p>
                        习近平总书记在中央经济工作会议上指出，粤港澳大湾区建设要科学规划，加快建立协调机制。
                    </p>
                </div>
            </div>
        </li>
        <li>
            <div>
                <time>2018年3月7日</time>
                <div class="discovery">
                    <p>
                        习近平总书记在参加广东代表团审议时指出，要抓住建设粤港澳大湾区重大机遇，携手港澳加快推进相关工作，打造国际一流湾区和世界级城市群 ；同月，国家发展改革委主任何立峰表示，粤港澳大湾区发展规划纲要的编制工作已基本完成，下一步将加快编制产业发展、交通、生态环境等方面的专项规划。
                    </p>
                </div>
            </div>
        </li>
        <li>
            <div>
                <time>2018年5月10日</time>
                <div class="discovery">
                    <p>
                        习近平总书记先后主持召开中央政治局常委会会议和中央政治局会议，对《粤港澳大湾区发展规划纲要》进行审议。 
                    </p>
                </div>
            </div>
        </li>
        <li>
            <div>
                <time>2018年8月15日</time>
                <div class="discovery">
                    <p>
                        中共中央政治局常委、国务院副总理、粤港澳大湾区建设领导小组组长韩正在北京人民大会堂主持召开粤港澳大湾区建设领导小组全体会议。
                    </p>
                </div>
            </div>
        </li>
        <li>
            <div>
                <time>2018年11月</time>
                <div class="discovery">
                    <p>
                        《中共中央国务院关于建立更加有效的区域协调发展新机制的意见》明确指出，以香港、澳门、广州、深圳为中心引领粤港澳大湾区建设，带动珠江－西江经济带创新绿色发展。
                    </p>
                </div>
            </div>
        </li>
        <li>
            <div>
                <time>2019年1月11日</time>
                <div class="discovery">
                    <p>
                        国务院港澳事务办公室主任张晓明表示，中央对粤港澳大湾区的战略定位有五个：一是充满活力的世界级城市群。二是具有全球影响力的国际科技创新中心。三是“一带一路”建设的重要支撑。四是内地与港澳深度合作示范区。五是宜居宜业宜游的优质生活圈。
                    </p>
                </div>
            </div>
        </li>
        <li>
            <div>
                <time>2019年2月18日</time>
                <div class="discovery">
                    <p>
                        中共中央、国务院印发了《粤港澳大湾区发展规划纲要》，并发出通知，要求各地区各部门结合实际认真贯彻落实。
                    </p>
                </div>
            </div>
        </li>
    </ul>
    <scrollToTop/>
  </section>
</template>
<script>
import scrollToTop from './scrollToTop';
export default {
  mounted: function () {
    var items = document.querySelectorAll('.timeline li');
    function isElementInViewport (el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc () {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          if (!items[i].classList.contains('in-view')) {
            items[i].classList.add('in-view');
          }
        } else if (items[i].classList.contains('in-view')) {
            items[i].classList.remove('in-view');
        }
      }
    }
    window.addEventListener('load', callbackFunc);
    window.addEventListener('scroll', callbackFunc);
  },
  components: {
    scrollToTop
  }
};

</script>
<style scoped>
  .timeline {
    font: normal 16px/1.5 'Titillium Web', sans-serif;
    background: linear-gradient(54deg, #9164ff, #8bfff4);
    color: #3c3f64;
    overflow-x: hidden;
    padding-bottom: 50px;
  }
  .desc{
    font-size: 25px;
    font-weight: 600;
    color: rgb(139, 139, 139);
    text-align: center;
    width: 80%;
    margin: 50px auto;
  }
  .timeline ul li {
    list-style-type: none;
    position: relative;
    width: 6px;
    margin: 0 auto 0;
    padding-top: 50px;
    background: #fff;
  }
  .timeline ul li::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%) rotate(45deg);
    width: 20px;
    min-height: 20px;
    z-index: 2;
    background: #eee;
  }
  .timeline ul li div {
    position: relative;
    bottom: 0;
    width: 400px;
    padding: 20px;
    background: #fff;
    box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
  .timeline ul li div time {
    position: absolute;
    background: #f5af19;
    min-width: 80px;
    height: 30px;
    top: -15px;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
  }
  .timeline ul li div div {
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .timeline ul li div div p {
    text-align: center;
  }
  .timeline ul li div .discovery {
    margin-right: 10px;
  }
  .timeline ul li:nth-of-type(odd) > div {
    left: 45px;
  }
  .timeline ul li:nth-of-type(even) > div {
    left: -439px;
  }
  
  .timeline ul li div {
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  .timeline ul li:nth-of-type(odd) div {
    transform: translate3d(100px, -10px, 0) rotate(10deg);
  }
  .timeline ul li:nth-of-type(even) div {
    transform: translate3d(-100px, -10px, 0) rotate(10deg);
  }
  .timeline ul li.in-view div {
    transform: none;
    visibility: visible;
    opacity: 1;
  }
  
  @media screen and (max-width: 900px) {
    .timeline ul li div {
      width: 250px;
      flex-direction: column;
    }
    .timeline ul li div div {
      width: 80%;
      margin: 10px;
    }
    .timeline ul li:nth-of-type(even) > div {
      left: -289px;
    }
  }
  @media screen and (max-width: 600px) {
    body {
      background: #8bfff4;
    }
  
    .timeline ul li {
      margin-left: 20px;
    }
    .timeline ul li div {
      width: calc(100vw - 91px);
    }
    .timeline ul li:nth-of-type(even) > div {
      left: 45px;
    }
}
</style>
