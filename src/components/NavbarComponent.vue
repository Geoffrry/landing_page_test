<template>
  <nav
    :class="[
      'navbar',
      'navbar-expand-lg',
      'navbar-light',
      'bg-white',
      'fixed-top',
      { 'navbar-hidden': !isVisible },
    ]"
  >
    <a class="navbar-brand" href="#">Logo</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="navigateToAbout"
            >About</a
          >
        </li>
        <li
          class="nav-item dropdown"
          @mouseenter="showDropdown"
          @mouseleave="hideDropdown"
        >
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="profileDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Profile
          </a>
          <div
            class="dropdown-menu"
            aria-labelledby="profileDropdown"
            ref="dropdownMenu"
          >
            <router-link class="dropdown-item" to="/detail">Detail</router-link>
            <a class="dropdown-item" href="#">Setting</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      lastScrollPosition: 0,
      timer: null,
      dropdownVisible: false,
    };
  },
  methods: {
    navigateToAbout() {
      if (this.$route.path === "/") {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          window.scrollTo({
            top: aboutSection.offsetTop - 60,
            behavior: "smooth",
          });
        }
      } else {
        this.$router.push("/").then(() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            window.scrollTo({
              top: aboutSection.offsetTop - 60,
              behavior: "smooth",
            });
          }
        });
      }
    },
    showDropdown() {
      this.dropdownVisible = true;
      setTimeout(() => {
        if (this.dropdownVisible) {
          this.$refs.dropdownMenu.style.opacity = 1;
        }
      }, 300);
    },
    hideDropdown() {
      this.dropdownVisible = false;
      this.$refs.dropdownMenu.style.opacity = 0;
    },
    handleScroll() {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition !== this.lastScrollPosition) {
        this.isVisible = false;
      }
      this.lastScrollPosition = currentScrollPosition;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.isVisible = true;
      }, 1000);
      this.hideDropdown();
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
