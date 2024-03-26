<template>
    <div class="button-primary">
        <div @click="handleClick" class="text">{{textButton}}</div>
    </div>
</template>

<script setup>
    const props = defineProps({ textButton: String });
    const emit = defineEmits(['callbackClick']);
    const handleClick = () => {
        emit('callbackClick');
    };
</script>

<style scoped>
    .text {
    position: relative;
    text-decoration: none;
    }
    .button-primary {
    width: 200px;
    height: 60px;
    
    border-radius: var(--br-8xs);
    background-color: var(--color-black);
    
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-lgi) var(--padding-5xl);
    box-sizing: border-box;
    text-align: center;
    font-size: var(--font-size-lg);
    color: var(--color-whitesmoke);
    }
    .button-primary:hover {
    background-color: var(--color-darkslategray);
    cursor: pointer;
    }
</style>

