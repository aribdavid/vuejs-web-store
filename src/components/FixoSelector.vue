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
  <h1>Fixo </h1>
  <h3>Agora escolha seu pacote de telefone fixo </h3>
  <div class='section'> 
   <div class='container'>
    <input type="radio" id='ilimitado-fixo-brasil' name="phone-plan" value='ilimitado-fixo-brasil'>
  <br>
  <label for='ilimitado-fixo-brasil'>Ilimitado Fixo Brasil</label>
   </div>
  </div>
  </section>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
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



</style>
