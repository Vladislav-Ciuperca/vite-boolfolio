<script>
  import Card from './components/Card.vue'

  import axios from 'axios';

  export default {
    components: {
      Card
    },
    data() {
      return {
        appTitle: "Vue-Boolfolio",
        ApiLink: 'http://localhost:8000/api/projects',
        projects: "",
        type: '',
        technology: '',
      }
    },
    methods: {
      // placeholder
    },
    created() {
      // placeholdser
    },
    mounted() {
      axios
        .get(this.ApiLink)
        .then(response => {
          // console.log(response);
          this.projects = response.data.projects.data

        })
    }
  }
</script>

<!-- //////////////////////////////// -->

<template>


  <router-link class="p-1 px-4 text-decoration-none" to="/">Home</router-link>
  <router-link class="p-1 px-4 text-decoration-none" to="/about">About</router-link>
  <router-link class="p-1 px-4 text-decoration-none" to="/projects">Projects</router-link>
  <router-link class="p-1 px-4 text-decoration-none" to="/contacts">Contacts</router-link>

  <div class="p-4">
    <router-view ></router-view>
  </div>
  <!-- <div class="card_container">
    <Card v-for="progetto in projects"
     :titolo="progetto.titolo" :descrizione="progetto.descrizione"
     :immagine="progetto.immagine" :type="progetto.type.name"
     :technology="progetto.technology"/>
  </div> -->
  <!-- <pre v-for="progetto in projects">{{ progetto.technology }}</pre> -->
</template>

<!-- //////////////////////////////// -->

<style scoped>
  h2 {
    padding: 1rem;
  }

  .card_container {
    display: flex;
    flex-wrap: wrap;
    padding: 0 2rem;
    border: 2px dashed red;
    width: auto;
    justify-content: space-around;
    gap: 1rem;
  }
</style>
