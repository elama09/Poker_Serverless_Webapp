<template>
  <div>

   <Navbar></Navbar>

    <v-img
      v-bind:src="require('../assets/playing-cards_free_background_image_2210x1473.jpg')"
      :max-height="height"
    >
    <v-layout
      align-center
      column
      justify-center
    >
      
      <SignupForm></SignupForm>
      <v-btn color="primary" small depressed to="/login">Already have account? Login here!</v-btn>
    </v-layout>
    </v-img>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SignupForm from '../components/SignupForm.vue';
import Navbar from '../components/Navbar.vue';

export default Vue.extend({
  name: 'signup',
  components: {
    SignupForm,
    Navbar
  },
  data: () => ({
    height: "700",
  }),
  methods: {},
  mounted() {
    if (this.$parent.$el.clientHeight) {
      this.height = this.$parent.$el.clientHeight * 0.9;
    }
  }
});
</script>

<style scoped>

</style>

