<template>
  <q-page class="q-pa-md bg-page">
    <q-card bordered class="q-ma-md q-px-md q-py-lg q-card-shadow bg-card">
      <div class="row q-col-gutter-md q-pb-md">
        <div class="col-12 col-md-6">
          <div class="text-h4 q-mb-sm">Miss Euph</div>
          <div class="text-subtitle1 q-mb-md">
            Tauchen Sie ein in die faszinierende Welt von Miss Euph, einem packenden Hörbuch voller Spannung und Abenteuer.
          </div>
        </div>
        <div class="col-12 col-md-6 text-center">
          <q-img
            src="https://via.placeholder.com/300x400.png?text=Miss+Euph"
            alt="Miss Euph Hörbuch"
            class="q-mb-md"
            style="max-width: 300px; max-height: 400px;"
          />
          <audio controls class="q-mb-md">
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
            Ihr Browser unterstützt das Audioelement nicht.
          </audio>
          <q-btn color="primary" label="Jetzt bestellen" @click="orderNow"></q-btn>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { QPage, QCard, QImg, QBtn } from 'quasar';

export default defineComponent({
  name: 'BestellSeite',
  components: {
    QPage,
    QCard,
    QImg,
    QBtn
  },
  methods: {
    orderNow() {
      alert('Ihre Bestellung wurde aufgenommen! Vielen Dank.');
    }
  }
});
</script>

<style scoped>

.bg-card{
  background-rgb(215, 215, 206): beige;
}
.bg-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.q-card-shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.text-h4 {
  font-weight: bold;
}

.text-subtitle1 {
  font-size: 1.25rem;
  color: #666;
}

audio {
  width: 100%;
  max-width: 300px;
}
</style>
