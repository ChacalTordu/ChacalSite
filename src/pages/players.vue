<template>
<div class="esportjoueurs-desktop">
  <ZoneNavbar />
  <main class="blog-section">
    <h1 class="title">Chacal Ligue - Joueurs</h1>
    <section class="joueurs-parent">
      <div class="joueurs">
        <div class="antoine">
          <div class="media" />
          <h2 class="title1">
            Homme très dangereux. Capable de l’impossibe, comme du pire. Son
            style de jeu peut surprendre ...
          </h2>
          <div class="subtitle">Tonio Le Connard</div>
        </div>
        <div class="gwendal">
          <div class="media1" />
          <h2 class="title2">
            Savant, sage, aucun défis ne lui fait perdre son sang froid. A
            surveiller ...
          </h2>
          <div class="subtitle1">Transpalet</div>
        </div>
        <div class="marius">
          <div class="media2" />
          <h2 class="title3">
            Sa capacité à être dérangé, peut aussi déranger toute la ligue.
            Très fort ce pugzin ...
          </h2>
          <div class="subtitle2">Pugzindecong</div>
        </div>
        <div class="pierre">
          <div class="media3" />
          <h2 class="title4">
            Ce spécialiste de la défonce, peut défoncer les adversaires en un
            claquement de petard ...
          </h2>
          <div class="subtitle3">Pierromax</div>
        </div>
        <div class="lo">
          <div class="media4" />
          <h2 class="title5">
            Le chacal est capable de grande ruse, attention aux chacals coup
            dans le dos ...
          </h2>
          <div class="subtitle4">ChacalTordu</div>
        </div>
        <div class="julien">
          <div class="media5" />
          <h2 class="title6">
            Ce spécialiste de la maîtrise du corp humain, maîtrise tout aussi
            bien l’art du jeu vidéo ... Incroyable
          </h2>
          <div class="subtitle5">Wazzakunga</div>
        </div>
      </div>
      <div class="footer-instance">
        <router-link class="router-link" to="/"><ButtonBlack textButton="Classement"/></router-link>
      </div>
    </section>
  </main>
  <ZoneFooter />
</div>
</template>

<script setup>
  import ZoneNavbar from "../components/zone/zoneNavbar.vue";
  import ZoneFooter from "../components/zone/zoneFooter.vue";
  import ButtonBlack from "../components/buttons/buttonBlack.vue";
</script>

<style scoped>
  .title {
    margin: 0;
    width: 1260px;
    position: relative;
    font-size: inherit;
    font-weight: 500;
    font-family: inherit;
    display: inline-block;
    max-width: 100%;
  }
  .media {
    align-self: stretch;
    height: 370px;
    position: relative;
    background-color: var(--color-black);
  }
  .title1 {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    line-height: 135.94%;
    font-weight: 400;
    font-family: inherit;
    text-shadow: 0px 31.3px 62.53px rgba(0, 0, 0, 0.64);
  }
  .subtitle {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-sm);
    line-height: 135.94%;
  }
  .antoine {
    width: 390px;
    margin: 0 !important;
    position: absolute;
    top: 138px;
    left: 0px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-2xs) var(--padding-3xs);
    box-sizing: border-box;
    gap: var(--gap-xl);
  }
  .media1 {
    align-self: stretch;
    height: 370px;
    position: relative;
    background-color: var(--color-black);
  }
  .title2 {
    margin: 0;
    align-self: stretch;
    height: 101px;
    position: relative;
    font-size: inherit;
    line-height: 135.94%;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
  }
  .subtitle1 {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-sm);
    line-height: 135.94%;
  }
  .gwendal {
    width: 390px;
    margin: 0 !important;
    position: absolute;
    top: 138px;
    left: 435px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
    box-sizing: border-box;
    gap: var(--gap-xl);
  }
  .media2 {
    align-self: stretch;
    height: 370px;
    position: relative;
    background-color: var(--color-black);
  }
  .title3 {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    line-height: 135.94%;
    font-weight: 400;
    font-family: inherit;
  }
  .subtitle2 {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-sm);
    line-height: 135.94%;
  }
  .marius {
    width: 390px;
    margin: 0 !important;
    position: absolute;
    top: 138px;
    left: 870px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-2xs) var(--padding-3xs);
    box-sizing: border-box;
    gap: var(--gap-xl);
  }
  .media3 {
    align-self: stretch;
    height: 370px;
    position: relative;
    background-color: var(--color-black);
  }
  .title4 {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    line-height: 135.94%;
    font-weight: 400;
    font-family: inherit;
  }
  .subtitle3 {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-sm);
    line-height: 135.94%;
  }
  .pierre {
    width: 390px;
    margin: 0 !important;
    position: absolute;
    top: 688px;
    left: 0px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-2xs) var(--padding-3xs);
    box-sizing: border-box;
    gap: var(--gap-xl);
  }
  .media4 {
    align-self: stretch;
    height: 370px;
    position: relative;
    background-color: var(--color-black);
  }
  .title5 {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    line-height: 135.94%;
    font-weight: 400;
    font-family: inherit;
  }
  .subtitle4 {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-sm);
    line-height: 135.94%;
  }
  .lo {
    width: 390px;
    margin: 0 !important;
    position: absolute;
    top: 688px;
    left: 435px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-2xs) var(--padding-3xs);
    box-sizing: border-box;
    gap: var(--gap-xl);
  }
  .media5 {
    align-self: stretch;
    height: 370px;
    position: relative;
    background-color: var(--color-black);
  }
  .title6 {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    line-height: 135.94%;
    font-weight: 400;
    font-family: inherit;
  }
  .subtitle5 {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-sm);
    line-height: 135.94%;
  }
  .julien {
    width: 390px;
    margin: 0 !important;
    position: absolute;
    top: 688px;
    left: 870px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-2xs) var(--padding-3xs);
    box-sizing: border-box;
    gap: var(--gap-xl);
  }
  .joueurs {
    align-self: stretch;
    height: 1376px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .footer-instance {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    text-align: center;
    font-size: var(--font-size-lg);
    color: var(--color-white);
  }
  .router-link {
    text-decoration: none;
    color: inherit;
  }
  .joueurs-parent {
    width: 1260px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--font-roboto);
  }
  .blog-section {
    align-self: stretch;
    background-color: var(--color-whitesmoke);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 92.5px var(--padding-xl) 25.5px;
    box-sizing: border-box;
    gap: 67px;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-37xl);
    color: var(--color-black);
    font-family: var(--font-roboto);
  }
  .esportjoueurs-desktop {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1325px) {
    .blog-section {
      padding-top: 60px;
      padding-bottom: var(--padding-xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1125px) {
    .blog-section {
      padding-top: 39px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 800px) {
    .title {
      font-size: var(--font-size-26xl);
    }

    .blog-section {
      gap: 33px 67px;
    }
  }
  @media screen and (max-width: 450px) {
    .title {
      font-size: var(--font-size-15xl);
    }

    .title1 {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .title2 {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .title3 {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .title4 {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .title5 {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .title6 {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .blog-section {
      gap: 17px 67px;
      padding-top: var(--padding-6xl);
      box-sizing: border-box;
    }
  }
</style>
