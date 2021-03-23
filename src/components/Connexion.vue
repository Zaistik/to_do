<template>
	<form action="#" @submit.prevent="identifiant()">
	<label for= "utilisateur">Utilisateur:   </label>
	<input type="text" v-model="utilisateur" placeholder="Nom/Prenom"/>
	<br>
	<label for= "motdepasse">Mot de passe: </label>
	<input type="password" v-model="motdepasse" placeholder="123abc"/>
	<br>
	<button type="submit">Se connecter</button>
	</form>
</template>


<script>

    export default {
      name: 'Connexion',
      props:[],
      components: {
      },
      data(){
				return{
					utilisateur:'',
					motdepasse:'',
				}
			},
      emits: ['submit'],
      methods:{
        identifiant(){
					//event personnalisé
					this.$emit('submit',{
						utilisateur:this.utilisateur,
						motdepasse:this.motdepasse,
					})
        }
    }
}
</script>
