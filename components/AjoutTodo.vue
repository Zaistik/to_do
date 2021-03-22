<template>
      <input type="text" v-model="interne" placeholder="Ex. nourrir le chat"/>
      <a href="#" @click="enregistementNote" v-if="interne != '' ">Ajouter</a>
        {{interne}}

</template>
<script>
    export default {
      name: 'AjoutTodo',
      props:[],
      
      emits: ['nouvellenote'],
      data(){
        return{
          interne:'une tache'
        }
      },
      methods:{
        enregistementNote(){
          this.$emit('nouvellenote',this.interne)
          this.interne= '';  
        }
      },
    }

</script>