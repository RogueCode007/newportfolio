<script setup>
import { ref } from "vue";
import NavBar from "@/components/NavBar.vue";

const shownav = ref(false);
const toggleNavbar = () => {
  shownav.value = !shownav.value;
};
</script>
<template>
  <div id="app">
    <NavBar v-bind:shownav="shownav" @toggle-nav="toggleNavbar"></NavBar>
    <router-view v-show="!shownav"></router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Nunito Sans", sans-serif;
  color: white;
  background-color: #000000;
  padding: 0 15px;
}
</style>
