<script>

import axios from 'axios';

    export default {
        name: 'Home',
        data() {
            return {
                ApiLink: 'http://localhost:8000/api/projects/latest',
                projects: ' ',
            }
        },
        methods: {
            // placeholder
        },
        created() {
            // placeholder
        },
        mounted() {
            axios
        .get(this.ApiLink)
        .then(response => {
          console.log(response);
          this.projects = response.data.projects

        })
        },
    }
</script>

<template>
    <div class="home">
        <h2>Home</h2>

        <!-- /////////////////////////////////////////////// -->
        <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Custom jumbotron</h1>
                <p class="col-md-8 fs-4">
                    Using a series of utilities, you can create this jumbotron, just
                    like the one in previous versions of Bootstrap. Check out the
                    examples below for how you can remix and restyle it to your liking.
                </p>
                <button class="btn btn-primary btn-lg" type="button">
                    Example button
                </button>
            </div>
        </div>
        <!-- /////////////////////////////////////////////// -->

        <!-- <pre>{{ projects }}</pre> -->
         <h3>Last Articles</h3>

        <pre v-for="progetto in projects">{{ progetto.titolo}}</pre>

    </div>
</template>