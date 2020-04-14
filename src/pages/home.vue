<template>
  <div class="home">
    <div class="content">
      <TodayRecommend style="padding-top: 50px;" title="新歌速递" type=1 size=6 offset=6 />
      <TodayRecommend title="影视歌曲" type=24 size=3 offset=3 />
      <SwiperBanner />
      <TodayRecommend style="margin-bottom: 0;" title="网络歌曲" type=25 size=6 offset=0 />
    </div>
  </div>
</template>

<script>
  import TodayRecommend from '../components/Today_Recommend'
  import SwiperBanner from '../components/Swiper_Banner'
  import MusicListNav from './musiclist/music_listnav'

  export default{
    name:"home",
    components:{
      TodayRecommend,
      SwiperBanner,
      MusicListNav
    }

  }
</script>

<style scoped="scoped">

</style>
