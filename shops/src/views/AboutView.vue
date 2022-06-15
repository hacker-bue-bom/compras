<template>
  <div class="regi">
    <div class="container">
      <h1 class="b">Registo</h1>
      <p>Por favor preencha estes campos para registar a sua conta</p>
      <hr />

      <label for="email"><b class="lefty">Email</b></label>
      <input
        type="email"
        placeholder="introduza o seu email"
        name="email"
        id="email_id"
        v-model="email_temp"
      />

      <label for="psw"><b class="lefty">Password</b></label>
      <input
        type="password"
        placeholder="Introduza a sua Password"
        name="psw"
        id="psw"
        v-model="psw_temp"
      />

      <label for="psw-repeat"><b class="lefty">Confirmar Password</b></label>
      <input
        type="password"
        placeholder="Repete a Password"
        name="psw-repeat"
        id="psw-repeat"
        v-model="psw_temp2"
      />
      <hr />
      <button @click="addnewuser()" type="submit" class="registerbtn">
        Registar
      </button>
    </div>

    <div class="container_signin">
      <p>Já tem conta? <router-link to="/">Login</router-link></p>
    </div>

    <div v-if="alerta == 1">
      <div class="alert alert-success" role="alert">
        Success! És bué esperto e bonito
      </div>
    </div>

    <div v-if="alerta == 2">
      <div class="alert alert-danger" role="alert">
        É necessário introduzir o email para registar no site
      </div>
    </div>

    <div v-if="alerta == 3">
      <div class="alert alert-danger" role="alert">
        Erro, é necessario preencher palavra-passe 
      </div>
    </div>

    <div v-if="alerta == 4">
      <div class="alert alert-danger" role="alert">
        Erro, as palavras passes não correspondem
      </div>
    </div>

  </div>
</template>



<script>
import firebase from "firebase";

export default {
  el: "#app",
  data() {
    return {
      alerta: "",
      email_temp: "", //guarda temporatiamente um email (certifica-te que o method "apaga" estes dados depois de serem introduzidos no "users")
      psw_temp: "", //guarda temporatiamente uma password (certifica-te que o method "apaga" estes dados depois de serem introduzidos no "users")
      psw_temp2: "", //guarda temporatiamente outra password para comprarmos com o 1º (certifica-te que o method "apaga" estes dados depois da comparacao)
      users: [
        {
          email: "",
          pass: "",
        },
      ],
    };
  },
  methods: {
    addnewuser: function () {
      if (this.psw_temp != "" && this.psw_temp == this.psw_temp2) {
        //primeiro verificamos se ambas as passwords introduzidas sao iguais
         this.users.push({
           //method que mete os dados do "psw_temp" e "email_temp" no "users"
           email: this.email_temp,
           pass: this.psw_temp,
         });
        this.alerta = 1;
         this.createAccount();
      } //aqui ficam os alerts no caso de dar erro
      else if (this.email_temp == "") {
        this.alerta = 2;
        console.log(this.alerta);
      } else if (this.psw_temp == "" || this.psw_temp2 == "") {
        this.alerta = 3;
        console.log(this.alerta);
      } else {
        this.alerta = 4;
      }
    },

    createAccount(){
      firebase.auth().createUserWithEmailAndPassword(this.email_temp, this.psw_temp)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode + errorMessage);
          // ..
        });
    }


  },
};

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

input[type="email"],
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

.container_signin {
  background-color: #f1f1f1;
  text-align: center;
  padding: 16px;
  width: 33%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25px;
}
</style>