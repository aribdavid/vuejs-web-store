import { defineStore } from "pinia";

export const productStore = defineStore('productStore', {
  state: () => {
    return  {
      disableOptions: true,
      isPlanSelected: false,
      selectedPlans: {
        Internet: 0,
        Tv: 0,
        Fixo: 0,
      },
      totalPrice: 0
    }
  },
  actions: {
    
    clickInternetPlan(){
      this.disableOptions = false
    },
    selectPlan(category,amount){
      this.selectedPlans[category] = Number(amount);
      this.totalPrice = this.selectedPlans["Internet"] +
      this.selectedPlans["Tv"] + this.selectedPlans["Fixo"]
    }
  }

});
