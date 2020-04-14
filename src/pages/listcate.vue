<template>
  <div class="listcate">
    <MusicListNav />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
  import MusicListNav from './musiclist/music_listnav'

  export default{
    name:"listcate",
    components:{
      MusicListNav
    }
  }
</script>

<style>
</style>
