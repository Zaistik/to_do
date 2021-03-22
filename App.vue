<template>
<div id="app">
    <h1>TodoList</h1>


    <AjoutTodo @nouvellenote="ajouterNote"></AjoutTodo> 
    <li v-for="todo in todos" v-bind:key="todo.name" >
    <input type='checkbox' v-model="todo.completed">
    {{todo.name}}
    <label for="checkbox"> Completed ? {{ todo.completed }} </label>
    <button v-on:click="deleteTodo(todo)">Supprimer</button>    
    </li>
        {{todos}}


    <AjoutListe @nouvelleliste="ajouterListe"></AjoutListe> 
    <li v-for="liste in listes" v-bind:key="liste" >
    {{liste}}
    <button v-on:click="deleteTodo(liste)">Supprimer</button>    

    </li>

    

</div>


</template>

<script>
import AjoutTodo from './components/Ajout.vue'
import AjoutListe from './components/AjoutListe.vue'
//import AffTodo from './components/AffTodo.vue'



export default {
  name: 'App',
  props: ['todo'],
  components: {
    AjoutTodo,
   // AffTodo,
    AjoutListe
    },

    data(){
        return{
        todos:[
            {name:"tache1",completed: false },
            {name:"tache1",completed: false },            
            {name:"tache1",completed: false },            
            ],

        listes:[
            "liste1",
            "liste2",
            "liste3"
            ]
        }
    },
    methods:{
        ajouterNote(message){
          this.todos.push({ name: message ,completed: false })
        },
        deleteTodo(todo){
            let index = this.todos.indexOf(todo);
            this.todos.splice(index,1);
        },
    }
}
</script>

