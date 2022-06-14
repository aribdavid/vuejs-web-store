<script> 
import axios from "axios";
import { productStore } from '../stores/productStore';


  export default {
   name: "Internet",
   data() {
     return {
       internetPlans: [],
     };
   },
   created() {
     this.getPlans();
   },
   setup() {
     const store = productStore();
     const { clickInternetPlan, selectPlan} = store

     return {
       store,
       clickInternetPlan,
       selectPlan
     }
     },
   methods: {
     getPlans() {
       axios
         .get("https://my-json-server.typicode.com/aribdavid/my-json-file/Internet")
         .then((response) => {
           this.internetPlans = response.data;
         })
         .catch((error) => {
           console.log(error);
         });
     }
   },
  };

</script>

<template>
  <section>
  <h1>Internet </h1>
  <h3>Selecione um plano de internet para continuar </h3>
  <div class='section'> 
   <div class='container' v-for="plan in internetPlans" :key="plan.id" >
  <input type="radio" v-on:click="clickInternetPlan" @change="selectPlan('Internet',plan.title, message)" v-bind:id="plan.title" name="internet-plan" v-model="message" v-bind:value="plan.price">
  <br>
  <label class='title' v-bind:for="plan.title" >{{ plan.title }}</label>
  <h5>R$ {{plan.price}}</h5> 
  <a href='/'> + Detalhes </a>
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

@media (min-width: 1024px) {
    text-align: left;
  }

</style>
