<script setup>
    import Values from '../assets/projects.json';
</script>

<template>
    <div class="content">
        <div class="WIP">
            <h1 class="page-title">My projects</h1>
            <div class="cards">
                <div class="card" v-for="(item, index) in Values['projects']" :key="item.name">
                    <div class="content">
                        <a target=_blank :href="item.url"><h2 class="title">{{ item.name }}</h2></a>
                        <p class="desc"> {{ item.description }}</p>
                        <div class="tags">
                            <span class="tag" v-for="tag in item.tags" :key="tag">#{{ tag.toLowerCase() }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.cards {
    display: flex;
    flex-direction: row;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    background-color: var(--color-secondary);
    color: #000;
    padding: 10px;
    width: 300px;
}

.tags {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
}

.card .title {
    text-decoration: underline;
    margin-bottom: 10px;
}
</style>