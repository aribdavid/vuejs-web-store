<script >
import { productStore } from '../stores/productStore';
import { storeToRefs } from 'pinia';

export default {
   setup() {
     const store = productStore();
     const { totalPrice, selectedPlans } = storeToRefs(store)
     const { selectPlan} = store;
     return {
       store,
       totalPrice,
       selectedPlans,
       selectPlan
     }
     },
}
</script>

<template>
  <section>
  <div class='section'>  
  <h5>Taxa de Instalação </h5> 
  <h5>Grátis </h5>
  </div>
  <ul  v-for="product in selectedPlans">
  <li> {{product.nome}} </li>
  <a v-on:click="selectPlan('Internet', '', 0)">Remover </a>
  </ul>
  <div class='section total-layout'>  
  <h3>Total </h3> 
  <h5>R$ {{totalPrice.toFixed(2)}}</h5>
  </div>
  <button type='button'>Continuar </button>
  </section>
</template>

<style scoped>
.section{
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem 
}

.total-layout {
  color: #9400D3;
}

</style>
