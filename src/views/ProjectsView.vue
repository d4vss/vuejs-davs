<script setup>
    import Values from '../assets/projects.json';
</script>

<template>
    <div class="content">
        <div class="WIP">
            <h1 class="page-title">My projects</h1>
            <div class="cards">
                <div class="card" v-for="(item, index) in Values['projects']" :key="item.name">
                    <h2 class="title">{{ item.name }}</h2>
                    <span class="splitter"></span>
                    <p class="desc"> {{ item.description }}</p>
                    <span class="splitter"></span>
                    <a class="open" target=_blank :href="item.url">Open in new tab</a>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
@media (min-width: 800px) {
    .cards {
        margin-inline: 100px;
    }
}
@media (max-width: 450px) {
    .cards {
        gap: 40px;
    }
    .card {
        gap: 15px;
    }
}
.cards {
    display: flex;
    flex-direction: row;
    gap: 80px;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    background-color: rgb(235, 235, 235);
    color: #000;
    padding: 25px;
    width: 300px;
    min-height: 280px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.8);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card .title {
    margin-bottom: 5px;
}

.card .desc {
    padding-bottom: 10px;
}

.card .open {
    padding: 10px 5px;
    background-color: var(--color-accent);
    text-align: center;
    text-decoration: none;
    margin-top: 10px;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.8);
    transition: all .3s ease;
}

.card .open:hover {
    scale: 1.01;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.8);
}

.card .splitter {
    border-top: 1px solid #000;
}
</style>