<template>
    <header class="navbar">
        <h2 class="title">Chacal site</h2>
        <nav class="navbarItem">
            <h3 class="item"><router-link to="/" class="router-link">ACCUEIL</router-link></h3>
            <h3 class="item"><router-link to="/" class="router-link">ÉVÉNEMENTS</router-link></h3>
            <h3 class="item"><router-link to="/" class="router-link">COMPTE</router-link></h3>
        </nav>
    </header>
</template>

<style scoped>
    .navbar {
        align-self: stretch;
        background-color: var(--color-white);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0px var(--padding-11xl);
        top: 0;
        z-index: 99;
        position: sticky;
        gap: var(--gap-xl);
        text-align: left;
        font-size: var(--font-size-7xl);
        color: var(--color-black);
        font-family: var(--font-roboto);
    }
    .title {
        margin: 0;
        position: relative;
        font-size: inherit;
        text-transform: uppercase;
        font-weight: 700;
        font-family: inherit;
        white-space: nowrap;
    }
    .item {
        margin: 0;
        position: relative;
        font-size: inherit;
        text-transform: uppercase;
        font-weight: 400;
        font-family: inherit;
        display: inline-block;
        min-width: 57px;
    }
    .navbarItem {
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: var(--padding-mid-5) 0px;
        gap: var(--gap-base);
        text-align: left;
        font-size: var(--font-size-xl);
        color: var(--color-black);
        font-family: var(--font-roboto);
    }
    .router-link {
        text-decoration: none;
        color: inherit;
    }
</style>
