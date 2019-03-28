<template>
  <div id="dash">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <Card/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

import Vue from 'vue'
import Test from './components/Test.vue'
import Card from './components/Card.vue'

export default {
  data () {
    return {
      user: ''
    }
  },
  name: 'home',
  components: {
    Test,
    Card
  },
  methods: {
  }
}

new Vue({
  el: '#app'
})

</script>

<style>
body {
  margin: 0;
  background-color:  #ebedef ;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align:center;
}


</style>
