import Vue from 'vue'
import Router from 'vue-router'
import StockTrader from "./components/StockTrader";
import Portfolio from "./components/Portfolio";
import Stocks from "./components/Stocks";


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: StockTrader
        },
        {
            path: '/portfolio',
            component: Portfolio
        },

        {
            path: '/stocks',
            component: Stocks
        }
    ]
})
