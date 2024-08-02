<template>
  <div class="content-section profile-detail">
    <h2 class="profile-detail-header">Profile Detail</h2>
    <div class="profile-detail-content">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile Image"
        class="profile-image"
      />
      <div class="profile-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-detail-header {
  margin-top: 80px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #5a4b81;
}

.profile-detail-content {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.profile-image {
  border-radius: 50%;
  margin-right: 20px;
}

.profile-description {
  font-size: 1.2rem;
  color: #333;
}

.content-section {
  min-height: 80vh;
  margin-bottom: 100px;
}

@media (max-width: 1200px) {
  .profile-detail-header {
    font-size: 2rem;
  }

  .profile-description {
    font-size: 1rem;
  }
}

@media (max-width: 992px) {
  .profile-detail-content {
    flex-direction: column;
    text-align: center;
  }

  .profile-image {
    margin-right: 0;
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .profile-detail-header {
    font-size: 1.75rem;
  }

  .profile-description {
    font-size: 0.875rem;
  }
}
</style>
