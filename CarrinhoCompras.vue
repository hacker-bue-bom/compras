<template>
  <div>
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
        <div v-for="(card, num) in controlVar " :key="num">   <!--vamos mostar "controlVar" numero de cartas-->
          <button class="item" @click="addcard(num)">
            <img :src="getImage(num)" alt="" class="card"/>
          </button>
        </div>
      </div>
      <div class="right_thing">
        <div class="actual_right_thing" >   <!--v-for="(carta, num) in cart" :key="num"-->
          {{cart}} <br>
        </div>
        <div class="buy">
          total a pagar: {{total}} €
          <button @click="addcard(num)">
           buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
          yes: 1
        },
        {
          name: "mew",
          price: 2,
          image: "mew.png",
          yes: 1
        },
        {
          name: "arceus",
          price: 25,
          image: "arceus.jpg",
          yes: 1
        },
        {
          name: "ball",
          price: 129,
          image: "ball.jpg",
          yes: 1
        },
        {
          name: "celebi",
          price: 15,
          image: "celebi.png",
          yes: 1
        },
        {
          name: "charizard",
          price: 200,
          image: "charizard.png",
          yes: 1
        },
        {
          name: "dragonite",
          price: 199,
          image: "dragonite.jpg",
          yes: 1
        },
        {
          name: "giratina",
          price: 40,
          image: "giratina.jpg",
          yes: 1
        },
        {
          name: "greninja",
          price: 5,
          image: "greninja.png",
          yes: 1
        },
        {
          name: "jirachi",
          price: 2,
          image: "jirachi.jpg",
          yes: 1
        },
        {
          name: "mewp",
          price: 5,
          image: "mewp.jpg",
          yes: 1
        },
        {
          name: "mewtwo",
          price: 350,
          image: "mewtwo.jpg",
          yes: 1
        },
        {
          name: "rayquaza",
          price: 69,
          image: "rayquaza.jpg",
          yes: 1
        },
        {
          name: "umbreon",
          price: 25,
          image: "umbreon.png",
          yes: 1
        },
        {
          name: "cyn",
          price: 5,
          image: "cyn.jpg",
          yes: 1
        },
        {
          name: "tyran",
          price: 2,
          image: "tyran.png",
          yes: 1
        },
        {
          name: "pikamax",
          price: 25,
          image: "pikamax.jpg",
          yes: 1
        },
        {
          name: "redblue",
          price: 200,
          image: "redblue.jpg",
          yes: 1
        },
        {
          name: "zoro",
          price: 40,
          image: "zoro.jpg",
          yes: 1
        },
        {
          name: "energy",
          price: 4,
          image: "energy.jpg",
          yes: 1
        },
        {
          name: "kek",
          price: 1,
          image: "kekw VMAX.png",
          yes: 1
        },
      ],
      cart: [],
    };
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
            console.log("a: " + this.a)
            console.log("a length: " + this.a.length)
            this.counter = 22
            break
          }
        }
        console.log("this randCardList: " + this.randCardList)
      }
    },
    addcard: function (num) {
      const myobj = {}
      myobj.name = this.cardList[this.randCardList[num]].name
      myobj.price = this.cardList[this.randCardList[num]].price
      //if (this.cart.indexOf(myobj) == 1) {
      this.cart.push(myobj)
      this.total += this.cardList[this.randCardList[num]].price
      this.cart.yes = 0
      //}
      //else {
      //  this.cart
      //  this.total += this.cardList[this.randCardList[num]].price
      //}
    },
    deleteitem: function (num) {
      this.cart.splice(num, 1);
    },
    editar: function (num) {
      //num é a posicao do produto na lista
      this.cart[num].edit = true;
    },
  },
};
</script>



<style>
#pkmlogo {
  width: 100%; 
  height: 100%;
  object-fit: contain;
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
  background-color: crimson;
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 250px;
}
.actual_right_thing {
  background-color: pink;
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
</style>
