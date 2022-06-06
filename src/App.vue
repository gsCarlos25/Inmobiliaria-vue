<script >
export default{
  data(){
    return{
        loading:'https://thumbs.gfycat.com/DearWellinformedDalmatian-size_restricted.gif',
      }
    }
  }

</script>

<template>
<router-view></router-view>
<div class="todo">
  <div class="pie">

  <router-link class="link" to="/">
    <div class="pieiconos">
      <font-awesome-icon class="icono" icon="compass"/> 
      <p>Inicio</p>
    </div>
  </router-link>

  <router-link class="link" to="/ofertas">
  <div class="pieiconos">
    <font-awesome-icon class="icono" icon="tag"/>
    <p>Ofertas</p>
  </div>
  </router-link>
  
  <router-link class="link" to="/perfil">
  <div class="pieiconos">
    <font-awesome-icon class="icono" icon="user"/>
    <p>Perfil</p>
  </div>
  </router-link>
  </div>
</div>



<div class="arreglo"></div>
</template>

<style>
*{
  font-family: 'Lato', sans-serif;
  font-family: 'Tajawal', sans-serif;
}

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Tajawal&display=swap');

.pie{
  height: 12vh;
  padding-left:12vw;
  padding-right:12vw;
  background-color:white;
  display:flex;
  justify-content:space-around;
  margin-top:1vh;
  position:fixed;
  bottom:0;
  left:0;
  right:0;
}

.pieiconos{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding-top: 1.5vh;
  padding-bottom: 3vh;
}

.link{
  text-decoration:none;
  color:black;
  
}

.icono{
  height:4.5vh;
}


.todo{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:space-between;
  }
html{
  height:100%;
}
body{
  background-color: rgb(245, 244, 244);
}
.arreglo{
    height: 25vh;
    background-color: rgb(245, 244, 244);
}
</style>
