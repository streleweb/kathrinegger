<script setup lang="ts">
import { ref } from 'vue';


const rightDrawerOpen = ref(false)

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>

<template>
  <q-layout view="hhr lpR ffr">

    <q-header class="bg-transparent header-sizing full-width flex text-primary">
      <q-toolbar>
        <q-toolbar-title class="fontsize-toolbartitle text-primary">
          <q-avatar>
            <q-img src="icons/logo.png" class="logosize"/>
          </q-avatar>
          kathrinegger
        </q-toolbar-title>

        <q-btn class="lt-sm" dense flat icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right"  behavior="mobile" class="lt-sm bg-secondary" :width="$q.screen.width/2">

      <q-item>
        <q-item-section>
          <q-item-label class="flex absolute-right q-pr-sm">
            <q-btn class="lt-sm" dense flat padding="1.2rem 0.8rem" icon="close" @click="toggleRightDrawer" />
          </q-item-label>
        </q-item-section>
      </q-item>

          <q-list separator padding class="menu-list menu-fontsize">
            <q-item clickable v-ripple class="q-py-xl full-width">
              <q-item-section avatar class="hide-on-small">
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section class="flex-center">
                <div>About Me</div>
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple class="q-py-xl full-width">
              <q-item-section avatar class="hide-on-small">
                <q-icon name="star" />
              </q-item-section>

              <q-item-section class="flex-center">
                Shop
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="q-py-xl full-width">
              <q-item-section avatar class="hide-on-small">
                <q-icon name="send" />
              </q-item-section>

              <q-item-section class="flex-center">
                Mein Blog
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="q-py-xl full-width">
              <q-item-section avatar class="hide-on-small">
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section class="flex-center">
                Kontakt
              </q-item-section>
            </q-item>
          </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white full-width">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<style scoped lang="scss">



.header-sizing{
  @media(min-width: 601px) {
    height: 53px;
  }
  @media (min-width: 768px) {
    height: 8.7vh;
  }

  @media (min-width: 1400px){
    height: 11.2vh;
  }
}

.menu-fontsize{
  font-size: 14px;
  @media (min-width: 380px) {
    font-size: 16px;
  }
}

.hide-on-small{
  @media(max-width: 320px){
    display: none;
  }
}

.fontsize-toolbartitle{
  @media(max-width: 767px){
    font-size: 14px;
  }
}

.q-page-container{
  @media (min-width:601px){
    padding-top: 50px;
    padding-bottom: 51px;
  }
}
</style>
