<template>
<h3>Ajouter une liste :</h3>
      <input type="text" v-model="interne" placeholder="Ex. Liste à faire demain"/>
      <a href="#" @click="enregistementListe" v-if="interne != '' ">Ajouter une liste</a>
        {{interne}}
</template>
<script>
    export default {
      name: 'AjoutListe',
      props:[],
      emits: ['nouvelleliste'],
      data(){
        return{
          interne:'une liste'
        }
      },
      methods:{
        enregistementListe(){
          this.$emit('nouvelleliste',this.interne)
          this.interne= '';  
        }
      },
    }

</script>