<script>
    import axios from 'axios';


    export default {
        name: 'SingleProject',
        data() {
            return {
                base_url: 'http://127.0.0.1:8000',
                progetto: '',
            }
        },
        mounted() {
            // console.log(this.$route.params.id);
            axios
                .get(`${this.base_url}/api/projects/${this.$route.params.id}`)
                .then(response => {
                    // console.log(response);
                    this.progetto = response.data.project;
                })
        }
    }
</script>


<template>

    <!-- <h2>About</h2> -->
    <h2>id: {{ $route.params.id }}</h2>
    <h2>{{ progetto.id }}</h2>
    <h2>{{ progetto.titolo }}</h2>
    <pre>{{ progetto }}</pre>


</template>