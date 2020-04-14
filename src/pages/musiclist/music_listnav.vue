<template>
  <div class="music-nav">
    <ul>
      <li>
        <router-link to="/listcate/news">新歌榜</router-link>
        <span class="gap-line"></span>
      </li>
      <li>
        <router-link to="/listcate/hot">热歌榜</router-link>
        <span class="gap-line"></span>
      </li>
      <li>
        <router-link to="/listcate/rock">摇滚榜</router-link>
        <span class="gap-line"></span>
      </li>
      <li>
        <router-link to="/listcate/king">爵士榜</router-link>
        <span class="gap-line"></span>
      </li>
      <li>
        <router-link to="/listcate/popular">流行榜</router-link>
        <span class="gap-line"></span>
      </li>
      <li>
        <router-link to="/listcate/western">欧美榜</router-link>
        <span class="gap-line"></span>
      </li>
      <li>
        <router-link to="/listcate/old">经典榜</router-link>
        <span class="gap-line"></span>
      </li>
      <li>
        <router-link to="/listcate/love">情歌榜</router-link>
        <span class="gap-line"></span>
      </li>
      <li>
        <router-link to="/listcate/film">影视榜</router-link>
        <span class="gap-line"></span>
      </li>
      <li>
        <router-link to="/listcate/net">网络榜</router-link>
        <span class="gap-line"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name:"musicListNav"

  }
</script>

<style scoped="scoped">
  .music-nav{
      background-color: #fff;
      padding: 56px 0 125px 8px;
  }

  ul{
    width: 20%;
  }

  ul li{
    padding: 18px 0 12px 0;
    font-size: 16px;
    text-align: center;
    color: #999;
    position: relative;
    z-index: 2;
  }

  ul li a{
    display: block;
  }
</style>
