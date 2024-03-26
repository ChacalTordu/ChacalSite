<template>
<div class="winner-bracket" :style="winnerBracketStyle">
    <div class="match-11">
    <div class="rectangle2">
        <div class="player2">Player</div>
        <div class="spacer2">1</div>
    </div>
    <div class="rectangle3">
        <div class="player3">Player</div>
        <div class="spacer3">0</div>
    </div>
    </div>
</div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "WinnerBracket",
    props: {
    propHeight: { type: [Object, Array, String, Number, Boolean] },
    propPadding: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
    winnerBracketStyle() {
        return {
        height: this.propHeight,
        padding: this.propPadding,
        };
    },
    },
});
</script>
<style scoped>
.rectangle-inner {
    height: 48px;
    width: 9px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    left: 0px;
}
.player2 {
    width: 66px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    min-width: 66px;
}
.spacer2 {
    width: 14px;
    position: relative;
    color: var(--color-black);
    display: flex;
    align-items: center;
    justify-content: center;
}
.rectangle2 {
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
.rectangle-icon {
    height: 48px;
    width: 9px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    left: 0px;
}
.player3 {
    width: 66px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    min-width: 66px;
}
.spacer3 {
    width: 14px;
    position: relative;
    color: var(--color-black);
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 14px;
}
.rectangle3 {
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
.match-11 {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
}
.winner-bracket {
    align-self: stretch;
    height: 276px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-61xl) 0px;
    box-sizing: border-box;
    text-align: center;
    font-size: var(--font-size-5xl);
    color: var(--color-darkslategray-200);
    font-family: var(--font-roboto);
}

@media screen and (max-width: 450px) {
    .player2 {
    font-size: var(--font-size-lgi);
    }

    .spacer2 {
    font-size: var(--font-size-lgi);
    }

    .player3 {
    font-size: var(--font-size-lgi);
    }

    .spacer3 {
    font-size: var(--font-size-lgi);
    }

    .winner-bracket {
    gap: 20px 40px;
    }
}
</style>
