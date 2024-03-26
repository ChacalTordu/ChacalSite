<template>
<div class="esportnouvellesession-bracket">
  <ZoneNavbar />
  <main class="blog-section2">
    <div class="pane-top1">
      <h1 class="title9">Chacal Ligue - Bracket</h1>
    </div>
    <section class="content3">
      <div class="game-description">
        <div class="game">
        </div>
        <div class="description">
          On a choisi un mode "Time Attack" avec des pistes sélectionnées au
          hasard. L'important, c'est de jouer selon les règles, sans tricher
          avec des raccourcis douteux. On se fait confiance, mais on a quand
          même un pote neutre pour régler les embrouilles. Prêts pour la
          bagarre ?! 🚗💨
        </div>
      </div>
      <BracketClassic />
    </section>
  </main>
  <ZoneFooter/>
</div>
</template>

<script setup>
  import ZoneNavbar from '@/components/zone/ZoneNavbar.vue';
  import ZoneFooter from '@/components/zone/ZoneFooter.vue';
  import BracketClassic from '@/components/zone/brackets/BracketClassic.vue';
</script>

<style scoped>
.title9 {
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
}
.pane-top1 {
  width: 1260px;
  margin: 0 !important;
  position: absolute;
  top: 67px;
  left: 90px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
}
.media-icon {
  height: 465px;
  flex: 1;
  position: relative;
  border-radius: var(--br-xs);
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
}
.game {
  height: 465px;
  width: 340px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 340px;
  max-width: 100%;
}
.description {
  height: 328px;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 543px;
  max-width: 100%;
}
.game-description {
  width: 1260px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-26xl);
  max-width: 100%;
}
.content3 {
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-26xl);
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
  font-family: var(--font-roboto);
}
.blog-section2 {
  align-self: stretch;
  background-color: var(--color-whitesmoke-100);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-48xl) 0px 1.5px;
  box-sizing: border-box;
  position: relative;
  min-height: 1651px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-37xl);
  color: var(--color-black);
  font-family: var(--font-roboto);
}
.esportnouvellesession-bracket {
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

@media screen and (max-width: 1200px) {
  .blog-section2 {
    padding-top: 44px;
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
}
@media screen and (max-width: 1050px) {
  .title9 {
    font-size: var(--font-size-26xl);
  }

  .media-icon {
    flex: 1;
  }

  .game {
    flex: 1;
  }

  .game-description {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 750px) {
  .description {
    min-width: 100%;
  }

  .game-description {
    gap: 45px 22px;
  }

  .content3 {
    gap: 22px 45px;
  }

  .blog-section2 {
    padding-top: 29px;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 450px) {
  .title9 {
    font-size: var(--font-size-15xl);
  }

  .game {
    min-width: 100%;
  }

  .description {
    font-size: var(--font-size-lgi);
  }
}
</style>
