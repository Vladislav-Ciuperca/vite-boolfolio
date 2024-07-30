<script>
    import Card from '../components/Card.vue'

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
                    console.log(response);
                    this.projects = response.data.projects.data

                })
        }
    }
</script>
<!-- co -->
<template>
    <div class="projects">
        <h2>Projects</h2>

        <div class="card_container">

            <div class="carta" v-for="progetto in projects">
                <router-link class="coso" :to="{ name: 'SingleProject', params: { id: progetto.id } }">
                    <Card class="prova" :id="progetto.id" :titolo="progetto.titolo" :descrizione="progetto.descrizione"
                        :immagine="progetto.immagine" :type="progetto.type.name" :technology="progetto.technology" />

                </router-link>
            </div>

        </div>

    </div>
</template>

<style scoped>
    h2 {
        padding: 1rem;
    }

    .coso {
        text-decoration: none;
        color: black;
    }

    .carta {
        border: 2px dashed fuchsia;
        width: calc(100% / 3 - 2rem);

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
 