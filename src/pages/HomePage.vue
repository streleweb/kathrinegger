<template>
  <q-page>
    <section class="hero">
        <q-img no-spinner :src="currentImageUrl" class="hero-image"></q-img>
        <div class="hero-text">

          <div id="name-and-description">
            <h1 class="name text-primary">Kathrin Egger</h1>
            <h2 class="description text-accent agrandir-thin-italic">Musikerin & Musikvermittlerin, Pädagogin & Authorin</h2>
          </div>

          <div class="hero-icons full-width row no-wrap justify-center q-gutter-x-md">
            <a href="https://www.youtube.com/@kathrinegger6575">
              <q-btn color="primary"
                icon="img:icons/youtube.svg"
                size="14px"
                round
                unelevated
                outline
              />
            </a>
            <a href="https://www.facebook.com/EgGiIiIi">
              <q-btn color="primary"
                  icon="img:icons/fb.svg"
                  size="14px"
                  round
                  unelevated
                  outline
              />
            </a>
            <a href="https://instagram.com/eupheggi">
              <q-btn color="primary"
                icon="img:icons/insta.svg"
                size="14px"
                round
                unelevated
                outline
              />
            </a>
        </div>

        </div>


      <div class="order-button">
          <button @click="$router.push({name: 'bestellen'})" class="button-55 text-secondary" role="button">Kinderbuch bestellen</button>
          <!-- <q-btn color="accent" text-color="secondary" icon="shopping_cart" label="" @click="onClick" /> -->
        </div>
    </section>


    <section id="carousel">
      <div id="carousel-container">
      <q-card>
        <!-- <h1 class="bg-secondary q-pt-lg q-pl-xl">
          <div style="opacity: 1;">
          Projekte
        </div></h1> -->
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
          class="bg-secondary cursor-pointer"
          navigation-position="left"
        >
        <q-carousel-slide
  v-for="slide in slides"
  :key="slide.name"
  :name="slide.name"
  class="relative w-full h-full flex flex-center overflow-hidden"
  @click="$router.push(slide.topic)"
>
  <!-- Image with Opacity -->
  <img
    :src="slide.url"
    alt="Slide image"
    class="absolute inset-0 w-full h-full object-cover"
    style="opacity:40%; height:100%;
    -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%);
    mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%);
    "/>

  <!-- Content -->
  <div class="carousel-text-container relative z-10 p-4">
    <h3 id="project-title" class="text-white q-my-sm">{{ slide.title }}</h3>
    <div id="project-description" class="text-grey-3">{{ slide.description }}</div>
  </div>
</q-carousel-slide>
        </q-carousel>
      </q-card>
    </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
  import { ref, onMounted} from 'vue';

  const IMGURLS =
    [
      // 'images/kathrin_hero_eyespop.webp',
      // 'images/kathrin_blume.webp',
      'images/kathrin_euphonium.webp',
    ];
  const currentImageIndex = ref(0);
  const currentImageUrl = ref(IMGURLS[currentImageIndex.value]);
  const currentSlide = ref('one');
  const slides = [
  {
    name: 'one',
    title: 'Miss Euph',
    topic: 'misseuph',
    description: 'Mein erstes Hörbuch ist jetzt erhältlich! Begib dich auf die Reise mit Miss Euph!',
    url: '/images/homepage/misseuph.webp'
  },
  {
    name: 'two',
    title: 'Shakespeare in Love',
    topic: 'shakespeare',
    description: 'Interaktive Theatereinführung der Freilichtspiele 2024 zum Stück "Shakespeare in Love"',
    url: '/images/homepage/shakespeare.webp'
  },
  {
    name: 'three',
    title: 'Klangtraum',
    topic: 'klangtraum',
    description: '',
    url: '/images/homepage/klangtraum.webp'
  },
  {
    name: 'four',
    title: 'AbenteuerMusikkappelle',
    topic: 'abenteuermusikkappelle',
    description: '',
    url: '/images/abenteuermusikkappelle/abenteuer-musikkappelle.jpg'
  }
];


  function updateHeroImg(): void {
    currentImageIndex.value = (currentImageIndex.value + 1) % IMGURLS.length;
    currentImageUrl.value = IMGURLS[currentImageIndex.value];
  }

  onMounted(() => {
    setInterval(updateHeroImg, 10000);
  });
</script>


<style lang="scss" scoped>
$xs: 599.99px;
$sm: 600px;
$md: 1024px;
$lg: 1440px;
$xl: 1870px;
$bottom-space: 280px;
$tablet-min: 801px;
$tablet-max: 1024px;


// .q-carousel-slide::before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   opacity: 0.5;
//   z-index: 0;
// }


.hero {
  display: flex;
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);
  // background-image: linear-gradient(to left,  rgba(0, 0, 0, 0.535), rgba(25, 0, 0, 0.968));

  @media (min-width: 601px) {
    height: calc(100vh - 65px);
  }

  @media (min-width: 768px) {
    height: calc(100vh - 80px);
  }

  @media (min-width: 1400px) {
    height: calc(100vh - 100px);
  }

  .hero-text {
    z-index: 1;
    position: absolute;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    text-wrap: wrap;
    line-height: normal;

    // background-rectangle
    background-color: rgba(231, 214, 172, 0.1);
    align-items: center;
    justify-content: baseline;
    width: 100%;
    bottom: $bottom-space;
    left: 50%;
    transform: translate(-50%,-50%);

    #name-and-description{
      max-width: 80%;
    }

    h1 {
        font-size: 2.2rem;
        line-height: 0.9;
        text-shadow: 1px 0px 1px rgba(255, 255, 255, 0.3);
        margin: 0;
      }

    h2 {
      margin: 4px 0 0 0;
      padding-left: 0.28rem;
      font-size: 12px;
      line-height: 0.9;
    }

    @media (min-width: 380px){
      h1 {
        font-size: 34px;
        line-height: 0.9;
        text-shadow: 1px 0px 1px rgba(255, 255, 255, 0.3);
        margin: 0;
      }

      h2 {
        margin: 6px 0 0 0;
        line-height: 0.9;
        padding-left: 0.28rem;
        font-size: 12px;
      }
    }

    @media (min-width: 460px){

      h1{
        font-size: 40px;
      }
      h2 {
        margin: 10px 0 0 0;
        line-height: 0.9;
        padding-left: 0.28rem;
        font-size: 16px;
      }
    }
    }

    @media (min-width: 500px){
      h1 {
        font-size: 48px;
        line-height: 0.9;
        text-shadow: 1px 0px 1px rgba(255, 255, 255, 0.3);
        margin: 0;
      }

      h2 {
        margin: 6px 0 0 0;
        line-height: 0.9;
        padding-left: 0.28rem;
        font-size: 16px;
      }
    }


     @media (min-width: $tablet-min) { //801px
       width: 100%;
       align-items: center;
       justify-content: center;
      //  background-color: rgba(231, 214, 172, 0.1);
       h1{
         font-size: 58px;
         text-shadow: 2px 2px 50px rgb(27, 2, 2);
       }
       h2{
         padding-left: 24px;
         margin-top: 14px;
         font-size: 1.8rem;
         text-shadow: 1px 0px 0px rgb(97, 16, 16);
       }
     }

     @media (min-width: $lg) {
       width: 100%;
       align-items: start;
       justify-content: center;
       bottom: 0px;
       padding-left: 48px;

     }
  }

  .hero-image {
    position: absolute;
    width: 100%;
    object-fit: cover;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 375px;

    @media (min-width: 750px){
      width: 90%;
    }

    @media (min-width: 800px){
      width: 80%;
    }

    @media (min-width: 900px){
      width: 70%;
    }

    @media (min-width: 1100px){
      width: 50%;
    }

    @media (min-width: $lg){
      width: 45%;
      bottom: 360px;
      opacity: 80%;
    }

    @media (min-width: $xl){
      width: 40%;
    }

  } //HERE
  //TODO


  .hero-icons{
    position: absolute;
    top: 72px;
    left: -16px;

    @media (min-width: 460px){
      top: 80px;
    }

    @media (min-width: 500px){
      top: 84px;
    }
  }

  .order-button{
    position: absolute;
    bottom: 128px;
    left: 50%;
    transform: translate(-50%, 0);

    @media (min-width: $tablet-min){


  }

} // END HERO

// .overlay{
//   @media (min-width: 1400px){
//         position: absolute;
//         top:-30%;
//         right: 0;
//         height: 30%;
//         width: 100%;
//         background-image: linear-gradient(to right,  rgba(255, 0, 0, 0), rgba(45, 2, 2, 0.192));
//         z-index: 0;
//   }
// }

.carousel-text-container{
  max-width: 50%;
  z-index: 1;
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    text-wrap: wrap;
    align-items: center;
    line-height: normal;
    margin-top: 150px;
    // background: linear-gradient(90deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(41, 0, 16, 1) 80%, rgba(0, 0, 0, 0) 100%);
    justify-content: center;
    width: 100%;
    left: 50%;
    transform: translate(-50%,-50%);


      #project-title{
          font-size: 38px;
        @media (min-width: 768px) {
          font-size: 48px;
        }
      }
      #project-description{
        font-size: 13px;
        @media (min-width: 768px) {
          font-size: 17px;
        }
      }

}

.button-55 {
  align-self: center;
  background-color: #F5F3F4;;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: .75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-55:hover {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
  transform: translate3d(0, 2px, 0);
}

.button-55:focus {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
}


</style>
