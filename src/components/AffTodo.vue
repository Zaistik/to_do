<template>
<br>
<div class= tache>
<h3>Ajouter une tache :</h3>
<AjoutTodo @nouvellenote="ajouterTodo"></AjoutTodo>
    <li v-for="todo in todos" v-bind:key="todo.name" >
    <input type='checkbox' v-model="todo.completed" v-if="todo.completed == true" v-on:click="decrease">
    <input type='checkbox' v-model="todo.completed" v-if="todo.completed == false" v-on:click="increase">
    <strike v-if="todo.completed == true">{{todo.name}}</strike>
    <label v-if="todo.completed == false">{{todo.name}}</label>
    <label for="checkbox" ></label>
    <button v-on:click="deleteTodo(todo)">Supprimer</button>  
    </li>
    <p>Nombre de tâches effectuée:
      <label v-if="compteurFalse != 0">
      {{compteurFalse}}
      </label>
    </p>  
</div>

</template>




<script>
import AjoutTodo from './AjoutTodo.vue'

    export default {
      name: 'AffTodo',
      props:[],
      components: {
           AjoutTodo
        },
      
      emits: ['nouvellenote'],
      data(){
        return{
          interne:'une tache',
          todos:[
            {name:"tache1",completed: false },
            {name:"tache2",completed: false },            
            {name:"tache3",completed: false },            
            ],
          compteurFalse: 0, 
         
        }
      },
      methods:{
        decrease(){
          this.compteurFalse = this.compteurFalse - 1
        },
        increase(){
          this.compteurFalse = this.compteurFalse + 1
        },

        enregistementNote(){
          this.$emit('nouvellenote',this.interne)
          this.interne= '';  
        },
        ajouterTodo(message){
          this.todos.push({ name: message ,completed: false })
        },
        deleteTodo(todo){
            let index = this.todos.indexOf(todo);
            this.todos.splice(index,1);
        },
    }
  }
    

</script>
<style>
.tache{ 
background-color: white ;
border: 3px solid red;
vertical-align: right;
margin-left:50%;
margin-right:10px;
margin-top: 10px;
margin-bottom: 10px;
width: 44%;
height: 100%;
padding: 21px;}
</style>