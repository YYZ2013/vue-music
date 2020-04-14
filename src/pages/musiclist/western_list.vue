<template>
  <div class="westernList">
    <MusicList :url=url />
  </div>
</template>

<script>
  import MusicList from '../../components/Music_List'

  export default{
    name:"westernList",
    components:{
      MusicList
    },
    data(){
      return{
        url:'/v1/restserver/ting?method=baidu.ting.billboard.billList&type=11&size=9&offset=0'
      }
    }
  }
</script>

<style>
</style>

