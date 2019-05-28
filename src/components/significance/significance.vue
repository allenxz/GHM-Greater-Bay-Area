<template>
  <div class="wrapper init">
        <ul class="content">
            <li class="item">
                <div class="inner">
                    <div class="bjPic"></div>
                    <div class="dir">
                        <h2>经济发展引擎</h2>
                    </div>
                    <div class="showBox">
                        <div class="showBox-dir">
                            <h2>国家经济发展的引擎与创新中心</h2>
                        </div>
                        <div class="close">
                        </div>
                    </div>
                </div>

            </li>
            <li class="item">
                <div class="inner">
                    <div class="bjPic"></div>
                    <div class="dir">
                        <h2>世界级城市群</h2>
                    </div>
                    <div class="showBox">
                        <div class="showBox-dir">
                            <h2>具备全球影响力的城市群</h2>
                        </div>
                        <div class="close">
                        </div>
                    </div>
                </div>

            </li>
            <li class="item">
                <div class="inner">
                    <div class="bjPic"></div>
                    <div class="dir">
                        <h2>中心网络交通体系</h2>
                    </div>
                    <div class="showBox">
                        <div class="showBox-dir">
                            <h2>区域内部已经形成多中心网络化发展格局，形成以公路为主，其他交通协同的网络化交通体系</h2>
                        </div>
                        <div class="close">
                        </div>
                    </div>
                </div>

            </li>
            <li class="item">
                <div class="inner">
                    <div class="bjPic"></div>
                    <div class="dir">
                        <h2>紧密城市联系网络</h2>
                    </div>
                    <div class="showBox">
                        <div class="showBox-dir">
                            <h2>形成紧密的城市联系网络</h2>
                        </div>
                        <div class="close">
                        </div>
                    </div>
                </div>

            </li>
            <li class="item">
                <div class="inner">
                    <div class="bjPic"></div>
                    <div class="dir">
                        <h2>促进交流合作</h2>
                    </div>
                    <div class="showBox">
                        <div class="showBox-dir">
                            <h2>有利于丰富“一国两制”实践内涵，进一步密切内地与港澳交流合作，为港澳经济社会发展以及港澳同胞到内地发展提供更多机会，保持港澳长期繁荣稳定；</h2>
                        </div>
                        <div class="close">
                        </div>
                    </div>
                </div>

            </li>
            <li class="item">
                <div class="inner">
                    <div class="bjPic"></div>
                    <div class="dir">
                        <h2>推进供给侧结构性改革</h2>
                    </div>
                    <div class="showBox">
                        <div class="showBox-dir">
                            <h2>有利于贯彻落实新发展理念，深入推进供给侧结构性改革，加快培育发展新动能、实现创新驱动发展，为我国经济创新力和竞争力不断增强提供支撑</h2>
                        </div>
                        <div class="close">
                        </div>
                    </div>
                </div>

            </li>
            <li class="item">
                <div class="inner">
                    <div class="bjPic"></div>
                    <div class="dir">
                        <h2>推进一带一路建设</h2>
                    </div>
                    <div class="showBox">
                        <div class="showBox-dir">
                            <h2>有利于推进“一带一路”建设，通过区域双向开放，构筑丝绸之路经济带和21世纪海上丝绸之路对接融汇的重要支撑区。</h2>
                        </div>
                        <div class="close">
                        </div>
                    </div>
                </div>

            </li>
            <li class="item">
                <div class="inner">
                    <div class="bjPic"></div>
                    <div class="dir">
                        <h2>建设国际化新平台</h2>
                    </div>
                    <div class="showBox">
                        <div class="showBox-dir">
                            <h2>有利于进一步深化改革、扩大开放，建立与国际接轨的开放型经济新体制，建设高水平参与国际经济合作新平台</h2>
                        </div>
                        <div class="close">
                        </div>
                    </div>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
export default {
    mounted: function () {
        var wrap = document.querySelector('.wrapper');
        init();

        function init () {
            /* 图片加载延迟执行，不延迟，第二次进入的速度快会直接闪现出现 */
            setTimeout(function () {
                wrap.classList.remove('init');
            }, 200)

            /* 执行事件函数 */
            bindEvent();
        }
        
        function bindEvent () {
            var items = document.querySelectorAll('.item');
            for (const item of items) {
                item.addEventListener('click', function () {
                    this.classList.add('active');
                    wrap.classList.add('startShowItem');
                })
            }
            
            var closes = document.querySelectorAll('.close');
            console.log(closes);
            for (const close of closes) {
                close.addEventListener('click', function (e) {
                e.stopPropagation();
                document.querySelector('.active').classList.remove('active');
                wrap.classList.remove('startShowItem');   
            })
            }
        }
    }
}
</script>
<style scoped>
.wrapper{
    width: 100%;
    height: 725px;
    background: linear-gradient(54deg, #9164ff, #8bfff4);
    /* background: #A6CDE2; */
    display: flex;
    justify-content: center;
    align-items: center;    /* opacity: 0.5; */
}

.wrapper .content{
    display: flex;
    width: 80%;
    height: 80%;
    align-items: center;
    /* border: 1px solid orange; */
    justify-content: space-between;
}

.wrapper .content .item{
    position: relative;
     width: 12%;
     height: 100%;
     color: #fff;
     background-color: #333;
     border-radius: 20px;
     cursor: pointer;
     overflow: hidden;
     transition: height 0.5s ease-in 0.5s, width 0.5s ease-in;
}

.wrapper .content .item .inner{
    width: 100%;
    height: 100%;
    position: relative;
}
/*背景图片动画*/
.wrapper .content .item:nth-of-type(1) .inner{
    transition: transform 0.5s ease-in 0.1s;
    
}
.wrapper .content .item:nth-of-type(2) .inner{
    transition: transform 0.5s ease-in 0.2s;
    
}
.wrapper .content .item:nth-of-type(3) .inner{
    transition: transform 0.5s ease-in 0.3s;
    
}
.wrapper .content .item:nth-of-type(4) .inner{
    transition: transform 0.5s ease-in 0.4s;
    
}
.wrapper .content .item:nth-of-type(5) .inner{
    transition: transform 0.5s ease-in 0.5s;
    
}
.wrapper .content .item:nth-of-type(6) .inner{
    transition: transform 0.5s ease-in 0.6s;
    
}
.wrapper .content .item:nth-of-type(7) .inner{
    transition: transform 0.5s ease-in 0.7s;
    
}
.wrapper .content .item:nth-of-type(8) .inner{
    transition: transform 0.5s ease-in 0.8s;
    
}
.wrapper .content .item .inner .bjPic{
    width: 100%;
    height: 100%;
    border-radius: 20px;
    opacity: 0.5;
}
.wrapper .content .item .inner .dir{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.5s linear 0.3s;
}
.wrapper .content .item:hover .inner .dir h2{
    color: #000;
    font-weight: 700;
}
.wrapper .content .item .inner .dir h2{
    font-size: 30px;
    color: #fff;
    line-height: 40px;

}
.wrapper .content .item:nth-of-type(1) .inner .bjPic{
    background-image: url("132.jpg");
    background-size: cover;
    background-position: center;
}
.wrapper .content .item:nth-of-type(2) .inner .bjPic{
   background-image: url("133.jpg");
    background-size: cover;
    background-position: center;
}
.wrapper .content .item:nth-of-type(3) .inner .bjPic{
   background-image: url("134.jpg");
    background-size: cover;
    background-position: center;
}
.wrapper .content .item:nth-of-type(4) .inner .bjPic{
   background-image: url("135.jpg");
    background-size: cover;
    background-position: center;
}
.wrapper .content .item:nth-of-type(5) .inner .bjPic{
    background-image: url("136.jpg");
    background-size: cover;
    background-position: center;
}
.wrapper .content .item:nth-of-type(6) .inner .bjPic{
    background-image: url("137.jpg");
    background-size: cover;
    background-position: center;
}
.wrapper .content .item:nth-of-type(7) .inner .bjPic{
     background-image: url("130.jpg");
    background-size: cover;
    background-position: center;
}
.wrapper .content .item:nth-of-type(8) .inner .bjPic{
    background-image: url("139.jpg");
    background-size: cover;
    background-position: center;
}
.wrapper .content .item .inner .dir{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.5s linear 0.3s;
}

.wrapper .content .item:hover .inner .bjPic{
    opacity: 1;
}
.wrapper .content .item:hover .inner .dir{
    font-size: 18px;
    font-weight: bold;
}
.wrapper .content .item .showBox{
    width: 100%;
    height: 100%;
    /* position: absolute; */
    opacity: 0;
}
.wrapper .content .item .showBox .showBox-dir{
    position: absolute;
    left: 50px;
    top: 50px;
}
.wrapper .content .item .showBox .close{
    width: 30px;
    height: 30px;
    position: absolute;
    right: 50px;
    top: 50px;
}
.wrapper .content .item .showBox .close::before,
.wrapper .content .item .showBox .close::after{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    content: "";
    display: block;
    width: 20px;
    height: 2px;
    background-color: #fff;
}
.wrapper .content .item .showBox .close::before{
    transform: rotateZ(45deg);
}
.wrapper .content .item .showBox .close::after{
    transform: rotate(-45deg);
}

/*初始状态*/
.init .content .item .inner{
    transform: translateY(100%);
}

/*点击展示动画*/
.startShowItem .content .item{
    transition: width 0.5s ease-in 0.5s, height 0.5s ease-in;
}
.startShowItem .content .item.active{
    width: 100%;
}
.startShowItem .content .item:not(.active){
    height: 0%;
    width: 0%;
    /* transition: height 0.5s ease-in; */
}
.startShowItem .content .item .inner .dir{
    opacity: 0;
    transition: opacity 0.5s linear 0.2s;
}
.startShowItem .content .item .inner .showBox{
    opacity: 1;
    transition: opacity 0.5s linear 0.5s;
}

/* 字体 */
.showBox-dir{
    width: 800px;
}
.showBox-dir h2{
    font-size: 28px;
    font-weight: 500;
    color: #fff;
    line-height: 35px;
}
</style>
