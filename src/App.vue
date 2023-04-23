<script setup>
import { RouterLink, RouterView } from 'vue-router';
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
          <div class="socials">
            
          </div>
        </div>
      </header>
    
    <RouterView v-slot="{ Component }">
      <Transition name="page-slide" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>
    </div>

    <footer class="footer">Made with <a target=_blank href="https://vuejs.org/">Vue.js</a>.</footer>
  </div>
</template>

<style scoped>
/* Transitions */
.page-slide-enter-active, .page-slide-leave-active {
  transition: transform .3s ease;
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
  padding-bottom: 4rem; 
}

.footer a {
  text-decoration: underline;
}

.footer {
  text-align: center;
  position: absolute;
  bottom: 0;
  font-size: 18px;
  width: 100%;
  height: 3rem; 
}

.footer span {
  display: block;
  margin-bottom: 5px;
}

/* Media queries */

@media (max-width: 450px){
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