<template>
    <div >
        
      <div class="container mt-3" >
          <div class="row">
              <div  class="card border-dark ml-5 mt-3 mb-3" style="width:40%"  v-for="(pla, index) in planets" :key="index">
                <div class="card-header"><h5> Personaje: {{pla.name}}</h5></div>
                    <div class="card-body">
                        <h5>Peliculas del palneta</h5>
                        <ul class="list-group list-group-flush" v-for="(fil, index) in pla.films" :key="index">
                            <li class="list-group-item" >
                                 {{fil.title}}
                            </li>
                        </ul>
                        <br>
                        <h5>Residentes del Planeta</h5>
                        <ul class="list-group list-group-flush" v-for="(residente, index) in pla.residents" :key="index">
                            <li class="list-group-item">
                                {{residente.name}}
                            </li>  

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
    name:'Planet',


    data() {
        return {
            
            planets: [], 
           
            
           
                   
        }
    },
    mounted() {

        axios
            .get("https://swapi.co/api/planets")
            .then(res => {this.planets = res.data.results
            

                this.planets.forEach(function(data){

                    for (let i = 0; i < data.films.length; i++) {
                            
                                    axios.get(data.films[i])
                                    .then(res =>{
                                        data.films[i] = res.data
                                         
                                    })
                    }
                    for (let i = 0; i < data.residents.length; i++) {
                            
                                    axios.get(data.residents[i])
                                    .then(res =>{
                                        data.residents[i] = res.data
                                       
                                        
                                         
                                    })
                    }
                
                })
            
            })
            
            
 
    },
    methods: {
        
    },
    created() {

    },
    
}
</script>

<style scoped>

</style>