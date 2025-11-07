<template>
  <q-page class="q-pa-none">
    <div class="carousel-wrapper">

      <q-carousel
        v-model="currentSlide"
        class="carousel-fullscreen"
        animated
        infinite
        swipeable
        transition-next="slide-left"
        transition-prev="slide-right"
        control-color="white"
        @update:model-value="onSlideChange"
      >
        <!-- IMAGE SLIDES -->
        <q-carousel-slide
          v-for="(img, i) in images"
          :key="'img-' + i"
          :name="i"
          class="flex flex-center bg-black"
        >
          <img :src="img" class="carousel-image" alt="image" />
        </q-carousel-slide>

        <!-- YOUTUBE SLIDES -->
        <q-carousel-slide
          v-for="(url, yi) in youtubeurls"
          :key="'yt-' + yi"
          :name="images.length + yi"
          class="flex flex-center bg-black"
        >
          <!-- keep no overlay above iframe so user can interact with player -->
          <div class="video-container">
            <iframe
              :id="`yt-iframe-${yi}`"
              :src="urlWithApi(url)"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </q-carousel-slide>
      </q-carousel>

      <!-- OUTSIDE ARROWS (always above iframe) -->
      <div class="arrow arrow-left" @click.stop="prevSlide" role="button" aria-label="Previous">
        <q-icon name="chevron_left" size="28px" color="white" />
      </div>
      <div class="arrow arrow-right" @click.stop="nextSlide" role="button" aria-label="Next">
        <q-icon name="chevron_right" size="28px" color="white" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const currentSlide = ref(0)

const images = [
  'images/kathrineuphonium1.webp',
  'images/medien/Buchpräsentation1.webp',
  'images/medien/Buchpräsentation2.webp',
  'images/kathrineuphonium2.webp',
  'images/kathrineuphonium3.webp'
]

// These are the exact links you used earlier (kept original form).
// We will append enablejsapi=1 dynamically so we can pause them when changing slides.
const youtubeurls = [
  'https://www.youtube.com/embed/8l5bfHaXPBM?si=pt2qFxHT5OGhGoyw',
  'https://www.youtube.com/embed/wPAu9ZSG04U?si=xJPElLRGUq7vNN4r',
  'https://www.youtube.com/embed/8v6Ky6NsyGk?si=AAfcBDFwSfVu_I-F'
]

const totalSlides = images.length + youtubeurls.length

function urlWithApi(url) {
  // Ensure enablejsapi=1 is present and preserve existing query string
  return url.includes('enablejsapi=1') ? url : `${url}${url.includes('?') ? '&' : '?'}enablejsapi=1`
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}
function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides
}

// Called whenever the carousel slide changes (v-model changed)
// Pause all YouTube videos, then do nothing else.
function onSlideChange() {
  // wait a tick so DOM iframes exist/changed
  nextTick(() => {
    pauseAllYouTubeIframes()
  })
}

function pauseAllYouTubeIframes() {
  // send postMessage pause command to all iframes that have enablejsapi=1
  // YouTube postMessage format:
  // { "event":"command","func":"pauseVideo","args":"" }
  const iframes = Array.from(document.querySelectorAll('iframe[id^="yt-iframe-"]'))
  iframes.forEach((frame) => {
    try {
      frame.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), '*')
    } catch (e) {
      // ignore cross-origin exceptions
      // using enablejsapi=1 ensures YouTube accepts the message
    }
  })
}
</script>

<style scoped>
.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  background: black;
  overflow: hidden;
}

.carousel-fullscreen {
  height: 100%;
  background: black;
}

/* Images */
.carousel-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Video container sized for responsive playback */
.video-container {
  position: relative;
  width: 90%;
  max-width: 960px;
  aspect-ratio: 16/9;
  background: black;
  border-radius: 8px;
  overflow: hidden;
}
.video-container iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

/* Outside arrows: above everything (including iframe) */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3000; /* high so clickable above iframe */
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  transition: background 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
}
.arrow:hover { background: rgba(255,255,255,0.12); }
.arrow-left { left: 14px; }
.arrow-right { right: 14px; }

/* Slightly smaller on phones */
@media (max-width: 768px) {
  .arrow { padding: 6px; }
  .arrow-left { left: 8px; }
  .arrow-right { right: 8px; }
}
</style>
