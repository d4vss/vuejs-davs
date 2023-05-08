<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Socials from './components/Socials.vue';
import Footer from './components/FooterBlock.vue';
</script>

<template>
  <div class="page">
    <div class="content-wrap">
      <header>
        <div class="wrapper">
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
          <Socials/>
        </div>
      </header>
    
      <RouterView v-slot="{ Component }">
        <Transition name="page-slide" mode="out-in">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </div>

    <Footer/>
  </div>
</template>

<style scoped>
/* Transitions */
.page-slide-enter-active, .page-slide-leave-active {
  transition: transform .35s ease;
}

.page-slide-leave-to {
  transform: translateX(-100%);
}

.page-slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap:wrap ;
  margin: 40px;
}

/* Navbar */

nav {
  display: flex;
  height: fit-content;
  font-size: 18px;
  justify-content: flex-end;
  margin-top: 20px;
  flex-direction: row;
}

nav a.router-link-exact-active, nav a:hover {
  color: white;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-primary);
  transition: all .2s ease;
  color: var(--color-primary);
}

nav a:first-of-type {
  border: 0;
}

/* Page layout */

.page {
  position: relative;
  min-height: 95vh;
}

.content-wrap {
  padding-bottom: 2rem; 
}

/* Media queries */

@media (max-width: 1400px) {
  .page {
    min-height: 92vh;
  }
}

@media (max-width: 450px){
  .wrapper {
    flex-direction: column;
    align-items: center;
    gap: 35px;
  }
  nav {
    display: inline;
  }
  .footer span {
    display: none;
  }
  .logo img {
    filter: none;	
  }
  .wrapper {
    flex-direction: column;
    text-align: center;
  }
  .content {
    padding-inline: 20px;
  }
}

@media (max-width: 340px) {
  nav a:last-of-type {
    border: 0;
  }
}

@media (max-width: 254px) {
  nav a {
    border: 0;
    margin: 2px auto;
  }
}
</style>