<template>
<div class="events-desktop">
  <ZoneNavbar />
  <main class="blog-section">
    <h1 class="title">Événements</h1>
    <section class="joueurs-parent">
      <div class="events">
        <CardEvent media="" title="Chacal Ligue" type="Multigaming" date="26/03/2024" location="ChacalDiscord" participantsNb="6"/>
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
  import ZoneNavbar from "@/components/zone/ZoneNavbar.vue";
  import ZoneFooter from "@/components/zone/ZoneFooter.vue";
  import ButtonBlack from "@/components/buttons/ButtonBlack.vue";
  import CardEvent from '@/components/CardEvent.vue';
</script>

<style scoped>
  .events-desktop {
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
  .events {
    align-self: stretch;
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
