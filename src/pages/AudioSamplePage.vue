<template>
  <q-page class="q-pa-md">
    <q-card bordered class="q-ma-md">
      <q-card-section>
        <div class="text-h6">Hörprobe Miss Euph 1</div>
      </q-card-section>
      <q-card-section>
        <q-btn-group spread>
          <q-btn round color="primary" icon="play_arrow" @click="playAudio1"></q-btn>
          <q-btn round color="primary" icon="pause" @click="pauseAudio1"></q-btn>
          <q-btn round color="primary" icon="stop" @click="stopAudio1"></q-btn>
        </q-btn-group>
      </q-card-section>
      <q-card-section>
        <q-slider v-model="volume1" label="Volume" @input="setVolume1"></q-slider>
      </q-card-section>
      <audio ref="audio1" :src="audioSource1"></audio>
    </q-card>

    <q-card bordered class="q-ma-md">
      <q-card-section>
        <div class="text-h6">Hörprobe Miss Euph 2</div>
      </q-card-section>
      <q-card-section>
        <q-btn-group spread>
          <q-btn round color="secondary" icon="play_arrow" @click="playAudio2"></q-btn>
          <q-btn round color="secondary" icon="pause" @click="pauseAudio2"></q-btn>
          <q-btn round color="secondary" icon="stop" @click="stopAudio2"></q-btn>
        </q-btn-group>
      </q-card-section>
      <q-card-section>
        <q-slider v-model="volume2" label="Volume" @input="setVolume2"></q-slider>
      </q-card-section>
      <audio ref="audio2" :src="audioSource2"></audio>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AudioSamplePage',
  setup() {
    const audioSource1 = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    const audioSource2 = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';

    const audio1 = ref(null);
    const audio2 = ref(null);

    const volume1 = ref(50);
    const volume2 = ref(50);

    const playAudio1 = () => {
      audio1.value.play();
    };

    const pauseAudio1 = () => {
      audio1.value.pause();
    };

    const stopAudio1 = () => {
      audio1.value.pause();
      audio1.value.currentTime = 0;
    };

    const setVolume1 = () => {
      audio1.value.volume = volume1.value / 100;
    };

    const playAudio2 = () => {
      audio2.value.play();
    };

    const pauseAudio2 = () => {
      audio2.value.pause();
    };

    const stopAudio2 = () => {
      audio2.value.pause();
      audio2.value.currentTime = 0;
    };

    const setVolume2 = () => {
      audio2.value.volume = volume2.value / 100;
    };

    return {
      audioSource1,
      audioSource2,
      audio1,
      audio2,
      volume1,
      volume2,
      playAudio1,
      pauseAudio1,
      stopAudio1,
      setVolume1,
      playAudio2,
      pauseAudio2,
      stopAudio2,
      setVolume2
    };
  }
});
</script>

<style scoped>
.q-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.q-card {
  max-width: 400px;
  width: 100%;
}

.q-btn-group {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.q-slider {
  margin-top: 20px;
}
</style>
