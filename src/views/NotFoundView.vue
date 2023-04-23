<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="content">
        <h1 class="page-title">This page does not exist.<br>Return to <RouterLink to="/">Homepage</RouterLink>.</h1>
    </div>
</template> 

<style scoped>
a {
    text-decoration: underline;
}
</style>