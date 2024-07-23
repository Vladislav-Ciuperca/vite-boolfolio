<script>

  import axios from 'axios';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap';

  export default {


    data() {
      return {
        appTitle: "Vue-Boolfolio",
        projects: "a",
      }
    },
    methods: {
      // placehold
    },
    created() {
      // placeholdser
    },
    mounted() {
      axios
        .get('http://localhost:8000/api/projects')
        .then(response => {
          console.log(response);

          this.projects = response.data.projects.data
        })
    }
  }

</script>

<template>
  <h2>ciao Componente vue</h2>

  <div class="prova">
    <div class="progetto"  v-for="project in projects">
      {{ project.titolo }}
    </div>
  </div>

  <pre>{{ projects }}</pre>
</template>

<style scoped>
  .prova {
    border: 2px dashed green;
    display: flex;
    width: 100%;
    height: 20rem;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-around ;
    padding: 1rem;
  }

  .progetto {
    border: 2px dashed orange;
    width: calc(100% / 5 - 1rem);

  }
</style>
