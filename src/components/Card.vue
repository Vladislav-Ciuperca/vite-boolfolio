<script>

  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap';

  export default {
    props: {
      titolo: String,
      descrizione: String,
      immagine: String,
      type: String,
      technology: String,
    },

    data() {
      return {
        name: 'ProjectCard'
      }
    },
    methods: {
      // placehold
    },
    created() {
      // placeholdser
    },
    mounted() {

    }
  }

</script>

<template>

  <div class="cont">
    <h2>{{ titolo }}</h2>
    <img :src="immagine" alt="">
    <div class="desc">{{ descrizione }}</div>
    <div class="card_bottom">

      <div>Questo è un progetto: {{ type }}</div>

      <div>Tecnologie
        <span v-for="tecnologia in technology">{{ tecnologia.name }}</span>
      </div>

    </div>
  </div>

</template>

<style scoped>
  h2 {
    height: 9%;
    border: 2px dashed orange;
    line-height: 60px;
  }

  .cont {
    border: 2px dashed green;
    width: calc(100% / 3 - 2rem);
    height: 600px;
    text-align: center;
    border-radius: 20px;
  }

  .desc {
    padding: 1rem;
    border: 2px dashed purple;
    height: 30%;
  }

  .card_bottom {
    display: flex;
    font-size: 0.8rem;
    padding: 1rem;
    border: 2px dashed orange;
    height: 10%;
    justify-content: space-between;
  }

  span {
    padding: 0 0.3rem;
  }

  img{
    width: 95%;
  }
</style>
