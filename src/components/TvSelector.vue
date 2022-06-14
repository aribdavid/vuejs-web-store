<script setup>
defineProps({
  planCategory: {
    type: String,
    required: true
  },
  planNames: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section>
  <h1>TV </h1>
  <h3>Agora escolha seu pacote de TV </h3>
  <div class='section'> 
   <div class='container'>
  <input type="radio" id='ultimate-hd' name="tv-plan" value='Ultimate HD'>
  <br>
  <label for="ultimate-hd">Ultimate HD</label>
  </div>
  <div class='container'>
   <input type="radio" id='full-hd' name="tv-plan" value="Ultimate HD">
  <br>
  <label for="full-hd">Full HD</label>
  </div>
 </div>
  </section>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  color: #9400D3;
}

h3 {
  font-size: 1.2rem;
}

.container {
  border: 1px solid grey;
  width: 30%;
  padding-left: 3%;
}

.section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
