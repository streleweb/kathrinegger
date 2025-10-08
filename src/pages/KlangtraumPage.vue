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

      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentSlide = ref('one')
const slides = [
  { name: 'one', url: '/public/images/klangtraeume/klangtraeume-quer.webp' },
  { name: 'three', url: '/public/images/klangtraeume/klangtraeume-stage.webp' },
  { name: 'four', url: '/public/images/klangtraeume/klangtraeume.webp' },
]
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2em;
  margin-bottom: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  h1 {
    font-size: 2.4em;
    margin-bottom: 1.5rem;
  }
}

/* Desktop */
@media (min-width: 1280px) {
  h1 {
    font-size: 3em;
    margin-bottom: 2rem; /* slightly reduced to fit viewport */
  }
}

/* --- LAYOUT ADJUSTMENT FOR DESKTOP (FIT INTO VIEWPORT) --- */
.q-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh; /* occupy full screen */
  padding-top: 2vh;
  padding-bottom: 2vh;
}

/* --- CAROUSEL FIXED HEIGHT (SCALED TO FIT SCREEN) --- */
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
    height: 480px; /* slightly smaller so it fits the screen */
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
    font-size: 18px; /* slightly smaller so everything fits */
    line-height: 1.6;
  }
}


</style>
