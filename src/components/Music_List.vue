<template>
  <div class="board panels">
    <div class="panel hotsongs on">
      <ul class="list">
        <router-link tag="li" :to="{name:'MusicPlay', params:{ songid:item.song_id }}" class="song url" v-for="(item,index) in currentData" :key="index">
          <div class="poster">
            <img :src="item.pic_big" :alt="item.title">
          </div>
          <div class="info">
            <div class="name">
                {{ item.title }}
            </div>
            <div class="author">{{ item.artist_name }}</div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name:"musicList",
    data(){
      return{
        currentData:[]
      }
    },
    props:{
      url:{
        type:String,
        default:''
      }
    },
    mounted() {
      var httpUrl = this.HOST + this.url;
      this.$axios.get(httpUrl)
      .then(res => {
        this.currentData = res.data.song_list;
      })
      .catch(error => {
        console.log(error);
      })
    }

  }
</script>

<style scoped="scoped">
  .board{
    margin-bottom: 10px;
  }

  .panel {
      top: 51px;
      left: 23%;
      width: 74%;
      border-top: 0.1px solid #eee;
      position: absolute;
      background: #fff;
      padding-right: 10px;
  }

  .list{
    padding: 0px;
    padding-top: 0;
  }

  .panel .list li {
      height: 60px;
      border-bottom: 1px solid #eee;
      padding-left: 0;
      display: flex;
      padding-top: 10px;
  }

  .panel .list li .poster {
      position: relative;
      width: 45px;
      margin-right: 8px;
  }

  .panel .list li .poster img {
      border: 1px solid #eee;
  }
  .info{
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  .info .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 16px;
      color: #333;
  }

  .info .author {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      color: #999;
      margin-top: 2px;
  }

</style>
