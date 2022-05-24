<template>
  <div class="regi">
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

      <label><b class="lefty">Comentário</b></label>
      <input
        type="text"
        placeholder="comentário goes here"
        name="comentario"
        id="comentario"
        v-model="comentario"
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
      comentario: "", //guarda temporatiamente outra password para comprarmos com o 1º (certifica-te que o method "apaga" estes dados depois da comparacao)
    };
  },
methods: {
      save() {
        
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
              comentario: this.comentario,
          })
        .then(
            (response) => (
                (this.articleId = response.data.id),
                this.$router.push("/adminView")
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
</style>
