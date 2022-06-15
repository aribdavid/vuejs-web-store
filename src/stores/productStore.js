import { defineStore } from "pinia";

export const productStore = defineStore('productStore', {
  state: () => {
    return  {
      disableOptions: true,
      isPlanSelected: false,
      selectedPlans: {
        Internet: {name:'', price: 0, category: ''},
        Tv: {name:'', price: 0, category: ''},
        Fixo: {name:'', price: 0, category: ''} 
      },
      totalPrice: 0
    }
  },
  actions: {
    
    clickInternetPlan(){
      this.disableOptions = false
    },
    selectPlan(category, name, amount){
      this.selectedPlans[category].price = Number(amount);
      this.selectedPlans[category].name = name;
      this.selectedPlans[category].category = category;
      this.totalPrice = this.selectedPlans["Internet"].price +
      this.selectedPlans["Tv"].price + this.selectedPlans["Fixo"].price
    }
  }

});
