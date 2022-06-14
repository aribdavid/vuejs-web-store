<script >
import axios from "axios";
import { productStore } from '../stores/productStore';
import { storeToRefs } from 'pinia';

  export default {
   name: "Fixo",
   data() {
     return {
       fixoPlans: [],
     };
   },
   created() {
     this.getPlans();
   },
     setup() {
     const store = productStore();
     const { disableOptions } = storeToRefs(store)
     const { selectPlan } = store;
     return {
       store,
       disableOptions,
       selectPlan,
     }
     },
   methods: {
     getPlans() {
       axios
         .get("https://my-json-server.typicode.com/aribdavid/my-json-file/Fixo")
         .then((response) => {
           this.fixoPlans = response.data;
         })
         .catch((error) => {
           console.log(error);
         });
     },
   },
  };
</script>

<template>
  <section>
  <h1>Fixo </h1>
  <h3>Agora escolha seu pacote de telefone fixo </h3>
  <div class='section'> 
   <div class='container'  v-for="plan in fixoPlans" :key="plan.id">
    <input v-bind:disabled="disableOptions" @change="selectPlan('Fixo',plan.title, message)" type="radio" v-bind:id="plan.title" name="phone-plan" v-model="message" v-bind:value="plan.price">
  <br>
  <label class="title" v-bind:for="plan.title">{{plan.title}}</label>
   <h5>R$ {{plan.price}}</h5> 
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

.title {
  font-weight: 700;
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
