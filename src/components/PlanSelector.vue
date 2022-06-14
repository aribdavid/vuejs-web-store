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

    console.log(`the component is now mounted.`)

</script>

<template>
  <section>
  <h1>Internet </h1>
  <h3>Selecione um plano de internet para continuar </h3>
  <div class='section'> 
   <div class='container'>
  <input type="radio" id='internet-100mb' name="internet-plan" value="100MB">
  <br>
  <label class='title' for="internet-100mb">100MB</label>
  <h5>R$ 79,90</h5> 
  <h6> Mais Detalhes </h6>
  </div>
   <div class='container'>
   <input type="radio" id='internet-200mb' name="internet-plan" value="200MB">
    <br>
  <label class='title' for="internet-200mb">200MB</label>
  <h5>R$ 79,90</h5> 
  <h6> Mais Detalhes </h6> 
  </div>
  <div class='container'> 
  <input type="radio" id='internet-300mb' name="internet-plan" value="300MB">
    <br>
  <label class='title' for="internet-300mb">300MB</label> 
  <h5>R$ 79,90</h5> 
  <h6> Mais Detalhes </h6>
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

.container {
  border: 1px solid grey;
  width: 30%;
  padding-left: 3%;
}

.title {
  font-weight: 700;
}
.section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
