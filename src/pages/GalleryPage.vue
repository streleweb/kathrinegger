<template>
  <q-page class="q-pa-none">
    <q-carousel
      v-model="currentSlide"
      class="carousel-height transparent-bg"
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
        <div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 90%;">
          <iframe
            src="https://www.youtube.com/embed/8l5bfHaXPBM?si=pt2qFxHT5OGhGoyw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          ></iframe>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>


<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'GalleryCarousel',
  setup() {
    // Reusable array of image paths
    const images = [
      'images/kathrineuphonium1.webp',
      'images/medien/Buchpräsentation1.webp',
      'images/medien/Buchpräsentation2.webp',
      'images/kathrineuphonium2.webp',
      'images/kathrineuphonium3.webp',
      'images/kathrineuphonium4.webp',
      'images/kathrineuphonium6.webp',
      'images/kathrineuphonium9.webp',
      'images/kathrineuphonium10.webp',
      'images/kathrineuphonium11.webp',
      'images/kathrineuphonium12.webp',
      'images/kathrineuphonium13.webp',
      'images/kathrineuphonium14.webp',
      'images/kathrineuphonium15.webp',
      'images/kathrineuphonium17.webp',
      'images/kathrineuphonium18.webp',
      'images/kathrineuphonium19.webp',
    ];

    // Carousel state
    const currentSlide = ref(0);

    return {
      images,
      currentSlide,
    };
  },
});
</script>

<style scoped>
/* Full height carousel */
.carousel-height {
  height: 100vh; /* Makes the carousel take full screen height */
}

/* Transparent background for the carousel */
.transparent-bg {
  background-color: transparent !important; /* Ensures transparency */
}

/* Ensure the slide content covers the area without distortion and adds fade effect */
.carousel-slide-content {
  height: 100%; /* Matches parent container height */
  background-size: contain; /* Ensures aspect ratio is preserved */
  background-position: center;
  background-repeat: no-repeat;

  /* Mask for fade-out edges */
  -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: cover;

  mask-image: radial-gradient(circle, rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0) 100%);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;
}

/* Style arrows and navigation dots (optional customization) */
.q-carousel__control {
  color: white; /* Customize arrow color */
}

.q-carousel__navigation {
  bottom: 10px; /* Position of navigation dots */
}

.q-carousel__navigation__dot {
  background: white; /* Customize dot color */
}
</style>
