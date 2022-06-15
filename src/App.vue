<script setup>
import PlanSelector from './components/PlanSelector.vue'
import FixoSelector from './components/FixoSelector.vue'
import TvSelector from './components/TvSelector.vue'
import Checkout from './components/Checkout.vue'

</script>

<template>
 <PlanSelector />
 <TvSelector />
 <FixoSelector />
 <br>
 <hr>
 <br>
 <Checkout />
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight:  normal;
  display: flex;
  flex-direction: column;
  }

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
    
  }

  #app {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
  }

  button {
    border: 2px solid grey;
    background-color: grey;
    color: white;
    height: 60px;
    width: 200px;
    font-weight: 700;
    font-size: 1.2rem
  }

  button:hover {
    border: 2px solid #d3d3d3;
    background-color: #d3d3d3;
    color: grey
  }

  a{
     text-decoration: none;
     color: grey;
     font-weight: 600
  }

}
</style>
