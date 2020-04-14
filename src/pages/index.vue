<template>
  <div class="header">
    <div class="index">
      <ul>
        <li>
          <router-link to="/home">
            <img src="../assets/logo-ea5.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link to="/artists">
            歌手
          </router-link>
        </li>
        <li>
          <router-link to="/listcate">
            榜单
          </router-link>
        </li>
        <li>
          <router-link to="/ucenter">
            我的
          </router-link>
        </li>
        <li>
          <router-link to="/search">
            搜索
          </router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
</script>

<style scoped >
  .index img{
    width: 26px;
    height: 26px;
  }
  .index{
    width: 100%;
    top: 0px;
    position: fixed;
    z-index: 999;
  }
  .index ul{
    display: flex;
    height: 50px;
    line-height: 50px;
    background: #f9f9f9;
    border-bottom: 1px solid #22C5BD;
  }

  .index ul li {
    flex: 1;
    text-align: center;
  }

  .index ul li a{
    font-size: 16px;
    color: #999;
  }

</style>
