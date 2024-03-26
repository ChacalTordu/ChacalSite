<template>
    <div class="newSession-content">
      <ZoneNavbar />
        <div class="blog-section">
            <div class="pane-top">
                <div class="title">Chacal Nouvelle Session</div>
            </div>
            <div class="content">
                <div class="media-wrapper">
                    <img class="media-icon" id="randomImage" alt="" src="./img/trackmaniaPoster.png" />
                </div>
                <ButtonBlack @callbackClick="startButtonClick" textButton="Start"/>
            </div>
        </div>
        <ZoneFooter />
    </div>
</template>

<script setup>
  import ZoneNavbar from '../components/zone/zoneNavbar.vue';
  import ZoneFooter from '../components/zone/zoneFooter.vue';
  import ButtonBlack from '../components/buttons/buttonBlack.vue';

  function startButtonClick() {
    // Liste des noms de fichiers d'images dans le dossier ./img
    const imageFiles = ['aoePoster.jpg', 'apexPoster.jpg', 'battleritePoster.jpg', 'counterstrikePoster.jpg', 
                        'geoguessrPoster.jpg', 'golfwithyourfriendsPoster.jpg', 'leagueoflegendPoster.jpg', 
                        'minecraftPoster.jpg', 'pinballPoster.jpg', 'portalPoster.jpg', 'quakechampionPoster.jpg', 
                        'rocketleaguePoster.jpg', 'trackmaniaPoster.png'];

    // Sélection aléatoire d'un fichier d'image
    const randomImageFile = imageFiles[Math.floor(Math.random() * imageFiles.length)];

    // Mise à jour de la source de l'image
    document.getElementById('randomImage').src = './img/posterJeux/' + randomImageFile;
  }
</script>

<style scoped>
.newSession-content {
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
.content {
  overflow: hidden;
  display: flex;
  align-items: center;
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
.blog-section {
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
.pane-right {
  width: 1097px;
  height: 280px;
  align-items: flex-end;
  justify-content: flex-end;
  padding: var(--padding-21xl);
  position: relative;
  gap: var(--gap-31xl);
}
</style>