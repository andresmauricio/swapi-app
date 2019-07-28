<template>
  <div id="app">
  
  <nav id="nav">
    
    <div>
        
 
      <router-link to="/personas" >Persona</router-link>  |  
      <router-link to="/planetas">Planetas</router-link>  |  
      <router-link to="/peliculas" >Peliculas</router-link> | 
      <router-link to="/busqueda" >Busqueda</router-link>  
    </div>

  </nav>

 
    
    <!-- <films></films> -->

    <!-- <people></people>
    <planet></planet> 
   -->
    <router-view/>
  </div>
</template>

<script>
import Person from './components/Person'
import Films from './components/Films'
import Planet from './components/Planet'
import Search from './components/Search'
import People from './components/People'
export default {
  name:'app',
  components:{
    Person,
    Films,
    Planet,
    Search,
    People
    
  },
  data() {
    return {
   
    }
  },
}
</script>

<style>
body{
  background:  #eeeeee
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
img{
  width: 30%
}
</style>
