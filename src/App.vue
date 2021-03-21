


<template>
<div id="app">
    <h1>TodoList</h1>
    <Ajout @nouvellenote="ajouterNote"></Ajout> 
    <Note v-for="(todo, index) in todos" v-bind:content="todo" v-on:remove="todos.splice(index, 1)"></Note>
</div>


</template>

<script>
import Ajout from './components/Ajout.vue'
import Note from './components/Note.vue'

export default {
  name: 'App',
  components: {
    Ajout,
    Note
  },

      data(){
        return{
          todos:[
            "tache1",
            "tache2",
            "tache3"
          ]
        }
      },
      methods:{
        ajouterNote(message){
          this.todos.push(message);
        },
      }
}
</script>

