<template>
  <q-page class="q-pa-none">
    <q-carousel
      v-model="currentSlide"
      class="carousel-fullscreen"
      animated
      infinite
      swipeable
      arrows
    >
      <!-- Image Slides -->
      <q-carousel-slide
        v-for="(image, index) in images"
        :key="index"
        :name="index"
      >
        <div
          class="carousel-slide-content"
          :style="{ backgroundImage: `url(${image})` }"
        ></div>
      </q-carousel-slide>

      <!-- YouTube Video Slide -->
      <q-carousel-slide :name="images.length">
        <div class="video-slide">
          <iframe
            src="https://www.youtube.com/embed/8l5bfHaXPBM?si=pt2qFxHT5OGhGoyw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const images = [
  'images/kathrineuphonium1.webp',
  'images/medien/Buchpräsentation1.webp',
  'images/medien/Buchpräsentation2.webp',
  'images/kathrineuphonium2.webp',
  'images/kathrineuphonium3.webp',
]

const currentSlide = ref(0)
</script>

<style scoped>
.carousel-fullscreen {
  height: 100vh;
  background-color: #000;
}

.carousel-slide-content {
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.video-slide {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-slide iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Carousel arrows always on top */
:deep(.q-carousel__arrow) {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4) !important;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  transition: background 0.2s ease;
  z-index: 1000 !important;
  pointer-events: auto !important; /* ensures arrows are clickable above iframe */
}

:deep(.q-carousel__arrow:hover) {
  background: rgba(0, 0, 0, 0.6) !important;
}

:deep(.q-carousel__arrow--left) { left: 16px !important; }
:deep(.q-carousel__arrow--right) { right: 16px !important; }
</style>
