


<template>
<div id="app">
    <h1>TodoList</h1>
    <AjoutTodo @nouvellenote="ajouterNote"></AjoutTodo> 
    <Supprimer v-for="(todo, index) in todos" v-bind:key="todo" v-on:remove="todos.splice(index, 1)"></Supprimer>
    {{todos}}
</div>


</template>

<script>
import AjoutTodo from './components/Ajout.vue'
import Supprimer from './components/Note.vue'

export default {
  name: 'App',
  components: {
    AjoutTodo,
    Supprimer
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

