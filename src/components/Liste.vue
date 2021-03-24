<template>
<div>
  <p> {{name}} {{completed}}</p>
</div>

</template>

<script>
    export default {
      name: 'Liste',
      props: {
        name: {type: String, default: "liste"},
        completed: {type : Boolean, default: false}
      }

    }
</script>
