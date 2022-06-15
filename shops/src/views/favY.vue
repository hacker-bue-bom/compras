<template>
  <div class="conteudo" v-if="addy==1 || loggy==1">
    <div v-if="favy==1">
      <div v-for="(item, pos) in favList" :key="pos">
        <div>
          {{item.id}}
        </div>
        <button class="rem" @click="removeFav(pos)">
        </button>
      </div>
    </div>
    <div v-if="favy==0">
      <div class="notlogged">Ainda nao tens favoritos</div>
      <img src="../assets/where.jpg" alt="where" class="where" />
    </div>
  </div>
  <div v-if="addy!=1 && loggy!=1">
    <div class="notlogged">Não pode aceder ao conteúdo desta página sem ter feito o login</div>
    <img src="../assets/403.jpg" alt="nope" class="nope" />
  </div> 
</template>

<script>
export default {
  data() {
    return {
      addy: null,
      loggy: null,
      favy: 0,
      favList: [],
    };
  },
  updated() {
    localStorage.setItem("fav_l", this.favList.length);   //??????????????
  },
  mounted(){ 
    this.addy = localStorage.getItem('admin')
    this.loggy = localStorage.getItem('logged')
    if (localStorage.getItem('fav') > 0) {              //so faz update do "favy" se este ja foi inicializado no localstorage.
      this.favy = localStorage.getItem('fav')
      }
    this.favList += localStorage.getItem('favItem')
  },
  methods:{
    removeFav(pos) {
      this.favList.splice(pos, 1);
      localStorage.removeItem('admin');        //////////////?????????
      location.reload();
    }
  }
};
</script>

<style>
.where{
  margin-bottom: 7cm;
  margin-top:1cm;
}

.notlogged{
  font-weight: bold;
  font-size: 35px;
}

</style>