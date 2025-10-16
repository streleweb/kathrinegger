<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 col-md-10 col-lg-8 text-center">

        <h1 class="text-primary q-my-lg">
          Die kleine Miss Euph - Hörbuch mit Musik
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
            Die Kleine Miss Euph ist ein neugieriges Mädchen, welche stets ihr Lieblingsinstrument, das Euphonium bei sich hat. Eines Morgens beginnt sie mit all den Geräuschen und Tieren, die sie umgeben, zu singen. Zu ihrer Enttäuschung glaubt sie nicht gut genug singen zu können und kommt zum Entschluss, sie müsse die „wahre Stimme“ finden, um wirklich gut singen zu können. So beschließt sie, von zu Hause wegzugehen und sie zu suchen. Sie entdeckt dabei wunderschöne neue Orte, vom Berg Maronus, der weiten Wüste, wo sie Herrn Baliadu, das Dromedar, trifft, die Tiefen des Meeres mit seinem Unterwasserorchester und schließlich eine hektische Hafenstadt, wo ihr alles zu viel wird und sie vom Heimweh gepackt wird. Doch nirgends kann sie die „wahre Stimme“ finden. Am Ende spricht die „wahre Stimme“ selbst zu ihr und gibt ihr zu verstehen, dass sie schon lange Zeit in ihr ist und sie nicht überall nach ihr suchen müsse, sondern zurück nach Hause kehren soll, denn da habe sie bereits alles, was sie braucht. Sie soll die „wahre Stimme“ lediglich rauslassen, indem sie voller Freude in den schönsten Tönen singt und alle daran teilhaben lässt ...
          </h6>
          <h6 class="text-accent q-mt-xl">
            Bei Interesse biete ich Ihnen gerne eine Buchpräsentation mit Livemusik an!
          </h6>
        </div>

        <!-- Responsive YouTube -->
        <div class="video-container q-my-lg">
          <iframe
            src="https://www.youtube.com/embed/VOR-klbhYDY?si=UwdcZ9UGE5G3NjO6"
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
  { name: 'one', url: '/images/misseuph/Miss-Euph-Titelbild.webp' },
  { name: 'two', url: '/images/misseuph/baliadu.webp' },
  { name: 'three', url: '/images/misseuph/berg.webp' },
  { name: 'four', url: '/images/misseuph/frühstück.webp' },
  { name: 'five', url: '/images/misseuph/haus.webp' },
  { name: 'six', url: '/images/misseuph/Miss-Euph-Buch2.webp' },
  { name: 'seven', url: '/images/misseuph/misseuph-im-wald.webp' },
  { name: 'eight', url: '/images/misseuph/Misseuph-unter-Kirschbaum.webp' },
  { name: 'nine', url: '/images/misseuph/Stadt.webp' },
  { name: 'ten', url: '/images/misseuph/tschüss.webp' },
  { name: 'eleven', url: '/images/misseuph/unterwasser.webp' },
  { name: 'twelve', url: '/images/misseuph/Wüste.webp' },
  { name: 'thirteen', url: '/images/misseuph/misseuph-im-wald.webp' },
  { name: 'fourteen', url: '/images/misseuph/buchpräsentation1.webp' },
  { name: 'fifteen', url: '/images/misseuph/buchpräsentation2.webp' },
  { name: 'sixteen', url: '/images/misseuph/buchpräsentation3.webp' },
  { name: 'seventeen', url: '/images/misseuph/buchpräsentation4.webp' },
  { name: 'eighteen', url: '/images/misseuph/buchpräsentation5.webp' },
  { name: 'nineteen', url: '/images/misseuph/buchpräsentation6.webp' },
  { name: 'twenty', url: '/images/misseuph/buchpräsentation7.webp' },
]
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2em;
  margin-bottom: 0.25rem; /* very tight on mobile */
}

/* Tablet */
@media (min-width: 768px) {
  h1 {
    font-size: 2.4em; /* slightly larger */
    margin-bottom: 1.5rem; /* moderate space on tablet */
  }
}

/* Desktop */
@media (min-width: 1280px) {
  h1 {
    font-size: 3em; /* noticeably larger on desktop */
    margin-bottom: 3.5rem; /* generous space between title and carousel */
  }
}

div.q-panel.scroll {
  overflow: hidden;
}

/* ----- CAROUSEL FIXED HEIGHT ----- */
.carousel-fixed-height {
  height: 300px; /* mobile */
}
@media (min-width: 768px) {
  .carousel-fixed-height {
    height: 450px; /* tablet */
  }
}
@media (min-width: 1280px) {
  .carousel-fixed-height {
    height: 600px; /* desktop */
  }
}

/* Image inside carousel */
.carousel-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* ----- CAROUSEL ARROWS CENTERED WITH HIGHLIGHT ----- */
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

/* ----- TEXT BELOW CAROUSEL ----- */
#text-mobile { margin-top: 0.25rem; }
@media (min-width: 768px) { #text-mobile { margin-top: 1rem; } }

/* ----- RESPONSIVE TEXT SIZE ----- */
.responsive-text { font-size: 14px; line-height: 1.45; }
@media (min-width: 1024px) { .responsive-text { font-size: 20px; line-height: 1.7; } }

/* ----- RESPONSIVE VIDEO ----- */
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
  border-radius: 8px;
  margin-top: 0.5rem; /* very tight on mobile */
}
@media (min-width: 768px) { .video-container { margin-top: 1.5rem; } }
.video-container iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
}
</style>
