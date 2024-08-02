<template>
  <div id="app">
    <navbar-component></navbar-component>
    <main class="container">
      <router-view></router-view>
    </main>
    <footer-section-component></footer-section-component>
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterSectionComponent from "./components/FooterSectionComponent.vue";

export default {
  components: {
    NavbarComponent,
    FooterSectionComponent,
  },
};
</script>
