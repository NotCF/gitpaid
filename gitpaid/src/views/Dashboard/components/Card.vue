<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm8 md8>
        <v-card style="height: 700px; background-color: #757575; border-radius: 10px; opacity: 0.8 width: 95%; padding: 20px;" dark>
          <v-card-title  primary class="title"><NeonLogo/></v-card-title>
          <v-card-text style="color: #3F51B5">{{ lorem }}</v-card-text>
          <v-card-media>
            <Test/>
          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md4>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex
                v-for="n in 2"
                :key="n"
                d-flex
                xs12
              >
                <v-card
                  style="background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%); border-radius: 10px;"
                  color="red lighten-2"
                  dark
                >
                  <v-card-text style="color: #3F51B5">My Videos</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Test from './Test.vue'
  import NeonLogo from '../../../components/NeonLogo.vue'

  export default {
    data: () => ({
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }),
    components: {
      Test,
      NeonLogo
    }
  }
</script>