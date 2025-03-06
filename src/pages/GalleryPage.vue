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
      'images/kathrin_euphonium.webp',
      'images/kathrineuphonium1.webp',
      'images/kathrineuphonium2.webp',
      'images/kathrineuphonium3.webp',
      'images/kathrineuphonium4.webp',
      'images/kathrineuphonium5.webp',
      'images/kathrineuphonium6.webp',
      'images/kathrineuphonium7.webp',
      'images/kathrineuphonium8.webp',
      'images/kathrineuphonium9.webp',
      'images/kathrineuphonium10.webp',
      'images/kathrineuphonium11.webp',
      'images/kathrineuphonium12.webp',
      'images/kathrineuphonium13.webp',
      'images/kathrineuphonium14.webp',
      'images/kathrineuphonium15.webp',
      'images/kathrineuphonium16.webp',
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
