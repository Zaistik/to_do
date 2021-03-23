<template>
	<form action="#" @submit.prevent="identifiant()">
	<label for= "utilisateur">Utilisateur:   </label>
	<input type="text" v-model="utilisateur" placeholder="Nom/Prenom"/>
	<br>
	<label for= "Email">Email:   </label>
	<input type="email" v-model="email" placeholder="email@email.fr"/>
	<br>
	<label for= "motdepasse">Mot de passe: </label>
	<input type="password" v-model="motdepasse" placeholder="123abc"/>
	<br>
	<button type="inscription">Se connecter</button>
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
      emits: ['inscription'],
      methods:{
        identifiant(){
					//event personnalisé
					this.$emit('inscription',{
						utilisateur:this.utilisateur,
						email: this.email,
						motdepasse:this.motdepasse,
					})
        }
    }
}
</script>
