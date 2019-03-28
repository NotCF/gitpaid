<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>


<script>
import VideoPlayer from './views/Dashboard/components/VideoPlayer'
import Test from './views/Dashboard/components/Test'
import Blah from './views/Dashboard/components/Blah'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    VideoPlayer,
    Test,
    Blah,
    Navbar
  },
  data () {
    return {
      user: ''
    }
  },
  created() {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
  }
}
</script>

<style>
  body {
    margin: 0;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);;
  }

  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:   #ebedef  ;
  text-align:center;
  height: 1000px;
  width: 100%;
}
</style>

