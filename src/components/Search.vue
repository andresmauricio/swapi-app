<template>
    <form>
        <div class=" container form-group">
        <input class="form-control mb-4"  type="text" v-model="serachText">
        <div class="row">
            <div class="card border-dark" style="width:100%">
                    <h4 class="card-header">Resulsts: {{results.count}}</h4>
        <ul class="list-group list-group-flush"  v-for="(result, index) in results.results" :key="index">
            <li  class="list-group-item">
                {{result.name}}
            </li>
        </ul>
            </div>
        </div>
        
        
    </div>
    </form>
</template>

<script>
import axios from'axios'
import Vuex from 'vue'
export default {
    name:'Search',
    data() {
        return {
            serachText:"",
            results:[]
        }
    },
    
    methods: {
        search: function(){
            axios
            .get(`https://swapi.co/api/people/?search=${this.serachText}`)
            .then(res => {
                this.results = res.data;
                console.log(this.results);
                
            })
        }
    },
    watch: {
      serachText: function(newText, oldText){
          this.search()
      }  
    },
    
}
</script>

<style>

</style>
