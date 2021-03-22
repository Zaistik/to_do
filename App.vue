<template>
<div id="app">
    
    <h1>CONNEXION</h1>
    <Connexion></Connexion>

    <h1>TACHES</h1>
    <AffTodo></AffTodo>

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
        listes:[
            {name:"liste1",completed: false },
            {name:"liste2",completed: false },            
            {name:"liste3",completed: false },  
            ]
        }
    },
    methods:{
        ajouterListe(message){
          this.listes.push({ name: message ,completed: false })
        },
        
        deleteListe(liste){
            let index = this.listes.indexOf(liste);
            this.listes.splice(index,1);
        },
    }
}
</script>

