<template>
    <div >
        
      <div class="container mt-3" >
          <div class="row">
              <div class="card border-dark ml-5 mt-3 mb-3" style="width:40%"  v-for="(peli, index) in films" :key="index">
                <div class="card-body" >
                    <h5> Pelicula: {{peli.title}}</h5>
                    <br>
                    <h5>Personajes</h5>
                    <ul class="list-group list-group-flush" v-for="(personaje) in peli.characters">
                            <li class="list-group-item" >{{personaje.name }}</li>
                        </ul>
                        <br>
                        <h5>Planetas</h5>
                         <ul  class="list-group list-group-flush" v-for="(planet) in peli.planets">
                            <li class="list-group-item" >{{planet.name }}</li>
                        </ul>
                   
                    
                </div>
              </div>
          </div>
      </div>

      
     

     
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Film',


    data() {
        return {
            
            films: [],

              
        }
    },
   
    filters:{

    },
    methods: {

      
    },
     mounted() {
         axios
            .get("https://swapi.co/api/films")
            .then(res => {this.films = res.data.results
            

                this.films.forEach(function(data){

                    for (let i = 0; i < data.characters.length; i++) {
                            
                                    axios.get(data.characters[i])
                                    .then(res =>{
                                        data.characters[i] = res.data
                                         
                                    })
                    }
                    for (let i = 0; i < data.planets.length; i++) {
                            
                                    axios.get(data.planets[i])
                                    .then(res =>{
                                        data.planets[i] = res.data
                                        console.log(res.data);
                                        
                                         
                                    })
                    }
                
                })
            
            })

    },
    created() {

        
     
        

    },
    
}
</script>

<style scoped>

</style>