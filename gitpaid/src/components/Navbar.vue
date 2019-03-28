<template>
  <v-layout
    wrap
  >
      <v-toolbar color="#3F51B5" width="100%">
        <v-toolbar-side-icon style="color: #FFFFFF" @click.stop="drawer = !drawer">
        </v-toolbar-side-icon>
        <v-toolbar-title style="cursor:pointer; color: #FFFFFF" v-on:click="dashboard">Eclipse</v-toolbar-title>
        <v-spacer></v-spacer>
          <v-btn v-on:click="signOut">Sign Out</v-btn>
  </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      style="background-color: #3F51B5 !important"
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon style="cursor:pointer; color: #FFFFFF">account_circle</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title style="cursor:pointer; color: #FFFFFF" v-if="user" v-on:click="profile">{{ user.username }}</v-list-tile-title>
            <v-list-tile-title style="cursor:pointer; color: #FFFFFF" v-else>Guest</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" color="3F51B5">
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon style="cursor:pointer; color: #FFFFFF">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title style="cursor:pointer; color: #FFFFFF">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>

  export default {
    data () {
      return {
        username: '',
        pass: '',
        email: '',
        error: null,
        drawer: null,
        items: [
          { title: 'Dashboard', icon: 'dashboard', link: '/' },
          { title: 'Video Editor', icon: 'question_answer', link: '/kiosk-list' },
        ]
      }
    },
    methods: {
    signOut: function() {
        this.$auth.logout()
    },
    profile: function() {
        this.$router.push('/profile')
    },
    dashboard: function() {
        this.$router.push('/')
    },
    login: function() {
      this.$router.push('/sign-in')
    }
  },
  computed: {
    user() { 
    }
  },
}
</script>

<style>
  .Button__button___1FrBC {
    background-color: #FFFFFF!important;
    color: #000000 !important;
    margin-bottom: 0px !important;
    margin-top: 10px !important;
    border-radius: 8px !important;
  }

  .profileButton {
    min-width: 153px;
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    padding: 14px 0;
    letter-spacing: 1.1px
  }
</style>
