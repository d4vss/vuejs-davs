<template>
  <div class="content">
    <div class="wrap">
      <div class="circle">
        <img src="/favicon.png" draggable="false">
      </div>
    </div>
    <h1>DAVS.LOL</h1>
    <p class="page-text quote">"Wenn's dir ned passt, da oben ist der X-Button" ~Rainer Winkler</p>
  </div>
</template>

<style scoped>

/* Rotate Animation */

@keyframes rotate {
  25%, 35%, 40%, 50% {
    scale: 1;
  }
  30%, 45% {
    scale: 1.03;
  }
  85% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Logo */

.wrap {
  user-select: none;
  border-radius: 999px;
  width: fit-content;
  margin: 100px auto 50px auto;
  box-shadow: 0 0 0 30px rgba(255, 255, 255, 0.3);
}
.circle {
  background-color: white;
  border-radius: 999px;
  padding: 15px;
  padding-left: 20px;
  border: 8px solid var(--color-accent);
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, .6);
  animation: rotate 5s infinite ease;
}

.circle img {
  width: 100px;
  aspect-ratio: 1/1;
}

/* Text */

.quote {
  margin-top: 400px;
}

/* Media Queries */

@media (max-width: 1500px) {
  .quote {
    margin-top: 300px;
  }
}

@media (max-width: 1300px) {
  .wrap {
    margin-bottom: 50px;
  }
  .quote {
    margin-top: 100px;
  }
}
</style>