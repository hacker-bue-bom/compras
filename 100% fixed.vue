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
        column on the right that adds the items and gives the price total
        <div class="actual_right_thing">the actual shopping cart</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  el: "app",
  data() {
    return {
      counter: 0,
      a: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      randCardList: [],
      controlVar: Math.floor(Math.random() * (10 -5 + 1)) +5, //variavel de controlo: quero no minimo 5 cartas e 10 no maximo para mostrar
      cardList: [
        {
          name: "pikachu",
          price: 12,
          image: "pikachu.jpg",
        },
        {
          name: "mew",
          price: 2,
          image: "mew.png",
        },
        {
          name: "arceus",
          price: 2,
          image: "arceus.jpg",
        },
        {
          name: "ball",
          price: 2,
          image: "ball.jpg",
        },
        {
          name: "celebi",
          price: 2,
          image: "celebi.png",
        },
        {
          name: "charizard",
          price: 2,
          image: "charizard.png",
        },
        {
          name: "dragonite",
          price: 2,
          image: "dragonite.jpg",
        },
        {
          name: "giratina",
          price: 2,
          image: "giratina.jpg",
        },
        {
          name: "greninja",
          price: 2,
          image: "greninja.png",
        },
        {
          name: "jirachi",
          price: 2,
          image: "jirachi.jpg",
        },
        {
          name: "mewp",
          price: 2,
          image: "mewp.jpg",
        },
        {
          name: "mewtwo",
          price: 2,
          image: "mewtwo.jpg",
        },
        {
          name: "rayquaza",
          price: 2,
          image: "rayquaza.jpg",
        },
        {
          name: "umbreon",
          price: 2,
          image: "umbreon.png",
        },
        {
          name: "cyn",
          price: 2,
          image: "cyn.jpg",
        },
        {
          name: "tyran",
          price: 2,
          image: "tyran.png",
        },
        {
          name: "pikamax",
          price: 2,
          image: "pikamax.jpg",
        },
        {
          name: "redblue",
          price: 2,
          image: "redblue.jpg",
        },
        {
          name: "zoro",
          price: 2,
          image: "zoro.jpg",
        },
        {
          name: "energy",
          price: 4,
          image: "energy.jpg",
        },
        {
          name: "kek",
          price: 100,
          image: "kekw VMAX.png",
        },
      ],
      cartList: [],
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
      this.cartList.push({
        name: this.cardList[num].name,
        price: this.cardList[num].price,
        id: this.id
      })
      console.log("cartlist: " + this.cartlist)
    },
    deleteitem: function (num) {
      this.cartList.splice(num, 1);
    },
    editar: function (num) {
      //num é a posicao do produto na lista
      this.cartList[num].edit = true;
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
