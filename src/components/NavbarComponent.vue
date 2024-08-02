<template>
  <nav
    :class="[
      'navbar',
      'navbar-expand-lg',
      'navbar-light',
      'fixed-top',
      { 'navbar-hidden': isHidden },
    ]"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Logo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
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
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Profile
            </a>
            <ul
              class="dropdown-menu"
              aria-labelledby="profileDropdown"
              ref="dropdownMenu"
            >
              <li>
                <router-link class="dropdown-item" to="/detail"
                  >Detail</router-link
                >
              </li>
              <li>
                <a class="dropdown-item" href="#">Setting</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      isHidden: false,
      lastScrollPosition: 0,
      scrollTimeout: null,
      dropdownVisible: false,
    };
  },
  methods: {
    navigateToAbout() {
      if (this.$route.path === "/") {
        $("html, body").animate(
          { scrollTop: $("#about").offset().top - 60 },
          500
        );
      } else {
        this.$router.push("/").then(() => {
          setTimeout(() => {
            $("html, body").animate(
              { scrollTop: $("#about").offset().top - 60 },
              0
            );
          }, 300);
        });
      }
    },
    handleScroll() {
      clearTimeout(this.scrollTimeout);

      this.isHidden = true;

      this.scrollTimeout = setTimeout(() => {
        this.isHidden = false;
      }, 200);
    },
    showDropdown() {
      this.dropdownVisible = true;
      this.$refs.dropdownMenu.style.display = "block";
    },
    hideDropdown() {
      this.dropdownVisible = false;
      this.$refs.dropdownMenu.style.display = "none";
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

<style scoped>
.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: top 0.3s;
}

.navbar-hidden {
  top: -80px;
}

.navbar-brand {
  font-weight: bold;
  font-size: 2.5rem;
  color: #5a4b81;
}

.navbar-nav .nav-link {
  font-size: 2rem;
  color: #5a4b81;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #4a3b71;
}

.navbar-nav .dropdown-menu {
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: none;
}

.navbar-nav .dropdown-item {
  color: #5a4b81;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.navbar-nav .dropdown-item:hover {
  background-color: #5a4b81;
  color: white;
}

.navbar-toggler {
  border-color: rgba(90, 75, 129, 0.5);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%2854, 54, 54, 0.5%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
</style>
