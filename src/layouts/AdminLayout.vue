
<template>
  <q-layout view="hHh LpR fFf" class="bg-amber">

    <q-header bordered class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-tab v-for="childRoute in $route.matched[0].children" :key="childRoute.name" @click="changePage(childRoute.name)" :active="$route.name === childRoute.name">
        {{ childRoute.name }}
        </q-tab>
      </q-tabs>

</q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouteRecordName, useRouter } from 'vue-router';

const leftDrawerOpen = ref(false);
const router = useRouter();

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function changePage(pageName: RouteRecordName | undefined) {
  router.push({ name: pageName });
}
</script>

<style lang="scss">
</style>
