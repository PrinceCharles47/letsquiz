<template>
  <v-app id="main-container">
    <navigation/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    Navigation
  }
};
</script>

<style scoped>

#main-container{
  background-color: #f8f8f8;
}

</style>
