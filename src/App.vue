<script setup>
import { RouterLink, RouterView } from 'vue-router'
addEventListener('load', () => {
    const funMode = document.getElementById('fun-mode');
    funMode.addEventListener('change', () => {
      if (funMode.checked) {
        document.documentElement.style.setProperty('--animation', '1.5s');
        document.documentElement.style.setProperty('--logo-zoom', '5');
        document.documentElement.style.setProperty('--project-card', 'column-reverse');
        document.documentElement.style.setProperty('--menu-items', 'row-reverse');
      } else {
        document.documentElement.style.setProperty('--animation', '0');
        document.documentElement.style.setProperty('--logo-zoom', '1');
        document.documentElement.style.setProperty('--project-card', 'column');
        document.documentElement.style.setProperty('--menu-items', 'row');
      }
    })
})
</script>

<template>
  <div class="page">
    <div class="content-wrap">
      <header>
        <div class="wrapper">
          <div class="logo">
            <RouterLink to="/"><img src="/favicon.png" alt="Home"></RouterLink>
          </div>
          <nav class="menu-items">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/projects">Pwojects</RouterLink>
            <RouterLink to="/about">about OwO</RouterLink>
          </nav>
        </div>
      </header>
    
    <RouterView />
    </div>

    <footer class="footer">
      <span>Toggwe f-fun mode: <input id="fun-mode" type="checkbox"></span>
      I'm a smaww, w-wittwe footew (・`ω´・)</footer>
  </div>
</template>

<style scoped>
@keyframes e {
  0% {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  50% {
    transform: rotate3d(0, 1, 0, 180deg);
  }
  100% {
    transform: rotate3d(0, 0, 0, 0deg);
  }
}

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap:wrap ;
  margin: 40px;
}

.logo {
  padding: 3px;
}

.logo img {
  width: 75px;
  padding: 5px;
  filter: brightness(0.5);	
  transition: all .2s ease;

  animation-name: e;
  animation-duration: var(--animation);
  animation-iteration-count: infinite;
  animation-direction: normal;
}

.logo img:hover {
  filter: none;
  scale: var(--logo-zoom);	
}

nav {
  display: flex;
  height: fit-content;
  font-size: 18px;
  justify-content: flex-end;
  margin-top: 20px;
  flex-direction: row;
}

nav:hover {
  flex-direction: var(--menu-items);
}

nav a.router-link-exact-active, nav a:hover {
  color: var(--color-accent);
}

nav a {
  display: inline-block;
  color: var(--color-text);
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  transition: all .2s ease;
}

nav a:first-of-type {
  border: 0;
}

.content{
  margin-inline: 10px;
}

.page {
  position: relative;
  min-height: 90vh;
}

.content-wrap {
  padding-bottom: 4rem; 
}

.footer {
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;            /* Footer height */
}

.footer span {
  display: block;
  margin-bottom: 5px;
}

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