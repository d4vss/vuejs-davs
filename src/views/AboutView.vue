<template>
  <div class="content">
    <h1 class="page-title">about OwO me</h1>
    <img style="margin: 0 auto; display: block; margin-top: 50px; width: 300px;" src="https://media.tenor.com/giB0jG3Ofu4AAAAd/cat-dancing-led-light-rainbow.gif" alt="cat">
    <div class="rot"><span>cat</span></div>
  </div>
</template>

<style scoped>
.abp {
  font-size: 18px;
  margin: 20px 200px;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

img:hover, .rot:hover {
  animation: rotate var(--animation) linear infinite;
}
</style>