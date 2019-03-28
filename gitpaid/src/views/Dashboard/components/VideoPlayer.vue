<template>
      <v-card style="width: 100%; height: 100%; padding: 10px; background-color:#000000">
        <v-card-title primary-title style="justify-content: center; background-color: #000000; color:#ffffff">
          {{data.title}}
        </v-card-title>
        <transition name="fade">
        <v-img 
          :src="data"
          aspect-ratio="2.50"
        ></v-img>
        </transition>
      </v-card>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'

  //Vue.prototype.$http = axios

  export default {
    data () {
      return {
       data: {},
      }
    },
    created: function() {
      this.getData()
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
              let clip = object.uri

              let data = {
                url: object.uri,
                id: 1
              }

              clips.push(data)
            })
          })
          console.log(clips)
        })
      }
    },
    props: {
      title: String,
      image: String
    }
  }
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>