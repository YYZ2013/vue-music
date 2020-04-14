<template>
  <div class="popularList">
    <MusicList :url=url />
  </div>
</template>

<script>
  import MusicList from '../../components/Music_List'

  export default{
    name:"popularList",
    components:{
      MusicList
    },
    data(){
      return{
        url:'/v1/restserver/ting?method=baidu.ting.billboard.billList&type=16&size=9&offset=0'
      }
    }
  }
</script>

<style>
</style>
