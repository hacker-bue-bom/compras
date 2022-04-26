<template>
 <div>
  <div class="titlebox_container">
      <div class="titlebox">
        <img src="../assets/pkmlogo.png" id="pkmlogo">
      </div>
      
  </div>
  <div class="bdy">
        <div  class="item_container">
            <button  class="item">
              <img src="../assets/cards/celebi.png" class="card">
            </button>
            <button  class="item">
              <img src="../assets/cards/charizard.png" class="card">
            </button>
            <button  class="item">
              <img src="../assets/cards/dragonite.jpg" class="card">
            </button>
            <button  class="item">
              <img src="../assets/cards/mew.png" class="card">
            </button>
            <button  class="item">
              <img src="../assets/cards/jirachi.jpg" class="card">
            </button>
            <button  class="item">
              <img src="../assets/cards/pikachu.jpg" class="card">
            </button>
            <button  class="item">
            <img src="../assets/cards/mewtwo.jpg" class="card">
            </button>
            <button  class="item">
              <img src="../assets/cards/umbreon.png" class="card">
            </button>
            <button  class="item">
              <img src="../assets/cards/arceus.jpg" class="card">
            </button>
            <button  class="item">
            <img src="../assets/cards/rayquaza.jpg" class="card">
            </button>
            <button  class="item">
            <img src="../assets/cards/giratina.jpg" class="card">
            </button>
            <button  class="item">
            <img src="../assets/cards/greninja.png" class="card">
            </button>
            <button  class="item">
            <img src="../assets/cards/mewp.jpg" class="card">
            </button>
            <button  class="item">
            <img src="../assets/cards/ball.jpg" class="card">
            </button>
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
.titlebox_container{
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 40px;
  background-color: blue;
  width: auto;
  height: 3cm;
}

.titlebox{
  background-color: grey;
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
}

.item{
  all: unset;
  background-color: green;
  margin: 10px;
  max-width: 170px;
  border: 6px solid 	#006400;
    
}





</style>

<script>
export default {
  el: "app",
  data() {
      return{
    itemIN: "",
    quantityIN: "",

    productsList: [
      {
        quantity: 0,
        item: "Apples",
        edit: false,
      },
      {
        quantity: 0,
        item: "Pears",
        edit: false,
      },
    ],
      };
  },
  methods: {
    addItem: function () {
      this.productsList.push({
        quantity: this.quantityIN,
        item: this.itemIN,
        edit: false,
      });
    },
    deleteitem: function (id) {
      console.log("asdfasfasdf");
      this.itemsList.splice(id, 1);
    },
    editar: function (id) {
      //id é a posicao do produto na lista
      this.productsList[id].edit = true;
    },
  },
}
</script>