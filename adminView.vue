<template>
  <div class="regi">
    <div class="container">
      <h1 class="b">Administração</h1>
      <p>Formulário para introdução de items na Base de Dados</p>
      <hr />

      <label for="email"><b class="lefty">item</b></label>
      <input
        type="text"
        placeholder="introduza o item"
        name="email"
        id="item_"
        v-model="item_"
      />

      <label for="psw"><b class="lefty">URL</b></label>
      <input
        type="text"
        placeholder="URL goes here"
        name="url_"
        id="url_"
        v-model="url_"
      />

      <label for="psw-repeat"><b class="lefty">Comentário</b></label>
      <input
        type="text"
        placeholder="comentário goes here"
        name="comentario"
        id="comentario"
        v-model="comentario"
      />
      <hr />
      <button @click="addnewuser()" type="submit" class="registerbtn">
        Submeter
      </button>
    </div>


    <div v-if="alerta == 2">
      <div class="alert alert-danger" role="alert">
        É necessário introduzir o email para registar no site. Burro.
      </div>
    </div>

    <div v-if="alerta == 3">
      <div class="alert alert-danger" role="alert">
        Boa ideia! Criar uma conta sem password... És um génio
      </div>
    </div>

    <div v-if="alerta == 4">
      <div class="alert alert-danger" role="alert">
        Tens de igualar ambas as passwords......... Besta
      </div>
    </div>

  </div>
</template>



<script>
//import firebase from "firebase";          AAAAAAAAAAAAAAAAAAAAAAAAAAHHH

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
        if (this.image == '') {
            this.alerta = 2;
        }
        if (this.item == '') {
            this.alerta = 1;
        } 
          if (this.item != "" && this.image != ""){
          axios
          .post("https://login-51c7f-default-rtdb.europe-west1.firebasedatabase.app/.json", {
              item: this.item,
              image: this.image,
              description: this.description,
          })
        .then(
            (response) => (
                (this.articleId = response.data.id),
                this.$router.push("/admin")
            )
        )
        } else {
            console.log("Error.");
        }
      }
    }
}

//export var users2 = users
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