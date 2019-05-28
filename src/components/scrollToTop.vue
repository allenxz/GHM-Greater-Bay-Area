<template>
  <a-button class="scrollToTop" @click="scrollToTop" type="default" shape="circle" icon="to-top" size="large"/>
</template>

<script>
export default {
  name: 'scrollToTop',
  methods: {
    scrollToTop () {
      var timer = null;
      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(function fn () {
          var oTop = document.body.scrollTop || document.documentElement.scrollTop;
          if (oTop > 0) {
              document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
              timer = requestAnimationFrame(fn);
          } else {
              cancelAnimationFrame(timer);
          }    
      });
    }
  } 
}

</script>
<style scoped>
  .scrollToTop{
    position: fixed;
    bottom: 80px;
    right: 80px;
  }
</style>
