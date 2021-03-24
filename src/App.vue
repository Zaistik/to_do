<template>
<div id="app">
    <div class="ins_co">
    <div class="ins">
    <h1>Inscription</h1>
    <Inscription></Inscription>
    </div>

    <div class="co">
    <h1>Connexion</h1>
    <Connexion></Connexion>
    </div>
    </div>

    <h1>Listes</h1>
    <AjoutListe @nouvelleliste="ajouterListe"></AjoutListe> 
    <li class="liste" v-for="liste in listes" v-bind:key="liste.name" >
    <b>{{liste.name}}</b>
    <button v-on:click="componentType = 'AffTodo'" >afficher la liste</button>
    <button v-on:click="deleteListe(liste)">Supprimer</button>
    <component :is="componentType"></component>
    </li>



</div>


</template>

<script>
import AjoutListe from './components/AjoutListe.vue'
import AffTodo from './components/AffTodo.vue'
import Connexion from './components/Connexion.vue'
import Inscription from './components/Inscription.vue'





export default {
  name: 'App',
  props: ['todo']['liste'],
  components: {
    AffTodo,
    AjoutListe,
    Connexion,
    Inscription,
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

<style>
.ins{  
border: 3px solid green;
vertical-align: center;
margin: auto;
width: 50%;
height: 100%;
padding: 10px;
}
.co{  
border: 3px solid orange;
vertical-align: center;
margin: auto;
width: 50%;
height: 100%;
padding: 21px;

}
.ins_co{
display: flex;
padding: 5px;
grid-template-columns: 1em 1em;
border: 3px dotted gray;

}

.liste{
border: 3px solid blue;
vertical-align: center;
margin: auto;
padding: 21px;
}

#app{background-color: #f7f7f7;}
</style>

