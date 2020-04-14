<template>
  <div class="kingList">
    <MusicList :url=url />
  </div>
</template>

<script>
  import MusicList from '../../components/Music_List'

  export default{
    name:"kingList",
    components:{
      MusicList
    },
    data(){
      return{
        url:'/v1/restserver/ting?method=baidu.ting.billboard.billList&type=12&size=3&offset=5'
      }
    }
  }
</script>

<style>
</style>
