<template>
    <div class="row">
        <div class="col-lg-4 col-md-6" v-for="stock in stocks" :key="stock.id">
            <Stock :stock="stock"></Stock>
        </div>
    </div>
</template>

<script>
    import Stock from './Stock.vue';
    export default {
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        },
        components: {
            Stock
        }
    }
</script>

<style scoped>

</style>