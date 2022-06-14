import { defineStore } from "pinia";

export const productStore = defineStore('productStore', {
  state: () => {
    return  {
      disableOptions: true,
      isPlanSelected: false,
      selectedPlans: {
        Internet: {nome: '', preco: 0},
        Tv: {nome: '', preco: 0},
        Fixo: {nome: '', preco: 0}
      },
      totalPrice: 0
    }
  },
  actions: {
    
    clickInternetPlan(){
      this.disableOptions = false
    },
    selectPlan(category, name, amount){
      this.selectedPlans[category].preco = Number(amount);
      this.selectedPlans[category].nome = name;
      this.totalPrice = this.selectedPlans["Internet"].preco +
      this.selectedPlans["Tv"].preco + this.selectedPlans["Fixo"].preco
    }
  }

});
