<template>
    <div class="esporttournoi-desktop">
      <ZoneNavbar />
      <div class="blog-section">
        <div class="content">
          <div class="pane-top">
            <div class="title">Chacal Ligue</div>
          </div>
          <div class="pane-bottom">
            <div class="classement">
              <div class="rank">
                <div class="div">1</div>
                <div class="div">2</div>
                <div class="div">3</div>
                <div class="div">4</div>
                <div class="div">5</div>
                <div class="div">6</div>
              </div>
  
              <div class="chacaltordu-parent">
                <div class="div">ChacalTordu</div>
                <div class="div">Transpalet</div>
                <div class="div">Wazzakunga</div>
                <div class="div">Tonio Le connard</div>
                <div class="div">Pugzindecong</div>
                <div class="div">Pierromax</div>
              </div>
  
              <div class="pts-parent">
                <div class="div">+0pts</div>
                <div class="div">+0pts</div>
                <div class="div">+0pts</div>
                <div class="div">+0pts</div>
                <div class="div">+0pts</div>
                <div class="div">+0pts</div>
              </div>
            </div>
          </div>
          <router-link to="./nouvelleSession" class="button-primary button">
            <div class="nouvelle-session-gaming">Nouvelle session gaming</div>
          </router-link>
        </div>
      </div>
      <ZoneFooter />
    </div>
  </template>
  
<script setup>
    import ZoneFooter from '@/components/zone/ZoneFooter.vue';
    import ZoneNavbar from '@/components/zone/ZoneNavbar.vue';
</script>
  
<style scoped>
.chacalsite,
.home1 {
  position: relative;
  text-transform: uppercase;
}
.home1 {
  text-decoration: none;
  color: inherit;
}
.home,
.navbar-desktop {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.home {
  height: 58px;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0;
  box-sizing: border-box;
  gap: var(--gap-base);
  font-size: var(--font-size-xl);
}
.navbar-desktop {
  align-self: stretch;
  background-color: var(--color-white);
  justify-content: space-between;
  padding: 0 var(--padding-11xl);
}
.title {
  align-self: stretch;
  position: relative;
  font-weight: 500;
}
.pane-top {
  width: 1260px;
  height: 200px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.div {
  position: relative;
}
.chacaltordu-parent,
.rank {
  flex-direction: column;
  justify-content: space-between;
  padding: var(--padding-13xl) 0;
  box-sizing: border-box;
}
.rank {
  align-self: stretch;
  width: 271px;
  display: flex;
  align-items: center;
}
.chacaltordu-parent {
  width: 583px;
  align-items: flex-start;
}
.chacaltordu-parent,
.classement,
.pts-parent {
  align-self: stretch;
  display: flex;
}
.pts-parent {
  width: 340px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: var(--padding-13xl) 0;
  box-sizing: border-box;
}
.classement {
  flex: 1;
  border-radius: 30px;
  background-color: var(--color-white);
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.pane-bottom {
  width: 1260px;
  height: 632px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: var(--font-size-21xl);
}
.nouvelle-session-gaming {
  flex: 1;
  position: relative;
}
.blog-section,
.button-primary,
.content {
  overflow: hidden;
  display: flex;
  align-items: center;
}
.button-primary {
  border-radius: 5px;
  background-color: var(--color-black);
  width: 250px;
  height: 48px;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: space-between;
  padding: 13px 24px;
  box-sizing: border-box;
  text-align: center;
  font-size: 18px;
  color: var(--color-white);
}
.blog-section,
.content {
  flex-direction: column;
  justify-content: center;
}
.content {
  gap: 45px;
}
.blog-section {
  align-self: stretch;
  background-color: var(--color-whitesmoke);
  height: 975px;
  flex-shrink: 0;
  font-size: 56px;
}
.logo {
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-5xl);
  text-transform: uppercase;
}
.copyright {
  position: relative;
  line-height: 140.63%;
}
.header-links,
.pane-left {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.pane-left {
  width: 253px;
  height: 240px;
  flex-shrink: 0;
  padding: var(--padding-56xl) var(--padding-11xl);
  box-sizing: border-box;
  gap: var(--gap-3xs);
}
.header-links {
  align-self: stretch;
}
.link1 {
  align-self: stretch;
  position: relative;
  line-height: 140.63%;
}
.body-links,
.box-links {
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-3xs);
}
.body-links {
  align-self: stretch;
  flex: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  max-height: 140px;
}
.box-links {
  margin: 0 !important;
  position: absolute;
  top: 70px;
  left: 600px;
  width: 220px;
  height: 170px;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  max-height: 170px;
  z-index: 0;
}
.box-links,
.box-links1,
.content1,
.pane-right {
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  box-sizing: border-box;
}
.box-links1 {
  margin: 0 !important;
  position: absolute;
  top: 70px;
  left: 870px;
  width: 120px;
  height: 170px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  gap: var(--gap-3xs);
  max-height: 170px;
  z-index: 1;
}
.content1,
.pane-right {
  flex-direction: row;
}
.pane-right {
  width: 1097px;
  height: 280px;
  align-items: flex-end;
  justify-content: flex-end;
  padding: var(--padding-21xl);
  position: relative;
  gap: var(--gap-31xl);
}
.content1 {
  width: 1260px;
  height: 300px;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0;
}
.esporttournoi-desktop,
.footer {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.footer {
  align-self: stretch;
  background-color: var(--color-whitesmoke);
  height: 300px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sm);
}
.esporttournoi-desktop {
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--font-size-7xl);
  color: var(--color-black);
  font-family: var(--font-roboto);
}
body {
    margin: 0;
    line-height: normal;
  }
  
  :root {
    /* fonts */
    --font-roboto: Roboto;
  
    /* font sizes */
    --font-size-sm: 14px;
    --font-size-5xl: 24px;
    --font-size-21xl: 40px;
    --font-size-xl: 20px;
    --font-size-7xl: 26px;
  
    /* Colors */
    --color-white: #fff;
    --color-whitesmoke: #f2f2f2;
    --color-black: #000;
  
    /* Gaps */
    --gap-31xl: 50px;
    --gap-3xs: 10px;
    --gap-base: 16px;
  
    /* Paddings */
    --padding-3xs: 10px;
    --padding-21xl: 40px;
    --padding-56xl: 75px;
    --padding-11xl: 30px;
    --padding-13xl: 32px;
    --padding-10xs: 3px;
  }
</style>
  