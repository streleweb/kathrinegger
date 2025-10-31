<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 col-md-10 col-lg-8 text-center">

        <h1 class="text-primary q-my-lg">
          Klang(T)räume
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
            navigation-icon="lens"
            class="bg-transparent carousel-fixed-height"
          >
            <q-carousel-slide
              v-for="slide in slides"
              :key="slide.name"
              :name="slide.name"
              class="flex flex-center"
            >
              <img
                :src="slide.url"
                alt="Slide image"
                class="carousel-img"
              />
            </q-carousel-slide>
          </q-carousel>
        </section>

        <!-- Text -->
        <div id="text-mobile" class="text-primary">
          <h6 class="responsive-text q-mb-sm">
            Im Projekt „Klang(T)räume“ nehme ich mein Publikum mit auf eine musikalische Reise quer durch die Traumwelt. Mit selbst verfassten Gedichten runde ich das Ganze ab, und gemeinsam lachen, staunen, wundern und gruseln wir uns.
          </h6>
        </div>

        <!-- Responsive YouTube -->
        <div
          class="video-container q-my-lg"
          @touchstart.stop
          @touchmove.stop
          @touchend.stop
        >
          <iframe
            src="https://www.youtube.com/embed/SQ-Myq-qtJ0?si=6zlFk5c_uBmkh-R4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentSlide = ref('one')
const slides = [
  { name: 'one', url: '/images/klangtraeume/klangtraeume-quer.webp' },
  { name: 'three', url: '/images/klangtraeume/klangtraeume-stage.webp' },
  { name: 'four', url: '/images/klangtraeume/klangtraeume.webp' },
]
</script>

<style lang="scss" scoped>
/* --- TEXT, LAYOUT, CAROUSEL ETC. (same as before) --- */
.q-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding-top: 2vh;
  padding-bottom: 2vh;
}

.carousel-fixed-height {
  height: 300px;
}
@media (min-width: 768px) {
  .carousel-fixed-height { height: 420px; }
}
@media (min-width: 1280px) {
  .carousel-fixed-height { height: 480px; }
}

.carousel-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* --- VIDEO FIX --- */
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
  border-radius: 8px;
  margin-top: 0.5rem;
  touch-action: none; /* ✅ Prevents carousel from stealing touch */
}

@media (min-width: 768px) {
  .video-container { margin-top: 1.5rem; }
}

.video-container iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  pointer-events: all !important;
  z-index: 5;
}
</style>
