<template>
  <div class="artists-details">
    <ArtistsTitle :name="this.$route.params.name" :avatar="this.$route.params.avatar"/>
    <SongList :ting_uid="this.$route.params.ting_uid" />
  </div>
</template>

<script>
  import ArtistsTitle from "../../components/details/Artists_Title"
  import SongList from "../../components/details/Song_List"

  export default{
    name:"artistsDetails",
    components:{
      ArtistsTitle,
      SongList

    }
  }
</script>

<style>
</style>
