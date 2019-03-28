<template>
<div>
  <div class="video-player">
    Welcome to VueTube
  </div>
  <div class="video-list">
    <div :key="video.id" v-for="video in videos" class="thumbnail">
        <div class="thumbnail-img">
          <img :src="video.thumbnail" />
        </div>
        <div class="thumbnail-info">
          <h3>{{video.id}}</h3>
        </div>
    </div>
</div>
</div>
</template>

<script>

export default {
  name: 'VideoPlayer',
  data () {
    return {
      videos: []
    }
  },
  created: function() {
    console.log(this.videos)
  },
  methods: {
    getData: function() {
      axios({
        method: 'GET',
        url: 'https://xboxapi.com/v2/2535450930042484/game-clips',
        headers: { 
          'Content-type': 'application/json', 
          'X-AUTH' : 'c47ed24acd0579525bb5c71c7fb5959cf7fe7fe8' 
        } 
       })
       .then(response => {
          this.clipData = response.data

          let clips = []

          this.clipData.forEach(clip => {

            let objectData = clip.gameClipUris

            objectData.forEach(object => {
              let clips = {
                uri: object.uri,
                thumbnail: 'https://gameclipscontent-t2017.xboxlive.com/xuid-2535450930042484-public/ea4ee685-f3fa-43b0-97fc-998723d56482_Thumbnail.PNG',
                id: 1
              }
              clips.push(clip)
            })
          })
          console.log(clips)
          this.videos = this.clips
        })
        //this.videos = clips
      }
    },
}
</script>

<style scoped>
</style>