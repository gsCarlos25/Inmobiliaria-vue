<script>
import {db, getCasas} from '../firebaseinit';
import { collection, query,  onSnapshot } from "firebase/firestore";
export default {
    data(){
        return{
            array:[],
        }
    },
    mounted() {
    getCasas(db).then(datos=>this.array=datos)
    this.cargar = true
    const usub = onSnapshot(collection(db, "casas"), (docs) =>{
      this.array = []
    docs.forEach((doc) => {
      
      this.array.push(doc.data())
    })
    this.cargar = false
    })
  }
}
</script>

<template>

<div v-for="(item,index) in array" :key="index" >
    <img v-bind:src="loading" v-if="cargar" class="loading">    
    <div v-if="item.id == $route.params.id">
        <img class="imagenOferta" v-bind:src="item.casa" alt="">
        <div class="arregloimagen"></div>
        <div class="propiedades">
            <h2>{{item.description}} - {{item.precio}}</h2>
            <h3 v-if="item.oferta" class="descuento">{{item.descuento}} de descuento</h3>
            <h3>{{item.location}}</h3>
            <p v-if="item.tipo" class="tipoOferta">Alquiler</p>
            <p v-else class="tipoOferta">Venta</p>
            <p>{{item.habitacion}}</p>
            <p>{{item.baño}}</p>
            <br>
            <h3>Location</h3>
            <img class="mapa" src="https://cdn-assets.alltrails.com/es/static-map/production/location/cities/portugal-leiria-carvide-360009-20220110223637000000-763x240-1.png" alt="">
            <input class="contact" type="button" value="Contact Landlord">
        </div>
        
    </div>
</div>



</template>


<style>
.loading{
  position:absolute;
  margin-left:41rem;
  margin-top:11rem;
}

.descuento{
    display: flex;
    justify-content:center;
    background-color: rgb(0, 0, 0);
    width:12vw;
    border-radius:1rem;
    padding:2px;
    color:white;
}

.arreglo{
    height: 25vh;
    background-color: rgb(245, 244, 244);
}

.imagenOferta{
    width:99.4vw;
    height: 45vh;
    border-radius:0;
    margin-left:-1vw;
    margin-top:-1vw;
}

.tipoOferta{
    display: flex;
    justify-content:center;
    background-color: rgb(16, 220, 104);
    width: 5vw;
    border-radius:1rem;
    padding:2px;
}

.propiedades{
    margin-left:2vw;
}

.mapa{
    width:95vw;
}

.contact{
    background-color: rgb(16, 220, 104);
    margin-top: 2rem;
    margin-left: 18rem;
    width: 800px;
    height: 50px;
    font-size: 20px;
    color: white;
    border: 0px solid black;
    border-radius: 10px;
    cursor: pointer;
}
</style>