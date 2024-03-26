<template>
    <div class="player">
        <div class="media"><img :src="media"></div>
        <h2 class="description">{{ description }}</h2>
        <div class="name">{{ name }}</div>
    </div>
</template>

<script setup>
    const props = defineProps({media : String, description : String, name : String})
</script>

<style scoped>
.player {
    width: 390px;
    height: 550px;
    display: flex;
    flex-direction: column;
    padding: var(--padding-2xs) var(--padding-3xs);
    box-sizing: border-box;
    gap: var(--gap-xl);
}
.media {
    align-self: stretch;
    height: 370px;
    position: relative;
    background-color: var(--color-black);
}
.description {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    line-height: 135.94%;
    font-weight: 400;
    font-family: inherit;
    text-shadow: 0px 31.3px 62.53px rgba(0, 0, 0, 0.64);
}
.name {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-sm);
    line-height: 135.94%;
  }
</style>