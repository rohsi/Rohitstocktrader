import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stocks: [
      {id: 1, name: "BMW", price: 123},
      {id: 2, name: "Jasmine", price: 67},
      {id: 3, name: "Wipro", price: 94},
      {id: 4, name: "Google", price: 106},
    ],
    portfolio: {
      funds: 10000,
      myStocks: [
        {id: 2, quantity: 3},
        {id: 3, quantity: 12}
      ]
    }
  },
  mutations: {



  },
  actions: {

  }
})
