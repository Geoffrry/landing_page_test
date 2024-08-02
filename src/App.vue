<template>
  <div id="app">
    <NavbarComponent />
    <main class="container">
      <router-view></router-view>
    </main>
    <FooterSectionComponent />
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
