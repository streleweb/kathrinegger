<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 col-md-10 col-lg-8">

        <h1 class="text-primary q-my-lg text-center">
          Miss Euph - Audio Collection
        </h1>

        <div v-for="(audio, index) in audios" :key="index" class="audio-item row q-my-lg items-center text-white">

          <!-- Thumbnail -->
          <div class="col-auto audio-thumb-container">
            <img :src="audio.img" alt="Audio thumbnail" class="audio-thumb" />
          </div>

          <!-- Title + Audio -->
          <div class="col text-left audio-info">
            <h6 class="audio-title">{{ audio.title }}</h6>
            <audio :src="audio.src" controls class="audio-player"></audio>

            <!-- Download button for mobile -->
            <div class="mobile-download q-mt-sm padded-download">
              <q-btn
                color="blue"
                label="Download"
                :href="audio.src"
                target="_blank"
                download
                dense
              />
            </div>
          </div>

          <!-- Download button for desktop -->
          <div class="col-auto desktop-download">
            <q-btn
              color="blue"
              label="Download"
              :href="audio.src"
              target="_blank"
              download
            />
          </div>

        </div>

      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const audios = [
  { title: 'Miss Euph - Wüste', src: '/audio/dummy1.mp3', img: '/images/misseuph/Wüste.webp' },
  { title: 'Miss Euph - Berg', src: '/audio/dummy2.mp3', img: '/images/misseuph/berg.webp' },
  { title: 'Miss Euph - Meer', src: '/audio/dummy3.mp3', img: '/images/misseuph/unterwasser.webp' },
  { title: 'Miss Euph - Stadt', src: '/audio/dummy4.mp3', img: '/images/misseuph/Stadt.webp' },
  { title: 'Miss Euph - Wald', src: '/audio/dummy5.mp3', img: '/images/misseuph/misseuph-im-wald.webp' },
  { title: 'Miss Euph - Frühstück', src: '/audio/dummy6.mp3', img: '/images/misseuph/frühstück.webp' },
  { title: 'Miss Euph - Haus', src: '/audio/dummy7.mp3', img: '/images/misseuph/haus.webp' },
  { title: 'Miss Euph - Baliadu', src: '/audio/dummy8.mp3', img: '/images/misseuph/baliadu.webp' },
  { title: 'Miss Euph - Kirschbaum', src: '/audio/dummy9.mp3', img: '/images/misseuph/Misseuph-unter-Kirschbaum.webp' },
  { title: 'Miss Euph - Titelbild', src: '/audio/dummy10.mp3', img: '/images/misseuph/Miss-Euph-Titelbild.webp' },
  { title: 'Miss Euph - Extra 1', src: '/audio/dummy11.mp3', img: '/images/misseuph/Wüste.webp' },
  { title: 'Miss Euph - Extra 2', src: '/audio/dummy12.mp3', img: '/images/misseuph/berg.webp' },
]
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2em;
  margin-bottom: 1rem;
}
@media (min-width: 1280px) {
  h1 {
    font-size: 3em;
    margin-bottom: 2rem;
  }
}

/* AUDIO ITEM */
.audio-item {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
}

/* THUMBNAIL */
.audio-thumb-container {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}
.audio-thumb {
  width: 80px;
  height: 80px; /* make square */
  object-fit: cover;
  border-radius: 12px;
}
@media (min-width: 768px) {
  .audio-thumb {
    width: 100px;
    height: 100px; /* square desktop */
  }
}

/* TITLE + AUDIO */
.audio-info {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.audio-title {
  font-size: 16px;
  margin-bottom: 0.5rem;
}
.audio-player {
  width: 100%;
  max-width: 100%;
}

/* DOWNLOAD BUTTONS */
.desktop-download {
  display: none;
}

.mobile-download {
  display: block;
}

.padded-download {
  padding-top: 0.5rem; /* extra space on mobile */
}

@media (min-width: 768px) {
  .desktop-download {
    display: block;
  }
  .mobile-download {
    display: none;
  }
}

/* SPACING BETWEEN ITEMS */
.audio-item + .audio-item {
  margin-top: 1rem;
}
</style>
