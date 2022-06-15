<template>
  <div v-if="addy==1 || loggy==1">
    <div id="titcont">
      <div class="titlebox_container">
        <img src="../assets/pokeback.jpg" id="pkmbk" />
        <div class="titlebox">
          <img src="../assets/pokelogo.png" id="pkmlogo" />
        </div>
        <img src="../assets/pokeback.jpg" id="pkmbk2" />
      </div>
    </div>
    <div class="bdy">
      <div class="item_container">
        <div class="div_cont" v-for="(card, num) in controlVar " :key="num">   <!--vamos mostar "controlVar" numero de cartas-->
          <button class="item" @click="addcard(card,num)">
            <img :src="getImage(num)" alt="" class="card"/>
          </button>
          <button class="addfav" @click="Addfav(card)">            <!--button para adicionar aos favoritos-->
            Adicionar aos favoritos
          </button>
        </div>
      </div>
      <div class="right_thing">
        <div class="actual_right_thing"  v-for="(carta, num) in cart" :key="num">   <!--v-for="(carta, num) in cart" :key="num"-->
          {{carta.name}} - {{carta.price}} euros, x{{carta.qtd}} <button class="remy" @click="deleteitem()"> remove </button> <br>
        </div>
        <div class="buy">
          total a pagar: {{total}} €
          <button class="buybutton" @click="buy()">
           buy
          </button>
        </div>
      </div>
    </div>
    <div class=searchthing>
      
    </div>
  </div>
  <div v-if="addy!=1 && loggy!=1">
    <div class="notlogged">Não pode aceder ao conteúdo desta página sem ter feito o login</div>
    <img src="../assets/403.jpg" alt="nope" class="nope" />
  </div>
</template>

<script>
//import firebase from "firebase";
export default {
  el: "app",
  data() {
    return {
      total: 0,
      counter: 0,
      a: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      randCardList: [],
      controlVar: Math.floor(Math.random() * (10 -5 + 1)) +5, //variavel de controlo: quero no minimo 5 cartas e 10 no maximo para mostrar
      cardList: [
        {
          name: "pikachu",
          price: 12,
          image: "pikachu.jpg",
          quant: 1
        },
        {
          name: "mew",
          price: 2,
          image: "mew.png",
          quant: 1
        },
        {
          name: "arceus",
          price: 25,
          image: "arceus.jpg",
          quant: 1
        },
        {
          name: "ball",
          price: 129,
          image: "ball.jpg",
          quant: 1
        },
        {
          name: "celebi",
          price: 15,
          image: "celebi.png",
          quant: 1
        },
        {
          name: "charizard",
          price: 200,
          image: "charizard.png",
          quant: 1
        },
        {
          name: "dragonite",
          price: 199,
          image: "dragonite.jpg",
          quant: 1
        },
        {
          name: "giratina",
          price: 40,
          image: "giratina.jpg",
          quant: 1
        },
        {
          name: "greninja",
          price: 5,
          image: "greninja.png",
          quant: 1
        },
        {
          name: "jirachi",
          price: 2,
          image: "jirachi.jpg",
          quant: 1
        },
        {
          name: "mewp",
          price: 5,
          image: "mewp.jpg",
          quant: 1
        },
        {
          name: "mewtwo",
          price: 350,
          image: "mewtwo.jpg",
          quant: 1
        },
        {
          name: "rayquaza",
          price: 69,
          image: "rayquaza.jpg",
          quant: 1
        },
        {
          name: "umbreon",
          price: 25,
          image: "umbreon.png",
          quant: 1
        },
        {
          name: "cyn",
          price: 5,
          image: "cyn.jpg",
          quant: 1
        },
        {
          name: "tyran",
          price: 2,
          image: "tyran.png",
          quant: 1
        },
        {
          name: "pikamax",
          price: 25,
          image: "pikamax.jpg",
          quant: 1
        },
        {
          name: "redblue",
          price: 200,
          image: "redblue.jpg",
          quant: 1
        },
        {
          name: "zoro",
          price: 40,
          image: "zoro.jpg",
          quant: 1
        },
        {
          name: "energy",
          price: 4,
          image: "energy.jpg",
          quant: 1
        },
        {
          name: "kek",
          price: 1,
          image: "kekw VMAX.png",
          quant: 1
        },
      ],
      cart: [],
      addy: null,
      loggy: null,
      cart_items: 0,  
    };
  },
  mounted(){ 
    this.addy = localStorage.getItem('admin')
    this.loggy = localStorage.getItem('logged')
  },  
  methods: {
    getImage(num) {
      this.randdd(this.controlVar, this.cardList.length)
      return require("../assets/cards/" + this.cardList[this.randCardList[num]].image);
    },
    randdd() {
      while (this.counter < this.controlVar) {  
        var rand = this.a[Math.floor(Math.random() * this.a.length)];
        if (!(this.randCardList.includes(rand))) {
          this.randCardList.push(rand)
          this.counter++
        }
        else {
          this.a.splice(rand,1)
          if(this.a.length <= 3) {    //???????????
            this.counter = 22
            break
          }
        }
        console.log("this randCardList: " + this.randCardList)
      }
    },
    addcard: function (card,num) {


/// ana.caraban@staff.uma.pt
//       if(this.cart.indexOf(card) != -1){    \\if exists in array
// this.cart[this.cart.indexOf(card)].qtd = this.cart[this.cart.indexOf(card)].qtd +1;
//       }
      const myobj = {}                                                  //criar um objeto para adicionar no carrinho
      myobj.name = this.cardList[this.randCardList[num]].name;
      myobj.price = this.cardList[this.randCardList[num]].price;
      myobj.qtd = this.cardList[this.randCardList[num]].quant;
      
      this.total += this.cardList[this.randCardList[num]].price;        //adicionar ao preço total

      this.cart_items++                                                 //incrementar antes de mostrar, porque a variavel começa em 0
      localStorage.setItem("cart_len_in_nav", this.cart_items);         //nº de items no carrinho na navbar

      if(this.cardList[this.randCardList[num]].quant == 1) {            //if ainda n foi adicionado
        this.cardList[this.randCardList[num]].quant +=1                 //incrementa à quantidade
        this.cart.push(myobj);                                          //- adiciona
      }

      // 
      else {                                                            //if ja foi adicionado    
        card.qtd ++    
       }
      console.log(this.cart)
    },

    deleteitem: function (num) {
      this.cart.splice(num, 1);
    },
    Addfav: function(card) {
      localStorage.setItem('fav', 1) /////////////////////////dont work
      localStorage.setItem('favItem')
      localStorage.push('favItem', card)
    },
    buy(){
      localStorage.removeItem('cart_len_in_nav')
    }
  },
};
</script>



<style>
#pkmlogo {
  width: 100%; 
  height: 100%;
  object-fit: contain;
}
.div_cont{
  width: 270px;
  margin-bottom:30px;
}
.card {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
#titcont {
  display: flex;
  justify-content: center;
}
.titlebox_container {
  border: 6px solid #006400;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 40px;
  width: 60%;
  height: 3.5cm;
}
.titlebox {
  display: flex;
  justify-content: space-between;
  background-color: #04aa6d;
  width: 25cm;
}
.bdy {
  margin: 40px;
  display: flex;
}
.right_thing {
  border: 6px solid #006400;
  background-color: #04aa6d;
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 250px;
}
.actual_right_thing {
  background-color: #e8fff5;
}
.item_container {
  background-color: #04aa6d;
  margin: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: 350px;
  justify-content: center;
  border: 6px solid #006400;
}
.item {
  all: unset;
  background-color: green;
  margin: 10px;
  max-width: 200px;
  border: 6px solid #006400;
}

.addfav {
  background-color: green;
  border: 6px solid #006400;
  max-width: 200px;
}

.notlogged{
  font-weight: bold;
  font-size: 35px;
}

.nope {
  width:50%;
  margin-top: 15px;
}

.buybutton{
  background-color: green;
  border: 6px solid #006400;
}
</style>
