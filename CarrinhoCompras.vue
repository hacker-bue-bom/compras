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
          <button class="item" @click="addcard(card)" >
            <img :src="getImage(cardList[randdd(controlVar, cardList.length)].image)" alt="" class="card" />
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
      res: [],
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
    getImage(nomeImagem) {
      return require("../assets/cards/" + nomeImagem);
    },
    randdd(i, totalcards) {

      
      //isto apenas esta aqui para ser dinamico, mas basicamente é para criar um array numerado por ordem a partir do tamanho de "cardList"
      var a = [];
      var pushme = 0;
      for (let k = totalcards-1; k >= 0; k--) {
        a.push(pushme);
        pushme++;
      }

      //aqui estamos a criar um novo array escolhendo aleatoriamente elementos do array "a"(defenido acima)
      var counter = 0;
      while (counter < i) {
        var rand = a[Math.floor(Math.random() * a.length)];
        if (!(this.res.includes(rand))) {
          //apenas vamos adicionar o numero aleatorio no array se ela nao estiver no array. a fim de evitar repetições
          this.res.push(rand)
          return rand
        }
        else{
          counter++
          a.splice(rand, 1)
        }
      }
      
    },

    addcard: function (num) {
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
