<template>
  <q-page>
    <section class="hero">
      <q-img no-spinner :src="currentImageUrl" class="hero-image"></q-img>
        <div class="hero-text">
          <div>
            <div class="overlay"></div>
            <div class="overlay2"></div>
            <h1 class="name text-primary">Kathrin Egger</h1>
            <h2 class="description text-accent agrandir-thin-italic">Music, Art & Photography</h2>
          </div>

        <div class="hero-icons full-width row no-wrap justify-center q-gutter-x-md lt-sm">
            <a href="https://www.youtube.com/@kathrinegger6575">
              <q-btn color="primary"
                icon="img:icons/youtube.svg"
                size="10px"
                round
                unelevated
                outline
              />
            </a>
            <a href="https://www.facebook.com/EgGiIiIi">
              <q-btn color="primary"
                  icon="img:icons/fb.svg"
                  size="10px"
                  round
                  unelevated
                  outline
              />
            </a>
            <a href="https://instagram.com/eupheggi">
              <q-btn color="primary"
                icon="img:icons/insta.svg"
                size="10px"
                round
                unelevated
                outline
              />
            </a>
        </div>
        <button class="button-background-move" role="button">Contact Me</button>


      </div>
    </section>

    <section id="carousel">
      <div id="carousel-container">
      <q-card>
        <q-carousel
          v-model="currentSlide"
          animated
          transition-next="slide-up"
          transition-prev="slide-down"
          navigation
          control-color="primary"
          arrows
          infinite
          vertical
          swipeable
          prev-icon="img:icons/up.png"
          next-icon="img:icons/down.png"
          class="bg-secondary"
          navigation-position="left"
        >
            <q-carousel-slide v-for="slide in slides" :key="slide.name" :name="slide.name" class="flex flex-center">
              <div class="carousel-text-container">
                <h3 class="text-white q-my-sm">{{ slide.title }}</h3>
                <div class="text-grey-5">{{ slide.description }}</div>
              </div>
            </q-carousel-slide>
        </q-carousel>
      </q-card>
    </div>
    </section>



  </q-page>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';


  const IMGURLS =
    [
      // 'images/kathrin_hero_eyespop.webp',
      // 'images/kathrin_blume.webp',
      'images/kathrin_hero.png',
    ];
  const currentImageIndex = ref(0);
  const currentImageUrl = ref(IMGURLS[currentImageIndex.value]);
  const currentSlide = ref('one');
  const slides = [
    {
      name: 'one',
      title: 'One',
      description: 'asdkj asdkfj asldkfjj AJl kdjf safkjasdlfkjasfl kjsadf salkfj df'
    },
    {
      name: 'two',
      title: 'Onsadfsfe',
      description: 'asdkj asdkfj asldkfjj AJl kdjf safkjasdlfkjasfl kjsadf salkfj df'
    },
    {
      name: 'three',
      title: 'Threee',
      description: 'asdkj asdkfj asldkfjj AJl kdjf safkjasdlfkjasfl kjsadf salkfj df'
    },
  ]


  function updateHeroImg(): void {
    currentImageIndex.value = (currentImageIndex.value + 1) % IMGURLS.length;
    currentImageUrl.value = IMGURLS[currentImageIndex.value];
  }

  onMounted(() => {
    setInterval(updateHeroImg, 10000);
  });
</script>


<style lang="scss" scoped>

.hero {
  display: flex;
  position: relative;
  width: 100%;
  // background-image: linear-gradient(to left,  rgba(0, 0, 0, 0.535), rgba(25, 0, 0, 0.968));

  @media (max-width: 767px) {
    height: calc(100vh - 50px);
  }

  @media (min-width: 768px) {
    height: 91.3vh;
  }

  .hero-text {
    z-index: 1;
    position: absolute;
    display: flex;
    flex-direction: column;
    white-space: nowrap;

    h1 {
        font-size: 2.2rem;
        line-height: 0.5;
        text-shadow: 1px 0px 1px rgba(255, 255, 255, 0.3);
        margin: 0;
      }

    h2 {
      margin: 0.8rem 0 0 0;
      padding-left: 0.28rem;
      font-size: 1rem;
      line-height: 0.5;
    }

    @media (min-width: 380px){
      h1 {
        font-size: 3.2rem;
        line-height: 0.5;
        text-shadow: 1px 0px 1px rgba(255, 255, 255, 0.3);
        margin: 0;
      }

      h2 {
        margin: 0.8rem 0 0 0;
        padding-left: 0.28rem;
        font-size: 1.1rem;
        line-height: 0.5;
      }
    }


    /* mobile */
    @media (min-width: 0px) and (max-width: 600px) {
      background-color: rgba(231, 214, 172, 0.1);
      align-items: center;
      justify-content: baseline;
      width: 100%;
      bottom: 35%;
      left: 50%;
      transform: translate(-50%,-50%);
    }

    /* tablets */
    @media (min-width: 601px) and (max-width: 1024px) {
      width: 100%;
      align-items: center;
      bottom: 0;
      right: 0;
      height: 20%;
      background-color: rgba(231, 214, 172, 0.1);

      h1{
        font-size: 5rem;
        text-shadow: 2px 2px 50px rgb(27, 2, 2);
      }
      h2{
        font-size: 1.8rem;
        text-shadow: 1px 0px 0px rgb(97, 16, 16);
      }
    }

    /* desktop */
    @media (min-width: 1025px) {
      width: 100%;
      align-items: flex-end;
      justify-content: center;
      padding-left: 8rem;
      bottom: 5%;
      right: 0;
      left: 0;
      height: 30%;
      background-color: rgba(231, 214, 172, 0.1);
      /*background-color: rgba(231, 214, 172, 1);*/
      background-image: linear-gradient(to right,  rgba(58, 42, 1, 0.15), rgba(0, 0, 0, 0));

      h1{
        padding-right: 10rem;
        line-height: 130%;
        font-size: 6rem;
        text-shadow: 2px 2px 50px rgb(27, 2, 2);
      }
      h2{
        font-size: 2.8rem;
        padding-right: 2rem;
        text-align: end;
        text-shadow: 1px 0px 0px rgb(97, 16, 16);
        background-image: linear-gradient(to left,  rgba(231, 214, 172, 0.141), rgba(0, 0, 0, 0));
      }
    }

    @media(min-width: 1400px){
      background-image: linear-gradient(to right,  rgba(255, 0, 0, 0.15), rgba(45, 2, 2, 0.192));
    }
  }


  .hero-image {
    align-self: flex-start;
    position: absolute;
    top: 0px;
    left: 0;
    height: 50%;
    width: 100%;
    object-fit: cover;
    opacity: 85%;
    transition: opacity 5s ease-in-out;

    @media(min-width: 601px){
      height:79%;
      object-fit: contain;
    }

    @media (min-width: 1024px) {
      height:90%;
      left: 0;
    }

    @media(min-width: 1400px){
      left: -200px;
      object-fit: contain;
      width:100%;

    }
  }

  .hero-icons{
    position: absolute;
    top: 48px;
    left: -16px;
  }
}

.overlay{
  @media (min-width: 1400px){
        position: absolute;
        top:-51%;
        right: 0;
        height: 51%;
        width: 100%;
        background-image: linear-gradient(to right,  rgba(255, 0, 0, 0), rgba(45, 2, 2, 0.192));
        z-index: 0;
  }
}

.carousel-text-container{
  max-width: 65%;
}

/* cta btn */

.button-background-move {
  position: absolute !important;
  top: 160px;
  color: white;
  left: 50%;
  transform: translate(-50%, 0 );
  font-size: 16px;
  letter-spacing: 4px;
  padding: 16px 32px 16px;
  outline: 0;
  border: 1px solid white;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-background-move:after {
  content: "";
  background-color: rgba($color: #c0c0c0, $alpha: 0.15);
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.button-background-move:hover:after {
  top: 0px;
  left: 0px;
}

@media (min-width: 768px) {
  .button-background-move {
    padding: 13px 50px 13px;
  }
}




</style>
