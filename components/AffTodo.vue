<template>
<br>
<AjoutTodo @nouvellenote="ajouterTodo"></AjoutTodo> 
    <li v-for="todo in todos" v-bind:key="todo.name" >
    <input type='checkbox' v-model="todo.completed">
    {{todo.name}}
    <label for="checkbox"> </label>
    <button v-on:click="deleteTodo(todo)">Supprimer</button>    
    </li>
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
         
        }
      },
      methods:{
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