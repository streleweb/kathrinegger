<template>
  <q-page class="musikvermittlung-page">
    <div class="content-container text-primary">

      <!-- Title -->
      <h1 class="text-center q-my-lg text-primary">
        Musikvermittlung
      </h1>

      <!-- Carousel -->
      <section id="carousel" class="q-mb-lg">
        <q-carousel
          v-model="currentSlide"
          animated
          transition-next="slide-left"
          transition-prev="slide-right"
          control-color="primary"
          arrows
          infinite
          swipeable
          navigation-icon="lens"
          class="bg-transparent cursor-pointer carousel-fixed-height"
        >
          <q-carousel-slide
            v-for="(slide, index) in slides"
            :key="index"
            :name="index"
            class="flex flex-center"
          >
            <img :src="slide.url" alt="Projektbild" class="carousel-img" />
          </q-carousel-slide>
        </q-carousel>
      </section>

      <!-- Text Section 1 -->
      <section class="q-mb-md">
        <h6 class="responsive-text q-mb-sm">
          <strong>Was ist eigentlich Musikvermittlung?</strong>
        </h6>
        <p class="responsive-text">
          Musikvermittlung ist eine künstlerisch-methodische Praxis, die einen kreativen Zugang zur Musik schaffen soll. Verschiedene Stilrichtungen, Instrumente, Komponisten, Orchester und Ensembles werden durch Workshops und interaktive Konzerte spielerisch und kreativ vermittelt, um die Neugier des Publikums zu wecken.
        </p>
        <p class="responsive-text">
          Das Tolle an Musikvermittlung ist, dass der Fantasie keine Grenzen gesetzt sind – und dass die Menschen am Ende mit einem Lächeln im Gesicht nach Hause gehen.
        </p>
      </section>

      <!-- Ausbildung -->
      <section class="q-mb-md">
        <p class="responsive-text">
          Neben meinem Masterstudium im Fach Euphonium habe ich eine Weiterbildung zur Musikvermittlerin in Luzern absolviert. Im Rahmen dieser Ausbildung ist mein erstes Kinderbuch
          <em>„Die kleine Miss Euph“</em> entstanden. Das Buch soll Kinder mit dem noch eher unbekannten Instrument, dem Euphonium, vertraut machen.
        </p>
      </section>

      <!-- Klangträume -->
      <section class="q-mb-lg">
        <p class="responsive-text">
          In den letzten Jahren hatte ich die Gelegenheit, weitere Projekte – teils in Zusammenarbeit, teils allein – zu konzipieren: So habe ich 2021 das Theaterstück
          <strong>„Klang(T)räume“</strong> mit Musik und selbst verfassten Gedichten entwickelt und aufgeführt.
        </p>

        <!-- Responsive YouTube -->
        <div
          class="video-container q-my-lg"
          @touchstart.stop
          @touchmove.stop
          @touchend.stop
        >
          <iframe
            src="https://www.youtube.com/embed/Emo70U3ngvA?si=eyUQ4FeBesAdlaSA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <!-- Abenteuer Musikkapelle -->
      <section class="q-mb-md q-mt-xl">
        <p class="responsive-text">
          2022 entstand das Projekt <strong>„Abenteuer Musikkapelle“</strong> in Zusammenarbeit mit Veronika Prünster und der Bürgerkapelle Lana. Eröffnet wird das Projekt mit einem kurzen interaktiven Theaterstück, bei dem die Kinder alle Instrumente der Musikkapelle hören und sehen dürfen. In mehreren Workshops lernen sie die Instrumente ausführlich kennen und werden zu kleinen „Experten“. Abgerundet wird das Projekt durch ein interaktives Familienkonzert, bei dem die Kinder gemeinsam mit „Rita Dando“ den mysteriösen Fall der Bürgerkapelle Lana lösen.
        </p>
      </section>

      <!-- Shakespeare in Love -->
      <section class="q-mb-md">
        <p class="responsive-text">
          2024 konzipierten Evelyn Mair, Veronika Prünster und ich im Rahmen der Freilichtspiele Lana eine interaktive Theatereinführung zum Stück
          <strong>„Shakespeare in Love“</strong>, die wir auch selbst performten.
        </p>
      </section>

      <!-- Escape Room -->
      <section class="q-mb-lg">
        <p class="responsive-text">
          Und 2025 durfte ich für die Bürgerkapelle Untermais einen musikalischen Escape Room entwickeln. Die Schüler:innen müssen darin unbedingt die Musikkapelle von ihrem Fluch befreien – bevor es zu spät ist!
        </p>
      </section>

      <!-- Contact -->
      <section class="q-mt-xl text-center">
        <h5 class="q-mb-sm">Hast auch du Lust auf ein Projekt?</h5>
        <p class="responsive-text">
          Oder möchtest du deinen Verein oder deine Gruppe einmal auf eine andere, kreative Weise präsentieren?
          Dann kannst du mich gerne kontaktieren.
        </p>
      </section>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const currentSlide = ref(0)

const slides = [
  { url: '/images/musikvermittlung/Abenteuermusikkapelle.webp' },
  { url: '/images/musikvermittlung/Buchpräsentation.webp' },
  { url: '/images/musikvermittlung/Klangträume.webp' },
  { url: '/images/musikvermittlung/Shakespeare.webp' }
]
</script>

<style scoped lang="scss">
/* --- General Typography --- */
h1 {
  font-size: 2em;
  font-weight: 600;
}
@media (min-width: 768px) {
  h1 {
    font-size: 2.4em;
  }
}
@media (min-width: 1280px) {
  h1 {
    font-size: 3em;
  }
}

/* --- Page Container --- */
.musikvermittlung-page {
  padding-top: 4vh;
  padding-bottom: 4vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-container {
  width: 100%;
  max-width: 850px;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
}
@media (min-width: 768px) {
  .content-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
@media (min-width: 1280px) {
  .content-container {
    padding-left: 0;
    padding-right: 0;
  }
}

/* --- Carousel --- */
.carousel-fixed-height {
  height: 280px;
}
@media (min-width: 768px) {
  .carousel-fixed-height {
    height: 420px;
  }
}
@media (min-width: 1280px) {
  .carousel-fixed-height {
    height: 480px;
  }
}

.carousel-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* --- Arrows --- */
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
:deep(.q-carousel__arrow--left) {
  left: 8px !important;
}
:deep(.q-carousel__arrow--right) {
  right: 8px !important;
}

/* --- Text --- */
.responsive-text {
  font-size: 15px;
  line-height: 1.6;
  text-align: justify;
}
@media (min-width: 1024px) {
  .responsive-text {
    font-size: 17px;
  }
}

/* --- Video --- */
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
