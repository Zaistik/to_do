<template>
<div id="app">

    <Connexion></Connexion>

    <h1>TACHES</h1>
    <AjoutTodo @nouvellenote="ajouterTodo"></AjoutTodo> 
    <li v-for="todo in todos" v-bind:key="todo.name" >
    <input type='checkbox' v-model="todo.completed">
    {{todo.name}}
    <label for="checkbox"> Completed ? {{ todo.completed }} </label>
    <button v-on:click="deleteTodo(todo)">Supprimer</button>    
    </li>

    <h1>LISTES</h1>
    <AjoutListe @nouvelleliste="ajouterListe"></AjoutListe> 
    <li v-for="liste in listes" v-bind:key="liste.name" >
    <br>
    <b>{{liste.name}}</b>
    <button v-on:click="componentType = 'AffTodo'" >afficher la liste</button>
    <button v-on:click="deleteListe(liste)">Supprimer</button>
    <component :is="componentType"></component>
    </li>

   

</div>


</template>

<script>
import AjoutTodo from './components/AjoutTodo.vue'
import AjoutListe from './components/AjoutListe.vue'
import AffTodo from './components/AffTodo.vue'
import Connexion from './components/Connexion.vue'




export default {
  name: 'App',
  props: ['todo']['liste'],
  components: {
    AjoutTodo,
    AffTodo,
    AjoutListe,
    Connexion
    },

    data(){
        return{
        componentType: null,

        todos:[
            {name:"tache1",completed: false },
            {name:"tache2",completed: false },            
            {name:"tache3",completed: false },            
            ],

        listes:[
            {name:"liste1",completed: false },
            {name:"liste2",completed: false },            
            {name:"liste3",completed: false },  
            ]
        }
    },
    methods:{
        ajouterTodo(message){
          this.todos.push({ name: message ,completed: false })
        },
        ajouterListe(message){
          this.listes.push({ name: message ,completed: false })
        },
        deleteTodo(todo){
            let index = this.todos.indexOf(todo);
            this.todos.splice(index,1);
        },
        deleteListe(liste){
            let index = this.listes.indexOf(liste);
            this.listes.splice(index,1);
        },
    }
}
</script>

