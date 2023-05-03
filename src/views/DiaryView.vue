<script setup>
import Days from '../assets/days.json'
</script>

<template>
    <div class="content">
        <h1 class="diary-title">The diary</h1>

        <div class="day" v-for="(day, index) in Days" :="day.name">
            <h2 class="day-title">{{ index }}</h2>
            <p class="day-text">{{ day.entry }}</p>
            <p class="day-text">My mood that day: {{ day.mood }}</p>
            <p class="day-text">Medication I took: {{ day.medication }}</p>
        </div>
    </div>
</template>

<style scoped>
.diary-title {
    font-size: 2.2rem;
    margin-block: 60px;
    text-align: center;
}
.day {
    border-bottom: 2px solid var(--color-secondary);
    width: fit-content;
    max-width: 50%;
    padding-bottom: 25px;
    margin: 0 auto;
}
.day-title {
    margin-block: 20px;
    font-size: 2rem;
}

.day-text {
    font-size: 1.2rem;
    margin-block: 16px;
}
</style>