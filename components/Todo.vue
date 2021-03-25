<template>
  <input type='checkbox' v-bind:value="todos.completed" v-on:input="todos.completed=$event">
  <p> {{name}} </p>
  <label for="checkbox"> Completed ? {{ todos.completed }} </label>
</template>




<script>

    export default {
      name: 'Todo',
      props:
      {
        name: {type: String, default: "liste"},
        completed: {type : Boolean, default: false}
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
