<template>
<div class="match-1">
    <div class="rectangle">

    <div class="player">Player</div>
    <div class="spacer">1</div>
    </div>
    <div class="rectangle1">

    <div class="player1">Player</div>
    <div class="spacer1">0</div>
    </div>
</div>
</template>

<style scoped>
.rectangle-child {
    height: 48px;
    width: 9px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    left: 0px;
}
.player {
    width: 66px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    min-width: 66px;
}
.spacer {
    width: 14px;
    position: relative;
    color: var(--color-black);
    display: flex;
    align-items: center;
    justify-content: center;
}
.rectangle {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-8xs);
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px var(--padding-5xl) 0px 0px;
    position: relative;
    gap: var(--gap-xl);
}
.rectangle-item {
    height: 48px;
    width: 9px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    left: 0px;
}
.player1 {
    width: 66px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    min-width: 66px;
}
.spacer1 {
    width: 14px;
    position: relative;
    color: var(--color-black);
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 14px;
}
.rectangle1 {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-8xs);
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px var(--padding-5xl) 0px 0px;
    position: relative;
    gap: var(--gap-xl);
}
.match-1 {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
    text-align: center;
    font-size: var(--font-size-5xl);
    color: var(--color-darkslategray-200);
    font-family: var(--font-roboto);
}

@media screen and (max-width: 450px) {
    .player {
    font-size: var(--font-size-lgi);
    }

    .spacer {
    font-size: var(--font-size-lgi);
    }

    .player1 {
    font-size: var(--font-size-lgi);
    }

    .spacer1 {
    font-size: var(--font-size-lgi);
    }
}
</style>
