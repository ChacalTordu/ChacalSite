<template>
    <!-- Section principale de la page des joueurs -->
    <div class="esportjoueurs-desktop">
        <!-- Barre de navigation -->
        <div class="navbar-desktop">
            <b class="chacalsite">Chacalsite</b>
            <div class="home">
                <!-- Liens de navigation -->
                <a class="home1">HOME</a>
                <div class="chacalsite">E-SPORT</div>
                <div class="chacalsite">USER</div>
            </div>
        </div>

        <!-- Section principale du blog -->
        <div class="blog-section">
            <!-- Contenu de la section -->
            <div class="content">
                <!-- Étiquette de titre -->
                <div class="label">
                    <div class="title">Chacal Ligue - Joueurs</div>
                </div>

                <!-- Liste des joueurs avec leurs informations -->
                <div class="joueurs">
                    <!-- Joueur 1 -->
                    <div class="antoine">
                        <div class="media"></div>
                        <div class="title1">
                            Homme très dangereux. Capable de l’impossible, comme du pire. Son
                            style de jeu peut surprendre ...
                        </div>
                        <div class="subtitle">Tonio Le Connard</div>
                    </div>

                    <!-- Joueur 2 -->
                    <div class="antoine">
                        <div class="media"></div>
                        <div class="title2">
                            Savant, sage, aucun défi ne lui fait perdre son sang-froid. À
                            surveiller ...
                        </div>
                        <div class="subtitle">Transpalet</div>
                    </div>

                    <!-- Joueur 3 -->
                    <div class="antoine">
                        <div class="media"></div>
                        <div class="title3">
                            Sa capacité à être dérangé, peut aussi déranger toute la ligue.
                            Très fort ce pugzin ...
                        </div>
                        <div class="subtitle">Pugzindecong</div>
                    </div>

                    <!-- Joueur 4 -->
                    <div class="antoine">
                        <div class="media"></div>
                        <div class="title3">
                            Ce spécialiste de la défonce, peut défoncer les adversaires en
                            un claquement de pétard ...
                        </div>
                        <div class="subtitle">Pierromax</div>
                    </div>

                    <!-- Joueur 5 -->
                    <div class="antoine">
                        <div class="media"></div>
                        <div class="title3">
                            Le chacal est capable de grande ruse, attention aux chacals
                            coup dans le dos ...
                        </div>
                        <div class="subtitle">ChacalTordu</div>
                    </div>

                    <!-- Joueur 6 -->
                    <div class="antoine">
                        <div class="media"></div>
                        <div class="title3">
                            Ce spécialiste de la maîtrise du corps humain, maîtrise tout
                            aussi bien l’art du jeu vidéo ... Incroyable
                        </div>
                        <div class="subtitle">Wazzakunga</div>
                    </div>
                </div>

                <!-- Bouton pour accéder à la page de classement -->
                <a class="classementbutton button" href="./classement.html">
                    <div class="classement">Classement</div>
                </a>
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
.label {
  width: 1260px;
  height: 200px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.media {
  position: relative;
  background-color: var(--color-black);
  width: 370px;
  height: 370px;
}
.subtitle,
.title1 {
  align-self: stretch;
  position: relative;
  line-height: 135.94%;
}
.title1 {
  text-shadow: 1.9145312065034763e-15px 31.266666412353516px 62.53px
    rgba(0, 0, 0, 0.64);
}
.subtitle {
  font-size: var(--font-size-sm);
}
.antoine {
  width: 390px;
  height: 550px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-xl);
}
.title2 {
  flex: 1;
  position: relative;
  line-height: 135.94%;
}
.joueurs,
.title2,
.title3 {
  align-self: stretch;
}
.title3 {
  position: relative;
  line-height: 135.94%;
}
.joueurs {
  height: 1376px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  font-size: var(--font-size-5xl);
}
.classement {
  flex: 1;
  position: relative;
}
.classementbutton {
  border-radius: 5px;
  background-color: var(--color-black);
  width: 200px;
  height: 48px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: 18px;
  color: var(--color-white);
}
.blog-section,
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.content {
  width: 1260px;
  height: 1305px;
}
.blog-section {
  align-self: stretch;
  background-color: var(--color-whitesmoke);
  height: 1675px;
  overflow: hidden;
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
.esportjoueurs-desktop,
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
  justify-content: flex-end;
  font-size: var(--font-size-sm);
}
.esportjoueurs-desktop {
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
</style>