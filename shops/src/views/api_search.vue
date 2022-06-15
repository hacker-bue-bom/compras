<template>
  <div class="conteudo" v-if="addy==1 || loggy==1">


    <input type="search" id="site-search" v-model="name" v-on:keyup.enter="search()" >

    
    <h2>API</h2>
    <div class="row">
      <div v-for="(item, id) in lista" :key="id">
          
        <!-- Foreach -->
        <div class="container">
          <div class="card">
            <div class="content">
                
              <div class="imgBx">
                <img :src="item.image" />
                <!-- Para ir buscar imagem do url colocado no admin -->
              </div>
              <div class="contentBx">
                <h3>
                  <span>{{ item.status }} - {{item.species}} - {{item.origin.name}} </span>
                </h3>
                <!-- Comentários -->
              </div>
            </div>
            <div id="alinharTitulo">
              <ul class="sci">
                <li>
                  <p>{{ item.name }}</p>
                  <!-- Nome restaurante -->
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="addy!=1 && loggy!=1">
    <div class="notlogged">Não pode aceder ao conteúdo desta página sem ter feito o login</div>
    <img src="../assets/403.jpg" alt="nope" class="nope" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  
  data() {
    return {
      lista: null,
      searchList: '',
      name: '',
      addy: null,
      loggy: null,
    };
  },
  async created() {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
      //"https://www.boredapi.com/api/activity"
    );
    this.lista = response.data.results; //Variável lista vai corresponder aos dados retornados pela api
  },
  mounted(){ 
    this.addy = localStorage.getItem('admin')
    this.loggy = localStorage.getItem('logged')
  },
  methods:{
    search(){
      axios
      .get('https://rickandmortyapi.com/api/character/?name='+this.name)
      //.get('https://dog.ceo/api/breeds/image/random'+this.name)
      .then(response => (this.lista = response.data.results))
    }
  }
};
</script>

<style scoped>
/* Margens */
.conteudo {
  position: relative;
  margin: 5%;
  text-align: center;
}

h2 {
  font-family: "Inspiration", cursive;
  font-size: 60px;
  margin: 3%;
}

/*Css adaptado de: https://codepen.io/AlexZab/pen/GREpYqp */
.container .card {
  position: relative;
  width: 300px;
  height: 400px;
  background: rgba(255, 255, 255, 0.05);
  margin: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
}

.container .card .content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.5s;
}

.container .card:hover .content {
  transform: translateY(-20px);
}

.container .card .content .imgBx {
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
}

.container .card .content .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.container .card .content .contentBx h3 {
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  margin: 20px 0 10px;
  line-height: 1.1em;
}

.container .card .content .contentBx h3 span {
  font-size: 12px;
  font-weight: 300;
  text-transform: initial;
}

#alinharTitulo {
  text-align: center;
  align-items: center;
  align-content: center;
  margin-left: -40px;
  /* Para resolver os 40 de padding */
}

.container .card .sci li {
  list-style: none;
  /* transform: translateY; */
  /* transition: 0.5s; */
  opacity: 0;
  color: #07613e;
  font-size: 18px;
  font-family: "Source Code Pro", monospace;
}

.container .card:hover .sci li {
  transform: translateY(0px);
  opacity: 1;
}

.notlogged{
  font-weight: bold;
  font-size: 35px;
}

.nope {
  width:50%;
  margin-top: 15px;
}
</style>