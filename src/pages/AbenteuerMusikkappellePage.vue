<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 col-md-10 col-lg-8 text-center">

        <!-- Title -->
        <h1 class="text-primary q-my-lg">
          Abenteuer Musikkapelle
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
                alt="Abenteuer Musikkapelle"
                class="carousel-img"
              />
            </q-carousel-slide>
          </q-carousel>
        </section>

        <!-- Text -->
        <div id="text-mobile" class="text-primary">
          <h6 class="responsive-text q-mb-sm">
            Gemeinsam mit Veronika Prünster und in Zusammenarbeit mit der Bürgerkapelle Lana
            haben wir das Projekt <b>Abenteuer Musikkapelle</b> ins Leben gerufen.
            Eröffnet wird das Projekt mit einem kurzen, interaktiven Theaterstück,
            bei dem die Kinder alle Instrumente der Musikkapelle hören und sehen dürfen.
            In mehreren Workshops lernen die Kinder alle Instrumente ausführlich kennen
            und werden zu „Experten“. Das Projekt wird abgerundet durch ein interaktives
            Familienkonzert, bei welchem die Kinder gemeinsam mit „Rita Dando“
            den mysteriösen Fall der Bürgerkapelle Lana lösen.
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
  { name: 'one', url: '/images/abenteuermusikkappelle/abenteuer3.webp' },
  { name: 'two', url: '/images/abenteuermusikkappelle/abenteuer2.webp' },
  { name: 'three', url: '/images/abenteuermusikkappelle/abenteuer1.webp' },
  { name: 'four', url: '/images/abenteuermusikkappelle/abenteuer7.webp' },
  { name: 'five', url: '/images/abenteuermusikkappelle/abenteuer8.webp' },
  { name: 'six', url: '/images/abenteuermusikkappelle/abenteuer9.webp' },
  { name: 'seven', url: '/images/abenteuermusikkappelle/abenteuer10.webp' },
  { name: 'eight', url: '/images/abenteuermusikkappelle/abenteuer4.webp' },
  { name: 'nine', url: '/images/abenteuermusikkappelle/abenteuer5.webp' },
  { name: 'ten', url: '/images/abenteuermusikkappelle/abenteuer6.webp' },
]
</script>

<style lang="scss" scoped>
/* --- PAGE LAYOUT (same as Klang(T)räume) --- */
.q-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding-top: 2vh;
  padding-bottom: 2vh;
}

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
    height: 480px; /* desktop - fits viewport */
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
</style>
