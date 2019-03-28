<template>
  <video-player  class="video-player-box"
                 style="width: 100%; height: 500px"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"

                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)"
                 @ended="onPlayerEnded($event)"
                 @waiting="onPlayerWaiting($event)"
                 @playing="onPlayerPlaying($event)"
                 @loadeddata="onPlayerLoadeddata($event)"
                 @timeupdate="onPlayerTimeupdate($event)"
                 @canplay="onPlayerCanplay($event)"
                 @canplaythrough="onPlayerCanplaythrough($event)"

                 @statechanged="playerStateChanged($event)"
                 @ready="playerReadied">
  </video-player>
</template>

<script>
  // Similarly, you can also introduce the plugin resource pack you want to use within the component
  // import 'some-videojs-plugin'
  import videojs from 'video.js'
  import 'video.js/dist/video-js.css'

  import VueVideoPlayer from 'vue-video-player'

  export default {
    data() {
      return {
        playerOptions: {
          // videojs options
          muted: true,
          height: 500,
          width: 1000,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://gameclipscontent-d3015.xboxlive.com/xuid-2535450930042484-private/bbd26a44-f426-4aec-ac9f-1858131fc88f.MP4?sv=2015-12-11&sr=b&si=DefaultAccess&sig=L1unQVi7bzYGDcCQAt4muY7e%2B22gHHoAW2twl%2FJkyWs%3D&__gda__=1553649341_87917439952b39508969edfd18722fa7"
          }],
          poster: "/static/images/author.jpg",
        }
      }
    },
    mounted() {
      console.log('this is current player instance object', this.player)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }
  }
</script>