<template>
  <div>
    <div class="hero">
      <div class="hero-text">
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Enquire Now</a>
      </div>
      <div class="hero-image">
        <img src="https://via.placeholder.com/400x300" alt="Hero Image" />
      </div>
    </div>
    <section id="about" class="content-section">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
    <div class="vertical-line-container">
      <p class="annotation">
        Straight line to test navigation visibility and scrolling behaviour
      </p>
      <div class="vertical-line"></div>
      <p class="end-annotation">End of the line</p>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  text-align: right;
  background-color: #f8f9fa;
  min-height: 70vh;
  margin-top: 80px;
}

.hero-text {
  flex: 1;
  margin-right: 40px;
  text-align: right;
}

.hero-text h1 {
  font-size: 4rem;
  margin-bottom: 20px;
}

.hero-text p {
  font-size: 2rem;
  margin-bottom: 40px;
}

.hero-image {
  flex: 1;
  text-align: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
}

.content-section {
  padding: 20px 0;
}

.vertical-line-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  position: relative;
}

.vertical-line {
  border-left: 2px dotted black;
  height: 800px;
  position: relative;
  margin: 20px 0;
}

.vertical-line::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: -10px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid black;
}

.annotation {
  margin-bottom: 20px;
  text-align: center;
  background: #5a4b81;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 20px;
}

.end-annotation {
  background: #5a4b81;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  margin-top: 20px;
}

@media (max-width: 1200px) {
  .hero-text h1 {
    font-size: 3.5rem;
  }

  .hero-text p {
    font-size: 1.75rem;
  }
}

@media (max-width: 992px) {
  .hero-text h1 {
    font-size: 3rem;
  }

  .hero-text p {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-text {
    margin-right: 0;
    text-align: center;
    margin-bottom: 20px;
  }

  .hero-text h1 {
    font-size: 2.5rem;
  }

  .hero-text p {
    font-size: 1.25rem;
  }

  .vertical-line {
    height: 600px;
  }
}

@media (max-width: 576px) {
  .hero-text h1 {
    font-size: 2rem;
  }

  .hero-text p {
    font-size: 1rem;
  }

  .vertical-line {
    height: 400px;
  }
}
</style>
