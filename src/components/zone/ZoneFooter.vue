<template>
    <section class="footer2">
        <div class="content7">
        <div class="pane-left2">
            <h2 class="logo2">ChacalSite</h2>
            <div class="copyright2">© 2024</div>
            <div class="link12">Vie privée - Conditions d'utilisation</div>
        </div>
        <div class="pane-right2">
            <div class="box-links4">
            <div class="header-links4">
                <b class="subtitle12">Coordonnées</b>
            </div>
            <div class="body-links4">
                <div class="link13">chacal.entreprise@gmail.com</div>
                <i class="link14">Chacal Local en travaux ...</i>
            </div>
            </div>
            <div class="box-links5">
            <div class="header-links5">
                <b class="subtitle13">Nos produits</b>
            </div>
            <div class="body-links5">
                <div class="link15">Chacal Pull</div>
                <div class="link16">Chacal Réveil</div>
                <div class="link17">Chacal Manette</div>
            </div>
            </div>
        </div>
        </div>
    </section>
</template>

<style scoped>
    .logo2 {
        margin: 0;
        width: 193px;
        position: relative;
        font-size: var(--font-size-5xl);
        text-transform: uppercase;
        font-weight: 700;
        font-family: inherit;
        display: inline-block;
    }
    .copyright2 {
        position: relative;
        line-height: 20px;
        display: inline-block;
        min-width: 46px;
    }
    .link12 {
        position: relative;
        line-height: 20px;
    }
    .pane-left2 {
        width: 253px;
        overflow: hidden;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: var(--padding-57xl) var(--padding-4xs) var(--padding-57xl)
        var(--padding-11xl);
        box-sizing: border-box;
        gap: var(--gap-3xs);
    }
    .subtitle12 {
        position: relative;
        line-height: 20px;
        display: inline-block;
        min-width: 84px;
    }
    .header-links4 {
        align-self: stretch;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    .link13 {
        align-self: stretch;
        position: relative;
        line-height: 20px;
        white-space: nowrap;
    }
    .link14 {
        align-self: stretch;
        position: relative;
        line-height: 20px;
    }
    .body-links4 {
        align-self: stretch;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: var(--padding-16xl) 0px;
        box-sizing: border-box;
        gap: var(--gap-3xs);
        max-height: 140px;
    }
    .box-links4 {
        width: 220px;
        margin: 0 !important;
        position: absolute;
        top: 70px;
        left: 600px;
        overflow: hidden;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: var(--padding-3xs);
        box-sizing: border-box;
        gap: var(--gap-3xs);
        max-height: 170px;
    }
    .subtitle13 {
        position: relative;
        line-height: 20px;
        display: inline-block;
        min-width: 81px;
    }
    .header-links5 {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0px var(--padding-lgi) 0px 0px;
    }
    .link15 {
        align-self: stretch;
        position: relative;
        line-height: 20px;
    }
    .link16 {
        align-self: stretch;
        position: relative;
        line-height: 20px;
    }
    .link17 {
        position: relative;
        line-height: 20px;
        display: inline-block;
        min-width: 100px;
    }
    .body-links5 {
        align-self: stretch;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: var(--padding-xl) 0px;
        box-sizing: border-box;
        gap: var(--gap-3xs);
        max-height: 140px;
    }
    .box-links5 {
        width: 120px;
        margin: 0 !important;
        position: absolute;
        top: 70px;
        left: 870px;
        overflow: hidden;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: var(--padding-3xs);
        box-sizing: border-box;
        gap: var(--gap-3xs);
        max-height: 170px;
    }
    .pane-right2 {
        height: 280px;
        width: 1097px;
        overflow: hidden;
        flex-shrink: 0;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-end;
        padding: var(--padding-51xl) 0px var(--padding-21xl);
        box-sizing: border-box;
        position: relative;
        gap: var(--gap-31xl);
        max-width: 100%;
    }
    .content7 {
        width: 1260px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: var(--padding-3xs) 0px;
        box-sizing: border-box;
        row-gap: 20px;
        max-width: 100%;
    }
    .footer2 {
        align-self: stretch;
        background-color: var(--color-whitesmoke);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0px var(--padding-xl);
        box-sizing: border-box;
        max-width: 100%;
        text-align: left;
        font-size: var(--font-size-sm);
        color: var(--color-black);
        font-family: var(--font-roboto);
    }

    @media screen and (max-width: 1325px) {
        .content7 {
        flex-wrap: wrap;
        justify-content: center;
        }
    }
    @media screen and (max-width: 450px) {
        .logo2 {
        font-size: var(--font-size-lgi);
        }
    }
</style>
