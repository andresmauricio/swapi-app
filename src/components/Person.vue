<template>
    <div >
        
      <!-- <div class="container row mt-5 ml-5">
          <div class="card mt-5 ml-5" style="width:40%" v-for="(p, index) in persons" :key="index">
              <div class="card-body">
                  <h5 class="btn" @click="callData" >Personaje : {{p.name.toUpperCase()}}</h5>
                  <br>
                  <p class="btn btn-success" @click="callData"> Ver Más</p>
              </div>

          </div>
      </div>
      <p>{{ps.name}}</p> -->
      <div class="card mt-3">   
        <div class="card-body">
            <input type="number" style="width:40%" placeholder="Cual es el Id" v-model="number" @change="getPerson(number)"    >
            <br>
            
            <h5 >Personaje : {{person.name}}</h5>
            <br>
            <h5>Planeta : {{person.homeworld}}</h5>
            <br>
            <h5>Peliculas</h5>
            <ul v-for="(film, index) in person.films" :key="index"> 
                <li>{{film}}</li>
            </ul>
           {{todos}}
           <br>
           <br>
           <!-- <button class="btn btn-primary" @change="personTwo(page)">Next</button>
           {{people}} -->
           
            
            <!-- <h5 class="btn"  >Personaje : {{person.films}}</h5> -->
            
            
            <br>
        </div>
      </div>

     
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Person',

    data() {
        return {
            
            person: [],
            number: '',
            todos:'',
            page:2,
            people:[]
             
            
            
        }
    },
    mounted() {
        
        
        
        
    },
    methods: {
        async getPerson(number = this.number){
            
            let datos = await axios.get(`https://swapi.co/api/people/${number}`)
            //console.log(datos.data.name);
            this.person = datos.data
            
        },
        async allPersons(){
            let todoslospersonajes = await axios.get(`https://swapi.co/api/people/`)
            this.todos = todoslospersonajes.data.next
            //console.log(this.todos.next);
            
            
        },

        async personTwo(page = this.page){
            
            let siguiente = await axios.get(`https://swapi.co/api/people/?format=json&page=${page}`)
            
            this.people = siguiente.data
            
            
        }
         
    },
    created() {
        this.getPerson(this.number)

        this.allPersons()

        
        
    },
    mounted() {
        this.personTwo(this.page)
    },
    
}
</script>

<style scoped >

</style>