<template>
    <div id="app">
        <ul>
            <li v-for="liste in listes" v-bind:key="liste.name">
                <Liste :name="liste.name">Liste</Liste>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Liste from './components/Liste.vue'

export default {
  name: 'App',
  components: {
    Liste
    },
  computed: {
    ...mapGetters("listes",['listes'])
  }
}
</script>
