<template>
<div class="bracket">
    <div class="bracketcontainer">
    <div class="column-1">
        <div class="winner-bracket1"><Match /><Match /></div>
        <div class="looser-bracket"><Match /><Match /></div>
    </div>
    <div class="column-2">
        <WinnerBracket /><WinnerBracket
        propHeight="276px"
        propPadding="var(--padding-61xl) 0px"
        />
    </div>
    <div class="column-3">
        <WinnerBracket propHeight="116px" propPadding="unset" />
    </div>
    <button class="column-4">
        <div class="winner-bracket2">
        <div class="match-12">
            <div class="rectangle4">
            <div class="player4">Player</div>
            </div>
        </div>
        </div>
    </button>
    </div>
    <footer class="validationbutton">
    <button class="button-primary6">
        <div class="valider-le-bracket">Valider le bracket</div>
    </button>
    <div class="confirmation">
        <button class="yes">
        <div class="oui">Oui</div>
        </button>
        <button class="no">
        <div class="non">Non</div>
        </button>
    </div>
    </footer>
</div>
</template>

<script setup>
    import Match from "./Match.vue";
    import WinnerBracket from "./WinnerBracket.vue";
</script>

<style scoped>
.winner-bracket1 {
    align-self: stretch;
    height: 272px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-21xl);
}
.looser-bracket {
    align-self: stretch;
    height: 272px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-21xl);
}
.column-1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-81xl);
    min-width: 230px;
    max-width: 250px;
}
.column-2 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-81xl);
    min-width: 230px;
    max-width: 250px;
}
.column-3 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 230px;
    max-width: 250px;
}
.rectangle-child1 {
    height: 48px;
    width: 9px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    left: 0px;
}
.player4 {
    width: 66px;
    position: relative;
    font-size: var(--font-size-5xl);
    font-family: var(--font-roboto);
    color: var(--color-darkslategray-200);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    min-width: 66px;
}
.rectangle4 {
    align-self: stretch;
    height: 48px;
    border-radius: var(--br-8xs);
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px var(--padding-73xl) 0px 0px;
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-3xs);
}
.match-12 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.winner-bracket2 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.column-4 {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 230px;
    max-width: 250px;
}
.bracketcontainer {
    align-self: stretch;
    border-radius: var(--br-xs);
    background-color: var(--color-white);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: var(--padding-31xl) var(--padding-71xl);
    gap: var(--gap-26xl);
}
.valider-le-bracket {
    flex: 1;
    position: relative;
    font-size: var(--font-size-lg);
    font-family: var(--font-roboto);
    color: var(--color-white);
    text-align: center;
}
.button-primary6 {
    cursor: pointer;
    border: none;
    padding: var(--padding-sm-5) var(--padding-5xl);
    background-color: var(--color-black);
    width: 250px;
    border-radius: var(--br-8xs);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    white-space: nowrap;
}
.button-primary6:hover {
    background-color: var(--color-darkslategray-100);
}
.oui {
    flex: 1;
    position: relative;
    font-size: var(--font-size-lg);
    font-family: var(--font-roboto);
    color: var(--color-white);
    text-align: center;
}
.yes {
    cursor: pointer;
    border: none;
    padding: var(--padding-smi) var(--padding-mini);
    background-color: var(--color-black);
    width: 90px;
    border-radius: var(--br-8xs);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}
.yes:hover {
    background-color: var(--color-darkslategray-100);
}
.non {
    flex: 1;
    position: relative;
    font-size: var(--font-size-lg);
    font-family: var(--font-roboto);
    color: var(--color-white);
    text-align: center;
}
.no {
    cursor: pointer;
    border: none;
    padding: var(--padding-smi) var(--padding-5xl);
    background-color: var(--color-black);
    width: 90px;
    border-radius: var(--br-8xs);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
}
.no:hover {
    background-color: var(--color-darkslategray-100);
}
.confirmation {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px var(--padding-xl);
    gap: var(--gap-7xs);
}
.validationbutton {
    width: 545px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-8xs);
    max-width: 100%;
}
.bracket {
    align-self: stretch;
    border-radius: var(--br-mini);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-xl) var(--padding-43xl-5);
    box-sizing: border-box;
    gap: var(--gap-26xl);
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-5xl);
    color: var(--color-darkslategray-200);
    font-family: var(--font-roboto);
}

@media screen and (max-width: 1200px) {
    .bracketcontainer {
    padding-left: var(--padding-26xl);
    padding-right: var(--padding-26xl);
    box-sizing: border-box;
    }
}
@media screen and (max-width: 750px) {
    .bracketcontainer {
    gap: var(--gap-3xl);
    padding: var(--padding-13xl) var(--padding-3xl);
    box-sizing: border-box;
    }

    .bracket {
    gap: 22px 45px;
    padding-left: var(--padding-12xl);
    padding-right: var(--padding-12xl);
    box-sizing: border-box;
    }
}
@media screen and (max-width: 450px) {
    .winner-bracket1 {
    gap: 20px 40px;
    }

    .looser-bracket {
    gap: 20px 40px;
    }

    .column-1 {
    gap: 50px 100px;
    }

    .column-2 {
    gap: 50px 100px;
    }

    .column-3 {
    gap: 50px 100px;
    }

    .player4 {
    font-size: var(--font-size-lgi);
    }

    .winner-bracket2 {
    gap: 20px 40px;
    }

    .column-4 {
    gap: 50px 100px;
    }

    .confirmation {
    flex-wrap: wrap;
    }
}
</style>
