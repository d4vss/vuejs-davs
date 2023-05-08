<script setup>
const colors = {'accent-blue' : 'rgb(132, 173, 235)', 'accent-gray' : '#2f2f2f', 'accent-red' : '#e67e7e'}
</script>

<template>
    <footer class="footer">
      <div class="colors">
        <div v-for="(item, index) in colors" :="item.name" :style="{ backgroundColor: item }" :id=index></div>
      </div>
    </footer>
</template>

<style scoped>
.footer {
  margin-bottom: 7.5px;
  text-align: center;
  position: absolute;
  bottom: 0;
  font-size: 18px;
  width: 100%;
  height: 3rem; 
}
.colors {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  animation: slidein .5s ease-in-out alternate;
}

.colors div {
  margin-right: 13.5px;
  width: 32px;
  height: 32px;
  border-radius: 7.5px;
  transition: all .25s ease;
  border: #ddd 2px solid;
}

.colors div:hover {
  cursor: pointer;
  transform: scale(1.2);
}
</style>