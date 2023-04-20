<script setup>
    import Values from '../assets/projects.json';
</script>

<template>
    <div class="content">
        <h1 class="page-title">My pwojects</h1>
        <div class="projects">
            <div class="project" v-for="(item, index) in Values['projects']" :key="item.name" v-bind:href="item.url">
                <h2 class="project-title">{{ index }}</h2>
                <p class="project-desc">{{ item.description }}</p>
                <br clear="all">
                <a target=_blank v-bind:href="item.url" class="project-link">View pwoject</a>
            </div>
        </div>
    </div>
</template>
  
<style>
.projects {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    margin: 20px;
    gap: 40px;
}

.project-title {
    margin-bottom: 15px;
}

.project-link {
    color: var(--color-text);
    text-decoration: underline;
    margin-inline: 7.5px;
}

.project-link:hover {
    color: var(--color-accent);
}

.project {
    background-color: var(--vt-c-black-mute);

    box-shadow: 0 0 15px var(--vt-c-black-soft);
    border-top: 20px solid var(--vt-c-black-soft);
    border-radius: 0 0 20px 20px;
    padding: 20px 20px;

    max-width: 450px;
    min-width: 300px;
    min-height: 230px;

    transition: all ease .5s;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.project:hover {
    flex-direction: var(--project-card);
}

@media (max-width: 600px) {
    .project {
        min-width: 100%;
    }
    .project-link {
        margin: 10px 0;
    }
    .projects {
        margin: 10px 0;
    }
}
</style>