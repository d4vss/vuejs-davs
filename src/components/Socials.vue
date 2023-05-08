<script setup>
import GitHub from '../views/icons/GitHub.vue';
import Spotify from '../views/icons/Spotify.vue';
import Steam from '../views/icons/Steam.vue';
</script>

<template>
    <div class="socials">
        <a target=_blank href="https://github.com/d4vss"><GitHub /></a>
        <a target=_blank href="https://open.spotify.com/user/dsrmybymxe5nv86bajh5z72r8"><Spotify /></a>
        <a target=_blank href="https://steamcommunity.com/id/d4vss/"><Steam /></a>
    </div>
</template>

<style scoped>
.socials {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7.5px;
}

.socials a:hover {
  transition: all .5s ease;
  filter: brightness(2);
}
</style>