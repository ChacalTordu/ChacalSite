<template>
    <div class="esportnouvellesession-bracket">
        <script>
            fetch('/components/navbar.html')
                .then(response => response.text())
                .then(html => {
                    document.body.insertAdjacentHTML('afterbegin', html);
                });
        </script>
      <div class="blog-section">
        <div class="pane-top">
          <div class="title">Chacal Ligue - Nouvelle session Gaming</div>
        </div>
        <div class="content">
          <div class="game-description">
            <div class="game">
              <img class="media-icon" alt="" src="./img/trackmaniaPoster.png" />
            </div>
            <div class="description">
              On a choisi un mode "Time Attack" avec des pistes sélectionnées au
              hasard. L'important, c'est de jouer selon les règles, sans tricher
              avec des raccourcis douteux. On se fait confiance, mais on a quand
              même un pote neutre pour régler les embrouilles. Prêts pour la
              bagarre ?! 🚗💨
            </div>
          </div>
          <div class="bracket">
            <div class="bracketcontainer">
              <div class="column-1">
                <div class="winner-bracket">
                  <div class="match-1">
                    <div class="rectangle">
                      <img
                        class="rectangle-child"
                        alt=""
                        src="./public/rectangle-1@2x.png"
                      />

                      <div class="player">Player</div>
                      <div class="div">1</div>
                    </div>
                    <div class="rectangle">
                      <img
                        class="rectangle-child"
                        alt=""
                        src="./public/rectangle-1@2x.png"
                      />

                      <div class="player">Player</div>
                      <div class="div">0</div>
                    </div>
                  </div>
                  <div class="match-1">
                    <div class="rectangle">
                      <img
                        class="rectangle-child"
                        alt=""
                        src="./public/rectangle-1@2x.png"
                      />

                      <div class="player">Player</div>
                      <div class="div">1</div>
                    </div>
                    <div class="rectangle">
                      <img
                        class="rectangle-child"
                        alt=""
                        src="./public/rectangle-1@2x.png"
                      />

                      <div class="player">Player</div>
                      <div class="div">0</div>
                    </div>
                  </div>
                </div>
                <div class="winner-bracket">
                  <div class="match-1">
                    <div class="rectangle">
                      <img
                        class="rectangle-child"
                        alt=""
                        src="./public/rectangle-1@2x.png"
                      />

                      <div class="player">Player</div>
                      <div class="div">1</div>
                    </div>
                    <div class="rectangle">
                      <img
                        class="rectangle-child"
                        alt=""
                        src="./public/rectangle-1@2x.png"
                      />

                      <div class="player">Player</div>
                      <div class="div">0</div>
                    </div>
                  </div>
                  <div class="match-1">
                    <div class="rectangle">
                      <img
                        class="rectangle-child"
                        alt=""
                        src="./public/rectangle-1@2x.png"
                      />

                      <div class="player">Player</div>
                      <div class="div">1</div>
                    </div>
                    <div class="rectangle">
                      <img
                        class="rectangle-child"
                        alt=""
                        src="./public/rectangle-1@2x.png"
                      />

                      <div class="player">Player</div>
                      <div class="div">0</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column-1">
                <div class="winner-bracket1">
                  <div class="match-1">
                    <div class="rectangle">
                      <img
                        class="rectangle-child"
                        alt=""
                        src="./public/rectangle-1@2x.png"
                      />

                      <div class="player">Player</div>
                      <div class="div">1</div>
                    </div>
                    <div class="rectangle">
                      <img
                        class="rectangle-child"
                        alt=""
                        src="./public/rectangle-1@2x.png"
                      />

                      <div class="player">Player</div>
                      <div class="div">0</div>
                    </div>
                  </div>
                </div>
                <div class="winner-bracket1">
                  <div class="match-1">
                    <div class="rectangle">
                      <img
                        class="rectangle-child"
                        alt=""
                        src="./public/rectangle-1@2x.png"
                      />

                      <div class="player">Player</div>
                      <div class="div">1</div>
                    </div>
                    <div class="rectangle">
                      <img
                        class="rectangle-child"
                        alt=""
                        src="./public/rectangle-1@2x.png"
                      />

                      <div class="player">Player</div>
                      <div class="div">0</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column-3">
                <div class="column-3">
                  <div class="match-1">
                    <div class="rectangle">
                      <img
                        class="rectangle-child"
                        alt=""
                        src="./public/rectangle-1@2x.png"
                      />

                      <div class="player">Player</div>
                      <div class="div">1</div>
                    </div>
                    <div class="rectangle">
                      <img
                        class="rectangle-child"
                        alt=""
                        src="./public/rectangle-1@2x.png"
                      />

                      <div class="player">Player</div>
                      <div class="div">0</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column-3">
                <div class="column-3">
                  <div class="column-3">
                    <div class="rectangle">
                      <img
                        class="rectangle-child"
                        alt=""
                        src="./public/rectangle-1@2x.png"
                      />

                      <div class="player">Player</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="validationbutton">
              <div class="button-primary">
                <div class="valider-le-bracket">Valider le bracket</div>
              </div>
              <div class="confirmation">
                <div class="yes">
                  <div class="oui">Oui</div>
                </div>
                <div class="no">
                  <div class="oui">Non</div>
                </div>
              </div>
            </div>
          </div>
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
.pane-top {
  margin: 0 !important;
  position: absolute;
  top: 0;
  left: 90px;
  width: 1260px;
  height: 200px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
}
.media-icon {
  position: relative;
  border-radius: var(--br-xs);
  width: 340px;
  height: 465px;
  object-fit: cover;
}
.game {
  flex-shrink: 0;
  flex-direction: row;
}
.description,
.game,
.game-description {
  display: flex;
  align-items: center;
  justify-content: center;
}
.description {
  position: relative;
  width: 835px;
  height: 328px;
  flex-shrink: 0;
}
.game-description {
  flex-direction: row;
  gap: var(--gap-26xl);
}
.rectangle-child {
  position: absolute;
  margin: 0 !important;
  top: 0;
  left: 0;
  width: 9px;
  height: 48px;
  object-fit: cover;
  z-index: 0;
}
.player {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  flex-shrink: 0;
  z-index: 1;
}
.div,
.player,
.rectangle {
  position: relative;
}
.div {
  color: var(--color-black);
  z-index: 2;
}
.rectangle {
  border-radius: var(--br-8xs);
  background-color: var(--color-whitesmoke-200);
  width: 250px;
  height: 48px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-smi) var(--padding-5xl);
  box-sizing: border-box;
}
.match-1,
.winner-bracket {
  display: flex;
  align-items: center;
  justify-content: center;
}
.match-1 {
  flex-shrink: 0;
  flex-direction: column;
  gap: var(--gap-xl);
}
.winner-bracket {
  gap: var(--gap-21xl);
}
.column-1,
.winner-bracket,
.winner-bracket1 {
  flex-shrink: 0;
  flex-direction: column;
}
.column-1 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-81xl);
}
.winner-bracket1 {
  padding: var(--padding-61xl) 0;
}
.bracketcontainer,
.column-3,
.winner-bracket1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.column-3 {
  flex-shrink: 0;
  flex-direction: column;
}
.bracketcontainer {
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  flex-direction: row;
  padding: var(--padding-31xl) 90px;
  gap: var(--gap-26xl);
}
.valider-le-bracket {
  flex: 1;
  position: relative;
}
.button-primary {
  border-radius: var(--br-8xs);
  background-color: var(--color-black);
  width: 250px;
  height: 48px;
  overflow: hidden;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: space-between;
  padding: var(--padding-smi) var(--padding-5xl);
  box-sizing: border-box;
}
.button-primary,
.no,
.oui,
.yes {
  display: flex;
  align-items: center;
}
.oui {
  align-self: stretch;
  flex: 1;
  position: relative;
  justify-content: center;
}
.no,
.yes {
  border-radius: var(--br-8xs);
  background-color: var(--color-black);
  width: 90px;
  height: 48px;
  overflow: hidden;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: space-between;
  padding: var(--padding-smi) 15px;
  box-sizing: border-box;
}
.no {
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-5xl);
}
.bracket,
.confirmation,
.content,
.validationbutton {
  display: flex;
  align-items: center;
  justify-content: center;
}
.confirmation {
  width: 545px;
  flex-shrink: 0;
  flex-direction: row;
  gap: 6px;
}
.bracket,
.content,
.validationbutton {
  flex-direction: column;
}
.validationbutton {
  gap: 5px;
  font-size: var(--font-size-lg);
  color: var(--color-white);
}
.bracket,
.content {
  align-self: stretch;
  gap: var(--gap-26xl);
}
.bracket {
  border-radius: 15px;
  padding: 20px var(--padding-31xl);
  color: var(--color-darkslategray);
}
.content {
  flex: 1;
  overflow: hidden;
  padding: 200px 0 0;
  z-index: 1;
  text-align: center;
  font-size: var(--font-size-5xl);
}
.blog-section,
.logo {
  align-self: stretch;
  position: relative;
}
.blog-section {
  background-color: var(--color-whitesmoke-100);
  height: 1651px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 56px;
}
.logo {
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
.esportnouvellesession-bracket,
.footer {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.footer {
  align-self: stretch;
  background-color: var(--color-whitesmoke-100);
  height: 300px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sm);
}
.esportnouvellesession-bracket {
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