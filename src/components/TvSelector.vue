<script >
import axios from "axios";
import { productStore } from '../stores/productStore';
import { storeToRefs } from 'pinia';

  export default {
   name: "Tv",
   data() {
     return {
       tvPlans: [],
     };
   },
   created() {
     this.getPlans();
   },
      setup() {
     const store = productStore();
     const { disableOptions } = storeToRefs(store);
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
         .get("https://my-json-server.typicode.com/aribdavid/my-json-file/TV")
         .then((response) => {
           this.tvPlans = response.data;
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
  <h1>TV </h1>
  <h3>Agora escolha seu pacote de TV </h3>
  <div class='section'> 
  <div class='container' v-for="plan in tvPlans" :key="plan.id" >
  <input type="radio" @change="selectPlan('Tv',plan.title, message)" v-bind:disabled="disableOptions" v-bind:id="plan.title" name="tv-plan" v-model="message" v-bind:value="plan.price">
  <br>
  <label class='title' v-bind:for="plan.title">{{ plan.title }}</label>
  <h5>R$ {{plan.price}}</h5> 
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

.title {
  font-weight: 700;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
