<template>
  <div class="home-desktop">
    <ZoneNavbar />
    <section class="content">
      <div class="content1">
        <div class="left-pane">
          <h1 class="title">La Chacal Ligue</h1>
          <h3 class="subtitle">
            Bienvenue dans la Chacal Ligue, où six potes s'affrontent pour le
            titre de joueur suprême à travers une variété de jeux. Dans cette
            compétition décontractée mais intense, l'amitié est mise à l'épreuve
            non seulement par les jeux, mais aussi par les paris sur les
            performances des autres joueurs. Une aventure multigaming où
            l'excitation des paris s'ajoute à l'enjeu. Qui décrochera le titre
            et remportera la mise ? Que les jeux et les paris commencent !
            🎮🏆💰
          </h3>
          <router-link class="router-link" to="/players">
            <BlackButton textButton="Chacal Joueurs"/>
          </router-link>
        </div>
        <div class="right-pane" />
      </div>
    </section>
    <ZoneFooter />
  </div>
</template>

<script setup>
  import ZoneNavbar from "@/components/zone/ZoneNavbar.vue";
  import ZoneFooter from "@/components/zone/ZoneFooter.vue";
  import BlackButton from "@/components/buttons/ButtonBlack.vue"
</script>

<style scoped>
  .title {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    font-weight: 500;
    font-family: inherit;
    z-index: unset;
  }
  .subtitle {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-xl);
    line-height: 140.63%;
    font-weight: 400;
    font-family: inherit;
    z-index: unset;
  }
  .router-link {
    text-decoration: none;
  }
  .left-pane {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: var(--padding-31xl) var(--padding-3xs);
    box-sizing: border-box;
    min-width: 498px;
    min-height: 500px;
    max-width: 100%;
    z-index: unset;
  }
  .right-pane {
    height: 480px;
    width: 700px;
    border-radius: var(--br-xs);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    overflow: hidden;
    flex-shrink: 0;
    min-width: 700px;
    max-width: 100%;
    z-index: unset;
  }
  .content1 {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-81xl);
    box-sizing: border-box;
    gap: var(--gap-51xl);
    max-width: 100%;
    z-index: unset;
  }
  .content {
    align-self: stretch;
    background-color: var(--color-whitesmoke);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    z-index: unset;
    text-align: left;
    font-size: var(--font-size-37xl);
    color: var(--color-black);
    font-family: var(--font-roboto);
  }
  .home-desktop {
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

  @media screen and (max-width: 1400px) {
    .left-pane {
      min-height: auto;
    }

    .right-pane {
      flex: 1;
    }

    .content1 {
      flex-wrap: wrap;
      gap: 70px 35px;
      padding-left: var(--padding-31xl);
      padding-right: var(--padding-31xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1125px) {
    .right-pane {
      min-width: 100%;
    }
  }
  @media screen and (max-width: 825px) {
    .title {
      font-size: var(--font-size-26xl);
    }

    .left-pane {
      min-width: 100%;
    }

    .content1 {
      gap: 70px 17px;
      padding: 65px var(--padding-6xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .title {
      font-size: var(--font-size-15xl);
    }

    .subtitle {
      font-size: var(--font-size-base);
      line-height: 22px;
    }

    .left-pane {
      padding-top: var(--padding-13xl);
      padding-bottom: var(--padding-13xl);
      box-sizing: border-box;
    }
  }
</style>
