<template>

<div>  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Registo</router-link> | 
    <router-link to="/carrinho">Carrinho de Compras</router-link> | 
    <router-link to="/adminView">Admin</router-link>
<!--    <a> | </a>
    <router-link to="/errorpage">404</router-link>-->
  </nav>
  <router-view/>
  </div>
</template>



<style>
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
</style>