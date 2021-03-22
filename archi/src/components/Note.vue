

<template>
		<button v-on:click="deleteTodo">Supprimer</button>
</template>

<script>
		export default {
		name: 'Note',
		props: ['content'],
		methods: {
				deleteTodo(todo){
						let index = this.todos.indexOf(todo);
						this.todos.splice(index,1);
				},
		},
		}
</script>
