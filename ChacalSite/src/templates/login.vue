<template>
    <div class="login-desktop">
      <script>
        fetch('/components/navbar.html')
            .then(response => response.text())
            .then(html => {
                document.body.insertAdjacentHTML('afterbegin', html);
            });
      </script>
      <div class="login-section">
        <div class="content">
          <div class="left-pane">
            <div class="form">
              <a class="tu-nas-pas-container"
                >Tu n’as pas de compte?
                <span class="senregistrer">S’enregistrer</span>
              </a>
              <div class="form-content">
                <div class="form-group">
                  <div class="label">E-mail</div>
                  <input class="input" name="E-mail" type="email" />
                </div>
                <div class="form-group">
                  <div class="label">Password</div>
                  <input class="input" name="Password" type="password" />
                </div>
                <div class="form-group2">
                  <input class="checkbox" read-only="{true}" type="checkbox" />

                  <div class="label2">Se souvenir de moi</div>
                </div>
                <div class="button-primary">
                  <div class="se-connecter">Se connecter</div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-pane">
            <div class="media"></div>
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
.chacalsite {
    position: relative;
    text-transform: uppercase;
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
  .senregistrer {
    text-decoration: underline;
  }
  .tu-nas-pas-container {
    text-decoration: none;
    color: inherit;
  }
  .label,
  .tu-nas-pas-container {
    position: relative;
    line-height: 140.63%;
  }
  .form-group,
  .input {
    width: 550px;
    box-sizing: border-box;
  }
  .input {
    border: 1px solid var(--color-black);
    outline: 0;
    background-color: var(--color-white);
    position: relative;
    border-radius: var(--br-8xs);
    height: 50px;
  }
  .form-group {
    height: 109px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) 0;
    gap: var(--gap-3xs);
  }
  .checkbox {
    margin: 0;
    position: relative;
    border-radius: var(--br-8xs);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 20px;
    height: 20px;
  }
  .label2 {
    position: relative;
    line-height: 119.53%;
  }
  .form-group2 {
    width: 550px;
    height: 44px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-3xs) 0;
    box-sizing: border-box;
    gap: var(--gap-3xs);
  }
  .se-connecter {
    flex: 1;
    position: relative;
  }
  .button-primary,
  .form,
  .form-content {
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
  }
  .button-primary {
    border-radius: var(--br-8xs);
    background-color: var(--color-black);
    width: 200px;
    height: 48px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 13px 24px;
    box-sizing: border-box;
    text-align: center;
    font-size: 18px;
    color: var(--color-white);
  }
  .form,
  .form-content {
    flex-direction: column;
    align-items: flex-start;
  }
  .form-content {
    width: 550px;
    height: 411px;
    justify-content: flex-end;
    gap: var(--gap-3xs);
  }
  .form {
    width: 610px;
    height: 500px;
    justify-content: space-between;
    padding: var(--padding-11xl);
    box-sizing: border-box;
  }
  .left-pane,
  .media {
    box-sizing: border-box;
    width: 630px;
    height: 680px;
  }
  .left-pane {
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 50px var(--padding-3xs);
  }
  .media {
    position: relative;
    border-radius: 8px;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
  }
  .content,
  .login-section,
  .right-pane {
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
  .right-pane {
    width: 630px;
    height: 680px;
    flex-direction: column;
    justify-content: flex-start;
  }
  .content,
  .login-section {
    height: 700px;
  }
  .content {
    flex-direction: row;
    justify-content: flex-start;
    padding: var(--padding-3xs) 0;
    box-sizing: border-box;
  }
  .login-section {
    align-self: stretch;
    background-color: var(--color-whitesmoke);
    flex-direction: column;
    justify-content: center;
    font-size: var(--font-size-xl);
  }
  .logo {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-5xl);
    text-transform: uppercase;
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
  .footer,
  .login-desktop {
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
  .login-desktop {
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