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
  <div class='section'>  
  <h5>Taxa de Instalação </h5> 
  <h5>Grátis </h5>
  </div>
  <div class='section'>  
  <h3>Total </h3> 
  <h5>R$ 199,90 </h5>
  </div>
  <button type='button'>Continuar </button>
  </section>
</template>

<style scoped>
.section{
  display: flex;
  justify-content: space-between;
}

</style>
