<script>
import { GoogleAuthProvider,getAuth, signInWithPopup } from "firebase/auth";


export default{
    data(){
        return{
            input:"password",
            nombre: [],
            entrado: null
        }
    },

    methods: {
        cambiarImput(){
            if(this.input == "password")
                return this.input = "text"
            else
                return this.input = "password"
        },
        anadir(){

        },
        logeo(){
            console.log("hola");
        },
        loginGoogle(){
            const provider = new GoogleAuthProvider();
            const auth = getAuth();
            signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
                this.nombre.push(result.user.displayName)
                this.entrado = true;
                console.log(this.nombre[0])
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
        }
    }
}

</script>

<template>
<div v-if="!entrado" class="login">
    <h1>Bienvenido de nuevo</h1>
<div class="logeo">
    <div class="contenedor">
        <font-awesome-icon icon="user" class="iconologin"/>    
        <input type="text" class="input" placeholder="Correo">  
    </div>
    <div class="contenedor">
        <font-awesome-icon icon="lock" class="iconologin"/>
        <input v-bind:type="input" class="input" placeholder="Contraseña">
        <font-awesome-icon @click="cambiarImput()" icon="eye" class="iconologineye"/>
    </div>
</div>
<div class="singin">
    <h2 @click="logeo()">Sing in</h2>
    <p @click="logeo()" class="flecha">></p>
</div>
<div class="loginGoogle">
    <p>Sing in Whith:</p>
    <img class="google" @click="loginGoogle()" src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" alt="logo">
</div>
</div>

<div v-if="entrado">
    <h1>Mi perfil</h1>
    <h4>Bienvenido {{nombre[0]}}</h4>
    <router-link id="link" to="/anadir">
        <div class="manejar" >Dar de alta o eliminar casa</div> 
    </router-link>
    
    <div class="cerrar"><p>Cerrar sesión</p></div>
</div>

</template>

<style>

h1{
    margin-top:3rem;
    margin-left:1vw;
}
.cerrar{
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgb(16, 220, 104);
    width:8vw;
    height:4vh;
    border-radius: 1rem;
    margin-left:2vw;
    margin-top:5vw;
    cursor:pointer; 
    color:white;
}
.manejar{
    display:flex;
    justify-content:center;
    padding: 1rem;
    background-color:rgb(44, 44, 44);
    color:white;
    width:15vw;
    border-radius: 1rem;
    margin-left:2vw;
    margin-top:5vw;
    cursor:pointer;
}
.contenedor{
    width:93vw;
    background-color: white;
    margin-left:3vw;
    border-radius:2rem;
    display:flex;
    height: 7vh;
    align-items:center;
    margin-bottom: 1.5rem;
    margin-top:1rem;
}

.input{
    border:none;
    margin-left:2vw;
    height: 100%;
    outline:0;
    width:100%;
}

.iconologin{
    padding-left:2vw;
    height: 2.5vh;
}

.google{
    padding-top:3vh;
    height: 3REM;
    width: 3REM;
    cursor:pointer;
}

.loginGoogle{
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top: 10vh;
    }

.iconologineye{
    margin-right:2vw;
}

.flecha{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:1rem;
    color:white;
    background-color:rgb(2, 247, 76);
    width: 0.5vw;
    border-radius:20px;
    height: 1vh;
    font-size:25px;
    margin-left:2rem;
    cursor:pointer;
}

.singin{
    display:flex;
    align-items:center;
    margin:3vw;
}

.singin h2{
    cursor:pointer;
}
</style>