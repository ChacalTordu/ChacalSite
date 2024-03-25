<template>
    <div class="esportnouvellesession-deskto">
        <!-- Chargement de la barre de navigation depuis un fichier externe -->
        <script>
            fetch('/components/navbar.html')
                .then(response => response.text())
                .then(html => {
                    document.body.insertAdjacentHTML('afterbegin', html);
                });
        </script>

        <!-- Section principale du blog -->
        <div class="blog-section">
            <!-- En-tête de la section -->
            <div class="pane-top">
                <div class="title">Chacal Ligue - Nouvelle session Gaming</div>
            </div>

            <!-- Contenu de la section -->
            <div class="content">
                <!-- Conteneur de l'image avec ID pour la mise à jour aléatoire -->
                <div class="media-wrapper">
                    <img class="media-icon" id="randomImage" alt="" src="./img/trackmaniaPoster.png" />
                </div>

                <!-- Bouton "Start" avec gestionnaire d'événements -->
                <div class="button-primary" onclick="startButtonClick()">
                    <div class="start">Start</div>
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

        <!-- Script pour la fonction de sélection aléatoire d'une image -->
        <script>
            function startButtonClick() {
                // Liste des noms de fichiers d'images dans le dossier ./img
                const imageFiles = ['aoePoster.jpg', 'apexPoster.jpg', 'battleritePoster.jpg', 'counterstrikePoster.jpg', 'geoguessrPoster.jpg', 'golfwithyourfriendsPoster.jpg', 'leagueoflegendPoster.jpg', 'minecraftPoster.jpg', 'pinballPoster.jpg', 'portalPoster.jpg', 'quakechampionPoster.jpg', 'rocketleaguePoster.jpg', 'trackmaniaPoster.png'];

                // Sélection aléatoire d'un fichier d'image
                const randomImageFile = imageFiles[Math.floor(Math.random() * imageFiles.length)];

                // Mise à jour de la source de l'image
                document.getElementById('randomImage').src = './img/posterJeux/' + randomImageFile;
            }
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
  border-radius: 12px;
  width: 340px;
  height: 465px;
  object-fit: cover;
}
.media-wrapper {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.start {
  flex: 1;
  position: relative;
}
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
}
.content {
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 200px 0 0;
  gap: 45px;
  z-index: 1;
  text-align: center;
  font-size: 18px;
  color: var(--color-white);
}
.blog-section,
.logo {
  align-self: stretch;
  position: relative;
}
.blog-section {
  background-color: var(--color-whitesmoke);
  height: 975px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-3xs);
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
.esportnouvellesession-deskto,
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
.esportnouvellesession-deskto {
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