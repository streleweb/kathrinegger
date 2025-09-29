<template>
  <q-page padding>
    <div class="text-white"></div>

    <h1 class="text-primary q-mb-lg">Die kleine Misseuph - Hörbuch mit Musik</h1>

    <!-- MOBILE -->
    <div class="row  text-white q-mx-lg-lg flex flex-center" style="max-width: 80%; margin: auto;">
        <!-- <div id="picture-mobile">
          <img src="public/images/misseuph/euphimwald.webp" style="object-fit: contain; max-width: 100%;" alt="">
        </div> -->
        <div style="width:100%;">
          <section id="carousel">
      <div id="carousel-container">

        <!-- <h1 class="bg-secondary q-pt-lg q-pl-xl">
          <div style="opacity: 1;">
          Projekte
        </div></h1> -->
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
          class="bg-transparent cursor-pointer"
          style=""
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
              style="
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                width: auto;
                height: auto;
              "
            />
          </q-carousel-slide>
        </q-carousel>
      </div>
    </section>
        </div>

        <div id="text-mobile" class="text-primary">
          <h6 class="q-mb.lg">

            Die Kleine Miss Euph ist ein neugieriges Mädchen, welche stets ihr Lieblingsinstrument, das Euphonium bei sich hat. Eines Morgens beginnt sie mit all den Geräuschen und Tieren, die sie umgeben, zu singen. Zu ihrer Enttäuschung glaubt sie nicht gut genug singen zu können und kommt zum Entschluss sie müsse die „wahre Stimme“ finden, um wirklich gut singen zu können. So beschließt sie von zu Hause weg zu gehen und sie zu suchen. Sie entdeckt dabei wunderschöne neue Orte, vom Berg Maronus, der weiten Wüste, wo sie Herrn Baliadu, das Dromedar trifft, die Tiefen des Meeres mit seinem Unterwasserorchester und schließlich eine hektische Hafenstadt, wo ihr alles zu viel wird und sie vom Heimweh gepackt wird. Doch nirgends kann sie die „wahre Stimme“ finden.

Am Ende spricht die „wahre Stimme“ selbst zu ihr und gibt ihr zu verstehen, dass sie schon lange Zeit in Ihr ist und sie nicht überall nach ihr suchen müsse, sondern zurück nach Hause kehren soll, denn da habe sie bereits alles, was sie braucht. Sie soll die „wahre Stimme“ lediglich rauslassen indem sie voller Freude in den schönsten Tönen singt und alle daran teilhaben lässt...
          </h6>
          <h6 class="text-accent">Bei Interesse biete ich Ihnen gerne eine Buchpräsentation mit Livemusik an!</h6>
        </div>
        <div id="youtube-lg" class="q-mt-xl flex flex-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VOR-klbhYDY?si=UwdcZ9UGE5G3NjO6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
      </div>





  </q-page>
</template>

<script setup lang="ts">
  import { ref} from 'vue';


  const currentSlide = ref('one');
  const slides = [
  {
    name: 'one',
    title: 'Miss Euph',
    topic: 'misseuph',
    description: 'Mein erstes Hörbuch ist jetzt erhältlich! Begib dich auf die Reise mit Miss Euph!',
    url: '/public/images/misseuph/misseuph-im-wald.webp'
  },
  {
    name: 'two',
    title: 'Miss Euph',
    topic: 'misseuph',
    description: 'Mein erstes Hörbuch ist jetzt erhältlich! Begib dich auf die Reise mit Miss Euph!',
    url: '/public/images/misseuph/baliadu.webp'
  },
  {
    name: 'three',
    title: 'Miss Euph',
    topic: 'misseuph',
    description: 'Mein erstes Hörbuch ist jetzt erhältlich! Begib dich auf die Reise mit Miss Euph!',
    url: '/public/images/misseuph/berg.webp'
  },
  {
    name: 'four',
    title: 'Miss Euph',
    topic: 'misseuph',
    description: 'Mein erstes Hörbuch ist jetzt erhältlich! Begib dich auf die Reise mit Miss Euph!',
    url: '/public/images/misseuph/frühstück.webp'
  },
  {
    name: 'five',
    title: 'Miss Euph',
    topic: 'misseuph',
    description: 'Mein erstes Hörbuch ist jetzt erhältlich! Begib dich auf die Reise mit Miss Euph!',
    url: '/public/images/misseuph/haus.webp'
  },
  {
    name: 'six',
    title: 'Miss Euph',
    topic: 'misseuph',
    description: 'Mein erstes Hörbuch ist jetzt erhältlich! Begib dich auf die Reise mit Miss Euph!',
    url: '/public/images/misseuph/Miss-Euph-Buch2.webp'
  },
  {
    name: 'seven',
    title: 'Miss Euph',
    topic: 'misseuph',
    description: 'Mein erstes Hörbuch ist jetzt erhältlich! Begib dich auf die Reise mit Miss Euph!',
    url: '/public/images/misseuph/misseuph-im-wald.webp'
  },
  {
    name: 'eight',
    title: 'Miss Euph',
    topic: 'misseuph',
    description: 'Mein erstes Hörbuch ist jetzt erhältlich! Begib dich auf die Reise mit Miss Euph!',
    url: '/public/images/misseuph/Misseuph-unter-Kirschbaum.webp'
  },
  {
    name: 'nine',
    title: 'Miss Euph',
    topic: 'misseuph',
    description: 'Mein erstes Hörbuch ist jetzt erhältlich! Begib dich auf die Reise mit Miss Euph!',
    url: '/public/images/misseuph/Stadt.webp'
  },
  {
    name: 'nine',
    title: 'Miss Euph',
    topic: 'misseuph',
    description: 'Mein erstes Hörbuch ist jetzt erhältlich! Begib dich auf die Reise mit Miss Euph!',
    url: '/public/images/misseuph/tschüss.webp'
  },
  {
    name: 'nine',
    title: 'Miss Euph',
    topic: 'misseuph',
    description: 'Mein erstes Hörbuch ist jetzt erhältlich! Begib dich auf die Reise mit Miss Euph!',
    url: '/public/images/misseuph/unterwasser.webp'
  },
  {
    name: 'nine',
    title: 'Miss Euph',
    topic: 'misseuph',
    description: 'Mein erstes Hörbuch ist jetzt erhältlich! Begib dich auf die Reise mit Miss Euph!',
    url: '/public/images/misseuph/Wüste.webp'
  },
  {
    name: 'ten',
    title: 'Miss Euph',
    topic: 'misseuph',
    description: 'Mein erstes Hörbuch ist jetzt erhältlich! Begib dich auf die Reise mit Miss Euph!',
    url: '/public/images/misseuph/Miss-Euph-Titelbild.webp'
  },
];




</script>

<style lang="scss" scoped>
h1{
  font-size: 2em;
}

div.q-panel.scroll{
  overflow: hidden;
}
</style>
