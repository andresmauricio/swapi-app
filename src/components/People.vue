<template>
    <div >
        
      <div class="container mt-3" >
          <div class="row">
              <div class="card border-dark ml-5 mt-3 mb-3" style="width:40%" v-for="(pla, index) in people" :key="index">
                <div class="card-header"><h5> Personaje: {{pla.name}}</h5></div>
                <div class="card-body" >
                    <h5 >Planeta: {{pla.homeworld.name}} </h5>
                    <br>
                    <ul class="list-group list-group-flush" v-for="(f, index) in pla.films" :key="index">
                        <li class="list-group-item">
                            Pelicula: {{f.title}}
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
    name:'People',


    data() {
        return {
            people: [], 
        }
    },
    mounted() {
            axios
                .get("https://swapi.co/api/people")
                .then(res => { this.people = res.data.results
                   
                        this.people.forEach(function(data){
                            axios.get(data.homeworld)
                                .then(res => {
                                 data.homeworld = res.data
                           })

                                for (let i = 0; i < data.films.length; i++) {
                            
                                    axios.get(data.films[i])
                                    .then(res =>{
                                        data.films[i] = res.data
                                         console.log(data.films); 
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