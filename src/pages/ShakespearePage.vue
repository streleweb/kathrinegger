<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 col-md-10 col-lg-8 text-center">

        <!-- Title -->
        <h1 class="text-primary q-my-lg">
          Shakespeare In Love
        </h1>

        <!-- Carousel -->
        <section id="carousel">
          <q-carousel
            v-model="currentSlide"
            animated
            transition-next="slide-right"
            transition-prev="slide-left"
            control-color="primary"
            arrows
            infinite
            swipeable
            prev-icon="img:icons/left.png"
            next-icon="img:icons/right.png"
            class="bg-transparent cursor-pointer carousel-fixed-height"
          >
            <q-carousel-slide
              v-for="slide in slides"
              :key="slide.name"
              :name="slide.name"
              class="flex flex-center"
            >
              <img
                :src="slide.url"
                alt="Shakespeare In Love"
                class="carousel-img"
              />
            </q-carousel-slide>
          </q-carousel>
        </section>

        <!-- Text -->
        <div id="text-mobile" class="text-primary">
          <h6 class="responsive-text q-mb-sm">
            Zusammen mit Evelyn Mair und Veronika Prünster haben wir eine interaktive Theatereinführung
            für die Freilichtspiele 2024 „<b>Shakespeare in Love</b>“ erarbeitet und inszeniert.
            Lust auf Theater? Du weißt aber noch nicht, auf was du dich genau einlässt?
            Durch unsere interaktive Theatereinführung bekommt das Publikum einen kleinen Vorgeschmack
            in die Zeit von Shakespeare und sein Theater. Von nur rumsitzen und berieseln lassen ist
            keine Rede – Mitmachen heißt die Devise!
          </h6>
        </div>

        <!-- YouTube -->
        <!-- <div class="video-container q-my-lg">
          <iframe
            src="https://www.youtube.com/embed/VOR-klbhYDY?si=UwdcZ9UGE5G3NjO6"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div> -->

      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentSlide = ref('one')
const slides = [
  { name: 'one', url: '/images/shakespeare/shakespeare-titel.webp' },
  { name: 'two', url: '/images/shakespeare/shakespeare2.webp' },
  { name: 'three', url: '/images/shakespeare/shakespeare3.webp' },
  { name: 'four', url: '/images/shakespeare/shakespeare4.webp' },
  { name: 'five', url: '/images/shakespeare/shakespeare1.webp' },
]
</script>

<style lang="scss" scoped>
/* --- HEADING --- */
h1 {
  font-size: 2em;
  margin-bottom: 1rem;
}
@media (min-width: 768px) {
  h1 {
    font-size: 2.4em;
    margin-bottom: 1.5rem;
  }
}
@media (min-width: 1280px) {
  h1 {
    font-size: 3em;
    margin-bottom: 2rem;
  }
}

/* --- CAROUSEL HEIGHT --- */
.carousel-fixed-height {
  height: 300px; /* mobile */
}
@media (min-width: 768px) {
  .carousel-fixed-height {
    height: 420px; /* tablet */
  }
}
@media (min-width: 1280px) {
  .carousel-fixed-height {
    height: 480px; /* desktop */
  }
}

/* --- IMAGE INSIDE CAROUSEL --- */
.carousel-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* --- CAROUSEL ARROWS --- */
:deep(.q-carousel__arrow) {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4) !important;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  transition: background 0.2s ease;
  z-index: 10;
}
:deep(.q-carousel__arrow:hover) {
  background: rgba(0, 0, 0, 0.6) !important;
}
:deep(.q-carousel__arrow--left) { left: 6px !important; }
:deep(.q-carousel__arrow--right) { right: 6px !important; }

@media (min-width: 768px) {
  :deep(.q-carousel__arrow--left) { left: 16px !important; }
  :deep(.q-carousel__arrow--right) { right: 16px !important; }
}
@media (min-width: 1280px) {
  :deep(.q-carousel__arrow--left) { left: 24px !important; }
  :deep(.q-carousel__arrow--right) { right: 24px !important; }
}

/* --- TEXT BELOW CAROUSEL --- */
#text-mobile {
  margin-top: 0.25rem;
}
@media (min-width: 768px) {
  #text-mobile {
    margin-top: 1rem;
  }
}

/* --- RESPONSIVE TEXT --- */
.responsive-text {
  font-size: 14px;
  line-height: 1.5;
}
@media (min-width: 1024px) {
  .responsive-text {
    font-size: 18px;
    line-height: 1.6;
  }
}

/* --- RESPONSIVE VIDEO --- */
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
  border-radius: 8px;
  margin-top: 0.5rem;
}
@media (min-width: 768px) {
  .video-container {
    margin-top: 1.5rem;
  }
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
