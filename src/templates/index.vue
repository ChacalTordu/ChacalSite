<template>
        <div class="home-desktop">
        <!-- Chargement de la barre de navigation depuis un fichier externe -->
        <script>
            fetch('/components/navbar.html')
                .then(response => response.text())
                .then(html => {
                    document.body.insertAdjacentHTML('afterbegin', html);
                });
        </script>

        <!-- Section principale du héros (partie supérieure de la page) -->
        <div class="hero-section">
            <div class="content">
                <!-- Panneau gauche avec titre, sous-titre et bouton -->
                <div class="left-pane">
                    <div class="title">La Chacal Ligue</div>
                    <div class="subtitle">
                        Bienvenue dans la Chacal Ligue, où six potes s'affrontent pour le
                        titre de joueur suprême à travers une variété de jeux. Dans cette
                        compétition décontractée mais intense, l'amitié est mise à
                        l'épreuve non seulement par les jeux, mais aussi par les paris sur
                        les performances des autres joueurs. Une aventure multigaming où
                        l'excitation des paris s'ajoute à l'enjeu. Qui décrochera le titre
                        et remportera la mise ? Que les jeux et les paris commencent !
                        🎮🏆💰
                    </div>
                    <a href="/public/joueurs.html" class="button-primary button">
                        <div class="chacal-joueurs">Chacal Joueurs</div>
                    </a>
                </div>

                <!-- Panneau droit (pour d'éventuels éléments futurs) -->
                <div class="right-pane"></div>
            </div>
        </div>
        <!-- Script pour charger et ajouter le footer -->
        <script>
          fetch('/components/footer.html')
              .then(response => response.text())
              .then(html => {
                  document.body.insertAdjacentHTML('beforeend', html);
              });
        </script>
    </div>
</template>

<style scoped>
.chacalsite,
.e-sport {
  position: relative;
  text-transform: uppercase;
}
.e-sport {
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
.subtitle,
.title {
  align-self: stretch;
  position: relative;
}
.title {
  font-weight: 500;
}
.subtitle {
  font-size: var(--font-size-xl);
  line-height: 140.63%;
}

.chacal-joueurs {
  flex: 1;
  position: relative;
  text-decoration: none;
}

.button-primary {
  position: relative;
  display: inline-block;
  border-radius: 5px;
  overflow: hidden;
}

.button-primary .chacal-joueurs {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 24px;
  margin: 0;
  font-size: 18px;
  color: var(--color-whitesmoke);
  background-color: var(--color-black);
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.button-primary,
.left-pane,
.right-pane {
  box-sizing: border-box;
  overflow: hidden;
}
.left-pane {
  flex: 1;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 50px var(--padding-3xs);
}
.right-pane {
  border-radius: 12px;
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  width: 700px;
  height: 480px;
  flex-shrink: 0;
}
.content,
.hero-section {
  align-self: stretch;
  height: 700px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
.content {
  flex-direction: row;
  justify-content: flex-start;
  padding: var(--padding-3xs) 100px;
  box-sizing: border-box;
  gap: 70px;
}
.hero-section {
  background-color: var(--color-whitesmoke);
  flex-direction: column;
  justify-content: center;
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
  text-decoration: none;
  color: inherit;
}
.link1,
.link2 {
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
.footer,
.home-desktop {
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
.home-desktop {
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
</style>