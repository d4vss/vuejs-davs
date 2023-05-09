<script setup>
const colors = {'accent-blue' : '#9CA6D9', 'accent-gray' : '#5a5a5c', 'accent-purple' : '#9d86cf'}
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
}

.colors div {
  margin-right: 13.5px;
  width: 32px;
  height: 32px;
  border-radius: 7.5px;
  transition: all .15s ease;
  border: #ddd 2px solid;
}

.colors div:hover {
  cursor: pointer;
  transform: scale(1.3);
}
</style>