<template>
 <div>
   <div id="titcont">
      <div class="titlebox_container">
        <img src="../assets/pokeback.jpg" id="pkmbk" >
          <div class="titlebox">
            <img src="../assets/pokelogo.png" id="pkmlogo">
          </div>
        <img src="../assets/pokeback.jpg" id="pkmbk2">
      </div>
  </div>

  
  <div class="bdy">
        <div  class="item_container"  >
          <div v-for="(card, num) in cardList" :key="num">
            <button class="item">
              
              <img :src="getImage(cardList[0].image)" alt="" class="card" @click="addItem(card)">
            </button>
          </div>
            
            
        </div>
        <div class="right_thing">
            column on the right that adds the items and gives the price total
                <div class="actual_right_thing">
                    the actual shopping cart
                </div>
        </div>
  </div>
 </div>
</template>


<script>
export default {
  el: "app",
  data() {
      return{
    itemIN: "",
    quantityIN: "",
    cardList: [
      {
        name: "pikachu",
        price: 12,
        image: "pikachu.jpg"

      },
      {
        name: "mew",
        price: 2,
        image: "mew.png"
      }
    ],
    cartList: [
    ],
      };
  },
  methods: {
    getImage(nomeImagem) {
    return require("../assets/cards/"+nomeImagem);
  },

    addItem: function (num) {
      this.cartList.push({
        name: this.quantityIN,
        item: this.itemIN,
        edit: num,
      });
    },
    deleteitem: function (num) {
      this.cartList.splice(num, 1);
    },
    editar: function (num) {
      //num é a posicao do produto na lista
      this.cartList[num].edit = true;
    },
  },
}
</script>



<style>

#pkmlogo{
  width: 100%; /* or any custom size */
  height: 100%; 
  object-fit: contain;
}

.card{
  width: 100%; /* or any custom size */
  height: 100%; 
  object-fit: contain;
}

#titcont{
  display: flex;
  justify-content: center;
}

.titlebox_container{
  border: 6px solid 	#006400;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 40px;
  width: 60%;
  height: 3.5cm;
}

.titlebox{
  display: flex;
  justify-content: space-between;
  background-color: #04aa6d ;
  width: 25cm;
  }

.bdy{
  margin: 40px;
  display: flex;
}

.right_thing{
  background-color: crimson;
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 250px;
}

.actual_right_thing{
  background-color: pink;
}

.item_container{
  background-color: #04aa6d ;
  margin: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: 400px;
  justify-content: center;
  border: 6px solid 	#006400;
}

.item{
  all: unset;
  background-color: green;
  margin: 10px;
  max-width: 170px;
  border: 6px solid 	#006400;
    
}
</style>
