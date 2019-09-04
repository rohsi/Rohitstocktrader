<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" ><router-link to='/'> StockTrader</router-link></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

            <a class="nav-link" href="#"><router-link to="/portfolio">Portfolio</router-link> <span class="sr-only">(current)</span></a>


            <a class="nav-link" href="#"><router-link to="/stocks">Stocks</router-link></a>



        </ul>

        <ul class="navbar-nav margin-right: auto !important ">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Save 
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#" @click="saveData">Save</a>


            </div>
          </li>
            <li class="nav-item active">
            <a class="nav-link" href="#" @click="endDay">End Day</a>
          </li>

        </ul>

      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    methods: {
      endDay() {
        this.$store.commit('Rnd')
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
