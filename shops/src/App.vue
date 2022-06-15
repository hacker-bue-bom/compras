<template>

<div>  
  <nav >
    <div id="navy">
      <div class="testy">
        <router-link to="/" class="spacing">Home</router-link>
        <router-link to="/about" class="spacing">Registo</router-link>
        <router-link to="/api_search" class="spacing" v-if="(loggy==1 || addy==1)">API</router-link>
        <router-link to="/adminView" class="spacing" v-if="addy==1">Admin</router-link>
      </div>
      <div class="testy">
        <router-link to="/favY" class="spacing" v-if="addy==1"><img src="./assets/faiv.png" class="favy"/></router-link>
         <router-link to="/carrinho" class="spacing" v-if="loggy==1 || addy==1"> {{ tamCart }}<img src="./assets/cart.png" class="carty"/> </router-link>
        <button class="loggy" @click="logout()" v-if="(loggy==1 || addy==1)">LOGOUT</button>
      </div>
    </div>
  </nav>
  <router-view/>
  <footer class="footycont">
    <h1 class="footy">Trabalho elaborado por: Nick Correia 2014311 <img src="./assets/uma.jpg" class="footyimg"/></h1>
  </footer>
</div>
</template>

<script>
export default {
  data() {
    return {
      addy: null,
      loggy: null,
      tamCart: 0,
    }},
  mounted(){ 
    this.addy = localStorage.getItem('admin')
    this.loggy = localStorage.getItem('logged')
    
  },
  updated(){
    this.tamCart = localStorage.getItem('cart_len_in_nav')
    this.tamFav = localStorage.getItem('fav_l')
  },
  methods: {
    logout() {
      localStorage.removeItem('admin');
      localStorage.removeItem('logged');     // TEMOS DE TER ISTO ESPECIFICO PARA CADA USER?     v-if="test==1"
      location.reload();
      //this.$router.push("/");
    }
  }
}



</script>


<style>
.loggy{
  width: auto;
}
.loggy:hover {
  opacity: 0.5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
#navy{
  display: flex;
  justify-content: space-between;
}
.testy{
  margin-bottom: -15px;
  padding: 0px ;
}
.carty{
  height: 44px;
  margin-bottom: -17px;
}
.spacing:hover {
  opacity: 0.5;
}
.favy{
  height: 51px;
  margin-bottom: -17px;
}

.spacing{
  margin-right: 20px;
}
.footycont{
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.footy{
  display: block;
  text-align: center;
  font-size: 15px;
}
.footyimg{
  margin-bottom: -13px;
  height: 50px
}

</style>