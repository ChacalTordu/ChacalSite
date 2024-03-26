<template>
  <div class="ranking-desktop">
    <ZoneNavbar />
    <main class="content">
      <section class="content-section">
        <header class="pane-top">
          <h3 class="title">Chacal Ligue</h3>
        </header>
        <div class="pane-bottom">
          <div class="classement">
            <ZonePlayerRanking rank="1" pseudo="Léo" points="60"/>
            <ZonePlayerRanking rank="2" pseudo="Marius" points="20"/>
            <ZonePlayerRanking rank="3" pseudo="Antoine" points="10"/>
            <ZonePlayerRanking rank="4" pseudo="Gwendal" points="0"/>
            <ZonePlayerRanking rank="5" pseudo="Pierre" points="0"/>
          </div>
        </div>
        <ButtonBlack textButton="Nouvelle session gaming"/>
      </section>
    </main>
    <ZoneFooter />
  </div>
</template>

<script setup>
  import ZoneNavbar from "@/components/zone/ZoneNavbar.vue";
  import ZoneFooter from "@/components/zone/ZoneFooter.vue";
  import ButtonBlack from "@/components/buttons/ButtonBlack.vue";
  import ZonePlayerRanking from "@/components/zone/ZonePlayerRanking.vue";
</script>

<style scoped>
  .ranking-desktop {
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
  .content {
    align-self: stretch;
    background-color: var(--color-whitesmoke);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2.5px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .content-section {
    width: 1260px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 45px;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-roboto);
  }
  .pane-top {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 67px 0px;
    text-align: left;
    font-size: var(--font-size-37xl);
    color: var(--color-black);
    font-family: var(--font-roboto);
  }
  .title {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    font-weight: 500;
    font-family: inherit;
  }
  .classement {
    align-self: stretch;
    border-radius: 30px;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px 66px 10px 66px;
    box-sizing: border-box;
    row-gap: 20px;
    max-width: 100%;
  }
  .pane-bottom {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
  }
  @media screen and (max-width: 1325px) {
    .classement1 {
      padding-right: 33px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1125px) {
    .tonio-leconnard-rank {
      min-height: auto;
    }

    .classement1 {
      flex-wrap: wrap;
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 800px) {
    .title8 {
      font-size: var(--font-size-26xl);
    }

    .pane-top {
      gap: 20px 40px;
    }

    .pugzindecong-rank {
      font-size: var(--font-size-13xl);
    }

    .anonymous-rank {
      font-size: var(--font-size-13xl);
    }

    .button-primary1 {
      font-size: var(--font-size-13xl);
    }

    .footer-instance1 {
      font-size: var(--font-size-13xl);
    }

    .div {
      font-size: var(--font-size-13xl);
    }

    .div1 {
      font-size: var(--font-size-13xl);
    }

    .rank {
      padding-top: var(--padding-2xl);
      padding-bottom: var(--padding-2xl);
      box-sizing: border-box;
    }

    .chacaltordu {
      font-size: var(--font-size-13xl);
    }

    .transpalet {
      font-size: var(--font-size-13xl);
    }

    .wazzakunga {
      font-size: var(--font-size-13xl);
    }

    .tonio-le-connard {
      font-size: var(--font-size-13xl);
    }

    .pugzindecong {
      font-size: var(--font-size-13xl);
    }

    .anonymus {
      font-size: var(--font-size-13xl);
    }

    .tonio-leconnard-rank {
      padding-top: var(--padding-2xl);
      padding-right: 137px;
      padding-bottom: var(--padding-2xl);
      box-sizing: border-box;
      min-width: 100%;
    }

    .pts {
      font-size: var(--font-size-13xl);
    }

    .pts1 {
      font-size: var(--font-size-13xl);
    }

    .pts2 {
      font-size: var(--font-size-13xl);
    }

    .pts3 {
      font-size: var(--font-size-13xl);
    }

    .pts4 {
      font-size: var(--font-size-13xl);
    }

    .pts5 {
      font-size: var(--font-size-13xl);
    }

    .tonio-leconnard-rank1 {
      padding-top: var(--padding-2xl);
      padding-bottom: var(--padding-2xl);
      box-sizing: border-box;
    }

    .content2 {
      gap: 22px 45px;
    }
  }
  @media screen and (max-width: 450px) {
    .title8 {
      font-size: var(--font-size-15xl);
    }

    .pugzindecong-rank {
      font-size: var(--font-size-5xl);
    }

    .anonymous-rank {
      font-size: var(--font-size-5xl);
    }

    .button-primary1 {
      font-size: var(--font-size-5xl);
    }

    .footer-instance1 {
      font-size: var(--font-size-5xl);
    }

    .div {
      font-size: var(--font-size-5xl);
    }

    .div1 {
      font-size: var(--font-size-5xl);
    }

    .chacaltordu {
      font-size: var(--font-size-5xl);
    }

    .transpalet {
      font-size: var(--font-size-5xl);
    }

    .wazzakunga {
      font-size: var(--font-size-5xl);
    }

    .tonio-le-connard {
      font-size: var(--font-size-5xl);
    }

    .pugzindecong {
      font-size: var(--font-size-5xl);
    }

    .anonymus {
      font-size: var(--font-size-5xl);
    }

    .tonio-leconnard-rank {
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .pts {
      font-size: var(--font-size-5xl);
    }

    .pts1 {
      font-size: var(--font-size-5xl);
    }

    .pts2 {
      font-size: var(--font-size-5xl);
    }

    .pts3 {
      font-size: var(--font-size-5xl);
    }

    .pts4 {
      font-size: var(--font-size-5xl);
    }

    .pts5 {
      font-size: var(--font-size-5xl);
    }

    .tonio-leconnard-rank1 {
      padding-left: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
