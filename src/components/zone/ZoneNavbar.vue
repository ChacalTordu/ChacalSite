<template>
    <header class="navbar-desktop4">
        <h2 class="chacalsite4">Chacal site</h2>
        <nav class="home8">
        <h3 class="home9">HOME</h3>
        <h3 class="e-sport4">E-SPORT</h3>
        <h3 class="user4">USER</h3>
        </nav>
    </header>
</template>

<style scoped>
    .chacalsite4 {
        margin: 0;
        position: relative;
        font-size: inherit;
        text-transform: uppercase;
        font-weight: 700;
        font-family: inherit;
        white-space: nowrap;
    }
    .home9 {
        margin: 0;
        position: relative;
        font-size: inherit;
        text-transform: uppercase;
        font-weight: 400;
        font-family: inherit;
        display: inline-block;
        min-width: 57px;
    }
    .e-sport4 {
        margin: 0;
        position: relative;
        font-size: inherit;
        text-transform: uppercase;
        font-weight: 400;
        font-family: inherit;
        display: inline-block;
        min-width: 79px;
    }
    .user4 {
        margin: 0;
        position: relative;
        font-size: inherit;
        text-transform: uppercase;
        font-weight: 400;
        font-family: inherit;
        display: inline-block;
        min-width: 49px;
    }
    .home8 {
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
    .navbar-desktop4 {
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
</style>
