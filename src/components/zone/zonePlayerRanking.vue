<template>
    <div class="player">
        <div class="rank">{{ rank }}</div>
        <div class="pseudo">{{ pseudo }}</div>
        <div class="pts">+ {{ points }} pts</div>
    </div>
</template>

<script setup>
    const props = defineProps({rank : String, pseudo : String, points : String})
</script>

<style scoped>
  .player {
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-13xl) var(--padding-xl);
    box-sizing: border-box;
  }
  .rank {
    width: 23px;
    position: relative;
    display: flex;
    align-items: center;
  }
  .pseudo {
    margin-left: 100px;
    margin-right: auto;
  }
  .pts {
    position: relative;
    display: inline-block;
    min-width: 102px;
  }
</style>