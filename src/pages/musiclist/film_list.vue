<template>
  <div class="filmList">
    <MusicList :url=url />
  </div>
</template>

<script>
  import MusicList from '../../components/Music_List'

  export default{
    name:"filmList",
    components:{
      MusicList
    },
    data(){
      return{
        url:'/v1/restserver/ting?method=baidu.ting.billboard.billList&type=24&size=9&offset=0'
      }
    }
  }
</script>

<style>
</style>

