<script>
import {db, getCasas} from '../firebaseinit';
import { collection, query,  onSnapshot } from "firebase/firestore";

export default {
  data(){

      return {
          /* array : [
            {casa:'https://firebasestorage.googleapis.com/v0/b/house-marketplace-app-fb1d0.appspot.com/o/images%2FPBaQPathaQeX7TgOmA5CWkHDlQJ2-furnished2.jpg-65057af2-bf34-4678-8fb8-cdb668edc694?alt=media&token=005dddc3-943b-4afe-b5e6-cbf59b32f70b',location:'madrid',description:'Apartamento',precio:'1700/month',habitacion:'2 bedroom',baño:"1 bathroom"},
            {casa:'https://firebasestorage.googleapis.com/v0/b/house-marketplace-app-fb1d0.appspot.com/o/images%2F89J2hG48S3dZNr1P3u32dmRRn7l2-pool.jpg-1c23b876-04f1-41ed-83eb-4152cf229346?alt=media&token=198281aa-15bf-4cfe-a68c-35236331c613',location:'madrid',description:'Apartamento',precio:'1700/month',habitacion:'2 bedroom',baño:"1 bathroom"},
            {casa:'https://firebasestorage.googleapis.com/v0/b/house-marketplace-app-fb1d0.appspot.com/o/images%2FiSkfDlYUNOgQrS89nqnXEdkcefG2-1.jpg-e6f55580-8dc0-4b75-b695-b6ac5a198cf7?alt=media&token=2e706dec-5c05-49a8-9d53-a50c0ba3ff3e',location:'madrid',description:'Apartamento',precio:'1700/month',habitacion:'2 bedroom',baño:"1 bathroom"}] */
          array: [],
          loading:'https://smartsupport.lenovo.com/esv4/images/loading.gif',
          cargar:false,
      }

  },
  mounted() {
    this.cargar = true
    getCasas(db).then(datos=>{
      this.array=datos
      this.cargar = false
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
<img v-bind:src="loading" v-if="cargar" class="loading">
<h1 class="titulo">Ofertas</h1>
  <div v-for="(item,index) in array" :key="index" >
  <div class="comprobar" v-if="item.oferta">
    <router-link id="link" v-bind:to='"/componente/" + item.id'>
      <div class="componente">
        <img v-bind:src="item.casa" class="img" alt="img">
        <div class="info">
          <p>{{item.location}}</p>
          <h4 class="description h4">{{item.description}}</h4>
          <p class="precio">{{item.precio}}</p>
          <div class="rooms"><font-awesome-icon icon="bed" class="icono1"/>{{item.habitacion}}<font-awesome-icon icon="bath" class="icono2 icono1" />{{item.baño}}</div>
        </div>
      </div>
    </router-link>
  </div>
 </div>

</template>

<style>   
.loading{
  position:absolute;
  margin-left:41rem;
  margin-top:11rem;

}
.titulo{
  margin-left:1vw;
}
.componente{
  display: flex;
  margin:2rem;
}

.img{
  width:14vw;
  height:25vh;
  border-radius:1rem;
  margin-right:1rem;
}

.info{
  padding:1rem;
}

.description{
  margin-bottom: -1vh;
  margin-left:-2vw;
}

.location{
  color:gray;
  margin-bottom: -3vh;
}

.precio{
  color:rgb(71, 207, 71);
}

.rooms{
  display:flex;
  justify-content:space-between;
}

.icono1{
 padding-right: 1rem;
}

.icono2{
 padding-left: 1rem;
}

#link{
  text-decoration: none;
  color: black;
}



</style>