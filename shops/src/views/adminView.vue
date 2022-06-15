<template >
  
  <div class="regi" v-if="addy==1">
    <div class="container">
      <h1 class="b">Administração</h1>
      <p>Formulário para introdução de items na Base de Dados</p>
      <hr />

      <label><b class="lefty">item</b></label>
      <input
        type="text"
        placeholder="introduza o item"
        name="email"
        id="item_"
        v-model="item_"
      />

      <label><b class="lefty">URL</b></label>
      <input
        type="text"
        placeholder="URL goes here"
        name="url_"
        id="url_"
        v-model="url_"
      />

      <label><b class="lefty">Preço</b></label>
      <input
        type="number"
        placeholder="preco goes here"
        name="preco"
        id="preco"
        v-model="preco"
      />
      <hr />
      <button @click="save()" type="submit" class="registerbtn">
        Submeter
      </button>
    </div>


    <div v-if="alerta == 2">
      <div class="alert alert-danger" role="alert">
        item field is empty
      </div>
    </div>

    <div v-if="alerta == 3">
      <div class="alert alert-danger" role="alert">
        url field is empty
      </div>
    </div>

    <div v-if="alerta == 1">
      <div class="alert alert-danger" role="alert">
        WOW! you did it!
      </div>
    </div>

    <div v-if="alerta == 4">
      <div class="alert alert-danger" role="alert">
        Error
      </div>
    </div>
    <div><img src="../assets/boss.png" alt="boss" class="boss" /></div>
  </div>
  <div v-if="addy!=1">
    <div class="hacker">You Are Not An Admin!</div>
    <img src="../assets/401.jpg" alt="nope" class="nope" />
  </div>
</template>



<script>
import axios from "axios"
export default {
  el: "#app",
  data() {
    return {
      alerta: "",
      item_: "", //guarda temporatiamente um email (certifica-te que o method "apaga" estes dados depois de serem introduzidos no "users")
      url_: "", //guarda temporatiamente uma password (certifica-te que o method "apaga" estes dados depois de serem introduzidos no "users")
      preco: "",
      addy: null //guarda temporatiamente outra password para comprarmos com o 1º (certifica-te que o method "apaga" estes dados depois da comparacao)
    };
  },
mounted(){ 
  this.addy = localStorage.getItem('admin')
  },
methods: {
    async validURL(){
       try {
        const response = await fetch(this.url_);

        console.log('response.status: ', response.status); // 👉️ 200
        console.log(response);

        if(response == 200){
          return true;
        } else {
          return false;
        }

      } catch (err) {
        console.log(err);
      }
    },

      save() {
 
       //  if(this.validURL())
        if (this.url_ == '') {
            this.alerta = 3;
        } 
        if (this.item_ == '') {
            this.alerta = 2;
        }
        if (this.item_ != "" && this.url_ != ""){
          axios
          .post("https://best-website-c402f-default-rtdb.europe-west1.firebasedatabase.app/.json", {
              item_: this.item_,
              url_: this.url_,
              preco: this.preco,
          })
        .then(
            (response) => (
                (this.articleId = response.data.id)
                //this.$router.push("/adminView")
            )
        )
        this.alerta = 1
        } else {
          console.log("Error.");
        }
      }
    }
}
</script>



<style>
.b {
  color: green;
  font-weight: bold;
  text-decoration: underline;
}
.lefty {
  display: flex;
  align-self: left;
  color: green;
  margin-left: 20px;
}

* {
  box-sizing: border-box;
}

.container {
  padding: 16px;
}

input[type="preco"],
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="email"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

.registerbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

a {
  color: dodgerblue;
}

.signin {
  background-color: #f1f1f1;
  text-align: center;
}

.boss {
  width: 360px;
}

.hacker{
  font-weight: bold;
  font-size: 35px;
}

.nope {
  width:50%;
  margin-top: 15px;
}
</style>