<template>

  <router-view/>
  <FooterMusic/>
</template>
<script>
  import FooterMusic from '@/components/item/footerMusic.vue'
  export default{
    components:{
      FooterMusic
    }
  }
</script>
<style lang="less">
  *{
    margin:  0;
    padding: 0;
    box-sizing: border-box;
  }
  .icon{
    width: 0.4rem ;
    height: .4rem;
  }
  a{
    color: black;
  }
</style>
