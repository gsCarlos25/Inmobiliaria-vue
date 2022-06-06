<script>
import {db, getCasas} from '../firebaseinit';
import { collection, onSnapshot } from "firebase/firestore";

export default {
    data(){
        return{
            index: 0,
            loading:'https://thumbs.gfycat.com/DearWellinformedDalmatian-size_restricted.gif',
            index:0,
            array:[],
            ofertas:[],
            oferta:[],
            cargar:false,
            aleatorio: 0
        }
    },
    mounted() {
    this.cargar = true
    getCasas(db).then(datos=>
      {
          this.array=datos;
          this.cargar = false
          this.ofertas = this.array.filter(casa=>casa.oferta)
          this.aleatorio = Math.floor(Math.random() * (this.ofertas.length))
          this.oferta.push(this.ofertas[this.aleatorio])
          this.oferta = this.oferta[0]
      })
    
    const usub = onSnapshot(collection(db, "casas"), (docs) =>{
      this.array = []
    docs.forEach((doc) => {
      
      this.array.push(doc.data())
    })

    })
    }
}
</script>

<template>
<h1>Bienvenido</h1>
<h4 class="h4">Recomendado</h4>

<router-link id="link" v-bind:to='"/componente/" + oferta.id'>
  <div class="componente">
    <img v-bind:src="oferta.casa" class="imgRecomendada" alt="img">
    <div class="infoRecomendada">
      <h4 class="descriptionRecomendada">{{oferta.description}}</h4>
      <p class="precioRecomendada">{{oferta.precio}}</p>
    </div>
  </div>
</router-link>

<h4 class="h4">Categorias</h4>
<div class="categorias">
    <router-link id="link" to="/alquiler/">
        <div id="compra" class="tipo">
            <img class="imagen" src="https://p4.wallpaperbetter.com/wallpaper/491/116/850/room-interior-bedroom-peconic-house-and-barn-wallpaper-preview.jpg" alt="">
            <p>Alquiler</p>
        </div>
    </router-link>

    <router-link id="link" to="/compra/">
        <div id="compra" class="tipo">
            <img class="imagen" src="https://i.pinimg.com/originals/4f/54/4c/4f544c8b5bd56abb59c4794ab884c991.jpg" alt="">
            <p>Compra</p>
        </div>
    </router-link>
</div>
</template>

<style>
h1{
    padding-left:1vw;
}
.h4{
    padding-left:2vw;
}
.categorias{
    display: flex;
    justify-content:space-around;
}

.imagen{
    width:45vw;
    height:35vh;
    border-radius: 1.5rem;
}
#link{
    text-decoration: none;
    color:black;
}

.imgRecomendada{
  position:relative;
  width:97vw;
  height:57vh;
}
.infoRecomendada{
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top:15vh;
}

.descriptionRecomendada{
  background-color:black;
  color:white;
  padding:0.5rem;
}
.precioRecomendada{
  margin-top:-0.5rem;
  margin-left:0.5rem;
  padding:0.5vh;
  border-radius:1rem;
  background-color:white;

}
</style>