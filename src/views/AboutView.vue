<template>
  <div class="content">
    <h1 class="page-title">About me</h1>
    <img class="main" src="https://media.tenor.com/j6pAyi8I9RsAAAAC/kitty.gif">
  </div>
</template>

<style scoped>
.main {
  opacity: 1;
  margin: 0 auto; 
  margin-top: 50px; 
  width: 300px;
  animation: appaer alternate 1s ease-in;
}

@keyframes appaer {
  0%, 65% {
    display: block;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
}
</style>
