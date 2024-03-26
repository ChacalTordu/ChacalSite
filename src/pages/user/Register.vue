<template>
    <div class="register-desktop">
      <ZoneNavbar />
        <div class="register-section">
            <div class="content">
                <div class="left-pane">
                    <div class="form">
                        <a class="already-an-have">Already have an account? Sign in</a>
                        <div class="form-content">
                            <div class="form-group">
                                <div class="label">E-mail</div>
                                <input class="input" type="email" />
                            </div>

                            <div class="form-group1">
                                <div class="label1">E-mail</div>
                                <input class="input" type="email" />
                            </div>

                            <div class="form-group2">
                                <div class="label">Password</div>
                                <input class="input" type="password" />
                            </div>

                            <div class="form-group2">
                                <div class="label">Confirm password</div>
                                <input class="input" type="password" />
                            </div>

                            <div class="button-primary">
                                <div class="register">Register</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-pane">
                    <div class="media"></div>
                </div>
            </div>
        </div>
        <ZoneFooter />
    </div>
</template>

<script setup>
  import ZoneNavbar from '@/components/zone/ZoneNavbar.vue';
  import ZoneFooter from '@/components/zone/ZoneFooter.vue';
</script>

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
  .already-an-have {
    text-decoration: none;
    position: relative;
    line-height: 140.63%;
    color: inherit;
  }
  .label {
    position: relative;
    line-height: 115%;
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
    height: 93px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: var(--padding-8xs) 0;
    gap: var(--gap-3xs);
  }
  .label1 {
    position: relative;
    line-height: 115.43%;
  }
  .form-group1,
  .form-group2 {
    width: 550px;
    height: 94px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-8xs) 0;
    box-sizing: border-box;
    gap: var(--gap-3xs);
  }
  .form-group2 {
    height: 93px;
    justify-content: flex-start;
  }
  .register {
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
    height: 551px;
    justify-content: flex-end;
    gap: 15px;
  }
  .form {
    width: 610px;
    height: 580px;
    justify-content: space-between;
    padding: 0 var(--padding-11xl);
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
  .register-section,
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
  .register-section {
    height: 700px;
  }
  .content {
    flex-direction: row;
    justify-content: flex-start;
    padding: var(--padding-3xs) 0;
    box-sizing: border-box;
  }
  .register-section {
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
  .footer,
  .register-desktop {
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
  .register-desktop {
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