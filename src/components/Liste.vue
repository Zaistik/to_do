<template>
<div>
  <p> {{name}} </p>
  <li v-for="todo in todos" v-bind:key="todo.name">
    <Todo :name="todo.name" :completed="todo.completed"></Todo>
  </li>
</div>

</template>

<script>
import Todo from './Todo.vue'
    export default {
      name: 'Liste',
      props: {
        name: {type: String, default: "liste"},
        completed: {type : Boolean, default: false},
        todos: {type: Object}
      },
      components: {
        Todo
        }

    }
</script>
