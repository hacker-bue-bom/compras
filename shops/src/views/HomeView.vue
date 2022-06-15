<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p id="besttitle">Best website</p>
    <div>
      <div class="imgcontainer">
        <img src="../assets/Avatar.png" alt="Avatar" class="avatarx" />
      </div>

      <div class="container">
        <label for="uname"><b class="lefty">Utilizador</b></label>
        <input
          type="email" placeholder="Email de utilizador" name="uname" required v-model="email_"/>

        <label for="psw"><b class="lefty">Password</b></label>
        <input type="password" placeholder="Introduza a sua password" name="psw" required v-model="pass_" v-on:keyup.enter="signupRequest()"/>

        <button type="submit" @click="signupRequest()">Login</button>

        <div class="container_rem" style="background-color: #f1f1f1">
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>
      </div>
    </div>
    <div v-if="alert == 1">
      <div class="alert alert-success" role="alert">
        Login feito com sucesso
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      alert: 0,
      email_: "",
      pass_: "",
    }},
  methods: {
    signupRequest() {
      console.log(this.email_ + " " + this.pass_)
      firebase.auth().signInWithEmailAndPassword(this.email_, this.pass_).then((userCredential) => {
      const guy = userCredential.user;
      console.log("user: " + guy.email);
      this.successMessage = "login Successfull."
      this.alerta = 1
      if (this.email_ == "admin_email@gmail.com"){                                 
                localStorage.setItem('admin', 1)                                  
          //this.$router.push("/adminView");
          location.reload(); 
        }                                                                                
      else {localStorage.setItem('logged', 1)}                                            
      },    
      error => {
        let errorResponse = JSON.parse(error.message);
        this.errorMessage = errorResponse.error.message;
      }
);
    },
  }
}

</script>

<style>
#besttitle {
  text-decoration: underline;
  font-size: 60px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
}

.lefty {
  display: flex;
  align-self: left;
  color: green;
  margin-left: 20px;
}

form {
  border: 3px solid #f1f1f1;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 50px;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
  width: 35%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25px;
}

.container_rem {
  margin-top: 10px;
  padding: 12px;
  border-radius: 25px;
  width: 35%;
  margin-left: auto;
  margin-right: auto;
}

.avatar {
  width: 60px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>