<script setup lang="ts">
import { ref } from 'vue';

const rightDrawerOpen = ref(false)

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>

<template>
  <q-layout view="hhr lpR ffr">


    <q-header class="bg-transparent header-sizing full-width flex text-primary items-center">
      <q-toolbar class="bg-transparent">
        <q-toolbar-title class="fontsize-toolbartitle text-primary">
          <div id="branding" @click="$router.push({name: 'home'})" style="cursor: pointer;">
            <img src="icons/logo-white.svg" id="logo" />
            <div>misseuph</div>
          </div>

        </q-toolbar-title>



        <!-- Menu items on larger than mobile -->
        <q-tabs no-caps class="gt-sm q-mr-lg">
          <q-tab @click="$router.push({name: 'about'})" class="fontsize16" name="about" label="über mich" />
          <q-tab @click="$router.push({name: 'contact'})" class="fontsize16" name="contact" label="kontakt" />
          <q-tab @click="$router.push({name: 'medien'})" class="fontsize16" name="medien" label="medien" />
        </q-tabs>

        <q-btn class="lt-md" dense flat icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right"  behavior="mobile" class="lt-md bg-secondary text-primary" :width="$q.screen.width/2" >

      <q-item>
        <q-item-section>
          <q-item-label class="flex absolute-right q-pr-sm">
            <q-btn class="lt-md" dense flat padding="1.2rem 0.8rem" icon="close" @click="toggleRightDrawer" />
          </q-item-label>
        </q-item-section>
      </q-item>

          <q-list separator padding class="menu-list menu-fontsize">
            <q-item clickable @click="$router.push({ name: 'about'})" v-ripple class="q-py-xl full-width">
              <q-item-section avatar class="hide-on-small">
                <q-icon name="person" />
              </q-item-section>

              <q-item-section @click="$router.push({ name: 'about'})" class="flex-center">
                <div>Über mich</div>
              </q-item-section>
            </q-item>

            <q-item active clickable @click="$router.push({ name: 'bestellen'})" v-ripple class="q-py-xl full-width">
              <q-item-section avatar class="hide-on-small">
                <q-icon name="shop" />
              </q-item-section>

              <q-item-section class="flex-center">
                Bestellen
              </q-item-section>
            </q-item>

            <q-item clickable @click="$router.push({ name: 'medien'})" v-ripple class="q-py-xl full-width">
              <q-item-section avatar class="hide-on-small">
                <q-icon name="image" />
              </q-item-section>

              <q-item-section class="flex-center">
                Medien
              </q-item-section>
            </q-item>

            <q-item clickable @click="$router.push({ name: 'contact'})" v-ripple class="q-py-xl full-width">
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

    <q-footer id="footer-toolbar" bordered class="bg-black full-width">
      <q-toolbar>
        <q-toolbar-title class="row justify-center text-body2 text-weight-thin">

          <div>
            <q-btn color="primary" flat label="Impressum" @click="$router.push({name: 'impressum'})" />
            <q-btn color="primary" flat label="Datenschutz" @click="$router.push({name: 'datenschutz'})" /></div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<style scoped lang="scss">

#branding{
  display: flex;
  align-items: center;
}

#logo{
  height: 56px;
}

.header-sizing{
  @media(min-width: 601px) {
    height: 65px;
  }
  @media (min-width: 768px) {
    height: 80px;
  }

  @media (min-width: 1400px){
    height: 100px;
  }
}

.menu-fontsize{
  font-size: 14px;
  @media (min-width: 380px) {
    font-size: 16px;
  }
}


.fontsize-toolbartitle{
  @media(max-width: 767px){
    font-size: 14px;
  }
}

.fontsize16{
  font-size: 16px;
}

#footer-toolbar{
  border-top: 0.1px solid $secondary;
  opacity: 0.8;
}

</style>
